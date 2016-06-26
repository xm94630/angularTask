/**
 * Created by Administrator on 2016/2/15.
 */
appDirectives.directive('tableDirective', function(DOMAIN) {
    return {
        scope: {
            table: "=tableData",
            tableFn: "=tableFunction",
            class: '@class'
        },
        restrict: 'AE',
        templateUrl: DOMAIN.view+"directive/table.html"+DOMAIN.version,
        replace: true,
        link: function(scope,element,attr){
            //console.log(scope)
            if (angular.isArray(scope.table.tdData)) {
                scope.table.array = true;
            }
            var ths = scope.table.thData[0];
            //查找已有的筛选项（lastIndex）
            for(var i=0;i<ths.length;i++){
                if(ths[i].class && ths[i].class.indexOf("sorting_")>=0){
                    scope.tableFn.lastIndex = i;
                    break;
                }
            }
            scope.tableFn.sort = function(index){
                var item = ths[index];
                var className = item.class,
                    sortName = item.sortname;
                if(!sortName)return;
                if(typeof scope.tableFn.lastIndex != 'undefined'){
                    ths[scope.tableFn.lastIndex].class = 'sorting';
                }
                if(className == 'sorting_desc'){//当前倒序，请求正序接口
                    item.class = 'sorting_asc';
                }else{//当前正序，请求倒序接口
                    item.class = 'sorting_desc';
                }
                scope.$parent.tableParams.sort_order = item.class.split("_")[1];
                scope.$parent.tableParams.sort_name = sortName;
                scope.tableFn.lastIndex = index;
                scope.tableFn.sortChange(index);
            };

            var tdLens = scope.table.thData[0].length;
            scope.tableFn.tableadd = function(index,id,event){
                var element = angular.element(event.target);
                if(element.hasClass("icon-add")){
                    element.removeClass("icon-add");
                    element.addClass("icon-delete2");
                    scope.table.tdData.splice(index+1,0,[{"colspan":tdLens,"class":"table table-bordered","children":[[{value:"数据加载中","colspan":tdLens,"class": "text-center"}]]}]);
                    scope.tableFn.showDetail(index,id)
                }else{
                    element.addClass("icon-add");
                    element.removeClass("icon-delete2");
                    scope.table.tdData.splice(index+1,1)
                }
            }
        }
    };
});