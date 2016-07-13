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