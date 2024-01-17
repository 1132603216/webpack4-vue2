
// rem适配
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            docEl.style.fontSize = (clientWidth / 16) + 'px';   // 把宽度分成了16份
            // console.log(clientWidth);
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);     // 窗口大小发生变化
    doc.addEventListener('DOMContentLoaded', recalc, false);    // 文档解析完毕时
})(document, window);