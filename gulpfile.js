'use strict';

/***********************************
 * 模块加载
 ***********************************/
var gulp            = require('gulp');
var $               = require('gulp-load-plugins')();
var browserSync     = require('browser-sync');

/***********************************
 * 配置
 ***********************************/
var browserSyncOption ={
    server:{
      baseDir: './src'
    },
    open:true,                  
    port:8088                      
}

/***********************************
 * 资源路径
 ***********************************/
var _jsList = ['./src/js/*.js',
        './src/js/config/*.js',
        './src/js/service/*.js',
        './src/js/filter/*.js',
        './src/js/directive/*.js',
        './src/js/controller/*.js'
    ];

/***********************************
 * 任务
 ***********************************/
gulp.task('default',['browserSync','scripts','watch'],function(){
	console.log('ok');
});

gulp.task('browserSync',function(){
  browserSync(browserSyncOption);
});



//合并js
gulp.task('scripts', function() {
	console.log('----js----')
    return gulp.src(_jsList)
        .pipe($.ngAnnotate())
        .pipe($.concat('all.min.js'))
        .pipe(gulp.dest('./src/'))
        //.pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function() {
    // 观察js
    gulp.watch(_jsList, ['scripts']);
});



