var http = require("http");
var url = "http://www.imooc.com/learn/348"

// http API : http.get(options, callback)
http.get(url,function(res){
	var html = "";
    
    // Event API : emitter.on(event, listener)
	res.on("data" ,function(data){
		// console.log("每次返回的data："+data);
		html += data;
	});

	res.on("end",function(){
		// console.log("==========");
		console.log(html);
	});
}).on("error",function(){
	console.log("获取课程数据出错");
});