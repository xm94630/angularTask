/**
 * Created by Administrator on 2016/2/18.
 */

appServices.factory('transformDataService', function ($compile) {
    return {
        _isArray: function (object) {
            return Object.prototype.toString.call(object) === '[object Array]';
        },
        _isObject: function (object) {
            return typeof object === 'object';
        },
        escape2Html: function (str) {
            var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"','#039':"'"};
            return str.replace(/&(lt|gt|nbsp|amp|quot|#039);/ig,function(all,t){return arrEntities[t];});
        },
        html2Escape: function (sHtml) {
            if(typeof sHtml != 'string')return sHtml;
            return sHtml.replace(/[<>&"']/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":"&#039;"}[c];});
        },
        tempReplace: function (template, obj, loc) {
            var _loc = (loc == 'i' || loc == 'g') ? loc : 'g',
                _temp = template;
            for (var _key in obj) {
                var _ex = new RegExp('{{{' + _key + '}}}', _loc);
                _temp = _temp.replace(_ex, obj[_key])
            }
            return _temp;
        },
        trans: function(options,_width){
            var list = options.list,
                keys = options.keys,
                newData = [];
            for(var i=0;i<list.length;i++){
                var sData = list[i],
                    loopArr = [];
                for(var j=0;j<keys.length;j++){
                    //todo 此处可优化
                    if(this._isArray(keys[j])){//数组的话 代表此处可能是多个参数拼合为一个值进行显示
                        var str = {};
                        for(var m=0;m<keys[j].length;m++){
                            if(sData[keys[j][m]] == "有效"){
                                str.value = sData[keys[j][m]];
                                break;
                            }else{
                                str.value = sData[keys[j][0]]+"<i>("+sData[keys[j][1]]+")</i>"
                            }
                        }
                        loopArr.push(str)
                    }else if(this._isObject(keys[j])){ //对象的话 代表此处需要多个参数进行调用 经常用于图片预览
                        var _value = this.tempReplace(keys[j]["value"],sData,'g'),
                            _img = this.tempReplace(keys[j]["url"],sData,'g'),
                            _extend = {value: _value,url: _img};
                        loopArr.push(_extend)
                    }
                    //此处可优化 end
                    else{ //不需要做特殊处理的操作
                        if(keys[j].indexOf("<") < 0){
                            loopArr.push({value: sData[keys[j]],width: !!_width?_width[j]:"auto" })
                        }else{
                            var temp = this.tempReplace(keys[j],sData,'g');
                            loopArr.push({value: temp,width: !!_width?_width[j]:"auto" })
                        }
                    }

                }
                newData.push(loopArr)
            }
            //console.log(newData);
            return newData
        },
        formatDate: function(list,date){
            for(var i=0;i<list.length;i++){
                list[i][date] = encodeURIComponent(list[i][date])
            }
            return list;
        }
    }
});