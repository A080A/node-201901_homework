var http = require('http');
const fs = require("fs");
const path = require("path");
const mime = require('mime');
const  url =require("url");
/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response){
    // var url =request.url;
    // //true 表示query转为对象
    var urlObj = url.parse(request.url,true);
    console.log(urlObj);
    var pathname = urlObj.pathname
    console.log(mime.getType(url))

    if(pathname == '/'){
        response.statusCode = 200;//设置状态吗
        //设置响应类型，编码为UTF-8
        response.setHeader('Content-Type','text/html;chartset=utf-8');
        response.setHeader('name','zfpx');//设置响应头
        fs.readFile(path.join(__dirname,"index.html"),function(err,data){
            response.write(data);//写响应体
            response.end();
        })
    }else if(pathname == '/clock'){
        var counter = 0;
        var int = setInterval(function(){
            response.write(new Date().toString());
            counter ++;
            if(counter ==5){
                response.end();
            }
        })
    }else{
        static(pathname,response)
    }


    function static(url,response){
        //设置响应类型，编码为UTF-8
        response.setHeader('Content-Type',mime.getType(url)+';chartset=utf-8');
        response.setHeader('name','zfpx');//设置响应头
        fs.readFile(path.join(__dirname,url.slice(1)),function(err,data){
            response.write(data);//写响应体
            response.end();
        })
    }


}

//每当又请求来的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);
server.listen(7001,'localhost')