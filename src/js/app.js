//自定义函数
function l(){
    console.log.apply(console,arguments)
}
l('angularJS Task');

var myApp = angular.module("DSC",['ui.router','ui.bootstrap',"myApp.directives","myApp.services","myApp.filters","myApp.controllers","compileExample",'ngMessages']),
    appDirectives = angular.module("myApp.directives",[]),
    appServices = angular.module("myApp.services",[]),
    appFilters = angular.module("myApp.filters",[]),
    appControllers = angular.module("myApp.controllers",[]);

myApp

    .config(function($httpProvider){
        $httpProvider.interceptors.push([
            '$injector',
            function ($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.post['Content-Type'] = ''
            + 'application/x-www-form-urlencoded; charset=UTF-8';

        $httpProvider.defaults.transformRequest = function(obj){
            var str = [];
            for(var p in obj) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        };

    })

    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',//认证
        notAuthorized: 'auth-not-authorized'//合法
    })

    .constant('USER_ROLES', {
        admin: '1',
        common: '0'
    })

    .constant("DOMAIN",{
        "view": "/static/view/",
        "version": '?v=20160616'
    })//网站接口前缀变量

    .run(function ($rootScope, $http, $state, $stateParams, $location, AUTH_EVENTS, AuthService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeStart', function (event, next, cur) {
            
        });
    });