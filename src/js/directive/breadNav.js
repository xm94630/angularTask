/**
 * Created by Administrator on 2016/1/28.
 */
appDirectives.directive("breadNav",function(){
    return {
        restrict: 'AE',
        template: '<div class="AT_title">'+
                        '<span ng-repeat="item in breadList">'+
                            '<a ng-if="sref" ui-sref="{{item.state}}">{{item.name}}</a> '+
                            '<span ng-if="!sref">{{item.name}}</span> '+
                        '</span>'+
                        '<span ng-if="breadList.length > 0" class="iconRight">&gt; </span>'+
                        '<span>{{title}}</span>'+
                    '</div>',
        replace: true,
        link: function (scope, element, attr) {
            //console.log(scope);
            // scope.sref 在各自模块父级view的controller里设置（reportCtrl、manageCtrl）
        }
    }
});