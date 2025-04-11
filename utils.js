const fs = require('fs');
const path = require('path');

function saveScreenshot(driver, filename) {
  const dir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  return driver.takeScreenshot().then(image => {
    fs.writeFileSync(path.join(dir, filename), image, 'base64');
  });
}

module.exports = { saveScreenshot };
