/**
 * Created by Administrator on 2016/2/16.
 */

appServices.factory('modalFactory', function($rootScope,$uibModal,DOMAIN) {
    return {
        opt: {
            option:{
                title: "提示信息",
                content: ""
            },
            hasFooter: true
        },
        commonSet: {
            animation: true,
            backdrop: 'static',
            //windowClass: _opt.className?_opt.className:"layer_common",
            templateUrl: DOMAIN.view+'directive/modal.html',
            windowTemplateUrl: DOMAIN.view+'directive/modalWindow.html'
        },
        open: function(opt) {
            var _opt = angular.extend({}, this.opt, opt),
                openSet = angular.extend({},this.commonSet,{
                    scope: _opt.scope,
                    //bindToController: true,
                    controller: ['$scope','$uibModalInstance',function($scope,$uibModalInstance){
                        //!!_opt.scope?$scope = _opt.scope:"";
                        for(var k in _opt.option){
                            $scope[k] = _opt.option[k]
                        }
                        //console.log($scope);
                        $scope.hasFooter = _opt.hasFooter;
                        $scope.ok= function(){
                            var handler = (_opt.controller && _opt.controller.ok)?_opt.controller.ok():null;
                            if(handler != false){
                                $uibModalInstance.close()
                            }
                        };
                        $scope.cancel= function(){
                            (_opt.controller && _opt.controller.cancel)?_opt.controller.cancel():null;
                            $uibModalInstance.dismiss('cancel');
                        };
                        $scope.close = function(){
                            $uibModalInstance.close()
                        };
                        $scope.size = _opt.size || "common";
                        //console.log($scope);
                    }],
                    //scope: scope,
                    size: _opt.size || "common",//common,small,tips
                    resolve: _opt.resolve || {}
                });
            $uibModal.open(openSet)

        },
        tips: function(code,msg){
            var imgClass = '';
            if(code == 200){
                imgClass = 'succesImg';
            }else{
                imgClass = 'falseImg';
            }
            var openSet = angular.extend({},this.commonSet,{
                controller: ['$scope','$uibModalInstance','$timeout',function ($scope,$uibModalInstance,$timeout) {
                    $scope.content = '<div class="tipsPop">'+
                                        '<span class="'+imgClass+'"></span>'+
                                        '<span class="infPop">'+msg+'</span>'+
                                        '</div>';
                    $scope.size = 'tips';
                    $scope.hasFooter = false;
                    $timeout(function(){
                        $uibModalInstance.close()
                    },1000);
                }],
                size: "tips",
                backdrop: true,
                hasFooter: false
            });
            $uibModal.open(openSet)
        }
    };
});