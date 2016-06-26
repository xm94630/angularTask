/**
 * Created by Administrator on 2016/2/18.
 */

appServices.factory('transSidebarData', function ($location) {
    return {
        /**
         * 转换左导数据格式
         * @param data 数据
         * @param module 跳转页面state
         * @param ids 传入的mid和wid
         * @param activeItem 当前访问的url的唯一标识 如 website_index
         * @returns {*}
         */
        trans: function(data){
            var newData = [];
            for(var i=0;i<data.length;i++){
                newData[i] = {
                    name: data[i].pera_chi,
                    state: data[i].pera_eng,
                    child: []
                }
                var child = data[i].child || [],
                    newChild = newData[i].child;
                for(var j=0;j<child.length;j++){
                    newChild[j] = {
                        name: child[j].pera_chi,
                        state: data[i].pera_eng+"."+child[j].pera_eng
                    }
                }
            }
            //console.log(newData);
            return newData
        }
    }
});