var http = require("http");
var cheerio = require("cheerio");
var url ="http://www.imooc.com/learn/348";

http.get(url,function(res){
	var html = "";

	res.on("data",function(data){
		html+=data;
	});

	res.on("end",function(){
		var courseData = filterChapters(html);

		printInfo(courseData);
	});

}).on("error",function(){
	console.log("获取课程数据出错！！");
});


function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $(".chapter");

	var courseData = [] ; 
	// equal to var courseData = new Array();
    
    // console.log("chapters.each======");
	chapters.each(function(index) {
		var chapter = $(this); 
		// current index object : chapters[index]
		var chapterTitle = chapter.find("strong").text();
		var videos = chapter.find(".video").children('li');
        var chapterData = {
        	chapterTitle :chapterTitle,
        	videos : []
        };
        
        // console.log("videos.each======");
        videos.each(function(item){ 
            var video = $(this).find('.J-media-item');
            var videoId = video.attr('href').split('video/')[1]; 
            var videoTitle = video.text();
            // console.log("videos.each==ing==");

            chapterData.videos.push({  //array keyandvalue , Object.keys
            	title : videoTitle ,
            	id : videoId
            });
        });
        
        //console.log("courseData.push");
        courseData.push(chapterData);
	}); 
        
  	    return courseData;
}

function printInfo(courses){
        courses.forEach(function(currentCourse){
		var chapterTitle = currentCourse.chapterTitle;
		// console.log(chapterTitle.trim()+"\n");
		console.log(chapterTitle.replace(/\s+/g,"")+"\n");
        
		var videos = currentCourse.videos;
        videos.forEach(function(video){
        	// console.log("【"+ video.id.trim() +"】"+video.title.trim() +"\n")
        	console.log("【"+ video.id.replace(/\s+/g,"") +"】"+video.title.replace(/\s+/g,"") +"\n")
        });
	});
}


//Notes

/*******
npm install cheerio
cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活的jQuery核心实现。
适合各种Web爬虫程序。
********/

/*******
remove the space of a srting
srtingA.trim(); remove the space at the begining and end of srtingA
stringB.trim(); remove all the space at the begining and end of srtingA
********/