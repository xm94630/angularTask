appDirectives.directive('datepickerDirective', function($timeout, $filter, DOMAIN) {
        return {
            restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: DOMAIN.view+"directive/datePicker.html"+DOMAIN.version,
            replace: true,
            link: function($scope, iElm, iAttrs, controller) {

                //dad
                $scope.startTimeOptions = {
                    maxDate: new Date(),
                    minDate: new Date(2014, 0, 1),
                    startingDay: 1,
                    showWeeks: false
                };
                $scope.startTime = {
                    opened: false
                };
                $scope.openStartTime = function() {
                    $scope.startTime.opened = true;
                };

                $scope.$watch('startTimeV', function(newValue, oldValue) {
                    if (newValue == undefined || isEqual(newValue, oldValue)) return;
                    $scope.endTimeOptions.minDate = newValue;
                    setSelect();
                });
                $scope.endTimeOptions = {
                    maxDate: new Date(),
                    minDate: new Date(2014, 0, 1),
                    startingDay: 1,
                    showWeeks: false
                };
                $scope.endTime = {
                    opened: false
                };
                $scope.openendTime = function() {
                    $scope.endTime.opened = true;
                };
                $scope.$watch('endTimeV', function(newValue, oldValue) {
                    if (newValue == undefined || isEqual(newValue, oldValue)) return;
                    $scope.startTimeOptions.maxDate = newValue;
                    setSelect();
                });

                //$scope.dateType = ['lastday7'];
                $scope.chosenChanges = function(label, value) {
                    switch (value[0]) {
                        case 'today':
                            setTime(getLastday(1));
                            break;
                        case 'yesterday':
                            setTime(theLastday(1));
                            break;
                        case 'lastday7':
                            setTime(getLastday(7));
                            break;
                        case 'lastday15':
                            setTime(getLastday(15));
                            break;
                        case 'thisMonth':
                            setTime(getMonth(0));
                            break;
                        case 'lastMonth':
                            setTime(getMonth(-1));
                            break;
                        case 'thisYear':
                            setTime(getThisYear());
                            break;
                        default:
                            break;
                    }
                };

                var _now = new Date();
                var _dayList = {
                    'today': getLastday(1),
                    'yesterday': theLastday(1),
                    'lastday7': getLastday(7),
                    'lastday15': getLastday(15),
                    'thisMonth': getMonth(0),
                    'lastMonth': getMonth(-1),
                    'thisYear': getThisYear()
                };
                var _timer;

                function setSelect() {
                    if (_timer != undefined) {
                        $timeout.cancel(_timer);
                    }
                    _timer = $timeout(function() {
                        var _isCustom = true;
                        var _option = '';
                        for (var key in _dayList) {
                            if (isEqual(_dayList[key][0], $scope.startTimeV) && isEqual(_dayList[key][1], $scope.endTimeV)) {
                                _isCustom = false;
                                _option = key;
                                break;
                            }
                        }
                        if (_isCustom) {
                            $scope.dateType = ['custom'];
                        } else {
                            $scope.dateType = [_option];
                        }

                    }, 100)
                }

                function setTime(value) {
                    $scope.startTimeV = value[0];
                    $scope.endTimeV = value[1];
                }
                //获取今年
                function getThisYear() {
                    var _s = new Date(_now.getFullYear(), 0, 1);
                    var _e = _now;
                    return [_s, _e];
                }

                // 返回过去value个月
                function getMonth(value) {
                    var _sMonth = _now.getMonth() + value;
                    var _sYear = _now.getFullYear();
                    if (_sMonth < 0) {
                        _sMonth = 11;
                        _sYear = _sYear - 1;
                    }
                    var _lastDay = getCountDays(new Date(_sYear + '/' + (_sMonth + 2) + '/1'));

                    var _s = new Date(_sYear, _sMonth, 1);
                    if (value == 0) {
                        var _e = _now;
                    } else {
                        var _e = new Date(_sYear, _sMonth, _lastDay);
                    }
                    return [_s, _e];
                }

                // 获取过去value天
                function getLastday(value) {
                    var _s = new Date(_now.getTime() - transTime(value-1));
                    var _e = _now;
                    return [_s, _e];
                }

                // 获取过去value天的某一天
                function theLastday(value) {
                    var _s = new Date(_now.getTime() - transTime(value));
                    return [_s, _s];
                }

                //返回当月有多少天
                function getCountDays(date) {
                    date.setDate(0);
                    return date.getDate();
                }

                function transTime(num) {
                    return 1000 * 60 * 60 * 24 * num;
                }

                function isEqual(date1, date2) {
                    if(date1 == undefined || date2 == undefined){
                        return false;
                    }
                    return (date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate())
                }
            }
        };
    });
