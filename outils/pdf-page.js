// Imprime une page HTML locale en PDF A4. Usage : node outils/pdf-page.js crpe/page.html crpe/page.pdf
const path = require("path");
const fs = require("fs");
function loadPlaywright() {
  for (const p of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try {
      return require(p);
    } catch {}
  }
  throw new Error("Playwright introuvable");
}
(async () => {
  const [src, dest] = process.argv.slice(2);
  const { chromium } = loadPlaywright();
  const exe = fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  const p = await browser.newPage({ colorScheme: "light" });
  await p.goto("file://" + path.resolve(src));
  await p.pdf({ path: dest, format: "A4", margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" }, printBackground: true });
  await browser.close();
  console.log(dest);
})();
