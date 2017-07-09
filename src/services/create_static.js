/**
 * Created by mac WuYiPing on 17/7/9.
 */
const fs = require('fs');
const path = require('path');

exports.create_static= function (opts) {
    fs.mkdir(opts.directory+'/static');
    fs.mkdir(opts.directory+'/static/img');
    fs.mkdir(opts.directory+'/static/css');
    fs.mkdir(opts.directory+'/static/js');
}