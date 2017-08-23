(function(angular) {
    'use strict';
    var module = angular.module('douban.movie', [
        'myservice'
        ]);
    //配置路由
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:cat/:page', {
            templateUrl: 'movie/view.html',
            controller: 'i/movieController'
        })
    }]);
    /*写控制器*/
    module.controller('i/movieController', [
        '$scope',
        '$route',
        '$routeParams',
         'httpService',
         function($scope,$route,$routeParams, httpService) {
              var count = 10;
             var page = parseInt($routeParams.page);
             var start = (page-1)*count;
        

        $scope.error = '';
        $scope.data = [ ];

        $scope.ac = $routeParams.cat

       

        $scope.zongyeshu = 0;
        $scope.page = 0;
        /*跨域请求数据*/
        httpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.cat, {
            start : start,
          count:count
        }, function(data) {
              $scope.data = data;
                 $scope.zongyeshu = Math.ceil(data.total / 10);
          $scope.page = page;
             $scope.$apply();
        })
       /*暴露行为gopage*/
       $scope.goPage =function(page){
         if(page>=1&&page<=$scope.zongyeshu){
            $route.updateParams({page:page})
             }       
       }
    }])

})(angular);

/* $http.get('in_theaters/in_theaters.json').then(function(data){
            console.log(data);
            if(data.status == 200){
                $scope.data = data.data;
            }else{
                $scope.error = '数据请求失败!!!'+data.statusText;
            }
        },function(err){
            $scope.error = '数据请求失败!!!'+err.statusText;
        })*/