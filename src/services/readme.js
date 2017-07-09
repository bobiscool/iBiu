/**
 * Created by mac WuYiPing on 17/7/9.
 */
const writeFile = require('./write-file');


exports.readme = function (opts) {

    const file = `
### Thanks for using iBiu!

first you need:
> npm install

run demo:
 > npm run dev

build:
> npm run build

    `;
    writeFile({
        directory: opts.directory,
        fileName: 'README.MD',
        data: file,
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });
}