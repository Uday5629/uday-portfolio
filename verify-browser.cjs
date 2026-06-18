const puppeteer = require("/tmp/node_modules/puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", "--use-gl=swiftshader"],
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("console", async (msg) => {
    if (msg.type() !== "error") return;
    try {
      const parts = await Promise.all(
        msg.args().map((a) => a.evaluate((o) => (o instanceof Error ? o.stack || o.message : String(o))).catch(() => "?"))
      );
      errors.push("CONSOLE: " + (parts.join(" ") || msg.text()));
    } catch {
      errors.push("CONSOLE: " + msg.text());
    }
  });
  page.on("pageerror", (err) => errors.push("PAGEERROR: " + (err.stack || err.message)));
  page.on("requestfailed", (req) => errors.push("REQFAIL: " + req.url() + " " + (req.failure() && req.failure().errorText)));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 60000 });
  // give R3F time to mount its canvas / reconciler
  await new Promise((r) => setTimeout(r, 4000));

  const hasCanvas = await page.$("canvas") !== null;

  console.log("CANVAS_PRESENT:" + hasCanvas);
  const relevant = errors.filter((e) => !e.includes("Download the React DevTools"));
  console.log("ERROR_COUNT:" + relevant.length);
  relevant.forEach((e) => console.log(e));

  await browser.close();
})().catch((e) => {
  console.log("FATAL:" + e.message);
  process.exit(1);
});
