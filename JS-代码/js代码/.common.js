/**
 * Created by yoyo on 2016-06-01.
 */
/**
 * 这个函数的作用是根据传入的clsName去获取页面元素
 * @param clsName 是想要找的类名 字符串
 * @returns {*} 数组
 */
function getClass(clsName) {
    //先去判断当前浏览器是否支持document.getElementsByClassName
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(clsName);
    } else {
        var resultArr = [];
        //获取所有标签
        var tags = document.getElementsByTagName("*");
        for (var i = 0; i < tags.length; i++) {
            //判断tags中有没有一个标签的className属性和clsName相同
            if (tags[i].className != "") {
                //先将当前标签的类名进行保存
                var currentTagCls = tags[i].className;
                //有可能一个类名中有多个类名  “box nav”
                var temp = currentTagCls.split(" ");
                for (var j = 0; j < temp.length; j++) {
                    if(temp[j] == clsName){
                        //满足条件，放到结果数组中
                        resultArr.push(tags[i]);
                    }
                }
            }
        }
        return resultArr;
    }

}

/**
 * 根据id名获取页面元素
 * @param id id名  字符串格式
 * @returns {Element} 返回获取后的标签
 */
function myId(id){
    return document.getElementById(id);
}

//------------------ 获取和设置文本和样式 -----------------------
/**
 * 获取标签的文本
 * @param tag 要求为获取后的标签
 * @returns {*} 返回文本 字符串格式
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
 * 设置文本
 * @param tag  获取后的标签
 * @param text 要设置的文本 字符串格式
 */
function setInnerText(tag,text){
    if(tag.innerText){
        tag.innerText = text;
    }else{
        tag.textContent = text;
    }
}

/**
 * 获取tag的某个样式
 * @param tag  页面元素 一定是获取好的元素
 * @param attr 某个属性名  字符串
 * @returns {*} 返回一个获取后的样式值
 */
function getStyle(tag, attr) {
//        if (tag.currentStyle) {
//            return tag.currentStyle[attr];
//        } else {
//            return getComputedStyle(tag, null)[attr];
//        }
    return tag.currentStyle?tag.currentStyle[attr]:getComputedStyle(tag,null)[attr];
}


//------------------------ 节点操作部分 ----------------------------

/**
 * 用于获取下一个元素兄弟节点
 * @param node
 * @returns {*}
 */
function getNextElementSibling(node) {
    if (node.nextElementSibling) {
        return node.nextElementSibling;
    } else {
        //nextSibling支持
        //先获取node的下一个兄弟，如果这个兄弟是元素节点，返回，如果不是，在从这个兄弟往后找
        var sibling = node.nextSibling;
        //看一看是不是
        while (sibling.nodeType != 1) {
            //找到当前这个兄弟的下一个兄弟节点
            sibling = sibling.nextSibling;
        }
        return sibling;
    }
}

function previousElementSibling(node){
    if (node.previousElementSibling) {
        return node.previousElementSibling;
    } else {
        //nextSibling支持
        //先获取node的下一个兄弟，如果这个兄弟是元素节点，返回，如果不是，在从这个兄弟往后找
        var sibling = node.previousSibling;
        //看一看是不是
        while (sibling.nodeType != 1) {
            //找到当前这个兄弟的下一个兄弟节点
            sibling = sibling.previousSibling;
        }
        return sibling;
    }
}
/**
 * 用于获取除了我以外的所有兄弟
 * @param node  是一个获取后的元素节点
 * @returns {Array}  返回的是所有兄弟  数组
 */
function getSibling(node) {
    //var li = document.getElementById("li");
    //想要获取所有兄弟，分两步
    //1先找到包括我在内的所有
    //先找到父元素，再找到父元素的所有元素子节点
    var parent = node.parentNode;
    var suoyouren = parent.children;
    //2再把自己去掉
    var resultArr = [];
    for (var i = 0; i < suoyouren.length; i++) {
        //我们要的是除了自己以外的
        if (suoyouren[i] != node) {
            resultArr.push(suoyouren[i]);
        }
    }
    return resultArr;
}





//----------------------------添加事件兼容部分----------------------------

/**
 * 可以多次调用，并且每次调用的代码都在window.onload的环境下执行
 * @param fn
 */
function addLoad(fn) {
    //1.检测一下，以前有没有window.onload
    var oldLoad = window.onload;
    //2 检测这个oldLoad中保存的是不是函数
    if (typeof oldLoad == "function") {
        //让旧的onload内容和新的fn在window.onload中一起执行
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
 * 添加事件的兼容函数
 * @param tag 获取后的标签
 * @param eventName 事件名 字符串格式 不加on
 * @param fn 事件触发时要做什么  函数格式
 */
function addEvent(tag, eventName, fn) {
    if (tag.addEventListener) {
        tag.addEventListener(eventName, fn, false);
    } else if (tag.attachEvent) {
        tag.attachEvent("on" + eventName, fn);
    } else {
        //为了让你们记得，添加事件的方式种，还有一个我
        tag["on" + eventName] = fn;
    }
}

//---------------------- 事件对象的属性兼容部分 -------------------------
/**
 * 得到事件对象
 * @param e  传入事件对象
 * @returns {*|Event} 返回兼容后的事件对象e
 */
function getEvent(e) {
    var e = e || window.event;
    return e;
}

/**
 * 获取pageX的值
 * @param e 传入事件对象 要求为兼容后的e
 * @returns {*} 返回pageX的值 为数值型
 */
function getPageX(e) {
    if (e.pageX) {
        return e.pageX;
    } else {
        //用鼠标在可视区域的位置，加上页面卷曲的距离
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        return (e.clientX + scrollLeft);
    }
}

/**
 * 获取pageY的值
 * @param e 传入事件对象 要求为兼容后的e
 * @returns {*} 返回pageY的值 为数值型
 */
function getPageY(e) {
    if (e.pageY) {
        return e.pageY;
    } else {
        //用鼠标在可视区域的位置，加上页面卷曲的距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        return (e.clientY + scrollTop);
    }
}
