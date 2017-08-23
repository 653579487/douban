
(function(angular){
	var http = angular.module('myservice',[]);
	http.service('httpService', ['$window','$document', function($window,$document){
		this.jsonp = function(url, data, callback) {
		var cbName = 'my_json' + Math.random().toString().replace('.', '');
		$window[cbName] = callback;
		var urlstring = url.indexOf('?') == -1 ? '?' : '&';
		for (var item in data) {
			urlstring += item + '=' + data[item] + '&'
		}

		urlstring += 'callback=' + cbName;
		var scriptdom = $document[0].createElement('script');
		scriptdom.src = url + urlstring;
		$document[0].body.appendChild(scriptdom);
		};
	}])
})(angular);