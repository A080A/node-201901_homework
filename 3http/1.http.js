var http = require('http');

/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response){
    console.log(request.method);//获取请求方法
    console.log(request.url);//获取请求里的URL地址
    console.log(request.headers);//获取请求头

    response.statusCode = 404;//设置状态吗
    //设置响应类型，编码为UTF-8
    response.setHeader('Content-Type','text/html;chartset=utf-8');
    response.setHeader('name','zfpx');//设置响应头
    response.write(new Date().toString());
    response.end();
}

//每当又请求来的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);
server.listen(7001,'localhost')