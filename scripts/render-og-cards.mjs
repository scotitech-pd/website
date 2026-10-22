// Render scripts/og-cards.html into public/og/*.jpg (1200x630) with the local
// Google Chrome in headless mode, over the DevTools protocol. No downloads.
// Usage: node --experimental-websocket scripts/render-og-cards.mjs
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const template = `file://${path.join(root, "scripts", "og-cards.html")}`;
const outDir = path.join(root, "public", "og");
const cards = { home: "scotitech-home", vamiq: "vamiq", axos: "axos", claritypath: "claritypath", "private-ai": "private-ai", company: "company" };
const chromePath = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 9399;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "og-chrome-"));

fs.mkdirSync(outDir, { recursive: true });
const chrome = spawn(chromePath, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--no-first-run", "--hide-scrollbars", "--allow-file-access-from-files", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let wsUrl;
for (let i = 0; i < 50 && !wsUrl; i++) {
  try { wsUrl = (await (await fetch(`http://127.0.0.1:${port}/json/version`)).json()).webSocketDebuggerUrl; } catch { await sleep(200); }
}
const ws = new WebSocket(wsUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
const send = (method, params = {}, sessionId) => new Promise((resolve) => { const mid = ++id; pending.set(mid, resolve); ws.send(JSON.stringify({ id: mid, method, params, sessionId })); });

const { result: { targetId } } = await send("Target.createTarget", { url: "about:blank" });
const { result: { sessionId } } = await send("Target.attachToTarget", { targetId, flatten: true });
const s = (m, p) => send(m, p, sessionId);
await s("Page.enable");
await s("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });

for (const [hash, file] of Object.entries(cards)) {
  await s("Page.navigate", { url: `${template}#${hash}` });
  await sleep(1200);
  const { result } = await s("Page.captureScreenshot", { format: "jpeg", quality: 88, clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  fs.writeFileSync(path.join(outDir, `${file}.jpg`), Buffer.from(result.data, "base64"));
  console.log(`public/og/${file}.jpg`);
}
ws.close();
const exited = new Promise((r) => chrome.once("exit", r));
chrome.kill();
await exited;
try {
  fs.rmSync(profile, { recursive: true, force: true });
} catch {
  // Chrome can still be flushing its profile; the OS cleans the temp folder.
}
process.exit(0);
