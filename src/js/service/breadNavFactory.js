/**
 * Created by Administrator on 2016/2/16.
 */

appServices.factory('breadNavFactory', function($location) {
    return {
        /**
         * 面包屑
         * @param stateParams 当前页的location.search参数
         * @param module 返回网站主的state
         * @returns {Array}
         */
        trans: function(stateParams,module,text) {
            var _text = (typeof text !== 'undefined')?text:"",
                _module = (typeof module !== 'undefined')?module:"";
            var FUN = $location.path().split("/")[1];
            var mediaList = {};
            var storage = window.localStorage;
            if(FUN == "manage"){
                mediaList.media_select = JSON.parse(storage.manageMediaList);
                mediaList.web_select = JSON.parse(storage.manageWebList);
            }else{
                mediaList = JSON.parse(storage.mediaList)
            }
            var result = [];
            //如果没有mid和wid，规定为自定义参数，直接返回
            if(typeof stateParams.mid == 'undefined' && typeof stateParams.wid == 'undefined'){
                result = [stateParams];
                return result
            }
            forMedia:
                for(var k in mediaList["media_select"]){
                    if(k==stateParams.mid){
                        result.push({
                            name: mediaList["media_select"][k],
                            id: k,
                            state: 'manage.medias({mid: '+k+'})'
                        });
                        forWeb:
                            for(var key in mediaList["web_select"][k]){
                                if(key == stateParams.wid){
                                    result.push({
                                        name: mediaList["web_select"][k][key]+_text,
                                        id: key,
                                        state: _module+'({mid: '+k+',wid: '+key+'})'
                                    });
                                    break forWeb
                                }
                            }
                        break forMedia
                    }
                }
            //console.log(result);
            return result;
        }
    };
});