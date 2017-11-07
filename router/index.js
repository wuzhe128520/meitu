const express = require('express'),
    router = express.Router(),
    //上传文件模块
    upload = require('../module/upload');

//默认跳转的首页
router.get('/',(req, res)=>{
    res.render('meitu')
});

//单文件上传
router.post('/upload', upload.single('upload_file'),function(req, res, next){

        console.log('上传图片');
        let fileData = req.file,
            fileName = fileData.filename,
            destination = fileData.destination,
            imgSrc = destination.substr(destination.indexOf('public') + 6);

        res.json({
            des: "上传成功!",
            pic: imgSrc + fileName
        });

});

module.exports = router;