import { spawn } from "child_process";
import puppeteer from "puppeteer";
import http from "http";
import waitOn from "wait-on";

const PORT = 4321;
const URL = `http://localhost:${PORT}/resume`;

function checkServerRunning() {
  return new Promise((resolve) => {
    const req = http.get(URL, (res) => {
      resolve(true);
      res.resume();
    });
    req.on("error", () => {
      resolve(false);
    });
    req.end();
  });
}

(async () => {
  let devServerProcess = null;
  const isRunning = await checkServerRunning();

  if (!isRunning) {
    console.log(
      '🚀 Local dev server not detected. Starting "npm run dev" automatically...',
    );
    devServerProcess = spawn("npm", ["run", "dev"], {
      shell: true,
      stdio: "ignore",
    });

    console.log("⏳ Waiting for server to spin up...");
    try {
      await waitOn({ resources: [URL], timeout: 15000 });
    } catch (err) {
      console.error("❌ Error: Could not connect to the local dev server.");
      if (devServerProcess) devServerProcess.kill("SIGTERM");
      process.exit(1);
    }
  } else {
    console.log("⚡ Using existing running dev server.");
  }

  console.log("📄 Generating PDF...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: "networkidle0" });

  await page.pdf({
    path: "public/Bryan_Schauer_Resume.pdf",
    format: "Letter",
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: "0.4in", right: "0.4in", bottom: "0.4in", left: "0.4in" },
  });

  await browser.close();
  console.log(
    "✅ PDF successfully generated at public/Bryan_Schauer_Resume.pdf",
  );

  if (devServerProcess) {
    console.log("🧹 Shutting down temporary dev server...");
    devServerProcess.kill("SIGTERM");
  }

  process.exit(0);
})();
