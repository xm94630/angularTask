/**
 * Created by Administrator on 2016/2/18.
 */

appServices.factory('AuthService', function ($http, $location, $rootScope, Session, AUTH_EVENTS, promiseService, DOMAIN) {
    var authService = {};

    authService.login = function (credentials) {
        return promiseService.ajax('/api/v1.0/login',"POST",credentials).then(function(res){
            console.log(res);
            if(res.code == 200){
                Session.create(res.data.token, res.data.username, res.list);
            }
            return res;
        });
    };

    authService.logout = function () {
        return promiseService.ajax('/index/loginout',"GET").then(function(res){
            if(res.code == 200){
                Session.destroy();
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        });
    };
    authService.isLoginPage = function(){ //是否在登录页
        return ($location.path().indexOf("/login") !== -1)
    };
    authService.isAuthenticated = function () { //有无用户信息
        return !!window.localStorage.userCode;
    };

    authService.isAuthorized = function (page,callback) {
        if(authService.isAuthenticated()){
            if(!this.isLoginPage()){//有用户信息&&不在登录页
                var path = page.name.split(".")[0],
                    funName = path?path:"";
                if(funName == 'manage' && !window.localStorage.manageRole){
                    callback(401)
                }else{
                    callback(200)
                }
            }
        }else{
            callback(401)
        }
        // if (!angular.isArray(authorizedRoles)) {
        //     authorizedRoles = [authorizedRoles];
        // }
        // return (authService.isAuthenticated() &&
        //         (authorizedRoles.indexOf(Session.userRole) !== -1)
        // );
    };
    return authService;
});