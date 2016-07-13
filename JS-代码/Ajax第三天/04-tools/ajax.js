/**
 * 简易Ajax封装
 * 2015-12-28
 * By Botue
 */
// 封装自已的Ajax库

// 定义一个命名空间
var $ = {
	params: function (args) { // 专门处理我们的数据
		var o = '';
		for(var k in args) {
			o += k + '=' + args[k] + '&';
		}
		o = o.slice(0, -1);
		return o;
		// console.log(o);
	},
	ajax: function (options) {
		// 初始化参数
		var type = options.type || 'get';
		var url = options.url || location.pathname;
		// get 方式 url?key=val&key1=val1
		// post 方式 xhr.send(key=val&key1=val1)
		var data = this.params(options.data || {});
		// var success = options.success || function () {console.log('回调函数不能为空')}
		var success = options.success;
		var xhr = new XMLHttpRequest;
		if(type == 'get') { // 当请求方式为get，参数放到url上
			url = url + '?' + data;
			data = null;
		}
		// 设置请求方式
		xhr.open(type, url);
		if(type == 'post') { // 当请求方式为post，需要设置Content-Type
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
		// 发送请求主体
		xhr.send(data);
		xhr.onreadystatechange = function () {
			if(xhr.readyState == 4 && xhr.status == 200) {
				// 调用回调函数并传参
				var result = JSON.parse(xhr.responseText);
				success(result);
			}
		}
	}
}