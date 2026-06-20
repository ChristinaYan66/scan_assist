const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");
const ENV_PATH = path.join(ROOT, ".env");

loadEnv(ENV_PATH);

const PORT = Number(process.env.PORT || 5173);
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.5";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const ALLOW_DEMO_RESPONSES = (process.env.ALLOW_DEMO_RESPONSES || "true").toLowerCase() !== "false";
const FORCE_DEMO_RESPONSES = (process.env.FORCE_DEMO_RESPONSES || "false").toLowerCase() === "true";
const HAS_OPENAI_KEY = Boolean(OPENAI_API_KEY) && !FORCE_DEMO_RESPONSES;
const MAX_BODY_BYTES = 16 * 1024 * 1024;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

const analysisSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    objectName: { type: "string" },
    category: { type: "string" },
    confidence: { type: "string", enum: ["low", "medium", "high"] },
    shortDescription: { type: "string" },
    visibleComponents: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          label: { type: "string" },
          location: { type: "string" },
          x: {
            type: "number",
            description: "Normalized horizontal coordinate from 0 to 1, with 0 at the left edge of the full image."
          },
          y: {
            type: "number",
            description: "Normalized vertical coordinate from 0 to 1, with 0 at the top edge of the full image."
          },
          radius: {
            type: "number",
            description: "Normalized circle radius from 0 to 1 relative to the smaller image dimension."
          },
          purpose: { type: "string" }
        },
        required: ["label", "location", "x", "y", "radius", "purpose"]
      }
    },
    likelyUserNeeds: {
      type: "array",
      items: { type: "string" }
    },
    safetyNotes: {
      type: "array",
      items: { type: "string" }
    },
    needsCorrectionPrompt: { type: "string" }
  },
  required: [
    "objectName",
    "category",
    "confidence",
    "shortDescription",
    "visibleComponents",
    "likelyUserNeeds",
    "safetyNotes",
    "needsCorrectionPrompt"
  ]
};

const guideSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: { type: "string" },
    objectName: { type: "string" },
    intent: { type: "string" },
    safetyLevel: { type: "string", enum: ["low", "medium", "high"] },
    safetyWarning: { type: "string" },
    overview: { type: "string" },
    steps: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          id: { type: "integer" },
          instruction: { type: "string" },
          sayAloud: { type: "string" },
          location: { type: "string" },
          x: {
            type: "number",
            description: "Normalized horizontal coordinate from 0 to 1 for the exact visible target. Use 0.5 if overlayType is none."
          },
          y: {
            type: "number",
            description: "Normalized vertical coordinate from 0 to 1 for the exact visible target. Use 0.5 if overlayType is none."
          },
          radius: {
            type: "number",
            description: "Normalized circle radius from 0 to 1 relative to the smaller image dimension. Use 0.12 if overlayType is none."
          },
          component: { type: "string" },
          overlayType: { type: "string", enum: ["circle", "arrow", "none"] },
          checkPrompt: { type: "string" },
          fallbackTip: { type: "string" },
          isOptional: { type: "boolean" }
        },
        required: [
          "id",
          "instruction",
          "sayAloud",
          "location",
          "x",
          "y",
          "radius",
          "component",
          "overlayType",
          "checkPrompt",
          "fallbackTip",
          "isOptional"
        ]
      }
    },
    followUpSuggestions: {
      type: "array",
      items: { type: "string" }
    },
    finalCheck: { type: "string" },
    emergencyStop: { type: "string" }
  },
  required: [
    "title",
    "objectName",
    "intent",
    "safetyLevel",
    "safetyWarning",
    "overview",
    "steps",
    "followUpSuggestions",
    "finalCheck",
    "emergencyStop"
  ]
};

const followUpSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    answer: { type: "string" },
    speakableAnswer: { type: "string" },
    location: { type: "string" },
    x: {
      type: "number",
      description: "Normalized horizontal coordinate from 0 to 1 for the exact visible target. Use 0.5 if overlayType is none."
    },
    y: {
      type: "number",
      description: "Normalized vertical coordinate from 0 to 1 for the exact visible target. Use 0.5 if overlayType is none."
    },
    radius: {
      type: "number",
      description: "Normalized circle radius from 0 to 1 relative to the smaller image dimension. Use 0.12 if overlayType is none."
    },
    component: { type: "string" },
    overlayType: { type: "string", enum: ["circle", "arrow", "none"] },
    nextAction: { type: "string" },
    safetyLevel: { type: "string", enum: ["low", "medium", "high"] },
    safetyWarning: { type: "string" }
  },
  required: [
    "answer",
    "speakableAnswer",
    "location",
    "x",
    "y",
    "radius",
    "component",
    "overlayType",
    "nextAction",
    "safetyLevel",
    "safetyWarning"
  ]
};

const reviseStepSchema = guideSchema.properties.steps.items;

async function requestHandler(req, res) {
  try {
    if (req.method === "GET" && req.url === "/health") {
      return sendJson(res, 200, {
        ok: true,
        hasApiKey: HAS_OPENAI_KEY,
        demoAllowed: ALLOW_DEMO_RESPONSES,
        forceDemo: FORCE_DEMO_RESPONSES,
        model: OPENAI_MODEL
      });
    }

    if (req.method === "POST" && req.url === "/api/analyze-image") {
      const body = await readJsonBody(req);
      return handleAnalyzeImage(res, body);
    }

    if (req.method === "POST" && req.url === "/api/generate-steps") {
      const body = await readJsonBody(req);
      return handleGenerateSteps(res, body);
    }

    if (req.method === "POST" && req.url === "/api/follow-up") {
      const body = await readJsonBody(req);
      return handleFollowUp(res, body);
    }

    if (req.method === "POST" && req.url === "/api/revise-step") {
      const body = await readJsonBody(req);
      return handleReviseStep(res, body);
    }

    if (req.method === "GET") {
      return serveStatic(req, res);
    }

    sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    sendJson(res, 500, {
      error: "Server error",
      message: error.message || "Unknown server error"
    });
  }
}

const server = http.createServer(requestHandler);

if (require.main === module) {
  server.listen(PORT, () => {
    const mode = OPENAI_API_KEY ? `OpenAI model ${OPENAI_MODEL}` : "demo mode, no API key";
    console.log(`ScanAssist running at http://localhost:${PORT} (${mode})`);
  });
}

module.exports = requestHandler;

async function handleAnalyzeImage(res, body) {
  const language = normalizeLanguage(body.language);
  const imageData = validateImageData(body.imageData);
  const userHint = cleanText(body.userHint || "", 300);

  if (!HAS_OPENAI_KEY) {
    return demoOrSetup(res, demoAnalysis(language, userHint));
  }

  const systemPrompt = [
    "You are ScanAssist, an accessibility-first assistant for older adults.",
    "Analyze the uploaded photo and identify the main household object, device, appliance, or visible control panel.",
    "Use cautious language when uncertain. Do not invent a brand or exact model unless clearly visible.",
    "Return concise language for an older adult. Keep all fields in the requested language.",
    "If there are risky elements such as electricity, gas, heat, sharp tools, ladders, medicine, or medical devices, include safety notes."
  ].join(" ");

  const userPrompt = [
    `Language: ${language}.`,
    userHint ? `User hint or correction: ${userHint}` : "No user hint provided.",
    "List visible components with approximate image regions such as top-left, top-center, top-right, middle-left, center, middle-right, bottom-left, bottom-center, or bottom-right.",
    "For each component, also return x and y as normalized coordinates from 0 to 1 using the full image, with top-left as (0,0) and bottom-right as (1,1).",
    "Return radius as a normalized circle size relative to the smaller image dimension. Use 0.04 to 0.08 for a button, 0.10 to 0.18 for a larger panel area.",
    "Keep the response short and practical."
  ].join("\n");

  const data = await callOpenAI({
    schemaName: "scanassist_image_analysis",
    schema: analysisSchema,
    instructions: systemPrompt,
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: userPrompt },
          { type: "input_image", image_url: imageData }
        ]
      }
    ],
    maxOutputTokens: 900
  });

  sendJson(res, 200, { ...data, demo: false });
}

