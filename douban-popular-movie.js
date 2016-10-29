/***********
Story : crawl the top20/40 popular movies from douban.movie.com

************/
"use strict";

var https = require("https");

var url = "https://movie.douban.com/top250";


// ES6 Arrow function
https.get(url, res=> {  
  console.log("响应：" + res.statusCode);
}).on('error', function(e) {
  console.log("错误：" + e.message);
});
