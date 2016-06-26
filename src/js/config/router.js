/**
 * Created by zhangchuanliang on 2016/6/16.
 */

xmApp
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, USER_ROLES, DOMAIN) {

        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'mainContent': {
                        templateUrl: './html/module/login.html',
                        controller: 'loginCtrl'
                    }
                }
            })
            .state('home', {
                url: '/home',
                views: {
                    'mainContent': {
                        templateUrl: './html/module/home.html',
                        controller: 'homeCtrl'
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
                        templateUrl: DOMAIN.view + 'html/module/dashbord.html' + DOMAIN.version,
                        controller: 'dashbordCtrl'
                    }
                }
            });

    });