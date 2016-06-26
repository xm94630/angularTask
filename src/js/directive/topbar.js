/**
 * Created by Administrator on 2016/1/28.
 */
appDirectives.directive("topBar",function($rootScope, $location, $state, $stateParams, AuthService, Session, DOMAIN){
    return {
        restrict: 'AE',
        templateUrl: DOMAIN.view+"directive/topbar.html"+DOMAIN.version,
        replace: true,
        link: function(scope, element, attrs){
            /**
             * 登录后，Session会被赋值用户信息，并写入localStorage
             * 但是，用户没有关闭浏览器标签，并刷新页面后，Session的数据会消失
             * 此时，需要从Storage里去取用户信息，来进行身份验证
             * topbar和applicationController为同一作用域
             */
            var storage = window.localStorage;

            scope.logout = function(){
                AuthService.logout()
            };

        }//link end
    }
});