/**
 * Created by zhangchuanliang on 2016/6/16.
 */

myApp
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, USER_ROLES, DOMAIN) {

    $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'mainContent': {
                        templateUrl: DOMAIN.view + 'module/login.html' + DOMAIN.version,
                        controller: 'loginCtrl'
                    }
                }
            })
            .state('roleApply', {
                url: '/roleApply',
                views: {
                    'mainContent': {
                        templateUrl: DOMAIN.view + 'module/roleApply.html' + DOMAIN.version,
                        controller: 'roleApplyCtrl'
                    }
                }
            })
            .state('roleAuthorityManage', {
                url: '/roleAuthorityManage',
                views: {
                    'mainContent': {
                        templateUrl: DOMAIN.view + 'module/roleAuthorityManage.html' + DOMAIN.version,
                        controller: 'roleAuthorityManageCtrl'
                    }
                }
            })
            .state('dataAuthorityManage', {
                url: '/dataAuthorityManage',
                views: {
                    'mainContent': {
                        templateUrl: DOMAIN.view + 'module/dataAuthorityManage.html' + DOMAIN.version,
                        controller: 'dataAuthorityManageCtrl'
                    }
                }
            })
            .state('dashbord',{
                url: '/dashbord',
                resolve: {
                    sidebarList: function(promiseService){

                    }
                },
                views: {
                    'mainContent':{
                        templateUrl: DOMAIN.view + 'module/dashbord.html' + DOMAIN.version,
                        controller: 'dashbordCtrl'
                    }
                }
            })
            .state('dashbord.meta',{
                url: '/meta',
                views: {
                    'mainContent': {
                        templateUrl: DOMAIN.view+'module/dashbordMeta.html'+DOMAIN.version,
                        controller: 'dashbordMetaCtrl'
                    }
                }
            })
            .state('requirement',{
                url: '/requirement',
                views: {
                    'mainContent': {
                        templateUrl: DOMAIN.view+'module/requirement.html'+DOMAIN.version,
                        controller: 'requirementCtrl'
                    }
                }
            })
            .state('requirement.edit',{
                url: '/edit?id',
                views: {
                    'mainContent': {
                        templateUrl: DOMAIN.view+'module/requirementEdit.html'+DOMAIN.version,
                        controller: 'requirementEditCtrl'
                    }
                }
            })

    });