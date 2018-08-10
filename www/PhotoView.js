
var exec = require('cordova/exec');
exports.pushUrl = function (arg0, success, error) {
    exec(success, error, 'PhotoView', 'getUrl', [arg0]);
};

