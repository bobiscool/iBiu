const writeFile = require('./write-file');

module.exports = function (opts) {
    const file =`
    {
  "presets": [
    ["env", { "modules": false }],
    "stage-2",
  ],
  "plugins": ["transform-runtime"],
  "comments": false,
  "env": {
    "test": {
      "presets": ["env", "stage-2"],
      "plugins": [ "istanbul" ]
    }
  }
}
  `
    writeFile({
        directory: opts.directory,
        fileName: '.babelrc',
        data: file,
        codeFormat: {
            indent_size: 2
        },
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });
};