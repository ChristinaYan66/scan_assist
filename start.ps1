$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

$systemNode = Get-Command node -ErrorAction SilentlyContinue
$bundledNode = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if ($systemNode) {
  & $systemNode.Source server.js
} elseif (Test-Path $bundledNode) {
  & $bundledNode server.js
} else {
  Write-Host "Node.js was not found. Install Node.js 18+ or run inside Codex with the bundled runtime."
  exit 1
}
