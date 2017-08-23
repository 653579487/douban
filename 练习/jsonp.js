(function  (window,document) {
	var jsonp = function  (url,data,callback) {
		var cbName = 'my_json'+Math.random().toString().replace('.','');
		window[cbName] = callback;
		/*1、URL*/
		var urlstring =url.indexOf('?') == -1 ? '?':'&';
		/*2、data   {ID：10，name：yy}*/
		for(var key in data){
			urlstring+=key+'='+data[key]+'&';
		}
		/*3、callback    callback=xxxxxxxx*/
		urlstring+='callback='+cbName;
		/*4、创建script 放到页面*/
		var scriptdom = document.createElement('script');
		scriptdom.src = url+urlstring;
		document.body.appendChild(scriptdom)
	}
		window.$jsonp = jsonp;

})(window,document)