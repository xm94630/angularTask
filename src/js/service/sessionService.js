/**
 * Created by Administrator on 2016/2/18.
 */

appServices.service('Session', function () {
    var storage = window.localStorage;
    this.userCode = storage.userCode || null;
    this.userName = storage.userName || null;
    this.userRole = storage.userRole || null;
    this.create = function (userCode, userName, userRole) {
        this.userCode = userCode;
        this.userName = userName;
        this.userRole = userRole;
        storage.setItem("userCode",userCode);
        storage.setItem("userName",userName);
        storage.setItem("userRole",JSON.stringify(userRole));
    };
    this.destroy = function () {
        this.userCode = null;
        this.userName = null;
        this.userRole = null;
        storage.removeItem("userCode");
        storage.removeItem("userName");
        storage.removeItem("userRole");
    };
    //return this;
});