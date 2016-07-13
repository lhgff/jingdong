/**
 * Created by yoyo on 2016-06-01.
 */
/**
 * ��������������Ǹ��ݴ����clsNameȥ��ȡҳ��Ԫ��
 * @param clsName ����Ҫ�ҵ����� �ַ���
 * @returns {*} ����
 */
function getClass(clsName) {
    //��ȥ�жϵ�ǰ������Ƿ�֧��document.getElementsByClassName
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(clsName);
    } else {
        var resultArr = [];
        //��ȡ���б�ǩ
        var tags = document.getElementsByTagName("*");
        for (var i = 0; i < tags.length; i++) {
            //�ж�tags����û��һ����ǩ��className���Ժ�clsName��ͬ
            if (tags[i].className != "") {
                //�Ƚ���ǰ��ǩ���������б���
                var currentTagCls = tags[i].className;
                //�п���һ���������ж������  ��box nav��
                var temp = currentTagCls.split(" ");
                for (var j = 0; j < temp.length; j++) {
                    if(temp[j] == clsName){
                        //�����������ŵ����������
                        resultArr.push(tags[i]);
                    }
                }
            }
        }
        return resultArr;
    }

}

/**
 * ����id����ȡҳ��Ԫ��
 * @param id id��  �ַ�����ʽ
 * @returns {Element} ���ػ�ȡ��ı�ǩ
 */
function myId(id){
    return document.getElementById(id);
}

//------------------ ��ȡ�������ı�����ʽ -----------------------
/**
 * ��ȡ��ǩ���ı�
 * @param tag Ҫ��Ϊ��ȡ��ı�ǩ
 * @returns {*} �����ı� �ַ�����ʽ
 */
function getInnerText(tag){
    //if(tag.innerText){
    //    return tag.innerText;
    //}else{
    //    return tag.textContent;
    //}
    return tag.innerText?tag.innerText:tag.textContent;
}

/**
 * �����ı�
 * @param tag  ��ȡ��ı�ǩ
 * @param text Ҫ���õ��ı� �ַ�����ʽ
 */
function setInnerText(tag,text){
    if(tag.innerText){
        tag.innerText = text;
    }else{
        tag.textContent = text;
    }
}

/**
 * ��ȡtag��ĳ����ʽ
 * @param tag  ҳ��Ԫ�� һ���ǻ�ȡ�õ�Ԫ��
 * @param attr ĳ��������  �ַ���
 * @returns {*} ����һ����ȡ�����ʽֵ
 */
function getStyle(tag, attr) {
//        if (tag.currentStyle) {
//            return tag.currentStyle[attr];
//        } else {
//            return getComputedStyle(tag, null)[attr];
//        }
    return tag.currentStyle?tag.currentStyle[attr]:getComputedStyle(tag,null)[attr];
}


//------------------------ �ڵ�������� ----------------------------

/**
 * ���ڻ�ȡ��һ��Ԫ���ֵܽڵ�
 * @param node
 * @returns {*}
 */
function getNextElementSibling(node) {
    if (node.nextElementSibling) {
        return node.nextElementSibling;
    } else {
        //nextSibling֧��
        //�Ȼ�ȡnode����һ���ֵܣ��������ֵ���Ԫ�ؽڵ㣬���أ�������ǣ��ڴ�����ֵ�������
        var sibling = node.nextSibling;
        //��һ���ǲ���
        while (sibling.nodeType != 1) {
            //�ҵ���ǰ����ֵܵ���һ���ֵܽڵ�
            sibling = sibling.nextSibling;
        }
        return sibling;
    }
}

function previousElementSibling(node){
    if (node.previousElementSibling) {
        return node.previousElementSibling;
    } else {
        //nextSibling֧��
        //�Ȼ�ȡnode����һ���ֵܣ��������ֵ���Ԫ�ؽڵ㣬���أ�������ǣ��ڴ�����ֵ�������
        var sibling = node.previousSibling;
        //��һ���ǲ���
        while (sibling.nodeType != 1) {
            //�ҵ���ǰ����ֵܵ���һ���ֵܽڵ�
            sibling = sibling.previousSibling;
        }
        return sibling;
    }
}
/**
 * ���ڻ�ȡ����������������ֵ�
 * @param node  ��һ����ȡ���Ԫ�ؽڵ�
 * @returns {Array}  ���ص��������ֵ�  ����
 */
function getSibling(node) {
    //var li = document.getElementById("li");
    //��Ҫ��ȡ�����ֵܣ�������
    //1���ҵ����������ڵ�����
    //���ҵ���Ԫ�أ����ҵ���Ԫ�ص�����Ԫ���ӽڵ�
    var parent = node.parentNode;
    var suoyouren = parent.children;
    //2�ٰ��Լ�ȥ��
    var resultArr = [];
    for (var i = 0; i < suoyouren.length; i++) {
        //����Ҫ���ǳ����Լ������
        if (suoyouren[i] != node) {
            resultArr.push(suoyouren[i]);
        }
    }
    return resultArr;
}





//----------------------------����¼����ݲ���----------------------------

/**
 * ���Զ�ε��ã�����ÿ�ε��õĴ��붼��window.onload�Ļ�����ִ��
 * @param fn
 */
function addLoad(fn) {
    //1.���һ�£���ǰ��û��window.onload
    var oldLoad = window.onload;
    //2 ������oldLoad�б�����ǲ��Ǻ���
    if (typeof oldLoad == "function") {
        //�þɵ�onload���ݺ��µ�fn��window.onload��һ��ִ��
        window.onload= function () {
            oldLoad();
            fn();
        };
    }else{
        window.onload=fn;
        //window.onload= function () {
        //    fn();
        //}
    }
}

/**
 * ����¼��ļ��ݺ���
 * @param tag ��ȡ��ı�ǩ
 * @param eventName �¼��� �ַ�����ʽ ����on
 * @param fn �¼�����ʱҪ��ʲô  ������ʽ
 */
function addEvent(tag, eventName, fn) {
    if (tag.addEventListener) {
        tag.addEventListener(eventName, fn, false);
    } else if (tag.attachEvent) {
        tag.attachEvent("on" + eventName, fn);
    } else {
        //Ϊ�������Ǽǵã�����¼��ķ�ʽ�֣�����һ����
        tag["on" + eventName] = fn;
    }
}

//---------------------- �¼���������Լ��ݲ��� -------------------------
/**
 * �õ��¼�����
 * @param e  �����¼�����
 * @returns {*|Event} ���ؼ��ݺ���¼�����e
 */
function getEvent(e) {
    var e = e || window.event;
    return e;
}

/**
 * ��ȡpageX��ֵ
 * @param e �����¼����� Ҫ��Ϊ���ݺ��e
 * @returns {*} ����pageX��ֵ Ϊ��ֵ��
 */
function getPageX(e) {
    if (e.pageX) {
        return e.pageX;
    } else {
        //������ڿ��������λ�ã�����ҳ������ľ���
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        return (e.clientX + scrollLeft);
    }
}

/**
 * ��ȡpageY��ֵ
 * @param e �����¼����� Ҫ��Ϊ���ݺ��e
 * @returns {*} ����pageY��ֵ Ϊ��ֵ��
 */
function getPageY(e) {
    if (e.pageY) {
        return e.pageY;
    } else {
        //������ڿ��������λ�ã�����ҳ������ľ���
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        return (e.clientY + scrollTop);
    }
}
