/**
 * Created by zhangchuanliang on 2016/6/20.
 */
appDirectives.directive("sidebarNav",function(DOMAIN){
    return {
        restrict: 'AE',
        templateUrl: DOMAIN.view+"directive/sidebar.html"+DOMAIN.version,
        replace: true,
        link: function (scope, element, attr) {
            //console.log(scope);
        }
    }
});