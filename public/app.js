(function () {
  const COPY = {
    "zh-CN": {
      brandLine: "拍照获得一步一步帮助",
      contrast: "高对比",
      autoRead: "自动朗读",
      saved: "已保存",
      familyArchive: "家属记录",
      archiveEyebrow: "家属记录",
      archiveTitle: "已保存的交互记录",
      archiveSubtitle: "这些记录只保存在这台设备上，方便家属或照护者查看老人当时遇到的问题和操作过程。",
      backToApp: "回到应用",
      captureTitle: "拍一张照片，我一步一步帮你看",
      captureSubtitle: "适合家电、按钮、遥控器、厨房小设备和日常工具。",
      cameraPlaceholderTitle: "相机还没有打开",
      cameraPlaceholderCopy: "可以直接上传图片，或打开相机拍照。",
      startCamera: "打开相机",
      takePhoto: "拍照",
      uploadPhoto: "上传图片",
      retake: "重新拍",
      analyze: "继续分析",
      recognitionEyebrow: "识别结果",
      recognitionTitle: "我看到的是这个吗？",
      objectLabel: "物品",
      yesCorrect: "对，继续",
      noCorrect: "不对，我来输入",
      correctionLabel: "它其实是",
      useCorrection: "使用这个名称",
      intentEyebrow: "下一步",
      intentTitle: "你想让我帮什么？",
      intentUse: "怎么使用",
      intentFix: "怎么处理问题",
      intentExplain: "这是什么",
      intentCheck: "检查是否做对",
      customLabel: "或者直接问一句",
      additionalContextLabel: "补充说明（可选）",
      additionalContextHelp: "如果 AI 可能看错按键功能，请告诉我按钮文字、说明书提示或你想操作的具体功能。",
      additionalContextPlaceholder: "例如：Water Filter 按住 3 秒是重置滤芯灯；Moisture Control 是湿度控制；我想调冷藏室温度。",
      voice: "语音",
      ask: "提问",
      previous: "上一步",
      replay: "重播",
      checkContinue: "检查后继续",
      doneNext: "完成这步",
      finish: "完成",
      looksGood: "看起来正确",
      notSure: "我不确定",
      followUpLabel: "问这个步骤",
      stepAdjustLabel: "帮助 AI 理解这一步",
      stepAdjustHelp: "如果这一步误解了按钮作用，请补充一句来纠正。",
      stepAdjustPlaceholder: "例如：Moisture Control 是湿度控制，不是温度调节。",
      updateStep: "更新这一步",
      updatingStep: "正在更新这一步...",
      stepUpdated: "这一步已更新。",
      send: "发送",
      saveGuide: "保存到本机",
      newScan: "重新开始",
      savedGuides: "已保存的交互记录",
      close: "关闭",
      apiLive: "OpenAI 已连接",
      apiDemo: "当前是 Demo mode：未配置 API key，流程可测试，AI 结果为示例。",
      apiUnavailable: "无法读取 API 状态。",
      analyzing: "正在看图片...",
      generating: "正在生成步骤...",
      answering: "正在回答...",
      cameraError: "无法打开相机。可以改用上传图片。",
      noImage: "请先拍照或上传图片。",
      photoReady: "照片已准备好。",
      imageBright: "亮度看起来可以。",
      imageDark: "图片可能偏暗。可以重拍，或继续测试。",
      objectConfidence: "可信度",
      confidenceLow: "低",
      confidenceMedium: "中",
      confidenceHigh: "高",
      componentAt: "位置",
      componentPurpose: "作用",
      correctionPlaceholder: "例如：微波炉、电视遥控器、咖啡机",
      customPlaceholder: "例如：我应该按哪个按钮？",
      followUpPlaceholder: "例如：我看不到那个按钮",
      emptyQuestion: "请先输入问题。",
      speechUnsupported: "这个浏览器暂不支持语音输入。",
      listening: "正在听，请说话...",
      speechFailed: "没有听清，可以再试一次或直接输入。",
      speakUnsupported: "这个浏览器暂不支持朗读。",
      stepProgress: "第 {current} 步，共 {total} 步",
      stepPrefix: "步骤",
      savedOk: "已保存到本机浏览器。",
      savedEmpty: "还没有保存的交互记录。",
      archiveSavedOk: "已保存照片和交互记录，可在右上角“家属记录”查看。",
      archiveObject: "识别物品",
      archivePhoto: "保存照片",
      archiveContext: "补充说明",
      archiveSteps: "步骤记录",
      archiveEvents: "交互过程",
      archiveNoContext: "没有补充说明",
      archiveNoEvents: "还没有额外交互记录",
      apiError: "请求失败",
      finalCheck: "最后检查",
      completionPrompt: "请确认操作是否达到预期效果，温度或功能是否有变化？",
      completionConfirm: "我确认",
      completionPhotoCheck: "我不确定，拍张照帮我确认",
      completionMenu: "选择其他帮助方式",
      completionConfirmed: "好的，已确认完成。你可以返回菜单或重新开始。",
      completionPhotoNotice: "请拍下目前的状态，例如屏幕、指示灯、温度显示或功能变化。我会帮你确认是否达到预期效果。",
      confirmingPhoto: "正在帮你确认照片...",
      demoMode: "演示模式",
      localOnly: "只保存在本机浏览器"
    },
    "en-US": {
      brandLine: "Photo-based step-by-step help",
      contrast: "High contrast",
      autoRead: "Auto read",
      saved: "Saved",
      familyArchive: "Family archive",
      archiveEyebrow: "Family archive",
      archiveTitle: "Saved interaction records",
      archiveSubtitle: "Records saved on this device for a family member or caregiver to review.",
      backToApp: "Back to app",
      captureTitle: "Take a photo, then I will guide you step by step",
      captureSubtitle: "Works for appliances, buttons, remotes, small kitchen devices, and everyday tools.",
      cameraPlaceholderTitle: "Camera is not open yet",
      cameraPlaceholderCopy: "Upload a photo, or open the camera and take one.",
      startCamera: "Open camera",
      takePhoto: "Take photo",
      uploadPhoto: "Upload photo",
      retake: "Retake",
      analyze: "Analyze",
      recognitionEyebrow: "Recognition",
      recognitionTitle: "Is this what you see?",
      objectLabel: "Object",
      yesCorrect: "Yes, continue",
      noCorrect: "No, I will type it",
      correctionLabel: "It is actually",
      useCorrection: "Use this name",
      intentEyebrow: "Next",
      intentTitle: "What do you need help with?",
      intentUse: "How to use it",
      intentFix: "How to handle a problem",
      intentExplain: "What is this?",
      intentCheck: "Check if I did it right",
      customLabel: "Or ask directly",
      additionalContextLabel: "Something to add (optional)",
      additionalContextHelp: "If AI may misunderstand a button's function, add button text, manual notes, or the exact function you want.",
      additionalContextPlaceholder: "Example: Hold Water Filter for 3 seconds to reset the filter light. Moisture Control adjusts humidity. I want to change the fridge temperature.",
      voice: "Voice",
      ask: "Ask",
      previous: "Previous",
      replay: "Replay",
      checkContinue: "Check before next",
      doneNext: "Done with this step",
      finish: "Finish",
      looksGood: "Looks correct",
      notSure: "I am not sure",
      followUpLabel: "Ask about this step",
      stepAdjustLabel: "Help AI understand this step",
      stepAdjustHelp: "If this step misunderstands a button's function, add a quick correction.",
      stepAdjustPlaceholder: "Example: Moisture Control adjusts humidity, not temperature.",
      updateStep: "Update step",
      updatingStep: "Updating this step...",
      stepUpdated: "This step was updated.",
      send: "Send",
      saveGuide: "Save locally",
      newScan: "Start over",
      savedGuides: "Saved interaction records",
      close: "Close",
      apiLive: "OpenAI connected",
      apiDemo: "Demo mode: no API key is configured. The flow works, but AI results are examples.",
      apiUnavailable: "Could not read API status.",
      analyzing: "Looking at the image...",
      generating: "Creating steps...",
      answering: "Answering...",
      cameraError: "Could not open the camera. You can upload a photo instead.",
      noImage: "Take or upload a photo first.",
      photoReady: "Photo is ready.",
      imageBright: "Lighting looks usable.",
      imageDark: "The image may be dark. You can retake it or continue testing.",
      objectConfidence: "Confidence",
      confidenceLow: "Low",
      confidenceMedium: "Medium",
      confidenceHigh: "High",
      componentAt: "Location",
      componentPurpose: "Purpose",
      correctionPlaceholder: "Example: microwave, TV remote, coffee maker",
      customPlaceholder: "Example: Which button should I press?",
      followUpPlaceholder: "Example: I cannot see that button",
      emptyQuestion: "Type a question first.",
      speechUnsupported: "Speech input is not supported in this browser.",
      listening: "Listening...",
      speechFailed: "I did not catch that. Try again or type.",
      speakUnsupported: "Speech playback is not supported in this browser.",
      stepProgress: "Step {current} of {total}",
      stepPrefix: "Step",
      savedOk: "Saved in this browser.",
      savedEmpty: "No saved records yet.",
      archiveSavedOk: "Photo and interaction record saved. Open Family archive at the top to review it.",
      archiveObject: "Identified object",
      archivePhoto: "Saved photo",
      archiveContext: "Added context",
      archiveSteps: "Step record",
      archiveEvents: "Interaction timeline",
      archiveNoContext: "No added context",
      archiveNoEvents: "No extra interactions yet",
      apiError: "Request failed",
      finalCheck: "Final check",
      completionPrompt: "Please confirm whether the action worked as expected. Did the temperature or function change?",
      completionConfirm: "I confirm",
      completionPhotoCheck: "I am not sure, check a photo",
      completionMenu: "Choose another option",
      completionConfirmed: "Confirmed. You can return to the menu or start over.",
      completionPhotoNotice: "Take a photo of the current state, such as the screen, lights, temperature display, or function change. I will help check whether it worked.",
      confirmingPhoto: "Checking the photo...",
      demoMode: "Demo mode",
      localOnly: "Stored only in this browser"
    }
  };

  const INTENT_LABELS = {
    "zh-CN": {
      use: "怎么使用",
      fix: "怎么处理问题",
      explain: "解释这是什么",
      check: "检查是否做对"
    },
    "en-US": {
      use: "how to use it",
      fix: "how to handle a problem",
      explain: "explain what this is",
      check: "check whether I did it correctly"
    }
  };

  const state = {
    language: localStorage.getItem("scanassist.language") || "en-US",
    highContrast: localStorage.getItem("scanassist.contrast") === "true",
    autoRead: localStorage.getItem("scanassist.autoRead") !== "false",
    stream: null,
    imageData: "",
    imageBrightness: null,
    analysis: null,
    guide: null,
    guideAdditionalContext: "",
    sessionEvents: [],
    activeStepIndex: 0,
    guideCompleted: false,
    reviewMode: false,
    reviewQuestion: "",
    health: null,
    overlayFrame: null,
    isBusy: false,
    currentStage: "",
    voiceRecorder: null,
    voiceChunks: [],
    voiceInput: null,
    voiceStopTimer: null,
    voiceTrigger: null,
    voiceAutoSubmit: null,
    voiceStream: null,
    voiceAudioContext: null,
    voiceAnalyser: null,
    voiceLevelFrame: null,
    voiceStartedAt: 0,
    voicePressing: false,
    suppressVoiceClick: false
  };

  const els = {};

  document.addEventListener("DOMContentLoaded", init);
  registerServiceWorker();

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").catch(() => {});
    });
  }

  function init() {
    cacheElements();
    bindEvents();
    applyLanguage();
    applyPreferences();
    refreshHealth();
    renderHistory();
    showStage(localStorage.getItem("scanassist.onboarded") === "true" ? "home" : "onboarding");
  }

  function cacheElements() {
    const ids = [
      "apiBanner",
      "toast",
      "onboardingSection",
      "homeSection",
      "onboardingSkipBtn",
      "onboardingNextBtn",
      "homeTakePhotoBtn",
      "homeSavedBtn",
      "homeHelpBtn",
      "captureSection",
      "analysisSection",
      "intentSection",
      "guideSection",
      "archiveSection",
      "cameraVideo",
      "previewImage",
      "captureCanvas",
      "cameraPlaceholder",
      "startCameraBtn",
      "captureBtn",
      "fileInput",
      "retakeBtn",
      "analyzeBtn",
      "imageQuality",
      "captureReviewNotice",
      "cameraFallbackNotice",
      "fileButtonLabel",
      "objectName",
      "analysisPreview",
      "confidenceBadge",
      "objectDescription",
      "componentList",
      "confirmObjectBtn",
      "correctObjectBtn",
      "correctionBox",
      "correctionInput",
      "useCorrectionBtn",
      "additionalContext",
      "intentDeviceTitle",
      "intentObjectName",
      "intentObjectSummary",
      "voiceAskBtn",
      "voiceFallbackHint",
      "customQuestion",
      "dictateCustomBtn",
      "askCustomBtn",
      "guideImage",
      "overlayCanvas",
      "guideDemoBadge",
      "safetyWarning",
      "guideOverview",
      "guideTitle",
      "stepProgress",
      "stepNumber",
      "stepInstruction",
      "stepFallback",
      "prevStepBtn",
      "speakStepBtn",
      "checkStepBtn",
      "nextStepBtn",
      "checkPanel",
      "checkPrompt",
      "checkYesBtn",
      "checkUnsureBtn",
      "completionPanel",
      "completionPrompt",
      "completionConfirmBtn",
      "completionPhotoCheckBtn",
      "completionMenuBtn",
      "stepAdjustInput",
      "updateStepBtn",
      "quickReplies",
      "followUpInput",
      "dictateFollowUpBtn",
      "sendFollowUpBtn",
      "followUpAnswer",
      "saveGuideBtn",
      "chooseOptionBtn",
      "newScanBtn",
      "busyOverlay",
      "busyText",
      "historyBtn",
      "historyDialog",
      "closeHistoryBtn",
      "historyList",
      "archiveList",
      "closeArchiveBtn",
      "contrastToggle",
      "autoReadToggle"
    ];

    for (const id of ids) {
      els[id] = document.getElementById(id);
    }
  }

  function bindEvents() {
    els.onboardingSkipBtn.addEventListener("click", finishOnboarding);
    els.onboardingNextBtn.addEventListener("click", finishOnboarding);
    els.homeTakePhotoBtn.addEventListener("click", () => {
      resetFlow("capture");
      startCamera();
    });
    els.homeSavedBtn.addEventListener("click", openHistory);
    els.homeHelpBtn.addEventListener("click", () => {
      showToast("Take or upload a photo first, then ask for help about the device.");
      showStage("onboarding");
    });

    document.querySelectorAll("[data-home]").forEach(button => {
      button.addEventListener("click", () => {
        stopCamera();
        showStage("home");
      });
    });

    document.querySelectorAll("[data-back]").forEach(button => {
      button.addEventListener("click", () => {
        const target = button.dataset.back || "home";
        if (target !== "capture") stopCamera();
        showStage(target);
      });
    });

    document.querySelectorAll("[data-language]").forEach(button => {
      button.addEventListener("click", () => {
        state.language = button.dataset.language;
        localStorage.setItem("scanassist.language", state.language);
        applyLanguage();
        renderApiBanner();
      });
    });

    els.contrastToggle.addEventListener("change", () => {
      state.highContrast = els.contrastToggle.checked;
      localStorage.setItem("scanassist.contrast", String(state.highContrast));
      applyPreferences();
    });

    els.autoReadToggle.addEventListener("change", () => {
      state.autoRead = els.autoReadToggle.checked;
      localStorage.setItem("scanassist.autoRead", String(state.autoRead));
    });

    els.startCameraBtn.addEventListener("click", startCamera);
    els.captureBtn.addEventListener("click", capturePhoto);
    els.fileInput.addEventListener("change", handleFileUpload);
    els.retakeBtn.addEventListener("click", retakePhoto);
    els.analyzeBtn.addEventListener("click", () => {
      if (state.reviewMode && state.guide) {
        reviewCompletionPhoto();
      } else {
        analyzeImage("");
      }
    });
    els.confirmObjectBtn.addEventListener("click", () => {
      renderIntentSummary();
      showStage("intent");
    });
    els.correctObjectBtn.addEventListener("click", () => {
      retakePhoto();
      showStage("capture");
    });
    els.useCorrectionBtn.addEventListener("click", useCorrection);

    document.querySelectorAll("[data-intent]").forEach(button => {
      button.addEventListener("click", () => generateGuide(button.dataset.intent, ""));
    });

    els.askCustomBtn.addEventListener("click", () => {
      const question = els.customQuestion.value.trim();
      if (!question) {
        showToast(t("emptyQuestion"));
        return;
      }
      generateGuide("custom", question);
    });

    setupVoiceHoldButton(els.voiceAskBtn, els.customQuestion, text => generateGuide("custom", text));
    setupVoiceHoldButton(els.dictateCustomBtn, els.customQuestion, null);
    setupVoiceHoldButton(els.dictateFollowUpBtn, els.followUpInput, sendFollowUpFromInput);
    els.prevStepBtn.addEventListener("click", previousStep);
    els.speakStepBtn.addEventListener("click", speakCurrentStep);
    els.nextStepBtn.addEventListener("click", nextStep);
    els.checkStepBtn.addEventListener("click", showCheckPanel);
    els.checkYesBtn.addEventListener("click", nextStep);
    els.checkUnsureBtn.addEventListener("click", askCheckHelp);
    els.completionConfirmBtn.addEventListener("click", confirmCompletion);
    els.completionPhotoCheckBtn.addEventListener("click", startCompletionPhotoCheck);
    els.completionMenuBtn.addEventListener("click", returnToIntentMenu);
    els.updateStepBtn.addEventListener("click", updateCurrentStepFromNote);
    els.sendFollowUpBtn.addEventListener("click", sendFollowUpFromInput);
    els.chooseOptionBtn.addEventListener("click", returnToIntentMenu);
    els.saveGuideBtn.addEventListener("click", saveCurrentGuide);
    els.newScanBtn.addEventListener("click", resetFlow);
    els.historyBtn.addEventListener("click", openHistory);
    els.closeHistoryBtn.addEventListener("click", () => els.historyDialog.close());
    els.closeArchiveBtn.addEventListener("click", closeArchive);

    els.guideImage.addEventListener("load", () => drawOverlay(getCurrentStep()));
    els.guideImage.addEventListener("contextmenu", event => event.preventDefault());
    window.addEventListener("resize", () => drawOverlay(getCurrentStep()));
  }

  function applyLanguage() {
    document.documentElement.lang = state.language;
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.dataset.i18n;
      node.textContent = t(key);
    });

    document.querySelectorAll("[data-language]").forEach(button => {
      button.classList.toggle("is-active", button.dataset.language === state.language);
    });

    els.correctionInput.placeholder = t("correctionPlaceholder");
    els.additionalContext.placeholder = t("additionalContextPlaceholder");
    els.customQuestion.placeholder = t("customPlaceholder");
    els.stepAdjustInput.placeholder = t("stepAdjustPlaceholder");
    els.followUpInput.placeholder = t("followUpPlaceholder");

    if (state.guide) {
      renderStep(false);
      renderQuickReplies();
    }
    if (state.reviewMode) {
      els.captureReviewNotice.hidden = false;
      els.captureReviewNotice.textContent = t("completionPhotoNotice");
      state.reviewQuestion = t("completionPrompt");
    }
    if (!els.completionPanel.hidden) {
      els.completionPrompt.textContent = t("completionPrompt");
    }
  }

  function applyPreferences() {
    document.body.classList.toggle("high-contrast", state.highContrast);
    els.contrastToggle.checked = state.highContrast;
    els.autoReadToggle.checked = state.autoRead;
  }

  function finishOnboarding() {
    localStorage.setItem("scanassist.onboarded", "true");
    showStage("home");
  }

  async function refreshHealth() {
    try {
      const response = await fetch("/health");
      state.health = await response.json();
      renderApiBanner();
    } catch (error) {
      els.apiBanner.textContent = t("apiUnavailable");
    }
  }

  function renderApiBanner() {
    if (!state.health) return;
    els.apiBanner.classList.toggle("is-live", Boolean(state.health.hasApiKey));
    els.apiBanner.classList.toggle("is-demo", !state.health.hasApiKey);
    if (state.health.hasApiKey) {
      els.apiBanner.textContent = `${t("apiLive")}: ${state.health.model}`;
    } else {
      els.apiBanner.textContent = t("apiDemo");
    }
  }

  async function startCamera() {
    try {
      if (shouldUseNativePhotoPicker()) {
        showCameraFallback(true);
        return;
      }

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera API unavailable");
      }

      els.cameraFallbackNotice.hidden = true;
      stopCamera();
      state.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      els.cameraVideo.srcObject = state.stream;
      await els.cameraVideo.play();
      els.cameraVideo.hidden = false;
      els.previewImage.hidden = true;
      els.cameraPlaceholder.hidden = true;
      els.captureBtn.disabled = false;
      els.retakeBtn.hidden = true;
      els.analyzeBtn.hidden = true;
      els.imageQuality.hidden = true;
    } catch (error) {
      showCameraFallback(false);
    }
  }

  function shouldUseNativePhotoPicker() {
    const ua = navigator.userAgent || "";
    const isWeChat = /MicroMessenger/i.test(ua);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    const isLocalhost = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
    return isWeChat || (isMobile && !window.isSecureContext && !isLocalhost);
  }

  function showCameraFallback(openPicker) {
    els.cameraFallbackNotice.hidden = false;
    els.cameraFallbackNotice.textContent = "Live camera preview is blocked here. Tap Take or upload photo, then choose Camera or Photo Library.";
    els.startCameraBtn.textContent = "Try camera again";
    els.fileButtonLabel.textContent = "Take or upload photo";
    showToast("Use Take or upload photo to continue on this browser.");
    if (openPicker && !state.imageData && !state.stream) {
      els.fileInput.click();
    }
  }

  function stopCamera() {
    if (!state.stream) return;
    state.stream.getTracks().forEach(track => track.stop());
    state.stream = null;
    els.cameraVideo.srcObject = null;
  }

  async function capturePhoto() {
    if (!els.cameraVideo.videoWidth) {
      showToast(t("cameraError"));
      return;
    }

    const sourceCanvas = els.captureCanvas;
    sourceCanvas.width = els.cameraVideo.videoWidth;
    sourceCanvas.height = els.cameraVideo.videoHeight;
    const ctx = sourceCanvas.getContext("2d");
    ctx.drawImage(els.cameraVideo, 0, 0, sourceCanvas.width, sourceCanvas.height);
    const result = resizeCanvasToDataUrl(sourceCanvas, 1400);
    setPhoto(result.dataUrl, result.brightness);
    stopCamera();
  }

  async function handleFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    try {
      const dataUrl = await readFileAsDataUrl(file);
      const result = await resizeImageDataUrl(dataUrl, 1400);
      stopCamera();
      setPhoto(result.dataUrl, result.brightness);
      event.target.value = "";
    } catch (error) {
      showToast(error.message || t("apiError"));
    }
  }

  function setPhoto(dataUrl, brightness) {
    state.imageData = dataUrl;
    state.imageBrightness = brightness;
    els.previewImage.src = dataUrl;
    els.previewImage.hidden = false;
    els.cameraVideo.hidden = true;
    els.cameraPlaceholder.hidden = true;
    els.cameraFallbackNotice.hidden = true;
    els.captureBtn.disabled = true;
    els.retakeBtn.hidden = false;
    els.analyzeBtn.hidden = false;
    renderImageQuality();
    showToast(t("photoReady"));
  }

  function retakePhoto() {
    state.imageData = "";
    state.imageBrightness = null;
    els.previewImage.hidden = true;
    els.previewImage.removeAttribute("src");
    els.imageQuality.hidden = true;
    els.cameraFallbackNotice.hidden = true;
    startCamera();
  }

  function renderImageQuality() {
    if (state.imageBrightness === null) {
      els.imageQuality.hidden = true;
      return;
    }

    const isDark = state.imageBrightness < 72;
    els.imageQuality.hidden = false;
    els.imageQuality.textContent = isDark ? t("imageDark") : t("imageBright");
  }

  async function analyzeImage(userHint) {
    if (!state.imageData) {
      showToast(t("noImage"));
      return;
    }

    try {
      setBusy(true, t("analyzing"));
      const data = await postJson("/api/analyze-image", {
        imageData: state.imageData,
        language: state.language,
        userHint
      });
      state.analysis = data;
      logEvent(t("archiveObject"), data.objectName || "");
      renderAnalysis();
      showStage("analysis");
    } catch (error) {
      showToast(formatError(error));
    } finally {
      setBusy(false);
    }
  }

  function renderAnalysis() {
    const analysis = state.analysis;
    if (!analysis) return;

    els.objectName.textContent = analysis.objectName || "";
    if (els.analysisPreview && state.imageData) {
      els.analysisPreview.src = state.imageData;
    }
    els.confidenceBadge.textContent = `${t("objectConfidence")}: ${confidenceText(analysis.confidence)}${analysis.demo ? ` - ${t("demoMode")}` : ""}`;
    els.objectDescription.textContent = analysis.shortDescription || "";
    els.componentList.textContent = "";

    for (const component of analysis.visibleComponents || []) {
      const item = document.createElement("div");
      item.className = "component-item";

      const name = document.createElement("div");
      name.className = "component-name";
      name.textContent = component.label || "";

      const meta = document.createElement("div");
      meta.className = "component-meta";
      meta.textContent = `${t("componentAt")}: ${component.location || "center"} · ${t("componentPurpose")}: ${component.purpose || ""}`;

      item.append(name, meta);
      els.componentList.appendChild(item);
    }
  }

  function renderIntentSummary() {
    const analysis = state.analysis || {};
    const objectName = analysis.objectName || "Device";
    els.intentDeviceTitle.textContent = objectName.length > 24 ? "Device panel" : objectName;
    els.intentObjectName.textContent = objectName;
    els.intentObjectSummary.textContent = [analysis.category, "ready to help"].filter(Boolean).join(" — ");
  }

  function useCorrection() {
    const correction = els.correctionInput.value.trim();
    if (!correction) {
      els.correctionInput.focus();
      return;
    }

    if (!state.analysis) {
      state.analysis = {
        objectName: correction,
        category: "",
        visibleComponents: []
      };
    } else {
      state.analysis.objectName = correction;
      state.analysis.confidence = "high";
      state.analysis.shortDescription = "";
    }

    logEvent(t("archiveObject"), correction);
    renderAnalysis();
    showStage("intent");
  }

  async function generateGuide(intentKey, customQuestion) {
    if (!state.imageData) {
      showToast(t("noImage"));
      return;
    }

    const analysis = state.analysis || {};
    const intent = intentKey === "custom"
      ? customQuestion
      : INTENT_LABELS[state.language][intentKey] || intentKey;
    const additionalContext = els.additionalContext.value.trim();

    try {
      setBusy(true, t("generating"));
      const data = await postJson("/api/generate-steps", {
        imageData: state.imageData,
        language: state.language,
        objectName: analysis.objectName || "",
        category: analysis.category || "",
        components: analysis.visibleComponents || [],
        intent,
        customQuestion,
        additionalContext
      });

      state.reviewMode = false;
      state.reviewQuestion = "";
      state.guideAdditionalContext = additionalContext;
      state.guideCompleted = false;
      if (additionalContext) {
        logEvent(t("archiveContext"), additionalContext);
      }
      logEvent(t("archiveSteps"), data.title || intent);
      els.captureReviewNotice.hidden = true;
      state.guide = data;
      state.activeStepIndex = 0;
      renderGuide();
      showStage("guide");
    } catch (error) {
      showToast(formatError(error));
    } finally {
      setBusy(false);
    }
  }

  function renderGuide() {
    if (!state.guide) return;

    els.guideImage.src = state.imageData;
    els.guideDemoBadge.hidden = !state.guide.demo;
    els.guideDemoBadge.textContent = t("demoMode");
    els.guideTitle.textContent = state.guide.title || "How to use it";
    if (els.guideOverview) {
      els.guideOverview.textContent = state.guide.overview || "";
    }

    if (state.guide.safetyWarning) {
      els.safetyWarning.hidden = false;
      els.safetyWarning.textContent = state.guide.safetyWarning;
    } else {
      els.safetyWarning.hidden = true;
      els.safetyWarning.textContent = "";
    }

    renderQuickReplies();
    renderStep(true);
  }

  function renderQuickReplies() {
    els.quickReplies.textContent = "";
    const suggestions = (state.guide && state.guide.followUpSuggestions) || [];
    for (const suggestion of suggestions.slice(0, 4)) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quick-reply";
      button.textContent = suggestion;
      button.addEventListener("click", () => sendFollowUp(suggestion));
      els.quickReplies.appendChild(button);
    }
  }

  function renderStep(shouldSpeak) {
    const step = getCurrentStep();
    if (!step || !state.guide) return;

    const total = state.guide.steps.length;
    const current = state.activeStepIndex + 1;
    els.stepProgress.textContent = t("stepProgress").replace("{current}", current).replace("{total}", total);
    els.stepNumber.textContent = step.id || current;
    els.stepInstruction.textContent = step.instruction || "";
    els.stepFallback.textContent = step.fallbackTip || "";
    els.checkPrompt.textContent = step.checkPrompt || "";
    els.prevStepBtn.disabled = state.activeStepIndex === 0;
    els.nextStepBtn.textContent = state.activeStepIndex === total - 1 ? t("finish") : "Next";
    els.checkPanel.hidden = true;
    els.completionPanel.hidden = true;
    els.stepAdjustInput.value = "";
    els.followUpAnswer.hidden = true;
    els.followUpAnswer.textContent = "";
    drawOverlay(step);

    if (shouldSpeak && state.autoRead) {
      speak(step.sayAloud || step.instruction || "");
    }
  }

  function getCurrentStep() {
    if (!state.guide || !Array.isArray(state.guide.steps)) return null;
    return state.guide.steps[state.activeStepIndex] || null;
  }

  function previousStep() {
    if (state.activeStepIndex <= 0) return;
    state.activeStepIndex -= 1;
    renderStep(true);
  }

  function nextStep() {
    if (!state.guide) return;

    if (state.activeStepIndex >= state.guide.steps.length - 1) {
      showCompletionPanel(true);
      return;
    }

    state.activeStepIndex += 1;
    renderStep(true);
  }

  function showCompletionPanel(shouldSpeak) {
    els.checkPanel.hidden = true;
    els.completionPanel.hidden = false;
    els.completionPrompt.textContent = t("completionPrompt");
    if (shouldSpeak && state.autoRead) {
      speak(t("completionPrompt"));
    }
  }

  function confirmCompletion() {
    const finalText = state.guide?.finalCheck || t("completionConfirmed");
    state.guideCompleted = true;
    els.followUpAnswer.hidden = false;
    els.followUpAnswer.textContent = finalText;
    logEvent(t("completionConfirm"), finalText);
    showToast(t("completionConfirmed"));
    if (state.autoRead) speak(finalText);
  }

  function returnToIntentMenu() {
    state.reviewMode = false;
    state.reviewQuestion = "";
    els.captureReviewNotice.hidden = true;
    logEvent(t("completionMenu"), state.guide?.title || "");
    showStage("intent");
  }

  function startCompletionPhotoCheck() {
    state.reviewMode = true;
    state.reviewQuestion = t("completionPrompt");
    els.captureReviewNotice.hidden = false;
    els.captureReviewNotice.textContent = t("completionPhotoNotice");
    els.previewImage.hidden = true;
    els.previewImage.removeAttribute("src");
    els.cameraPlaceholder.hidden = false;
    els.cameraVideo.hidden = true;
    els.captureBtn.disabled = true;
    els.retakeBtn.hidden = true;
    els.analyzeBtn.hidden = true;
    els.imageQuality.hidden = true;
    showStage("capture");
    if (state.autoRead) speak(t("completionPhotoNotice"));
  }

  function showCheckPanel() {
    const step = getCurrentStep();
    if (!step) return;
    els.checkPanel.hidden = false;
    els.checkPrompt.textContent = step.checkPrompt || "";
    if (state.autoRead) speak(step.checkPrompt || "");
  }

  function askCheckHelp() {
    const step = getCurrentStep();
    const question = state.language === "zh-CN"
      ? `我不确定这一步是否做对了。请根据图片帮我检查：${step ? step.checkPrompt : ""}`
      : `I am not sure I did this step correctly. Please help me check: ${step ? step.checkPrompt : ""}`;
    sendFollowUp(question);
  }

  function speakCurrentStep() {
    const step = getCurrentStep();
    if (step) speak(step.sayAloud || step.instruction || "");
  }

  function sendFollowUpFromInput() {
    const question = els.followUpInput.value.trim();
    if (!question) {
      showToast(t("emptyQuestion"));
      return;
    }
    sendFollowUp(question);
  }

  async function updateCurrentStepFromNote() {
    if (!state.guide) return;

    const note = els.stepAdjustInput.value.trim();
    if (!note) {
      showToast(t("emptyQuestion"));
      els.stepAdjustInput.focus();
      return;
    }

    const step = getCurrentStep();
    if (!step) return;

    try {
      setBusy(true, t("updatingStep"));
      const updatedStep = await postJson("/api/revise-step", {
        imageData: state.imageData,
        language: state.language,
        objectName: state.guide.objectName || "",
        additionalContext: state.guideAdditionalContext,
        correctionNote: note,
        currentStep: step,
        steps: state.guide.steps || []
      });

      state.guide.steps[state.activeStepIndex] = updatedStep;
      state.guideAdditionalContext = [state.guideAdditionalContext, note].filter(Boolean).join("\n");
      logEvent(t("stepAdjustLabel"), `${note} -> ${updatedStep.instruction || ""}`);
      els.stepAdjustInput.value = "";
      renderStep(false);
      els.followUpAnswer.hidden = false;
      els.followUpAnswer.textContent = t("stepUpdated");
      showToast(t("stepUpdated"));
      if (state.autoRead) speak(updatedStep.sayAloud || updatedStep.instruction || "");
    } catch (error) {
      showToast(formatError(error));
    } finally {
      setBusy(false);
    }
  }

  async function reviewCompletionPhoto() {
    if (!state.guide || !state.imageData) {
      showToast(t("noImage"));
      return;
    }

    const step = getCurrentStep();
    const question = state.reviewQuestion || t("completionPrompt");

    try {
      setBusy(true, t("confirmingPhoto"));
      const data = await postJson("/api/follow-up", {
        imageData: state.imageData,
        language: state.language,
        objectName: state.guide.objectName || "",
        additionalContext: state.guideAdditionalContext,
        question,
        currentStep: step ? step.instruction : "",
        steps: state.guide.steps || []
      });

      state.reviewMode = false;
      state.reviewQuestion = "";
      els.captureReviewNotice.hidden = true;
      els.guideImage.src = state.imageData;
      showStage("guide");
      renderStep(false);
      showCompletionPanel(false);
      const answerParts = [data.answer, data.nextAction].filter(Boolean);
      if (data.safetyWarning) answerParts.push(data.safetyWarning);
      els.followUpAnswer.hidden = false;
      els.followUpAnswer.textContent = answerParts.join(" ");
      logEvent(t("completionPhotoCheck"), answerParts.join(" "));
      drawOverlay(data);
      speak(data.speakableAnswer || data.answer || "");
    } catch (error) {
      showToast(formatError(error));
    } finally {
      setBusy(false);
    }
  }

  async function sendFollowUp(question) {
    if (!state.guide) return;
    const step = getCurrentStep();

    try {
      setBusy(true, t("answering"));
      const data = await postJson("/api/follow-up", {
        imageData: state.imageData,
        language: state.language,
        objectName: state.guide.objectName || "",
        additionalContext: state.guideAdditionalContext,
        question,
        currentStep: step ? step.instruction : "",
        steps: state.guide.steps || []
      });

      const answerParts = [data.answer, data.nextAction].filter(Boolean);
      if (data.safetyWarning) answerParts.push(data.safetyWarning);
      els.followUpAnswer.hidden = false;
      els.followUpAnswer.textContent = answerParts.join(" ");
      logEvent(t("followUpLabel"), `${question} -> ${answerParts.join(" ")}`);
      els.followUpInput.value = "";
      drawOverlay(data);
      speak(data.speakableAnswer || data.answer || "");
    } catch (error) {
      showToast(formatError(error));
    } finally {
      setBusy(false);
    }
  }

  function speak(text) {
    if (!text) return;
    if (!("speechSynthesis" in window)) {
      showToast(t("speakUnsupported"));
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = state.language;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function setupVoiceHoldButton(button, input, autoSubmit) {
    if (!button) return;
    ["contextmenu", "selectstart", "dragstart"].forEach(eventName => {
      button.addEventListener(eventName, event => event.preventDefault());
    });
    button.addEventListener("pointerdown", event => {
      if (event.button !== undefined && event.button !== 0) return;
      event.preventDefault();
      state.voicePressing = true;
      state.suppressVoiceClick = true;
      button.setPointerCapture?.(event.pointerId);
      startVoiceRecording(input, button, autoSubmit);
    });
    button.addEventListener("pointerup", event => {
      event.preventDefault();
      state.voicePressing = false;
      button.releasePointerCapture?.(event.pointerId);
      stopVoiceRecording(false);
    });
    button.addEventListener("pointercancel", event => {
      event.preventDefault();
      state.voicePressing = false;
      stopVoiceRecording(true);
    });
    button.addEventListener("lostpointercapture", () => {
      if (state.voiceTrigger === button) stopVoiceRecording(false);
    });
    button.addEventListener("click", event => {
      if (!state.suppressVoiceClick) {
        pulseVoiceButton(button);
        showToast("Hold to talk. Release to ask.");
      }
      state.suppressVoiceClick = false;
      event.preventDefault();
    });
  }

  async function startVoiceRecording(input, trigger, autoSubmit) {
    if (state.voiceRecorder && state.voiceRecorder.state === "recording") return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      showTextFallback(input);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      state.voiceChunks = [];
      state.voiceInput = input;
      state.voiceTrigger = trigger;
      state.voiceAutoSubmit = autoSubmit;
      state.voiceStream = stream;
      state.voiceStartedAt = Date.now();
      const recorder = new MediaRecorder(stream, { mimeType: pickAudioMimeType() });
      state.voiceRecorder = recorder;

      recorder.ondataavailable = event => {
        if (event.data && event.data.size > 0) state.voiceChunks.push(event.data);
      };
      recorder.onstop = async () => {
        clearTimeout(state.voiceStopTimer);
        stopVoiceLevel();
        stream.getTracks().forEach(track => track.stop());
        setVoiceTriggerState(trigger, false);
        const elapsed = Date.now() - state.voiceStartedAt;
        const shouldTranscribe = elapsed > 450 && state.voiceChunks.length > 0;
        const autoSubmitHandler = state.voiceAutoSubmit;
        const recordedChunks = state.voiceChunks;
        state.voiceRecorder = null;
        state.voiceChunks = [];
        state.voiceInput = null;
        state.voiceTrigger = null;
        state.voiceAutoSubmit = null;
        state.voiceStream = null;
        state.voiceStartedAt = 0;
        if (!shouldTranscribe) {
          pulseVoiceButton(trigger);
          showToast("Hold to talk. Release to ask.");
          return;
        }
        const mimeType = (recorder.mimeType || "audio/webm").split(";")[0];
        const text = await transcribeVoiceBlob(input, new Blob(recordedChunks, { type: mimeType }));
        if (text && autoSubmitHandler) autoSubmitHandler(text);
      };

      setVoiceTriggerState(trigger, true);
      startVoiceLevel(stream, trigger);
      showToast("Listening... release to ask.");
      recorder.start(250);
      if (!state.voicePressing) {
        recorder.stop();
        return;
      }
      state.voiceStopTimer = setTimeout(() => {
        if (recorder.state === "recording") recorder.stop();
      }, 12000);
    } catch (error) {
      showTextFallback(input);
    }
  }

  function stopVoiceRecording(cancelled) {
    if (!state.voiceRecorder || state.voiceRecorder.state !== "recording") return;
    if (cancelled) state.voiceChunks = [];
    try {
      state.voiceRecorder.requestData();
    } catch (error) {}
    state.voiceRecorder.stop();
  }

  function pickAudioMimeType() {
    const types = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/wav"];
    return types.find(type => window.MediaRecorder && MediaRecorder.isTypeSupported(type)) || "";
  }

  function setVoiceTriggerState(trigger, isRecording) {
    if (!trigger) return;
    trigger.classList.toggle("is-recording", isRecording);
    trigger.style.setProperty("--voice-level", isRecording ? "0.35" : "0");
    if (trigger === els.voiceAskBtn) {
      trigger.querySelector("strong").textContent = isRecording ? "Listening... release to ask" : "Hold to talk";
    } else {
      trigger.textContent = isRecording ? "Listening... release" : (trigger === els.dictateFollowUpBtn ? "♬ Hold to speak" : "Voice");
    }
  }

  function pulseVoiceButton(trigger) {
    if (!trigger) return;
    trigger.classList.remove("is-pulsing");
    void trigger.offsetWidth;
    trigger.classList.add("is-pulsing");
    setTimeout(() => trigger.classList.remove("is-pulsing"), 520);
  }

  function startVoiceLevel(stream, trigger) {
    stopVoiceLevel();
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      audioContext.createMediaStreamSource(stream).connect(analyser);
      const samples = new Uint8Array(analyser.fftSize);
      state.voiceAudioContext = audioContext;
      state.voiceAnalyser = analyser;
      const tick = () => {
        analyser.getByteTimeDomainData(samples);
        let sum = 0;
        samples.forEach(value => {
          const centered = (value - 128) / 128;
          sum += centered * centered;
        });
        const level = Math.min(1, Math.max(0.08, Math.sqrt(sum / samples.length) * 7));
        trigger.style.setProperty("--voice-level", level.toFixed(2));
        state.voiceLevelFrame = requestAnimationFrame(tick);
      };
      tick();
    } catch (error) {
      trigger.style.setProperty("--voice-level", "0.35");
    }
  }

  function stopVoiceLevel() {
    if (state.voiceLevelFrame) cancelAnimationFrame(state.voiceLevelFrame);
    state.voiceLevelFrame = null;
    state.voiceAnalyser = null;
    if (state.voiceAudioContext) state.voiceAudioContext.close?.();
    state.voiceAudioContext = null;
  }

  async function transcribeVoiceBlob(input, blob) {
    try {
      setBusy(true, "Transcribing voice...");
      const audioData = await blobToDataUrl(blob);
      const data = await postJson("/api/transcribe-audio", {
        audioData,
        language: state.language
      });
      const text = (data.text || "").trim();
      if (!text) {
        showVoiceHint("I could not hear words. Hold again and speak closer, or type your question.");
        return;
      }
      input.value = text;
      input.focus();
      if (els.voiceFallbackHint) els.voiceFallbackHint.hidden = true;
      return text;
    } catch (error) {
      showToast(formatError(error));
      showVoiceHint("Voice was recorded, but transcription failed. Try again, or type your question.");
      return "";
    } finally {
      setBusy(false);
    }
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Could not read recorded audio."));
      reader.readAsDataURL(blob);
    });
  }

  function showTextFallback(input) {
    showVoiceHint("Voice input is blocked here. Type your question, or tap the iPhone keyboard microphone.");
    input.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => input.focus(), 80);
  }

  function showVoiceHint(message) {
    if (els.voiceFallbackHint) {
      els.voiceFallbackHint.textContent = message;
      els.voiceFallbackHint.hidden = false;
    }
    els.toast.hidden = true;
  }

  function drawOverlay(target) {
    cancelAnimationFrame(state.overlayFrame);
    const canvas = els.overlayCanvas;
    const image = els.guideImage;
    const frame = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    if (!target || !image.complete || !image.naturalWidth) {
      clearCanvas(canvas, ctx);
      return;
    }

    const overlayType = target.overlayType || "circle";
    if (overlayType === "none") {
      clearCanvas(canvas, ctx);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const render = time => {
      const dpr = window.devicePixelRatio || 1;
      const frameRect = frame.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(frameRect.width * dpr));
      canvas.height = Math.max(1, Math.round(frameRect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, frameRect.width, frameRect.height);

      const area = {
        x: imageRect.left - frameRect.left,
        y: imageRect.top - frameRect.top,
        width: imageRect.width,
        height: imageRect.height
      };

      const point = normalizedTargetToPoint(target, area);
      if (!point) {
        clearCanvas(canvas, ctx);
        return;
      }

      const pulse = prefersReducedMotion ? 0 : Math.sin(time / 260) * 5;
      const baseRadius = clamp(
        point.radiusRatio * Math.min(area.width, area.height),
        24,
        Math.min(area.width, area.height) * 0.22
      );
      const radius = baseRadius + pulse;
      drawPointer(ctx, point, radius, String(target.id || state.activeStepIndex + 1), overlayType);

      if (!prefersReducedMotion) {
        state.overlayFrame = requestAnimationFrame(render);
      }
    };

    render(0);
  }

  function clearCanvas(canvas, ctx) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
  }

  function normalizedTargetToPoint(target, area) {
    const xRatio = Number(target.x);
    const yRatio = Number(target.y);
    const radiusRatio = Number(target.radius);

    if (!Number.isFinite(xRatio) || !Number.isFinite(yRatio) || !Number.isFinite(radiusRatio)) {
      return null;
    }

    if (xRatio < 0 || xRatio > 1 || yRatio < 0 || yRatio > 1 || radiusRatio <= 0 || radiusRatio > 1) {
      return null;
    }

    return {
      x: area.x + area.width * xRatio,
      y: area.y + area.height * yRatio,
      radiusRatio,
      area
    };
  }

  function drawPointer(ctx, point, radius, label, overlayType) {
    const color = "#c94f3d";
    const labelX = clamp(point.x - 92, point.area.x + 10, point.area.x + point.area.width - 86);
    const labelY = clamp(point.y - radius - 70, point.area.y + 10, point.area.y + point.area.height - 58);
    const labelCenterX = labelX + 34;
    const labelCenterY = labelY + 26;

    ctx.save();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.fillStyle = "rgba(201, 79, 61, 0.12)";
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    if (overlayType === "arrow") {
      drawArrow(ctx, labelCenterX, labelCenterY, point.x, point.y, color);
    }

    ctx.fillStyle = color;
    roundRect(ctx, labelX, labelY, 68, 52, 8);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 24px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, labelX + 34, labelY + 27);
    ctx.restore();
  }

  function drawArrow(ctx, fromX, fromY, toX, toY, color) {
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const endX = toX - Math.cos(angle) * 22;
    const endY = toY - Math.sin(angle) * 22;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - Math.cos(angle - Math.PI / 6) * 18, endY - Math.sin(angle - Math.PI / 6) * 18);
    ctx.lineTo(endX - Math.cos(angle + Math.PI / 6) * 18, endY - Math.sin(angle + Math.PI / 6) * 18);
    ctx.closePath();
    ctx.fill();
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function logEvent(label, detail) {
    const cleanLabel = String(label || "").trim();
    const cleanDetail = String(detail || "").replace(/\s+/g, " ").trim();
    if (!cleanLabel && !cleanDetail) return;

    state.sessionEvents.push({
      time: new Date().toISOString(),
      label: cleanLabel,
      detail: cleanDetail
    });

    if (state.sessionEvents.length > 30) {
      state.sessionEvents = state.sessionEvents.slice(-30);
    }
  }

  async function saveCurrentGuide() {
    if (!state.guide) return;

    els.saveGuideBtn.disabled = true;

    try {
      const records = getSavedGuides();
      const photoDataUrl = state.imageData ? await createArchivePhotoDataUrl(state.imageData) : "";
      const record = {
      id: Date.now(),
      language: state.language,
      date: new Date().toISOString(),
      title: state.guide.title || state.guide.objectName || "ScanAssist",
      completed: state.guideCompleted,
      progress: `${Math.min(state.activeStepIndex + 1, (state.guide.steps || []).length || 1)}/${(state.guide.steps || []).length || 1}`,
      objectName: state.guide.objectName || "",
      overview: state.guide.overview || "",
      photoDataUrl,
      additionalContext: state.guideAdditionalContext || "",
      analysis: state.analysis ? {
        objectName: state.analysis.objectName || "",
        confidence: state.analysis.confidence || "",
        shortDescription: state.analysis.shortDescription || ""
      } : null,
      steps: (state.guide.steps || []).map(step => ({
        id: step.id,
        instruction: step.instruction,
        fallbackTip: step.fallbackTip || ""
      })),
      events: state.sessionEvents.slice()
      };

      persistSavedGuides([record, ...records]);
      renderHistory();
      els.saveGuideBtn.textContent = t("saved");
      clearTimeout(saveCurrentGuide.resetTimer);
      saveCurrentGuide.resetTimer = setTimeout(() => {
        els.saveGuideBtn.textContent = t("saveGuide");
      }, 2200);
      showToast(t("archiveSavedOk"));
    } catch (error) {
      showToast(formatError(error));
    } finally {
      els.saveGuideBtn.disabled = false;
    }
  }

  function persistSavedGuides(records) {
    const recent = records.slice(0, 6);
    try {
      localStorage.setItem("scanassist.guides", JSON.stringify(recent));
    } catch (error) {
      localStorage.setItem("scanassist.guides", JSON.stringify(recent.slice(0, 3)));
    }
  }

  function openHistory() {
    renderHistory();
    showStage("archive");
  }

  function closeArchive() {
    showStage(state.guide ? "guide" : "capture");
  }

  function renderHistory() {
    const target = els.archiveList || els.historyList;
    if (!target) return;
    const records = getSavedGuides();
    target.textContent = "";

    const displayRecords = records.length ? records : getSampleGuides();

    for (const record of displayRecords.slice(0, 6)) {
      const item = document.createElement("article");
      item.className = "history-item";
      item.classList.toggle("is-complete", Boolean(record.completed));
      item.classList.toggle("is-progress", !record.completed);
      item.dataset.progress = record.progress || "1/3";

      const title = document.createElement("div");
      title.className = "history-title";
      title.textContent = record.title;

      const meta = document.createElement("div");
      meta.className = "history-meta";
      meta.textContent = record.completed ? "Completed" : `Step ${record.progress || "1/3"}`;

      const photoBlock = document.createElement("div");
      photoBlock.className = "archive-photo-block";
      if (record.photoDataUrl) {
        const photo = document.createElement("img");
        photo.className = "archive-photo";
        photo.src = record.photoDataUrl;
        photo.alt = record.title || t("archivePhoto");
        photoBlock.append(photo);
      } else if (record.icon) {
        const icon = document.createElement("div");
        icon.className = "archive-emoji";
        icon.textContent = record.icon;
        photoBlock.append(icon);
      }

      const object = document.createElement("div");
      object.className = "archive-field";
      object.innerHTML = `<strong>${escapeHtml(t("archiveObject"))}:</strong> ${escapeHtml(record.objectName || record.analysis?.objectName || "-")}`;

      const context = document.createElement("div");
      context.className = "archive-field";
      context.innerHTML = `<strong>${escapeHtml(t("archiveContext"))}:</strong> ${escapeHtml(record.additionalContext || t("archiveNoContext"))}`;

      const stepsLabel = document.createElement("div");
      stepsLabel.className = "archive-section-label";
      stepsLabel.textContent = t("archiveSteps");

      const list = document.createElement("ol");
      list.className = "history-steps";
      for (const step of (record.steps || []).slice(0, 6)) {
        const li = document.createElement("li");
        li.textContent = [step.instruction, step.fallbackTip].filter(Boolean).join(" ");
        list.appendChild(li);
      }

      const eventsLabel = document.createElement("div");
      eventsLabel.className = "archive-section-label";
      eventsLabel.textContent = t("archiveEvents");

      const events = document.createElement("div");
      events.className = "archive-events";
      const recordEvents = record.events || [];
      if (!recordEvents.length) {
        const emptyEvent = document.createElement("p");
        emptyEvent.className = "history-meta";
        emptyEvent.textContent = t("archiveNoEvents");
        events.appendChild(emptyEvent);
      } else {
        for (const event of recordEvents.slice(-12)) {
          const eventRow = document.createElement("div");
          eventRow.className = "archive-event";
          const time = event.time ? new Date(event.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";
          eventRow.textContent = `${time} ${event.label}${event.detail ? `: ${event.detail}` : ""}`;
          events.appendChild(eventRow);
        }
      }

      item.append(title, meta, photoBlock, object, context, stepsLabel, list, eventsLabel, events);
      target.appendChild(item);
    }
  }

  function getSampleGuides() {
    return [
      { title: "Refrigerator", icon: "🧊", completed: true },
      { title: "Microwave", icon: "📡", progress: "2/5" },
      { title: "TV Remote", icon: "📺", completed: true },
      { title: "Washing machine", icon: "🫧", progress: "3/4" },
      { title: "Air conditioner", icon: "💨", completed: true },
      { title: "Power strip", icon: "🔌", progress: "1/3" }
    ];
  }

  function getSavedGuides() {
    try {
      return JSON.parse(localStorage.getItem("scanassist.guides") || "[]");
    } catch (error) {
      return [];
    }
  }

  function resetFlow(initialStage = "capture") {
    stopCamera();
    window.speechSynthesis && window.speechSynthesis.cancel();
    state.imageData = "";
    state.imageBrightness = null;
    state.analysis = null;
    state.guide = null;
    state.guideAdditionalContext = "";
    state.sessionEvents = [];
    state.activeStepIndex = 0;
    state.guideCompleted = false;
    state.reviewMode = false;
    state.reviewQuestion = "";
    els.previewImage.hidden = true;
    els.previewImage.removeAttribute("src");
    els.guideImage.removeAttribute("src");
    els.cameraVideo.hidden = true;
    els.cameraPlaceholder.hidden = false;
    els.captureBtn.disabled = true;
    els.retakeBtn.hidden = true;
    els.analyzeBtn.hidden = true;
    els.imageQuality.hidden = true;
    els.captureReviewNotice.hidden = true;
    els.customQuestion.value = "";
    els.additionalContext.value = "";
    els.stepAdjustInput.value = "";
    els.followUpInput.value = "";
    els.correctionInput.value = "";
    showStage(typeof initialStage === "string" ? initialStage : "capture");
  }

  function showStage(name) {
    state.currentStage = name;
    const labels = {
      onboarding: "1  ONBOARDING",
      home: "2  HOME",
      capture: "3  CAMERA",
      analysis: "4  CONFIRM",
      intent: "5  HELP TYPE",
      guide: "6  GUIDANCE",
      archive: "7  SAVED GUIDES"
    };
    document.querySelector(".device-frame")?.setAttribute("data-flow-label", labels[name] || "");
    els.onboardingSection.hidden = name !== "onboarding";
    els.homeSection.hidden = name !== "home";
    els.captureSection.hidden = name !== "capture";
    els.analysisSection.hidden = name !== "analysis";
    els.intentSection.hidden = name !== "intent";
    els.guideSection.hidden = name !== "guide";
    els.archiveSection.hidden = name !== "archive";
    document.querySelector(".device-frame")?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function postJson(url, payload) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(data.message || data.error || t("apiError"));
      error.payload = data;
      throw error;
    }
    return data;
  }

  function setBusy(isBusy, message) {
    state.isBusy = isBusy;
    els.busyOverlay.hidden = !isBusy;
    els.busyText.textContent = message || "";
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.hidden = false;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => {
      els.toast.hidden = true;
    }, 3600);
  }

  function confidenceText(confidence) {
    if (confidence === "high") return t("confidenceHigh");
    if (confidence === "low") return t("confidenceLow");
    return t("confidenceMedium");
  }

  function formatError(error) {
    return `${t("apiError")}: ${error.message || error}`;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function t(key) {
    return (COPY[state.language] && COPY[state.language][key]) || COPY["zh-CN"][key] || key;
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Could not read image file."));
      reader.readAsDataURL(file);
    });
  }

  async function createArchivePhotoDataUrl(dataUrl) {
    const result = await resizeImageDataUrl(dataUrl, 900, 0.72);
    return result.dataUrl;
  }

  function resizeImageDataUrl(dataUrl, maxSide, quality = 0.84) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(resizeCanvasToDataUrl(canvas, maxSide, quality));
      };
      image.onerror = () => reject(new Error("Could not load image."));
      image.src = dataUrl;
    });
  }

  function resizeCanvasToDataUrl(sourceCanvas, maxSide, quality = 0.84) {
    const scale = Math.min(1, maxSide / Math.max(sourceCanvas.width, sourceCanvas.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(sourceCanvas.width * scale));
    canvas.height = Math.max(1, Math.round(sourceCanvas.height * scale));
    const ctx = canvas.getContext("2d");
    ctx.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);
    const brightness = estimateBrightness(ctx, canvas.width, canvas.height);
    return {
      dataUrl: canvas.toDataURL("image/jpeg", quality),
      brightness
    };
  }

  function estimateBrightness(ctx, width, height) {
    const sampleWidth = Math.max(1, Math.min(120, width));
    const sampleHeight = Math.max(1, Math.min(120, height));
    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = sampleWidth;
    sampleCanvas.height = sampleHeight;
    const sampleCtx = sampleCanvas.getContext("2d");
    sampleCtx.drawImage(ctx.canvas, 0, 0, sampleWidth, sampleHeight);
    const data = sampleCtx.getImageData(0, 0, sampleWidth, sampleHeight).data;
    let total = 0;
    for (let i = 0; i < data.length; i += 4) {
      total += (data[i] + data[i + 1] + data[i + 2]) / 3;
    }
    return total / (data.length / 4);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
})();
