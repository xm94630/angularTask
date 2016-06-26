/**
 * Created by Administrator on 2016/1/28.
 */
appDirectives.directive("dimensChange", function(DOMAIN) {
    return {
        restrict: 'AE',
        templateUrl: DOMAIN.web + "/modules/tpl/dimensChange.html",
        replace: true,
        link: function(scope, element, attrs) {
            scope.singleCont = false;
            //自定义维度
            scope.showDimens = false;
            scope.dimensFun = {
                toggle: function(){
                    scope.showDimens = !scope.showDimens
                },
                clean: function(){
                    scope.dimens.selected = [];
                    for(var i=0;i<scope.dimens.items.length;i++){
                        scope.dimens.items[i].checked = false;
                    }
                    this.toggle()
                },
                submit: function(){
                    scope.search();
                    this.toggle()
                }
            };
            //维度选择
            scope.dimens.change = function (index, key) {
                if(scope.dimens.items[index].checked){
                    scope.dimens.selected.push(key);
                    if(scope.dimens.selected.length > 5){
                        scope.dimens.selected.pop();
                        scope.dimens.items[index].checked = false;
                        scope.dimens.maxTips = true;
                    }
                }else{
                    scope.dimens.selected.splice(scope.dimens.selected.indexOf(key),1);
                    scope.dimens.maxTips = false;
                }
                console.log(scope.dimens.selected);
            };

            //多项目浮层
            scope.showProjects = false;
            scope.projectFun = {
                toggle: function(){
                    scope.showProjects = !scope.showProjects
                },
                clean: function(){
                    scope.projects.selected = [];
                    for(var i=0;i<scope.projects.items.length;i++){
                        scope.projects.items[i].checked = false;
                    }
                    this.toggle()
                },
                submit: function(){
                    scope.search();
                    this.toggle()
                }
            };

            //全部站点选择单一维度 下拉
            scope.dimensChange = function(label,value){
                scope.dimens.selected = value;
                scope.search();
            };
            
            scope.projects.checkBoxChange = function(index,key){//自定义站点
                if(scope.projects.selected.indexOf(0)>=0 || scope.projects.selected.indexOf('0')>=0){
                    scope.projects.selected.shift()
                }
                if(scope.projects.items[index].checked){
                    scope.projects.selected.push(key);
                    if(scope.projects.selected.length > 5){
                        scope.projects.selected.pop();
                        scope.projects.items[index].checked = false;
                        scope.projects.maxTips = true;
                    }
                }else{
                    scope.projects.selected.splice(scope.projects.selected.indexOf(key),1);
                    scope.projects.maxTips = false;
                }
                console.log(scope.projects.selected);
            }
        }
    }
});
