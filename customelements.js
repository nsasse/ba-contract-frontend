const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/ba-contract/runtime-es5.js',
    './dist/ba-contract/polyfills-es5.js',
    './dist/ba-contract/main-es5.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/user-data.js');
  await fs.copyFile('./dist/ba-contract/styles.css', 'elements/styles.css')
  await fs.copy('./src/assets/', 'elements/assets/')
})()
