/**
 * Created by Administrator on 2016/2/16.
 */

appServices.factory('tableFilterFactory', function($sce) {
    return function(data, th, page, filter, isFilter) {
        if (!angular.isArray(data.list)) {
            data.tdData = data.list;
            data.array = false;
            setThData();
            // console.log(data);
            return data;
        } else {
            // console.log(data);
            data.array = true;
            var _startNum = (page.currentPage - 1) * page.pageSize;

            var _data = getFilterData();
            if (_data.length == 0) {
                data.array = false;
                data.tdData = '当前筛选没有任务';
            } else {
                var _dataActive = [];
                var _size = page.total - _startNum > page.pageSize ? page.pageSize : page.total - _startNum;
                for (var i = 0; i < _size; i++) {
                    _dataActive.push(_data[_startNum + i]);
                };
                setTdData(_dataActive);
            }
            setThData();

            return data;
        }

        function setThData() {
            var _num = Object.keys(th);
            var _th = [];
            for (var i = 0; i < _num.length; i++) {
                _th.push(th[_num[i]]);
            };
            // console.log(data);
            data.thData = _th;
        }

        function setTdData(tdlist) {
            var _tdData = [];
            var _thTitle = Object.keys(th);
            for (var i = 0; i < tdlist.length; i++) {
                var _obj = [];
                for (var j = 0; j < _thTitle.length; j++) {
                    // _obj.push($sce.trustAsHtml(tdlist[i][_thTitle[j]]));
                    _obj.push(tdlist[i][_thTitle[j]]);
                };
                _tdData.push(_obj);
            };
            data.tdData = _tdData;
        }

        function getFilterData() {
            if (filter.select == '' || filter.input == '') {
                page.total = data.list.length;
                return data.list;
            }
            var _list = [];
            for (var i = 0; i < data.list.length; i++) {
                var _reg = new RegExp(filter.input, 'g');
                // 完全匹配
                // if(data.list[i][filter.select]== filter.input){

                // 模糊匹配
                if (data.list[i][filter.select].match(_reg) != null) {
                    _list.push(data.list[i]);
                }
            };
            if (isFilter) {
                page.currentPage = 1;
            }
            page.total = _list.length;

            return _list;
        }
    }
});