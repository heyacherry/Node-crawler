/***********
Story : crawl the top20/40 popular movies from douban.movie.com

************/
"use strict";

var https = require("https");
var cheerio = require("cheerio");
var url = "https://movie.douban.com/top250";

// ES6 Arrow function
https.get(url, res=> {  
  console.log('statusCode:', res.statusCode);
  var html ="";

  res.on('data', data => {
  	 html+=data
  });

  res.on("end", ()=>{
  filterContent(html);
  //printInfo();
  });
  
}).on('error', e=> {
  console.log("错误：" + e.message);
});


function filterContent(html){
  var $ = cheerio.load(html);
  var movies = $(".article ol").children('li');
  var movieObjs = [];
  //console.log("movies.length：" + movies.length);
  /***
  movieObj contains:
  
  ***/
}