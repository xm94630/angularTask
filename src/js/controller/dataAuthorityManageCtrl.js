/**
 * Created by xuming
 * 权限管理-用户
 */

appControllers.controller("dataAuthorityManageCtrl",function($scope, $location, $rootScope, AUTH_EVENTS, AuthService,promiseService,Session,modalFactory){
    
	console.log('权限管理-数据');

    console.log(modalFactory);
    //modalFactory.tips('200','hhaha');

    modalFactory.open({
        scope: $scope,
        option: {
            title: '提示',
            formName: 'createSiteForm',
            content:'<div class="form-style">123</div>'
        },
        controller: {
            ok: function(){
                alert(123)
            }
        }
    });



});























