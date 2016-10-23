const https = require("https");
var querystring = require("querystring"); 

var postData = querystring.stringify({
	"adults":1,
	"children":0,
	"adultsv2":1,
	"childrenv2":"",
	"infants":0,
	"cabinclass":"economy",
	"rtn":0,
	"preferdirects":false,
	"outboundaltsenabled":false,
	"inboundaltsenabled":false,
	"ref":"day-view"
});


var options = {
    hostname: "www.skyscanner.com.hk",
	port: 443,
	path:"/transport/flights/can/chc/170604/airfares-from-guangzhou-to-christchurch-in-june-2017.html?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=day-view",
	// method:"GET",
	headers:{
		"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
		"Accept-Encoding":"gzip, deflate, br",
		"Accept-Language":"zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
		"Referer":"https://www.skyscanner.com.hk/transport/flights/can/chc/170604/airfares-from-guangzhou-to-christchurch-in-june-2017.html?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=day-view",
		"Connection":"keep-alive",
		"Host":"www.skyscanner.com.hk",
		"Cookie":'X-Mapping-fpkkgdlh=A68441A39FD59AA2C4E51F7090677B32; scanner=adults:::1&originalAdults:::1&adultsV2:::1&children:::0&originalChildren:::0&infants:::0&originalInfants:::0&charttype:::1&rtn:::false&preferDirects:::false&includeOnePlusStops:::true&cabinclass:::Economy&tripType:::one-way&ncr:::false&lang:::EN&currency:::HKD&outboundAlts:::false&inboundAlts:::false&usrplace:::HK&from:::CAN&to:::CHC&oym:::1706&oday:::04&wy:::0&iym:::1706&iday:::04&legs:::CAN%7C2017-06-04%7CCHC%7C%7C%7C&childrenV2:::&fromCy:::CN&toCy:::NZ; ssculture=locale:::en-GB&currency:::HKD&market:::HK; ssab=Fss_groupMessaging_V3:::b&Ads_UseESIAds_V1:::b&Hfe_PricePerNight_V2:::b&Car_GooglePlaces_V10:::b&scaffold_wireup_dont_delete_V1:::b&hbe_sorting_V9:::a&FlightsHeroImage_GG_27_06_2016_57_51_V2:::a&Apps_ErrorLogging_Android_V5:::on&Xsell_HomeReturningMessageIt2_V2:::d&Hsc_ChildrenAgeView_V10:::b&AVGS_Android_TopDealsCaret_V1:::on&use_contentful_for_seo_pages_EnabletraffictoCFBAAirlinepage_17_10_2016_50_49_V3:::b&AVGS_iOS_ScreenshotSharing_ShortenerVariation_V1:::c&FlightsHeroStraplineUpper_ConfidencemessageforIN_06_09_2016_42_06_V2:::c&fps_directionalpricing_V2:::b&BPK150_NewPrimaryButtonDesign_V2:::b&FlightsiOSProdTest_V2:::a&INS1887_ConsumeStoredPricesOnBV_V9:::b&AEP_SEOPageUniversalLinksExperiment_TR_V3:::on&GHT617_FlightDurationOnBrowse_V2:::a&UtidTravellerIdentity_V11:::b&Car_AATest_V4:::a&INS1846_PerDayDirectness_V1:::b&WebApps_GrapplerMPLogging_V9:::b&GHT571_HomepageDiscoveryShelvesRollOut_V7:::a&INS1683_BrowseUpdating_V6:::b&FlightsAndroidProdTest_V1:::b&Car_AWS_API_V24:::b&Hsc_MexicanToAS2_V4:::b&fps_grappler_V7:::b&AFS_DayView_Firebase_NPS_V10:::off&fbw_paypalEnabled_V2:::a&AfsKeywordsSelection_V1:::b&FlightsHeroImage_US_19_07_2016_10_08_V2:::b&EPS825_BrowseOverNNLowestPrice_V7:::a&FlightsHeroImage_US_25_07_2016_40_13_V2:::b&INS1964_MVProfileChange_V2:::b&INS1606_IndicativeResultsView_V1:::a&fps_sessionstate_V8:::b&Apps_ErrorLogging_iOS_V6:::on&FlightsHeroImage_BR_05_07_2016_33_21_V1:::b&FAB_DayviewCTA_Colour_V1:::a&FlightsHeroStraplineLower_PRE_PRODHeroimagechangefortheUSmarket_03_05_2016_00_40_V1:::a&ADS_Android_MigrationPopupExperiment_V9:::a&WebApps_FacebookPixelUpgrade_V5:::b&AAExperiment_V8:::b&ADS_Airbnb_Inline_V4:::a&TurnFeatureTests:::on&Car_NewGrouping_V6:::b&FlightsHeroImage_CA_11_07_2016_36_20_V2:::b; ssassociate=; abgroup=60235545; X-Mapping-rrsqbjcb=n585oyq9u4p7nk2fv507dsrhhi1pltmx; X-Mapping-ecilpojl=9E5E3BBB2B3FA2A8291041A36D26B30B; ASP.NET_SessionId=fssk9taz0; firstvisit=overlay:::show; preferences=ed299c745b634f30aa2a3b7dcccfd0da; ver=28; settings=acql:::true; acq=1fd352cc-279f-4dc2-a954-37853c616f30|1fd352cc-279f-4dc2-a954-37853c616f30; D_SID=58.62.101.199:dRyPUsEgmhXYBvyhDxJj7GzRPnlfOUHzJzAnRXajZY0; D_PID=3AED90B8-ECEA-3EF3-B973-F37429C83E7E; D_IID=E43BB637-1A16-368D-A625-58F0E91A36FD; D_UID=3037B054-1AD0-3C17-8490-8411B36BC03A; D_HID=+BqDJPwbNFM4MRZHc29rJefcBqY92FMgMh08SGOIsS0; D_ZID=24F50A77-4902-3C47-8362-73C6C1746AE0; D_ZUID=0C1487D6-1F62-3039-87EE-F7588AE36B04; DAPROPS="bjs.webGl:1|bjs.geoLocation:1|bjs.webSqlDatabase:0|bjs.indexedDB:1|bjs.webSockets:1|bjs.localStorage:1|bjs.sessionStorage:1|bjs.webWorkers:1|bjs.applicationCache:1|bjs.supportBasicJavaScript:1|bjs.modifyDom:1|bjs.modifyCss:1|bjs.supportEvents:1|bjs.supportEventListener:1|bjs.xhr:1|bjs.supportConsoleLog:1|bjs.json:1|bjs.deviceOrientation:0|bjs.deviceMotion:1|bjs.touchEvents:0|bjs.querySelector:1|bjs.battery:1|bhtml.canvas:1|bhtml.video:1|bhtml.audio:1|bhtml.svg:1|bhtml.inlinesvg:1|bcss.animations:1|bcss.columns:1|bcss.transforms:1|bcss.transitions:1|idisplayColorDepth:24|bcookieSupport:1|sdevicePixelRatio:1.5|sdeviceAspectRatio:16/9|bflashCapable:1|baccessDom:1|buserMedia:1"; sspref=authcheckedexpiry:::1477233029685; _ga=GA1.3.46831674.1477227536; sstrack=ed299c74-5b63-4f30-aa2a-3b7dcccfd0da; ssinitacq=4409777b-dc68-4693-8286-aba764120bcc; __gads=ID=e987795b8f18bbda:T=1477227542:S=ALNI_MYHiuv2Tp5sUN7nbu5RwdC7YNlUQA; mp_mixpanel__c=0; mp_grappler__c=0; ADRUM=s=1477232872251&r=https%3A%2F%2Fwww.skyscanner.com.hk%2Ftransport%2Fflights%2Fcan%2Fchc%2F170604%2Fairfares-from-guangzhou-to-christchurch-in-june-2017.html%3F-825507930; sssessionid=wrs8suvjo; _gat=1; _gat_uatracker=1; mp_2434748954c30ccc5017faa456fa3d38_mixpanel=%7B%22distinct_id%22%3A%20%223b0417d6-b970-47ac-f23e-07d6e176fc96%22%2C%22User%20Locale%22%3A%20%22EN-GB%22%2C%22User%20Market%22%3A%20%22HK%22%2C%22User%20Currency%22%3A%20%22HKD%22%2C%22New%20User%22%3A%20false%2C%22Internal%20User%22%3A%20%22FALSE%22%2C%22Mobile%22%3A%20%22FALSE%22%2C%22Tablet%22%3A%20%22FALSE%22%2C%22OS%20Version%22%3A%20%22NT%2010.0%22%2C%22Device%20Model%22%3A%20%22FIREFOX%20-%20WINDOWS%22%2C%22Browser%20Version%22%3A%20%2249.0%22%2C%22Cookie%20Policy%20Alert%20Acknowledged%22%3A%20false%2C%22Skyscanner%20User%20Id%22%3A%20%228fe29164-539e-4ce4-8de4-80c8f5325834%22%2C%22Skyscanner%20UTID%22%3A%20%228fe29164-539e-4ce4-8de4-80c8f5325834%22%2C%22Skyscanner%20UTID%20Status%22%3A%201%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D',
		"Upgrade-Insecure-Requests":1,
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0"	
	}
};


var req = https.request(options,function(res){
	console.log('statusCode:', res.statusCode);
  	console.log('headers:', res.headers);
    
	// var chunks = [];
	// var size = 0;

  	res.on('data', function(d){
       //process.stdout.write(d); 
  	});

    // var data = Buffer.concat(chunks,size);  
    // var html = data.toString();
    // console.log(html);
  });

req.write(postData);

req.end();

req.on('error', function(e){
  console.error(e);
});
