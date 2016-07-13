/**
 * Created by yoyo on 2016-06-01.
 */

/**
 * �õ��¼�����
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
        //������ڿ��������λ�ã�����ҳ������ľ���
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        return (e.clientX + scrollLeft);
    }
}

function getPageY(e) {
    if (e.pageY) {
        return e.pageY;
    } else {
        //������ڿ��������λ�ã�����ҳ������ľ���
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
        //����ǰλ��=����ǰλ��+Ҫ�ƶ��ĳ���
        //leader = leader + step
        var leader = tag.offsetLeft;
        var step = 9;
        //��step�����������жϡ����leaderС��target���������ģ��������target��stepΪ��ֵ
        step = leader > target ? -step : step;
        leader = leader + step;
        //��leader��target�ľ���С��һ��ʱ�����ǲ������������ߣ�����ֱ�ӽ�tag��λ������Ϊtarget��Ȼ�������ʱ��
        if (Math.abs(leader - target) < Math.abs(step)) {
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        } else {
            //������һ��
            tag.style.left = leader + "px";
        }
    }, 30);
}