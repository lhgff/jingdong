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


function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //对象当前位置=对象当前位置+要移动的长度
        //leader = leader + step
        var leader = tag.offsetLeft;
        var step = 9;
        //对step的正负进行判断。如果leader小于target，就是正的，如果大于target，step为负值
        step = leader > target ? -step : step;
        leader = leader + step;
        //当leader和target的距离小于一步时，我们不能让他正常走，可以直接将tag的位置设置为target，然后清除定时器
        if (Math.abs(leader - target) < Math.abs(step)) {
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        } else {
            //最好最后一步
            tag.style.left = leader + "px";
        }
    }, 30);
}