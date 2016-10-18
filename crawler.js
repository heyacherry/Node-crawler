var http = require("http");
var querystring = require("querystring");

var postData = querystring.stringify({
	"content":"This is a test",
	"cid" : "348"
});

var urlRequest = {
	hostname: "www.imooc.com",
	port: 80,
	path:"/course/docomment",
	method:"POST",
	headers:{
		"Host":"www.imooc.com",
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0",
		"Accept":"application/json, text/javascript, */*; q=0.01",
		"Accept-Language":"zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
		"Accept-Encoding":"gzip, deflate",
		"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
		"X-Requested-With":"XMLHttpRequest",
		"Referer":"http://www.imooc.com/comment/348",
		"Content-Length": postData.length ,
		"Cookie"://The athu acc/pw info// ,
		"Connection":"keep-alive"
	}
};

var req = http.request(urlRequest,function(res){
	console.log("Status: "+res.statusCode);
	console.log("headers: "+JSON.stringify(res.headers));

    res.on("data",function(chunk){
    	console.log(Buffer.isBuffer(chunk));
    	console.log(typeof chunk);
    });

    res.on("end",function(){
    	console.log("comment success！");
    });
});

// return an requestClient object

req.on('error',function(e) {
	console.log("Error :"+e.message);
});

req.write(postData);

req.end();