async function handleGenerateSteps(res, body) {
  const language = normalizeLanguage(body.language);
  const imageData = body.imageData ? validateImageData(body.imageData) : "";
  const objectName = cleanText(body.objectName || "the object in the photo", 120);
  const category = cleanText(body.category || "household item", 120);
  const intent = cleanText(body.intent || "use", 80);
  const customQuestion = cleanText(body.customQuestion || "", 500);
  const additionalContext = cleanText(body.additionalContext || "", 1000);
  const components = Array.isArray(body.components) ? body.components.slice(0, 10) : [];

  if (!HAS_OPENAI_KEY) {
    return demoOrSetup(res, demoGuide(language, objectName, intent, customQuestion, additionalContext));
  }

  const systemPrompt = [
    "You are ScanAssist, an accessibility-first assistant for older adults living independently.",
    "Generate very short, calm, step-by-step guidance from a photo and user intent.",
    "Each instruction must be easy to read aloud, with one action per step.",
    "Use no more than 6 steps. Prefer 3 to 5 steps.",
    "For every step that points to a visible part, include normalized x and y coordinates from 0 to 1 using the full image, with top-left as (0,0) and bottom-right as (1,1).",
    "Return radius as a normalized circle size relative to the smaller image dimension. Use 0.04 to 0.08 for a specific button, 0.10 to 0.18 only for a larger visible area.",
    "The overlay must match the instruction's exact physical target. Do not point to a nearby reset label, panel edge, or broad lower row if the instruction names a specific button.",
    "Treat user-provided additional context about button labels, manual notes, and button functions as important guidance. Prefer it over a visual guess unless it clearly conflicts with the image or safety rules.",
    "Do not infer a button's function only from nearby text when the user's additional context identifies the intended function.",
    "If the exact visible target is uncertain, hidden, ambiguous, or refers to multiple possible buttons, set overlayType to none and set x=0.5, y=0.5, radius=0.12.",
    "If the task may involve electricity, gas, flames, heat, chemicals, structural changes, medical devices, or injury risk, set safetyLevel high and tell the user to stop and ask a professional.",
    "Never encourage dangerous repairs. When uncertain, ask the user to confirm rather than guessing."
  ].join(" ");

  const userPrompt = [
    `Language: ${language}.`,
    `Object: ${objectName}.`,
    `Category: ${category}.`,
    `User intent: ${intent}.`,
    customQuestion ? `Custom question: ${customQuestion}` : "No custom question.",
    additionalContext ? `User additional context: ${additionalContext}` : "No user additional context.",
    `Visible components: ${JSON.stringify(components)}`,
    "Use the location field only as a human-readable region label. The front-end will draw using x, y, and radius, not the location text.",
    "Make checkPrompt ask the user whether the step is done correctly before continuing."
  ].join("\n");

  const content = [{ type: "input_text", text: userPrompt }];
  if (imageData) {
    content.push({ type: "input_image", image_url: imageData });
  }

  const data = await callOpenAI({
    schemaName: "scanassist_step_guide",
    schema: guideSchema,
    instructions: systemPrompt,
    input: [
      { role: "user", content }
    ],
    maxOutputTokens: 1600
  });

  sendJson(res, 200, { ...data, demo: false });
}

