/**
 * Created by Administrator on 2016/1/27.
 */
appControllers.controller("loginCtrl",function($scope, $location, $rootScope, AUTH_EVENTS, AuthService){

    l(123123);

    $scope.user = {
        username: "",
        password: ""
    };
    $scope.error = {
        isHave: false,
        msg: ""
    };

    //console.log($scope);
    $scope.login = function(event){
        var $element = event.target[3];
        $element.value="登录中...";
        AuthService.login($scope.user).then(function (req) {
            if(req.code == 200){
                //console.log(req);
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                //$rootScope.username = req.real_name;
                $scope.error.isHave = false;
            }else{
                //$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                $scope.error = {
                    isHave: true,
                    msg: req.msg
                };
            }
            $element.value="登录";
        }, function (req) {
            $scope.error = {
                isHave: true,
                msg: req.msg
            };
        });
    };

});