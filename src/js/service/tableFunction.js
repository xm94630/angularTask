/**
 * Created by Administrator on 2016/2/18.
 */

appServices.factory('tableFunctionFactory', function ($compile) {
    return {
        set: function(data,widths){
            for(var i=0;i<data.length;i++){
                data[i].width = widths[i]
            }
            return data
        },
        noData: function(module){
            module.data.array = false;
            module.data.tdData = '<div class="noData">'+
                                        '<span class="emptyBox"></span>'+
                                        '<p>暂无数据</p>'+
                                    '</div>';
            return false
        }
    }
});