/**
 * Created by xuming
 */
appControllers.controller("roleApplyCtrl",function($scope, $location, $rootScope, AUTH_EVENTS, AuthService,promiseService,Session,$uibModal,DOMAIN){
    
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
	
    //点击提交
    $scope.mySubmit = function(event){
        //提交
        promiseService.ajax('/api/v1.0/roles/apply',"POST", jsonObj).then(function(res){
            console.log(res);
            if(res.code == 200){
                concole.log(res.msg);
            }
        });
    };


});























