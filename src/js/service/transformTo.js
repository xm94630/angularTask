/**
 * Created by Administrator on 2016/2/18.
 */

appServices.factory('transformTo', function ($compile) {
    return {
        get: function(obj){
            var str = [];
            for(var p in obj) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        },
        
    }
});