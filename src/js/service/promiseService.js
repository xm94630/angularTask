/**
 * Created by zhangchuanliang on 2016/6/17.
 */

appServices.factory('promiseService', function ($rootScope,$http, $q, $timeout, AUTH_EVENTS, DOMAIN) {
    var suggestion = new Object();
    suggestion.ajax = function(url,_method,_data, config) {
        
        //$http.defaults.headers.common['token'] = window.localStorage.userCode || "";
        $http.defaults.headers.common['token'] = "eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ2NjgwMzgxMywiaWF0IjoxNDY2NzY3ODEzfQ.eyJpZCI6MjZ9.bgtdqz5DMIuCdYww8oSROOu97Hu_zU90mIZTQxjI1ng";
        console.log('==>')
        console.log($http.defaults.headers.common['token'])

        var deferred = $q.defer();
        var opt = angular.extend({},{
            url: url,
            method: _method
        },!!config?config:{});
        if(_method.toLowerCase() == 'post'){
            opt["data"] = _data;
        }else{
            opt["params"] = _data;
        }
        $http(opt).then(function(res){
            var _res = res;
            if(_res.code == 401){
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                return $q.reject(_res);
            }else {
                deferred.resolve(_res);
            }
        },function (error) {
            return $q.reject(error);
        });
        return deferred.promise;
    };
    return suggestion;
});