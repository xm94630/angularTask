/**
 * Created by xuming
 */
appControllers.controller("roleApplyCtrl",function($scope, $location, $rootScope, AUTH_EVENTS, AuthService,promiseService,Session,$uibModal,DOMAIN,modalFactory){
    
	console.log('角色申请页面3');


    //从appServices获取userCode、userName、userRole。
    var userCode = Session.userCode;
    var userName = Session.userName;
    var userRole = Session.userRole;

    var jsonObj = { 
        "token": userCode, 
        "roleids": '-1'
    } 

    //角色对象数组
    var newData =[{
        group: "none",
        label: "角色",
        desc: "角色说明",
        value: "-1"
    }];

    $scope.user = userName;
    //chosen初始设置
    $scope.chosendata = newData;
    //初始角色说明
    $scope.desc = '角色说明';

    //解析数据
    function parseData(arr){
        var newArr = [];
        for(var i=0;i<arr.length;i++){
            newArr.push({
                'group':"none",
                'label':arr[i].role_name,
                'desc':arr[i].role_desc,
                'value':arr[i].id
            });
        }
        return newArr;
    }

    //chosen事件
    $scope.$on('chosenChange', function(e, label, value) {
        jsonObj.roleids = value;
        for(var i=0;i<newData.length;i++){
           if(newData[i].value == value){
               $scope.desc = newData[i].desc;
           }
        }
    })
	
	//获取角色
	promiseService.ajax('/api/v1.0/roles',"GET").then(function(res){
        if(res.status == 200 && res.data.code == 200){
            var list = res.data.list;
            newData = newData.concat(parseData(list))
            $scope.chosendata = newData;
            $scope.desc = newData[0].desc;
        }
	});
	
    $scope.activeBtn=false;
    //点击提交
    $scope.mySubmit = function(event){
        if(jsonObj.roleids=='-1'){
            //弹框
            modalFactory.open({
                scope: $scope,
                option: {
                    title: '提示',
                    formName: 'createSiteForm',
                    content:'<div class="form-style">'+
                                '请选择需要申请的角色'+
                            '</div>'
                },
                controller: {
                    ok: function(){
                    }
                }
            });
            return;
        }
        //提交
        $scope.activeBtn=true;
        promiseService.ajax('/api/v1.0/roles/apply',"POST", jsonObj).then(function(res){
            $scope.activeBtn=false;
            if(res.status == 200){
                //弹框
                modalFactory.open({
                    scope: $scope,
                    option: {
                        title: '提示',
                        formName: 'createSiteForm',
                        content:'<div class="tipsPop"><span class="succesImg"></span><span class="infTips">您的权限申请已提交，审批结果将以邮件的方式回复您，请耐心等待，谢谢！</span><br><br></div>'
                    },
                    size:'small',
                    controller: {
                        ok: function(){
                        
                        }
                    }
                });
            }
        });

    };




});























