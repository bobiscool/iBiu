const writeFile = require('./write-file');

module.exports = function (opts) {
    const title = opts.data.name || 'iBiu';

    const file = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>${title}</title>
    <meta charset="UTF-8">
</head>
<body>
    <div id="app"></div>
</body>
</html>
    `;
    writeFile({
        directory: opts.directory,
        fileName: 'index.html',
        data: file,
        codeType: 'html',
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });
};