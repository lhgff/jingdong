/**
 * Created by jiaoshou on 2016/3/20.
 */
//获取innerText
/**
 *
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    //能力检测
    return element.textContent ? element.textContent: element.innerText;
}
//设置innerText
/**
 *
 * @param element
 * @param content
 */
function setInnerText(element,content) {
    if (element.textContent) {
        element.textContent = content;
    }else{
        element.innerText = content;
    }
}

//兼容浏览器
//获取下一个紧邻的兄弟元素
function getNextElement(element) {
    //能力检测
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    }else{
        var node = element.nextSibling;
        while(node && node.nodeType !== 1) {
            node = node.nextSibling;
            break;
        }
        return node;
    }
}

/**
 * 返回上一个元素
 * @param element
 * @returns {*}
 */
function  getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    }else{
        var el = element.previousSibling;
        while (el && el.nodeType !== 1) {
            el = el.previousSibling;
        }
        return el;
    }
}

/**
 * 返回第一个元素 firstElementChild的浏览器兼容
 * @param parent
 * @returns {*}
 */
function  getFirstElement(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild;
    }else{
        var el = parent.firstChild;
        while (el && el.nodeType !== 1) {
            el = el.nextSibling;
        }
        return el;
    }
}

/**
 * 返回最后一个元素
 * @param parent
 * @returns {*}
 */
function getLastElement(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    }else{
        var el = parent.lastChild;
        while (el && el.nodeType !== 1) {
            el = el.previousSibling;
        }
        return el;
    }
}


/**
 * 获取当前元素的所有兄弟元素
 * @param element
 * @returns {Array}
 */
function siblings(element){
    if (!element) return;

    var elements = [];
    //前面的兄弟节点
    var el = element.previousSibling;
    while (el) {
        if (el.nodeType === 1) {
            elements.push(el);
        }
        el = el.previousSibling;
    }

    //后面的兄弟节点
    el = element.nextSibling;
    while (el) {
        if(el.nodeType === 1) {
            elements.push(el);
        }
        el = el.nextSibling;
    }
    return elements;
}

function myId(id) {
    return document.getElementById(id);
}