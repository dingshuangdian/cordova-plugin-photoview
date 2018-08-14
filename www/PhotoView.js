
var exec = require('cordova/exec');
exports.show = function (arg0, success, error) {
    exec(success, error, 'PhotoView', 'show', [arg0]);
};