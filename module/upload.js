/**
 * Created by Administrator on 2017/3/28.
 */
const path = require('path'),
    multer = require('multer');
//上传路径处理  上传之后重命名
debugger;
let storage = multer.diskStorage({
    //上传路径
    destination: path.join(process.cwd(),'public/image/upload/'),
    filename: function(req,file,callback){
        let filename = (file.originalname).split('.');
        callback(null, `${Date.now()}.${filename[filename.length - 1]}`);
    }
});

let upload = multer({
    storage: storage,
    limits: {
        //限制上传文件的大小
    }
});
module.exports = upload;