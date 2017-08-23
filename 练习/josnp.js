/**
 * 手写josnp
 */
'use strict';
(function(window, document) {
	var jsonp = function(url, data, callback) {
		var cbName = 'my_josn' + Math.random().toString().replace('.', '');
		window[cbName] = callback;
		/*1、处理URL*/
		var urlstring = url.indexOf('?') == '-1' ? '?' : '&';
		/*2、处理data {ID：10，name: yy}*/
		for (var key in data) {
			urlstring += key + '=' + data[key] + '&'
		}
		/*http:baidu?id=10&name=yy*/
		/*3、处理callbackstring*/
		urlstring += 'callback=' + cbName;
		/*http:baidu?id=10&name=yy&callback = my_josn03023053231*/
		/*4、创建script标签 且 放到页面*/
		var scriptElement = document.createElement('script');
		scriptElement.src = url + urlstring;
		document.body.appendChild(scriptElement);
	}
	window.jsonp = jsonp;
})(window, document);