async function handleReviseStep(res, body) {
  const language = normalizeLanguage(body.language);
  const imageData = body.imageData ? validateImageData(body.imageData) : "";
  const objectName = cleanText(body.objectName || "the object", 120);
  const additionalContext = cleanText(body.additionalContext || "", 1200);
  const correctionNote = cleanText(body.correctionNote || "", 1000);
  const currentStep = body.currentStep && typeof body.currentStep === "object" ? body.currentStep : null;
  const allSteps = Array.isArray(body.steps) ? body.steps.slice(0, 8) : [];

  if (!currentStep) {
    return sendJson(res, 400, { error: "Current step is required." });
  }

  if (!correctionNote) {
    return sendJson(res, 400, { error: "Correction note is required." });
  }

  if (!HAS_OPENAI_KEY) {
    return demoOrSetup(res, demoRevisedStep(language, currentStep, correctionNote));
  }

  const systemPrompt = [
    "You are ScanAssist, helping an older adult use a household object safely.",
    "Revise exactly one current step using the user's correction note.",
    "The correction note may explain a button's true function, label, or position. Treat it as important guidance unless it clearly conflicts with the image or safety rules.",
    "Return only the revised step object in the requested schema. Do not revise other steps.",
    "Keep the same id unless the current step id is missing.",
    "Use one short action in instruction and a concise fallbackTip.",
    "If the exact visible target is uncertain, hidden, ambiguous, or refers to multiple possible buttons, set overlayType to none and set x=0.5, y=0.5, radius=0.12.",
    "If you can identify the exact visible target, return normalized x and y coordinates from 0 to 1 using the full image, and radius from 0.04 to 0.08 for a button."
  ].join(" ");

  const userPrompt = [
    `Language: ${language}.`,
    `Object: ${objectName}.`,
    additionalContext ? `Existing user context: ${additionalContext}` : "No existing user context.",
    `User correction note for this step: ${correctionNote}`,
    `Current step: ${JSON.stringify(currentStep)}`,
    `All guide steps for context: ${JSON.stringify(allSteps)}`,
    "Revise only the current step so the instruction, component, overlayType, x, y, radius, checkPrompt, and fallbackTip match the user's correction."
  ].join("\n");

  const content = [{ type: "input_text", text: userPrompt }];
  if (imageData) {
    content.push({ type: "input_image", image_url: imageData });
  }

  const data = await callOpenAI({
    schemaName: "scanassist_revised_step",
    schema: reviseStepSchema,
    instructions: systemPrompt,
    input: [
      { role: "user", content }
    ],
    maxOutputTokens: 900
  });

  sendJson(res, 200, data);
}

async function handleFollowUp(res, body) {
  const language = normalizeLanguage(body.language);
  const imageData = body.imageData ? validateImageData(body.imageData) : "";
  const objectName = cleanText(body.objectName || "the object", 120);
  const additionalContext = cleanText(body.additionalContext || "", 1000);
  const question = cleanText(body.question || "", 600);
  const currentStep = cleanText(body.currentStep || "", 500);
  const allSteps = Array.isArray(body.steps) ? body.steps.slice(0, 8) : [];

  if (!question) {
    return sendJson(res, 400, { error: "Question is required." });
  }

  if (!HAS_OPENAI_KEY) {
    return demoOrSetup(res, demoFollowUp(language, objectName, question));
  }

  const systemPrompt = [
    "You are ScanAssist, helping an older adult understand one step of a household task.",
    "Answer briefly and calmly. Use simple words.",
    "Do not continue risky repair instructions. If safety risk exists, tell the user to stop and ask a person nearby or a professional.",
    "Treat user-provided additional context about button labels, manual notes, and button functions as important guidance. Prefer it over a visual guess unless it clearly conflicts with the image or safety rules.",
    "Return normalized x and y coordinates from 0 to 1 only for an exact visible target, with top-left as (0,0) and bottom-right as (1,1).",
    "Return radius as a normalized circle size relative to the smaller image dimension.",
    "If the exact visible target is uncertain, hidden, ambiguous, or refers to multiple possible buttons, set overlayType to none and set x=0.5, y=0.5, radius=0.12."
  ].join(" ");

  const userPrompt = [
    `Language: ${language}.`,
    `Object: ${objectName}.`,
    additionalContext ? `User additional context: ${additionalContext}` : "No user additional context.",
    `Current step: ${currentStep}`,
    `All guide steps: ${JSON.stringify(allSteps)}`,
    `User question: ${question}`,
    "Use the location field only as a human-readable region label. The front-end will draw using x, y, and radius, not the location text."
  ].join("\n");

  const content = [{ type: "input_text", text: userPrompt }];
  if (imageData) {
    content.push({ type: "input_image", image_url: imageData });
  }

  const data = await callOpenAI({
    schemaName: "scanassist_follow_up",
    schema: followUpSchema,
    instructions: systemPrompt,
    input: [
      { role: "user", content }
    ],
    maxOutputTokens: 800
  });

  sendJson(res, 200, { ...data, demo: false });
}

