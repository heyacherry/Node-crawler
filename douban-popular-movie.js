/***********
Story : crawl the top25/50 popular movies from douban.movie.com
************/
"use strict";

var https = require("https");
var cheerio = require("cheerio");
var url = "https://movie.douban.com/top250";

// ES6 Arrow function
https.get(url, res=> {  
  console.log('statusCode:', res.statusCode);
  res.setEncoding('utf-8');

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
  //console.log(html);
  var $ = cheerio.load(html);
  var movies = $(".article ol").children('li');
  var movieObjs = [];
  console.log("movies.length：" + movies.length );
  /***
  movieObj contains:
  {moveName , country, year , descrition, score and display right tag}
  ***/
  movies.each(function(index) {
  	 var movie = $(this);
  	 var moveNames = movie.find(".title").text();
     var playable = movie.find(".playable").text();
     var start = movie.find(".rating_num").text();
     var descrition = movie.find(".inq").text();

  	 console.log("-- "+moveNames + " ["+ start +"] " +"\n");
  	  console.log("   "+descrition + playable +"\n");
  	
  });
   
}