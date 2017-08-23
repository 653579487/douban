(function(window, document) {
	var jsonp = function(url, data, callback) {
		var cbName = 'my_json' + Math.random().toString().replace('.', '');
		window[cbName] = callback;
		var urlstring = url.indexOf('?') == -1 ? '?' : '&';
		for (var item in data) {
			urlstring += item + '=' + data[item] + '&'
		}

		urlstring += 'callback=' + cbName;
		var scriptdom = document.createElement('script');
		scriptdom.src = url + urlstring;
		console.log( url + urlstring);
		document.body.appendChild(scriptdom);
	}
	window.$$jsonp = jsonp;
	
})(window, document)