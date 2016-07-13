/**
 * Created by yoyo on 2016-06-01.
 */

/**
 * 得到事件对象
 * @param e
 * @returns {*|Event}
 */
function getEvent(e) {
    var e = e || window.event;
    return e;
}

function getPageX(e) {
    if (e.pageX) {
        return e.pageX;
    } else {
        //用鼠标在可视区域的位置，加上页面卷曲的距离
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        return (e.clientX + scrollLeft);
    }
}

function getPageY(e) {
    if (e.pageY) {
        return e.pageY;
    } else {
        //用鼠标在可视区域的位置，加上页面卷曲的距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        return (e.clientY + scrollTop);
    }
}

function myId(id){
    return document.getElementById(id);
}