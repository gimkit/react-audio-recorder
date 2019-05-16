var getUserMedia;
if (navigator.mediaDevices) {
    getUserMedia = function (arg, successCallback, errorCallback) {
        navigator.mediaDevices.getUserMedia(arg).then(successCallback).catch(errorCallback);
    };
}
else {
    getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia);
}
export default getUserMedia;
