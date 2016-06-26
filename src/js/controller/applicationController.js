/**
 * Created by Administrator on 2016/1/27.
 */
appControllers.controller("ApplicationController",function($scope, $state, $stateParams, $rootScope, $location, AUTH_EVENTS, Session, modalFactory,transformTo,transSidebarData,promiseService){

    $scope.isLogin = !!Session.userCode;
    $scope.username = Session.userName;

    var goLogin = function(){
        Session.destroy();
        $scope.isLogin = false;
        $state.go('login');
    };
    var noAuthorized = function(){
        modalFactory.tips(201,"无权限访问");
    };

    //var storage = window.localStorage;

    var loginSuccess = function(){
        $scope.setCurrentUser(); //记录用户信息
        $scope.getSidebar();
        $state.go("dashbord");
        //$location.url('/report/rweb_index/?mid='+$rootScope.mid+'&wid='+$rootScope.wid);
    };

    $scope.$on(AUTH_EVENTS.notAuthenticated, goLogin);//未登录
    $scope.$on(AUTH_EVENTS.notAuthorized, noAuthorized);//无权限
    $scope.$on(AUTH_EVENTS.sessionTimeout, goLogin);//过期
    $scope.$on(AUTH_EVENTS.loginSuccess, loginSuccess);//成功

    /**
     * 记录用户信息
     */
    $scope.setCurrentUser = function(){
        $scope.isLogin = !!Session.userCode;
        $scope.username = Session.userName;
        $scope.userrole = Session.userRole;
    };

    /**
     * 获取左导列表
     */
    $scope.getSidebar = function(){
        var storage = window.localStorage;
        promiseService.ajax('/api/v1.0/action_permission_all','get',{"token": storage.userCode||""}).then(function(res){
            console.log(res);
            if(res.status == 200){
                storage.setItem('roleList',JSON.stringify(res.data.list))
                $scope.groups = transSidebarData.trans(res.data.list)
            }else{
                storage.setItem('roleList','[]')
                $scope.groups = []
            }
        })
    }

    /**
     * 刷新后，获取左导列表
     */
    if(!!Session.userCode){//&& $location.path().indexOf("login") == -1
        $scope.getSidebar();
    }

});