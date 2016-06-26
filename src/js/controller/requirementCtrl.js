/**
 * Created by zhangchuanliang on 2016/6/20.
 */
appControllers.controller("requirementCtrl",function($scope, $location, $rootScope, AUTH_EVENTS, AuthService, promiseService,transformDataService){
    $scope.title= "需求管理";

    $scope.params = {
        template_id: "",
        cycle: "",
        status: "",
        page: 1
    };

    $scope.pagination = {
        maxSize: 5,
        currentPage: $scope.params.page,
        totalItems: 0,
        perPage: $scope.params.page_size,
        setPage: function(page) {
            $scope.params.page = page;
            $scope.getTableData();
        },
        sizeChange: function (label,value) {
            if($scope.params.page_size == value[0])return;
            $scope.params.page_size = value[0];
            $scope.pagination.perPage = value[0];
            $scope.params.page = 1;
            $scope.pagination.currentPage = 1;
            $scope.getTableData();
        }
    };

    $scope.template = {
        items: [
            {
                group: 'none',
                label: '自定义任务',
                value: 0
            },{
                group: 'none',
                label: '模型任务',
                value: 1
            }
        ],
        selected: [$scope.params.template_id],
        change: function(label,value){
            if($scope.params.template_id == value[0])return;
            this.selected = value[0];
            $scope.params.template_id = value[0];
            $scope.getTableData();
        }
    };
    $scope.cycle = {
        items: [
            {
                group: 'none',
                label: '一次性',
                value: 0
            },{
                group: 'none',
                label: '长期',
                value: 1
            }
        ],
        selected: [$scope.params.cycle],
        change: function(label,value){
            if($scope.params.cycle == value[0])return;
            this.selected = value[0];
            $scope.params.cycle = value[0];
            $scope.getTableData();
        }
    };
    $scope.status = {
        items: [
            {
                group: 'none',
                label: '未审核',
                value: 0
            },{
                group: 'none',
                label: '已审核',
                value: 1
            },
            {
                group: 'none',
                label: '已退回',
                value: 2
            },{
                group: 'none',
                label: '已完成',
                value: 3
            },
            {
                group: 'none',
                label: '已关闭',
                value: 4
            }
        ],
        selected: [$scope.params.status],
        change: function(label,value){
            if($scope.params.status == value[0])return;
            this.selected = value[0];
            $scope.params.status = value[0];
            $scope.getTableData();
        }
    };

    var templateTPL = '<div chosen-directive chosen-data="tableFn.template.items" change-function="tableFn.template.change"></div>',
        cycleTPL    = '<div chosen-directive chosen-data="tableFn.cycle.items" change-function="tableFn.cycle.change"></div>',
        statusTPL   = '<div chosen-directive chosen-data="tableFn.status.items" change-function="tableFn.status.change"></div>';
    $scope.tableData = {
        data: {
            thData: [[{value:"需求名称",width:"10%"},{value:"需求内容",width:"10%"},{value:templateTPL,width:"20%"},{value:cycleTPL,width:"15%"},{value:"更新时间",width:"10%"},{value:"进度",width:"15%"},{value:statusTPL,width:"10%"},{value:"操作",width:"15%"}]],
            array : false,
            tdData: "数据加载中……"
        },
        fun: {
            template : {
                items: [
                    {
                        group: 'none',
                        label: '任务',
                        value: ""
                    },
                    {
                        group: 'none',
                        label: '自定义任务',
                        value: 0
                    },{
                        group: 'none',
                        label: '模型任务',
                        value: 1
                    }
                ],
                selected: [$scope.params.template_id],
                change: function(label,value){
                    if($scope.params.template_id == value[0])return;
                    this.selected = value[0];
                    $scope.params.template_id = value[0];
                    $scope.getTableData();
                }
            },
            cycle : {
                items: [
                    {
                        group: 'none',
                        label: '周期',
                        value: ""
                    },
                    {
                        group: 'none',
                        label: '一次性',
                        value: 0
                    },{
                        group: 'none',
                        label: '长期',
                        value: 1
                    }
                ],
                selected: [$scope.params.cycle],
                change: function(label,value){
                    if($scope.params.cycle == value[0])return;
                    this.selected = value[0];
                    $scope.params.cycle = value[0];
                    $scope.getTableData();
                }
            },
            status : {
                items: [
                    {
                        group: 'none',
                        label: '状态',
                        value: ""
                    },
                    {
                        group: 'none',
                        label: '未审核',
                        value: 0
                    },{
                        group: 'none',
                        label: '已审核',
                        value: 1
                    },
                    {
                        group: 'none',
                        label: '已退回',
                        value: 2
                    },{
                        group: 'none',
                        label: '已完成',
                        value: 3
                    },
                    {
                        group: 'none',
                        label: '已关闭',
                        value: 4
                    }
                ],
                selected: [$scope.params.status],
                change: function(label,value){
                    if($scope.params.status == value[0])return;
                    this.selected = value[0];
                    $scope.params.status = value[0];
                    $scope.getTableData();
                }
            }
        }
    }

    $scope.getTableData = function () {
        promiseService.ajax("/api/v1.0/requirements/","get",$scope.params).then(function(res){
            $scope.tableData.data.array = true;
            var aOperator = "";
            var options = {
                list: res.data.requirements,
                keys: ["name",'content','template','cycle','create_time','progress','status',aOperator]// 展示内容对应的字段，如果是html标签，则直接push到数组
            };
            $scope.tableData.data.tdData = transformDataService.trans(options);
            $scope.pagination.totalItems = res.data.cont;
        });
    }

    function init(){
        $scope.getTableData()
    }
    init();
});