async function callOpenAI({ schemaName, schema, instructions, input, maxOutputTokens }) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions,
      input,
      max_output_tokens: maxOutputTokens,
      text: {
        format: {
          type: "json_schema",
          name: schemaName,
          strict: true,
          schema
        }
      }
    })
  });

  const raw = await response.text();
  let payload;
  try {
    payload = raw ? JSON.parse(raw) : {};
  } catch (error) {
    throw new Error(`OpenAI returned non-JSON response: ${raw.slice(0, 400)}`);
  }

  if (!response.ok) {
    const message = payload.error?.message || response.statusText || "OpenAI request failed";
    throw new Error(`OpenAI API error (${response.status}): ${message}`);
  }

  const text = extractResponseText(payload);
  if (!text) {
    throw new Error("OpenAI response did not include output text.");
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    const recovered = recoverJsonObject(text);
    if (recovered) return recovered;
    throw new Error(`Could not parse OpenAI JSON output: ${text.slice(0, 400)}`);
  }
}

function extractResponseText(payload) {
  if (typeof payload.output_text === "string") {
    return payload.output_text.trim();
  }

  const pieces = [];
  for (const item of payload.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === "string") {
        pieces.push(content.text);
      }
    }
  }
  return pieces.join("\n").trim();
}

function recoverJsonObject(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch (error) {
    return null;
  }
}

function demoOrSetup(res, demoPayload) {
  if (ALLOW_DEMO_RESPONSES) {
    return sendJson(res, 200, { ...demoPayload, demo: true });
  }

  return sendJson(res, 503, {
    error: "OpenAI API key is not configured.",
    message: "Copy .env.example to .env and set OPENAI_API_KEY."
  });
}

function demoAnalysis(language, userHint) {
  const zh = language === "zh-CN";
  const objectName = userHint || (zh ? "家用咖啡机或小家电" : "coffee maker or small appliance");
  return {
    objectName,
    category: zh ? "家用设备" : "Household device",
    confidence: "medium",
    shortDescription: zh
      ? "我会先把它当作一个带按钮和水箱的小家电来帮助。"
      : "I will treat this as a small appliance with buttons and a water tank.",
    visibleComponents: [
      {
        label: zh ? "主要按钮" : "main button",
        location: "middle-right",
        x: 0.72,
        y: 0.52,
        radius: 0.07,
        purpose: zh ? "开始或停止操作" : "start or stop the device"
      },
      {
        label: zh ? "前方面板" : "front panel",
        location: "center",
        x: 0.5,
        y: 0.5,
        radius: 0.14,
        purpose: zh ? "显示或控制设备状态" : "shows or controls status"
      },
      {
        label: zh ? "底部托盘" : "bottom tray",
        location: "bottom-center",
        x: 0.5,
        y: 0.78,
        radius: 0.12,
        purpose: zh ? "接水或放置杯子" : "holds drips or a cup"
      }
    ],
    likelyUserNeeds: zh
      ? ["开始使用", "确认按钮作用", "检查是否完成"]
      : ["start using it", "understand buttons", "check completion"],
    safetyNotes: zh
      ? ["如果有烧焦味、漏水或电线破损，请停止使用并找人帮忙。"]
      : ["If you see burning, leaks, or damaged cords, stop and ask for help."],
    needsCorrectionPrompt: zh
      ? "如果我认错了，请输入它是什么。"
      : "If I identified it incorrectly, type what it is."
  };
}

