/**
 * Created by Administrator on 2016/2/15.
 */
appDirectives.directive('tooltipsDirective', function(DOMAIN) {
    return {
        restrict: 'AE',
        templateUrl: DOMAIN.view+"directive/tooltips.html"+DOMAIN.version,
        replace: true,
        link: function(scope, element, attrs){
            //console.log(element);
            scope.tooltips.switch = false;
            scope.tooltips.toggle = function(){
                scope.tooltips.switch = !scope.tooltips.switch;
            };
        }
    };
});