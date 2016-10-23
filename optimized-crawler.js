//Notes

/*******
Promise 
https://www.promisejs.org/
It is a super set of ES6 Promises designed to have readable, 
performant code and to provide just the extensions that are 
absolutely necessary for using promises today.
********/

var http = require("http");
var Promise = require("promise"); //ES6 buit-in object
var cheerio = require("cheerio");
var baseUrl = "http://www.imooc.com/learn/";
// var url ="http://www.imooc.com/learn/348";
var videoIds = [348,637,259,75,197];

var courseArray = [];
videoIds.forEach(function(courseId){
	courseArray.push(getPageAsync(baseUrl+courseId));
});


function getPageAsync(url){
	
	return new Promise(function(resolve,reject){
		 console.log("It is crawlering...");
        
        http.get(url,function(res){
			var html = "";

			res.on("data",function(data){
				html+=data;
			});

			res.on("end",function(){
				resolve(html);
				//**when response receive 'end' evenr , call the unName function and triggrt reslove callbackFn
				// var courseData = filterChapters(html);
				// printInfo(courseData);
			});

		}).on("error",function(e){
			reject(e);
			console.log("ERRR！！");
		});
	});
};

// Promise.all(promiseArray) is to make every promise object becoming 'slove' status
// When each promise object(every element in promiseArray) goes into reslove/reject status , 
// then return the value-array by exute order

//Main()
Promise.all(courseArray).then(function onFulfilled(pages){
	
     //var coursesData = [];

     pages.forEach(function(html){
     	// console.log("pages.forEach");
     	//var coursePkg = filterChapters(html);
     	//coursesData.push(coursePkg);
     	// console.log("coursesData - printInfo.");
    	printInfo(filterChapters(html));     	
     });

     
}, function onRejected(e){
    console.log(e);
});

function filterChapters(html){
	// console.log("filterChapters(html).");
	var $ = cheerio.load(html);
	var chapters = $(".chapter");
    var title = $(".course-infos .path span").text();
    
    // console.log("title:"+title);
	var courseData = {
		title:title,
		course:[]  //define an array name 'course' with no elements
	} ; 
    
     // console.log("chapters.each======"+courseData.title);
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
             // console.log("videos:"+videoId.trim()+" videoTitle"+videoTitle.trim());
        });
        
        // console.log("course.push");
        courseData.course.push(chapterData);
	}); 
        // console.log("return course");
  	    return courseData;
};

function printInfo(coursePkg){
	    // console.log("printInfo(coursePkg).");
	    console.log("=========printInfo BEGIN=========");
        
        var courseTitle = coursePkg.title;
		// console.log("courseTitle");
		console.log(courseTitle.replace(/\s+/g,"")+"\n");

        coursePkg.course.forEach(function(currentCourse){
		var chapterTitle = currentCourse.chapterTitle;
		// console.log("coursePkg.course");
		console.log(chapterTitle.replace(/\s+/g,"")+"\n");
        
        currentCourse.videos.forEach(function(video){
        // console.log("【"+ video.id.trim() +"】"+video.title.trim() +"\n")

        	console.log("【"+ video.id.replace(/\s+/g,"") +"】"+video.title.replace(/\s+/g,"") +"\n")
        });
	});
        console.log("=========printInfo DONE=========");
        console.log("\n");
}