function demoGuide(language, objectName, intent, customQuestion, additionalContext) {
  const zh = language === "zh-CN";
  const name = objectName || (zh ? "这个设备" : "this device");
  return {
    title: zh ? `${name} 的简单帮助` : `Simple help for ${name}`,
    objectName: name,
    intent: intent || (zh ? "使用" : "use"),
    safetyLevel: "low",
    safetyWarning: "",
    overview: customQuestion || additionalContext || (zh
      ? "我们一步一步来。每一步做完后，可以选择检查后继续。"
      : "We will go one step at a time. After each step, you can check before continuing."),
    steps: [
      {
        id: 1,
        instruction: zh ? "先确认设备放稳，电线没有破损。" : "First, make sure the device is stable and the cord is not damaged.",
        sayAloud: zh ? "先确认设备放稳，电线没有破损。" : "First, make sure the device is stable and the cord is not damaged.",
        location: "bottom-center",
        x: 0.5,
        y: 0.78,
        radius: 0.12,
        component: zh ? "底部和电线" : "base and cord",
        overlayType: "circle",
        checkPrompt: zh ? "设备放稳了吗？" : "Is the device stable?",
        fallbackTip: zh ? "如果看不清，请开灯后重新拍照。" : "If it is hard to see, turn on a light and retake the photo.",
        isOptional: false
      },
      {
        id: 2,
        instruction: zh ? "找到正面的主要按钮，不要长按，先轻按一次。" : "Find the main front button. Do not hold it down; press once gently.",
        sayAloud: zh ? "找到正面的主要按钮，轻按一次。" : "Find the main front button and press it once gently.",
        location: "middle-right",
        x: 0.72,
        y: 0.52,
        radius: 0.07,
        component: zh ? "主要按钮" : "main button",
        overlayType: "arrow",
        checkPrompt: zh ? "屏幕或指示灯有变化吗？" : "Did the screen or indicator light change?",
        fallbackTip: zh ? "如果没有变化，请确认插头已接好。" : "If nothing changes, check that it is plugged in.",
        isOptional: false
      },
      {
        id: 3,
        instruction: zh ? "观察正面显示或指示灯，等它稳定后再继续。" : "Look at the front display or light. Wait until it looks steady before continuing.",
        sayAloud: zh ? "看一下正面显示或指示灯，等它稳定。" : "Look at the front display or light and wait until it is steady.",
        location: "center",
        x: 0.5,
        y: 0.5,
        radius: 0.14,
        component: zh ? "前方面板" : "front panel",
        overlayType: "circle",
        checkPrompt: zh ? "现在显示正常吗？" : "Does it look normal now?",
        fallbackTip: zh ? "如果出现警告灯，请拍一张更近的照片再问我。" : "If you see a warning light, take a closer photo and ask me.",
        isOptional: false
      }
    ],
    followUpSuggestions: zh
      ? ["我看不到那个按钮", "请说慢一点", "我想检查是否做对了"]
      : ["I cannot see that button", "Please slow down", "Check if I did it right"],
    finalCheck: zh ? "如果设备正常工作，就可以结束；如果不正常，请停止并找人帮忙。" : "If the device works normally, you can stop. If not, stop and ask for help.",
    emergencyStop: zh ? "如果闻到烧焦味、看到火花、漏水或很热，请立刻停止。" : "If you smell burning, see sparks, leaks, or strong heat, stop immediately."
  };
}

