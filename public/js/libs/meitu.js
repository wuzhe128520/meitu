(function(){
    //自定义功能菜单(包括主菜单和二级菜单)
//xiuxiu.setLaunchVars("customMenu", [{"decorate":["basicEdit","text","border","doodle","localFixed"]}]);
    xiuxiu.setLaunchVars("customMenu", ["decorate"]);
    /*第1个参数是加载编辑器div容器，第2个参数是编辑器类型，第3个参数是div容器宽，第4个参数是div容器高*/
    xiuxiu.embedSWF("altContent",3,"100%","700px");

//修改为您自己的图片上传接口
    xiuxiu.setUploadURL("http://192.168.1.66:3000/upload");
    xiuxiu.setUploadType(2);
    xiuxiu.setUploadDataFieldName("upload_file");
    xiuxiu.onInit = function () {
        //xiuxiu.loadPhoto("http://open.web.meitu.com/sources/images/1.jpg");
    }
    xiuxiu.onUploadResponse = function (data) {
        try{
            var obj = null;
            data = data.replace(/\\/g,'/');
            data = JSON.parse(data);
            alert(data.des + '保存路径为：\r\n' + data.pic);
        } catch(e) {
            alert(e);
        }
    }
})();