/**
 * Created by Administrator on 2017/3/10.
 */
const http = require('http'),
       https = require('https'),
       fs = require('fs'),
       express = require('express'),
       app = express(),
       bodyParser = require("body-parser"),
       ejs = require('ejs'),

       //日志中间件
       logger = require('morgan'),

       //获取cookie
       cookieParser = require('cookie-parser'),
       session = require('express-session'),
       path = require('path');
       module.exports = app;
       //设置模板引擎的目录
       app.set('views',__dirname + '/views');

       //设置使用的模板引擎是ejs
       app.set('view engine','ejs');

       //设置存放静态文件的路由
       app.use(express.static(path.join(__dirname,'/public')));

       //在访问静态文件时，必须使加上bc这个路径
       //app.use('/article-detail',express.static(__dirname + '/article-detail/public'));

       //用来接收json的数据
       app.use(bodyParser.json({limit: '50mb'}));
       app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
       app.use(cookieParser('wuzhe128520'));//密钥
       app.use(session({secret:'wuzhe128520',resave: false, saveUninitialized: true}));//设置密钥


       //访问当前路径的时候，交给index文件里的路由方法来处理
       app.use('/',require('./router/index'));
       let server =http.createServer(app).listen(3000);
