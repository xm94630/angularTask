/**
 * Created by Administrator on 2016/2/16.
 */

appServices.factory('chartsFactory', function() {
    return {
        //_hasLegend: true,
        //_hasTooltip: true,
        chartTheme: {
            // 默认色板
            color: [
                '#319dca', '#6dbd49', '#ffb85a', '#FD8079', '#61B5FF'
            ],
            // 图表标题
            title: {
                textStyle: {
                    fontWeight: 'normal',
                    color: '#008acd'          // 主标题文字颜色
                }
            },

            legend: {
                icon: 'circle',
                left: 73 //此值参考 grid.left
            },
            
            // 网格
            grid: {
                borderColor: '#F0F0F0',
                backgroundColor: '#fff',
                left: 80, //此值参考 lengend.left
                right: 40,
                top: 40
            },

            // 值域
            dataRange: {
                itemWidth: 15,
                color: ['#5ab1ef', '#e0ffff']
            },

            // 工具箱
            toolbox: {
                color: ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
                effectiveColor: '#ff4500'
            },

            // 提示框
            tooltip: {
                backgroundColor: 'rgba(50,50,50,0.5)',     // 提示背景颜色，默认为透明度为0.7的黑色
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'line',         // 默认为直线，可选为：'line' | 'shadow'
                    lineStyle: {          // 直线指示器样式设置
                        color: '#008acd'
                    },
                    crossStyle: {
                        color: '#008acd'
                    },
                    shadowStyle: {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    }
                }
            },

            // 区域缩放控制器
            dataZoom: {
                dataBackgroundColor: '#efefff',            // 数据背景颜色
                fillerColor: 'rgba(182,162,222,0.2)',   // 填充颜色
                handleColor: '#008acd'    // 手柄颜色
            },

            // 类目轴
            categoryAxis: {
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#008acd'
                    }
                },
                splitLine: {           // 分隔线
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: ['#eee']
                    }
                }
            },

            // 数值型坐标轴默认参数
            valueAxis: {
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#008acd'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(250,250,250,0.1)', 'rgba(250,250,250,0.1)']
                    }
                },
                splitLine: {           // 分隔线
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: ['#eee']
                    }
                }
            },

            polar: {
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#ddd'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(250,250,250,0.2)', 'rgba(200,200,200,0.2)']
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            },

            timeline: {
                lineStyle: {
                    color: '#008acd'
                },
                controlStyle: {
                    normal: {color: '#008acd'},
                    emphasis: {color: '#008acd'}
                },
                symbol: 'emptyCircle',
                symbolSize: 3
            },

            // 柱形图默认参数
            bar: {
                itemStyle: {
                    normal: {
                        barBorderRadius: 3
                    },
                    emphasis: {
                        barBorderRadius: 3
                    }
                }
            },

            // 折线图默认参数
            line: {
                smooth: true,
                symbol: 'emptyCircle',  // 拐点图形类型
                symbolSize: 3           // 拐点图形大小
            },

            // K线图默认参数
            k: {
                itemStyle: {
                    normal: {
                        color: '#d87a80',       // 阳线填充颜色
                        color0: '#2ec7c9',      // 阴线填充颜色
                        lineStyle: {
                            color: '#d87a80',   // 阳线边框颜色
                            color0: '#2ec7c9'   // 阴线边框颜色
                        }
                    }
                }
            },

            // 散点图默认参数
            scatter: {
                symbol: 'circle',    // 图形类型
                symbolSize: 4        // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            },

            // 雷达图默认参数
            radar: {
                symbol: 'emptyCircle',    // 图形类型
                symbolSize: 3
                //symbol: null,         // 拐点图形类型
                //symbolRotate : null,  // 图形旋转控制
            },

            map: {
                itemStyle: {
                    normal: {
                        borderColor: 'lightgreen',
                        areaStyle: {
                            color: '#cdd1d2'
                        },
                        label: {
                            textStyle: {
                                color: '#666'
                            }
                        }
                    },
                    emphasis: {                 // 也是选中样式
                        areaStyle: {
                            color: '#67dbff'
                        },
                        label: {
                            textStyle: {
                                color: '#353c55'
                            }
                        }
                    }
                }
            },

            force: {
                itemStyle: {
                    normal: {
                        linkStyle: {
                            color: '#1e90ff'
                        }
                    }
                }
            },

            chord: {
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: 'rgba(128, 128, 128, 0.5)',
                        chordStyle: {
                            lineStyle: {
                                color: 'rgba(128, 128, 128, 0.5)'
                            }
                        }
                    },
                    emphasis: {
                        borderWidth: 1,
                        borderColor: 'rgba(128, 128, 128, 0.5)',
                        chordStyle: {
                            lineStyle: {
                                color: 'rgba(128, 128, 128, 0.5)'
                            }
                        }
                    }
                }
            },

            gauge: {
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#2ec7c9'], [0.8, '#5ab1ef'], [1, '#d87a80']],
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber: 10,   // 每份split细分多少段
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 22,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 5
                }
            },

            textStyle: {
                fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
            }
        },
        init: function (selectorId) {
            if(typeof selectorId == 'undefined')return;
            var $chartsView = document.getElementById(selectorId);//设定高度
            // if (!$chartsView.style.height || $chartsView.style.height =='auto' ) {
            //     $chartsView.style.height = '480px';
            // }
            var _myChart = echarts.init($chartsView);
            _myChart.showLoading({
                text: 'loading',
                color: '#319dca',
                textColor: '#000',
                maskColor: 'rgba(255, 255, 255, 0.8)',
                zlevel: 0
            });
        },
        _formatter: function (value) {
            if (value < 10000) {
                return value;
            }
            value = Math.ceil(value / 1000);
            if (value > 9999) {
                value = Math.ceil(value / 1000) + 'mk';
            } else {
                value += 'k';
            }
            return value;
        },
        _isEmptySeries: function (series) {
            if (!angular.isArray(series) || series.length === 0) {
                return true;
            }
            for (var i = series.length - 1; i >= 0; i--) {
                var data = series[i].data;
                if (!angular.isArray(data) || data.length === 0) {
                    return true;
                }
            }
            return false;
        },
        _getLegend: function (data) {
            var __legendData = [];
            // 获取Y轴项目
            if (this.hasLegend) {
                angular.forEach(data[0].series, function (a,i) {
                    __legendData.push(a.name);
                })
            }

            //翻转
            // if(_legendReverse){
            //     __legendData.reverse()
            // }
            return __legendData;
        },
        noDataView: function(selectorId){
            var $chartsView = document.getElementById(selectorId);
            $chartsView.style = "";
            $chartsView.innerHTML = '<div class="noData">'+
                                    '<span class="emptyBox"></span>'+
                                    '<p>暂无数据</p>'+
                                    '</div>'
        },
        noData: function(data){
            //如果传入的series为空 则在其下添加空值的data
            if(this._isEmptySeries(data.series)){
                data.series.push({
                    data:[]
                });
                data.noDataLoadingOption =  {
                    effect: 'bubble',
                    text: data.title && data.title.text + "暂无数据",
                    textStyle: {
                        fontSize: 14,
                        fontWeight: "bold"
                    }
                };
                //noDataHtml(element,data)
            }
        },
        setViewer: function(selectorId,dataArr,chartsOptions){
            var $chartsView = document.getElementById(selectorId);
            //设定高度
            if (!$chartsView.style.height || $chartsView.style.height =='auto' ) {
                $chartsView.style.height = '480px';
            }
            var _options = [];
            this.hasLegend = chartsOptions.hasLegend == undefined ? true : chartsOptions.hasLegend;
            this.hasTooltip = chartsOptions.hasTooltip == undefined ? true : chartsOptions.hasTooltip;
            this.legendReverse = chartsOptions.legendReverse == undefined ? false : chartsOptions.legendReverse;

            // 判断
            if (!!chartsOptions.chartType && (['custom','pie'].indexOf(chartsOptions.chartType) < 0) ) {
                _options = this.single(chartsOptions.chartType,dataArr,chartsOptions.series,chartsOptions.option);

            }
            if (!!chartsOptions.chartType && chartsOptions.chartType == 'custom') {
                _options = this.custom(chartsOptions.chartType);
            }
            //执行饼状图
            if (!!chartsOptions.chartType && chartsOptions.chartType == 'pie') {
                _options = this.pie(chartsOptions.chartType);
            }
            var myChart = echarts.init($chartsView,this.chartTheme);
            myChart.hideLoading();
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(_options);
        },
        single: function (_type,dataArr,_chartSeries,_chartOption) {
            var that = this;
            var __legend = this._getLegend(dataArr),
                __data = dataArr[0];

            //如果传入的series为空 则在其下添加空值的data
            this.noData(__data);

            angular.forEach(__data.series, function (a,i) {
                    a.type = _type;
                    a.areaStyle =  {
                        normal: {
                            opacity: 0.1
                        }
                    };

                if (_type == 'bar' && __data.xAxis[0].type != 'value') {
                        a.barMaxWidth = 100;
                        if (a.data.length < 9 ) {
                           a.barCategoryGap = 50;
                        }
                    }

                    if (_type == 'scatter') {
                        a.itemStyle = {
                            normal: {
                                label: {
                                    textStyle: {
                                        color: '#000'
                                    },
                                    show: true,
                                    position: 'inside',
                                    formatter: '{a}'
                                }
                            }
                        }
                    }
                    //混合图表样式
                    angular.merge(a, _chartSeries)
                }
            );

            var __option = angular.merge({}, {
                legend: {
                    data: __legend
                },
                toolbox: {
                    show: true,
                    feature: {
                        //magicType: {show: true, type: ['line', 'bar']},
                        //restore: {show: true},
                        //dataZoom : {show: false},
                        //saveAsImage: {show: true}
                    },
                    y: 0
                },
                yAxis: [
                    {
                        type: 'value',
                        name: !!_chartOption?_chartOption.yName:'',
                        axisLabel: {
                            //formatter: that._formatter
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#DEE2E5',
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    }
                ],
                xAxis: [
                    {
                        name: !!_chartOption?_chartOption.xName:'',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#DEE2E5',
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    }
                ]
            }, __data);
            if (!!this.hasTooltip) {
                __option = angular.merge({},__option, {
                    tooltip: {
                        trigger: 'axis'
                    }
                })
            }
            console.log(__option);
            return __option;
        },
        custom: function (_type,dataArr) {

        },
        pie: function (_type,dataArr) {

        }
    };
});