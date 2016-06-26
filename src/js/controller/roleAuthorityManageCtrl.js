/**
 * Created by xuming
 * 权限管理-用户
 */

appControllers.controller("roleAuthorityManageCtrl",function($scope, $location, $rootScope, AUTH_EVENTS, AuthService,promiseService,Session){
    
	console.log('权限管理-用户');

    //从appServices获取userCode、userName、userRole。
    var userCode = Session.userCode;
    var userName = Session.userName;
    var userRole = Session.userRole;

    var jsonObj = { 
        "token": userCode, 
        "roleids": '-1'
    } 

    //角色对象数组
    var newData =[];

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

    //获取角色
    promiseService.ajax('/api/v1.0/roles',"GET").then(function(res){
        if(res.status == 200 && res.data.code == 200){
            var list = res.data.list;
            newData = newData.concat(parseData(list))
            $scope.records = newData;
            console.log(newData);
        }
    });

    //点击提交
    $scope.mySubmit = function(event){
        var roleids = "";
        //获取选中的值，组合成字符串
        
        jsonObj.roleids = roleids;
        //提交
        promiseService.ajax('/api/v1.0/roles/apply',"POST", jsonObj).then(function(res){
            console.log(res);
            if(res.code == 200){
                concole.log(res.msg);
            }
        });
    };


    $scope.myClick = function(item){
        //角色描述
        $scope.desc = item.desc;


        

        $scope.fromData={};
        console.log($scope.fromData.myRole)

        if($scope.fromData.myRole){
            var log = [];


            angular.forEach($scope.fromData.myRole,function(v){
                    if(v==true)
                        this.push(v);
            },log);
            console.log(log.length);//length
        }
    }

    $scope.tagcategories = [ 
        { 
          id: 1, 
          name: 'Color', 
          tags: [ 
            { 
              id:1, 
              name:'color1'
            }, 
            { 
              id:2, 
              name:'color2'
            }, 
            { 
              id:3, 
              name:'color3'
            }, 
            { 
              id:4, 
              name:'color4'
            }, 
          ] 
        }, 
        { 
          id:2, 
          name:'Cat', 
          tags:[ 
            { 
              id:5, 
              name:'cat1'
            }, 
            { 
              id:6, 
              name:'cat2'
            }, 
          ] 
        }, 
        { 
          id:3, 
          name:'Scenario', 
          tags:[ 
            { 
              id:7, 
              name:'Home'
            }, 
            { 
              id:8, 
              name:'Work'
            }, 
          ] 
        } 
      ]; 
      
      $scope.selected = []; 
      $scope.selectedTags = []; 
      
      var updateSelected = function(action,id,name){ 
        if(action == 'add' && $scope.selected.indexOf(id) == -1){ 
          $scope.selected.push(id); 
          $scope.selectedTags.push(name); 
        } 
        if(action == 'remove' && $scope.selected.indexOf(id)!=-1){ 
          var idx = $scope.selected.indexOf(id); 
          $scope.selected.splice(idx,1); 
          $scope.selectedTags.splice(idx,1); 
        } 
      } 
      
      $scope.updateSelection = function($event, id){ 
        var checkbox = $event.target; 
        var action = (checkbox.checked?'add':'remove'); 
        updateSelected(action,id,checkbox.name); 
      } 
      
      $scope.isSelected = function(id){ 
        return $scope.selected.indexOf(id)>=0; 
      } 

});























