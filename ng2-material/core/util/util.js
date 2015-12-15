function debounce(func, wait, scope) {
    var timer;
    return function debounced() {
        var context = scope, args = Array.prototype.slice.call(arguments);
        clearTimeout(timer);
        timer = setTimeout(function () {
            timer = undefined;
            func.apply(context, args);
        }, wait || 10);
    };
}
exports.debounce = debounce;
function throttle(func, delay, scope) {
    var recent;
    return function throttled() {
        var context = scope;
        var args = arguments;
        var now = new Date().getTime();
        if (!recent || (now - recent > delay)) {
            func.apply(context, args);
            recent = now;
        }
    };
}
exports.throttle = throttle;
function rAF(callback) {
    window.requestAnimationFrame(callback);
}
exports.rAF = rAF;
//# sourceMappingURL=util.js.map