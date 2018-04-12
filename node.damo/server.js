


//request 请求
//response 响应


const http=require("http");
var se=http.createServer(function(req,res){

    //console.log(req.url);
    var pamsrr=req.url.substring(1).split("&");
     var parms={};
    pamsrr.forEach(function(item){
        var tem=item.split("=");
        parms[tem[0]]=tem[1];
    });
    res.setHeader("Content-type","text/html;charset=utf-8");
    res.write(`<style>
    body{
    background:${parms['color']};
    }
    </style>`);


    res.end("<h1>这是我的第一个网络服务</h1>");
});
se.listen(3000);
