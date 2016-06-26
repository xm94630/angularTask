/**
 * Created by Administrator on 2016/1/28.
 */
appDirectives.directive("cgSortDirective", function(modalFactory, DOMAIN) {
    return {
    	scope:{
    		cgSortValue:'='
    	},
        restrict: 'AE',
        templateUrl: DOMAIN.view+"directive/sortTable.html"+DOMAIN.version,
        replace: true,
        link: function(scope, element, attrs) {
            scope.changeIndex = function(newI, oldI) {
                if(scope.cgSortValue.list.length == 1) return;
                var _oldItem = scope.cgSortValue.list.splice(oldI, 1);
                if (newI == -1) return;
                scope.cgSortValue.list.splice(newI, 0, _oldItem[0]);
                //console.log(scope);
            };
            scope.addItem = function() {
            	if(scope.cgSortValue.list.length >= 5) {
                    //modalFactory.tips(201,'最多添加5项');
                    return;
                }
                scope.cgSortValue.list.push({
                    'title': 'url',
                    'condition': '0',
                    'content': '',
                    'criteria': '0'
                });
            }
        }
    }
});
