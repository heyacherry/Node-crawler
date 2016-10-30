/***********
Story : crawl the top20/40 popular movies from douban.movie.com

************/
"use strict";

var https = require("https");
<<<<<<< HEAD
var cheerio = require("cheerio");
var url = "https://movie.douban.com/top250";
=======

var url = "https://movie.douban.com/top250";

>>>>>>> e3e4efb7e19ecd2b4532b2d50c6939928bbf1321

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
<<<<<<< HEAD


function filterContent(html){
  var $ = cheerio.load(html);
  var movies = $(".article ol").children('li');
  var movieObjs = [];
  //console.log("movies.length：" + movies.length);
  /***
  movieObj contains:
  
  ***/
}
=======
>>>>>>> e3e4efb7e19ecd2b4532b2d50c6939928bbf1321