function demoRevisedStep(language, currentStep, correctionNote) {
  const zh = language === "zh-CN";
  const note = cleanText(correctionNote, 180);
  const id = Number.isInteger(currentStep.id) ? currentStep.id : 1;
  return {
    id,
    instruction: zh
      ? `根据你的补充：${note}。请按这个说明重新确认这一处。`
      : `Using your note: ${note}. Re-check this part using that correction.`,
    sayAloud: zh
      ? `我已根据你的补充更新这一步。请重新确认这一处。`
      : "I updated this step using your note. Please re-check this part.",
    location: currentStep.location || "none",
    x: validNormalizedNumber(currentStep.x, 0.5),
    y: validNormalizedNumber(currentStep.y, 0.5),
    radius: validNormalizedNumber(currentStep.radius, 0.12),
    component: zh ? "用户补充的按钮或功能" : "user-corrected button or function",
    overlayType: currentStep.overlayType === "circle" || currentStep.overlayType === "arrow" ? currentStep.overlayType : "none",
    checkPrompt: zh
      ? "这一步现在和你的补充说明一致吗？"
      : "Does this step now match your correction?",
    fallbackTip: zh
      ? "如果仍然不对，请再补充按钮上的文字或拍一张更近的照片。"
      : "If it is still wrong, add the button text or take a closer photo.",
    isOptional: Boolean(currentStep.isOptional)
  };
}

function demoFollowUp(language, objectName, question) {
  const zh = language === "zh-CN";
  return {
    answer: zh
      ? `我明白。关于“${question}”，请先看图片中间偏右的位置，那里通常是主要控制区。不要用力按，轻轻按一次即可。`
      : `I understand. For "${question}", first look near the middle-right area of the image. That is usually the main control area. Do not press hard; tap once gently.`,
    speakableAnswer: zh
      ? "请看图片中间偏右的位置。那里通常是主要控制区。轻轻按一次。"
      : "Look near the middle-right area. That is usually the main control area. Tap once gently.",
    location: "middle-right",
    x: 0.72,
    y: 0.52,
    radius: 0.08,
    component: zh ? "主要控制区" : "main control area",
    overlayType: "arrow",
    nextAction: zh ? "完成后，选择检查后继续。" : "After that, choose check before continuing.",
    safetyLevel: "low",
    safetyWarning: ""
  };
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let requestedPath = decodeURIComponent(url.pathname);
  if (requestedPath === "/") requestedPath = "/index.html";

  const filePath = path.normalize(path.join(PUBLIC_DIR, requestedPath));
  if (!filePath.startsWith(PUBLIC_DIR)) {
    return sendJson(res, 403, { error: "Forbidden" });
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      fs.readFile(path.join(PUBLIC_DIR, "index.html"), (fallbackError, fallbackData) => {
        if (fallbackError) {
          sendJson(res, 404, { error: "Not found" });
        } else {
          sendBuffer(res, 200, fallbackData, MIME_TYPES[".html"]);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    sendBuffer(res, 200, data, MIME_TYPES[ext] || "application/octet-stream");
  });
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let total = 0;
    const chunks = [];
    req.on("data", chunk => {
      total += chunk.length;
      if (total > MAX_BODY_BYTES) {
        reject(new Error("Request body is too large. Please use a smaller image."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(new Error("Invalid JSON request body."));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  const data = Buffer.from(JSON.stringify(payload));
  sendBuffer(res, statusCode, data, "application/json; charset=utf-8");
}

function sendBuffer(res, statusCode, data, contentType) {
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Content-Length": data.length,
    "Cache-Control": "no-store"
  });
  res.end(data);
}

function validateImageData(imageData) {
  if (typeof imageData !== "string" || !imageData.startsWith("data:image/")) {
    throw new Error("A base64 image data URL is required.");
  }
  if (Buffer.byteLength(imageData, "utf8") > MAX_BODY_BYTES - 1024) {
    throw new Error("Image is too large. Please retake or upload a smaller image.");
  }
  return imageData;
}

function normalizeLanguage(language) {
  return language === "en-US" ? "en-US" : "zh-CN";
}

function cleanText(value, limit) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
}

function validNormalizedNumber(value, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0 || number > 1) return fallback;
  return number;
}

function loadEnv(envPath) {
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}
