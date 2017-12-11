const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');


const server = express();
server.listen(3000);

// POST数据
server.use(bodyParser.urlencoded( {extended: false} ));

// 文件上传
var objMulter = multer({dest:'./www/file_upload/'});
server.use(objMulter.any());

server.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); 
    res.header('Access-Control-Allow-Credentials', true); 
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

//2.cookie、session
server.use(cookieParser());
(function (){
  var keys=[];
  for(var i=0;i<100000;i++){
    keys[i]='a_'+Math.random();
  }
  server.use(cookieSession({
    name: 'sess_id',
    keys: keys,
    maxAge: 20*60*1000  //20min
  }));
})();

// server router
server.use('/admin/', require('./admin/admin')());