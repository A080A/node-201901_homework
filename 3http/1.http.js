var http = require('http');
var fs = require("fs");
const path = require("path")

/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response){


    response.statusCode = 200;//设置状态吗
    //设置响应类型，编码为UTF-8
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.setHeader('name','zfpx');//设置响应头
    fs.readFile(path.join(__dirname,"index.html"),function(err,data){

        response.write(data);//写响应体
        response.end();
    })


}

//每当又请求来的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);
server.listen(7001,'localhost')