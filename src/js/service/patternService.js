/**
 * Created by Administrator on 2016/2/18.
 */

appServices.factory('patternService', function () {
    return {
        char: function(){
            return  new RegExp(/^(([^\^\.<>%&',;=?$"':#@!~\]\[{}\\/`\|])*)$/);
        }
    }
});