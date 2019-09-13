const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

async function getScreenshot(url, type) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  })

  const page = await browser.newPage()
  await page.goto(url)
  const file = await page.screenshot({ type })
  await browser.close()
  return file
}

const { type = 'png' } = query; // png or jpeg
    let url = pathname.slice(1);
    if (!url.startsWith('http')) {
        url = 'https://' + url; // add protocol if missing
    }
    const file = await getScreenshot(url, type);
    res.statusCode = 200;
    res.setHeader('Content-Type', \`image/\${type}\`);
    res.end(file);
};
