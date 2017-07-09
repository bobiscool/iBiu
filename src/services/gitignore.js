const writeFile = require('./write-file');

module.exports = function (opts) {
    const file =
`.DS_Store
node_modules/
dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.idea/workspace.xml
`;
    writeFile({
        directory: opts.directory,
        fileName: '.gitignore',
        data: file,
        codeType: 'none',
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });
};