/**
 * Created by Administrator on 2016/1/28.
 */
appDirectives.directive("cgSortItemDirective", function(DOMAIN) {
    return {
        scope: {
            'itemData': '=',
            'itemIndex': '=',
            'itemLast': '=',
            'changeIndex': '=',
            'itemInit':'='
        },
        restrict: 'AE',
        templateUrl: DOMAIN.web + "/modules/tpl/sortTableItem.html",
        replace: true,
        link: function(scope, element, attrs) {
            // scope.title = scope.itemInit.title;
            // scope.condition = scope.itemInit.condition;
            scope.up = function() {
                var _index = Number(scope.itemIndex) - 1;
                if (_index < 0) return;
                scope.changeIndex(_index, Number(scope.itemIndex));
            };
            scope.down = function() {
                var _index = Number(scope.itemIndex) + 1;
                scope.changeIndex(_index, Number(scope.itemIndex));
            };
            scope.del = function() {
                scope.changeIndex(-1, Number(scope.itemIndex));
            };
            scope.radio = {
                value: 0
            };

            scope.$watch('itemIndex', function() {
                scope.index = Number(scope.itemIndex) + 1;
            });

            scope.$watch('radio', function() {
                scope.itemData.criteria = scope.radio.value;
            }, true);

            scope.$watch('content', function() {
                scope.itemData.content = scope.content;
            });

            //编缉回填数据
            function init(){
            	scope.conditionSelect = [scope.itemData.condition];
            	scope.titleSelect = [scope.itemData.title];
            	scope.content = scope.itemData.content;
            	scope.radio.value = scope.itemData.criteria || 0;
            }
            init();

            scope.titleChange = function(label, value) {
                scope.itemData.title = value[0];
            };
            scope.conditionChange = function(label, value) {
                scope.itemData.condition = value[0];
            }
        }
    }
});
