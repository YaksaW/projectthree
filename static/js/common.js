// 1rem -- 16px 

// 监听浏览器,针对不同分辨率计算font-size
// 然后根据设计稿比如尺寸是640尺寸 rem = 设计稿的字体大小 / 100 ; 16px —> 0.16rem
// dpi 设备像素比

//自执行函数--> 闭包
// 闭包 将局部变量限定在一定区域内
(function (doc, win) {
    var docEl = doc.documentElement;  //  html DOM
    // 不同浏览器的适配 ==》 获取当前屏幕变换时的 事件对象
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    // 定义了一个函数
    var recalc = function () {
            var clientWidth = docEl.clientWidth;  // 获取当前屏幕 尺寸
            if (!clientWidth){
                return;
            } 
            // clientWidth 指的是当前屏幕宽度
            if (clientWidth<=320){
                docEl.style.fontSize = '50px';  //  1px = 0.5rem
            }
            else if(clientWidth>=640){
                docEl.style.fontSize = '100px';  // 1px = 1rem
            }
            else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener){
        return;
    } 

    // 当前屏幕大小发生变化时  调整  font-size 默认值
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


