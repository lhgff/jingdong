function report_mes(){return external.lego?external.lego.Common&&external.lego.Common.Report?external.lego.Common.Report:external.lego.Report?external.lego.Report:void 0:function(){console.log("NOT IN LIEBAO BROWSER!")}}function stopBubble(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0}var $=function(e){return document.getElementById(e)},dataArray,news_content,news_content_a,dd=new Date;$("day_date").innerHTML=dd.getMonth()+1+"月"+dd.getDate()+"日";var send_report=report_mes(),ws=window.localStorage,WEATHERDATA="",weatherURL="http://www.duba.com/tianqiyubao.html?f=lbtq&cityid=";$("cancelBtn").onclick=function(e){send_report(137,101,"&value1=1&value2=3&value3="+localStorage.cityCode),window.close(),stopBubble(e)},$("info_settings").onclick=function(e){window.close(),stopBubble(e),chrome.extension.sendMessage("",{act:"show_settings"},function(e){}),external.lego.browser.Popup('{"popup":"0"}'),chrome.browserAction.setPopup({popup:""})},window.onblur=function(){window.setTimeout(function(){window.close()},1e4)};var ADLINK="",upReport=function(e){var t=new XMLHttpRequest;t.open("GET",e,!1),t.send(null)},getAdData=function(e){window.external.lego.ADService.GetADByPosition("lb_tq_popup_news","","",function(e,t){try{var a=JSON.parse(e);if(""==a.url||null==a.url)ADLINK="false";else if(a.url){for(var n,o=a.url.split("&"),r=0;r<o.length;r++){var i=o[r].split("=");"ad_id"==i[0]&&(n=i[1])}ADLINK=a.url+"report="+a.report_param+"&ad_id="+n,upReport(a.report_param+"&ad_id="+n+"&snode=201")}}catch(c){throw c}popup_update.init()})}(),popup_update={init:function(){function e(){if(null!=ADLINK.match("http")){var e=$("ad_ifram");e.style.display="block",e.innerHTML='<iframe marginwidth="1" marginheight="1" src="'+ADLINK+'" frameborder="no" width="260" scrolling="no" height="19"></iframe>'}}function t(e,t){var a="晴*01,多云*02,阴*03,小雨*04,中雨*05,大雨*06,雨*07,暴雨*07,冻雨*07,特大暴雨*07,大暴雨*07,阵雨*08,雷雨*09,雷阵雨*09,雪*10,雨夹雪*11,小雪*12,中雪*12,大雪*12,暴雪*12,阵雪*12,冰雹*13,大雾*14,雾*14,霾*14,雾霾*14,沙尘*15,扬沙*15,强沙尘暴*15,沙尘暴*15,浮尘*15",n="",o="";try{null!=e.match(/伴有(.*)/)?n=e.match(/伴有(.*)/)[0]:null!=e.match(/到(.*)/)?(n=e.match(/到(.*)/)[1],null!=n.match(/转(.*)/)&&(n=n.match(/转(.*)/)?n.match(/转(.*)/)[1]:n,console.log(n))):null!=e.match(/转(.*)/)?(n=e.match(/转(.*)/)?e.match(/转(.*)/)[1]:e,null!=n.match(/到(.*)/)&&(n=n.match(/到(.*)/)[1]),console.log(n)):(n=e.match(/转(.*)/)?e.match(/转(.*)/)[1]:e,console.log(n))}catch(r){console.log(r)}var i=new RegExp(n+"\\*(\\d*)?\\,");try{o=t?weathGif.match(i)[1]:a.match(i)[1]}catch(r){console.log(r)}return o}function a(e){var t="晴*1,多云*2,阴*3,小雨*4,中雨*5,大雨*5,雨*5,暴雨*5,冻雨*5,大暴雨*5,特大暴雨*5,阵雨*5,雷雨*5,雷阵雨*5,雪*6,雨夹雪*6,小雪*6,中雪*6,大雪*6,阵雪*6,暴雪*6,冰雹*6,雾*7,大雾*7,霾*7,雾霾*7,沙尘*7,扬沙*7,强沙尘暴*7,沙尘暴*7,浮尘*7",a="",n="";try{null!=e.match(/伴有(.*)/)?a=e.match(/伴有(.*)/)[0]:null!=e.match(/到(.*)/)?(a=e.match(/到(.*)/)[1],null!=a.match(/转(.*)/)&&(a=a.match(/转(.*)/)?a.match(/转(.*)/)[1]:a)):null!=e.match(/转(.*)/)?(a=e.match(/转(.*)/)?e.match(/转(.*)/)[1]:e,null!=a.match(/到(.*)/)&&(a=a.match(/到(.*)/)[1])):a=e.match(/转(.*)/)?e.match(/转(.*)/)[1]:e}catch(o){console.log(o)}var r=new RegExp(a+"\\*(\\d*)?\\,");return n=t.match(r)[1]}try{var n=JSON.parse(ws.shuju);try{var o=JSON.parse(ws.newsC)}catch(r){return console.log("Data errro"),window.close(),!1}if(n&&o.length>0&&null!=ADLINK.match("http"))try{if(ws.newsC){var i=JSON.parse(ws.newsC);e(),$("info_footer").style.height="80px"}}catch(r){return console.log("Data errro"),window.close(),!1}else if(n&&0==o.length&&null!=ADLINK.match("http"))e(),$("ad_ifram").style.top=0;else if(n&&o.length>0&&null==ADLINK.match("http"))try{if(ws.newsC)var i=JSON.parse(ws.newsC)}catch(r){return console.log("Data errro"),window.close(),!1}else n&&0==o.length&&null==ADLINK.match("http")&&($("info_footer").style.display="none")}catch(r){return console.log("Data errro"),window.close(),!1}var c=n.msgdata;i&&(news_content=i[0].Title,news_content_a=i[0].link),$("loading").style.display="none",i&&($("media_content").innerHTML=news_content,$("media_content").href=news_content_a,$("media_content").style.display="block"),console.log(c);var l=["优","空气良好","轻度污染","中度污染","重度污染","严重污染"],s=c.weatherInfo.city,p=(c.sk.weatherinfo.temp,c.sk.weatherinfo.WD),w=c.sk.weatherinfo.WS,h=c.yb.weatherinfo.weather1,u=popup_update.sortTemp(c.yb.weatherinfo.temp1),m=popup_update.sortTemp(c.yb.weatherinfo.temp2),d=popup_update.sortTemp(c.yb.weatherinfo.temp3);if(bBackDayTemp=popup_update.sortTemp(c.yb.weatherinfo.temp4),h.length>4?$("weather_qk").style.display="block":$("today_wind").style.display="block",c.weatherInfo.aqi&&c.weatherInfo.aqi.pm25){var _=c.weatherInfo.aqi.pm25,g=0,f=c.weatherInfo.aqi;f.aqi>0&&f.aqi<=50?g=0:f.aqi>50&&f.aqi<=100?g=1:f.aqi>100&&f.aqi<=150?g=2:f.aqi>150&&f.aqi<=200?g=3:f.aqi>200&&f.aqi<=300?g=4:f.aqi>300&&(g=5);var y="优*01,空气良好*01,轻度污染*02,中度污染*02,重度污染*02,严重污染*02,",b=l[g],v=new RegExp(b+"\\*(\\d*)?\\,"),k=y.match(v)[1],D="";switch(k){case"01":D="#5795F2";break;case"02":D="#DC5050"}$("pm_info_id").style.backgroundColor=D,$("pm_info_air").innerHTML=l[g],$("pm_number").innerHTML=_}var L=["周日","周一","周二","周三","周四","周五","周六"],I=new Date,T=I.getTime(),q=T+2592e5,C=new Date(q),A=C.getDay(),N=L[A];$("update_city").innerHTML=s,$("weather_qk").innerHTML=h,$("today_wind").innerHTML=p+w,$("weather_tem").innerHTML=u,$("tm_tem").innerHTML=m,$("back_tem").innerHTML=d,$("b_acquired_week").innerHTML=N,$("b_back_tem").innerHTML=bBackDayTemp;var S=a(c.yb.weatherinfo.weather1),R="",M="";switch(S){case"1":R="#3277DF",M="sun";break;case"2":R="#346EC2",M="cloudy";break;case"3":R="#3E69AD",M="overcast";break;case"4":R="#5785C1",M="rain";break;case"5":R="#4A4995",M="thunderstorm";break;case"6":R="#5CB5D3",M="snow";break;case"7":R="#888177",M="haze"}$("container").style.backgroundImage="url(../img/new_popup_weather/weather_type_bg"+a(c.yb.weatherinfo.weather1)+".png)",$("today_tem_bg").className=M,$("tm_tem_bg").style.backgroundImage="url(../img/weather_icon/icon_popup_type"+t(c.yb.weatherinfo.weather2)+".png)",$("back_tem_bg").style.backgroundImage="url(../img/weather_icon/icon_popup_type"+t(c.yb.weatherinfo.weather3)+".png)",$("b_back_tem_bg").style.backgroundImage="url(../img/weather_icon/icon_popup_type"+t(c.yb.weatherinfo.weather4)+".png)"},sortTemp:function(e){return e=e.split("~").sort(function(e,t){return parseInt(e)-parseInt(t)}).join(" - "),e=e.split("℃ - ").sort(function(e,t){return parseInt(e)-parseInt(t)}).join(" / ")}};$("info_header").onclick=function(){try{var e=JSON.parse(localStorage.wData)}catch(t){var e={sk:{weatherinfo:{temp:""}}};throw t}send_report(137,101,"&value1=1&value2=1&value3="+localStorage.cityCode+"&value4="+e.sk.weatherinfo.temp),window.open(weatherURL+ws.cityCode),window.close()},$("weather_detail").onclick=function(){try{var e=JSON.parse(localStorage.wData)}catch(t){var e={sk:{weatherinfo:{temp:""}}};throw t}send_report(137,101,"&value1=1&value2=1&value3="+localStorage.cityCode+"&value4="+e.sk.weatherinfo.temp),window.open(weatherURL+ws.cityCode),window.close()},$("pm_info_id").onclick=function(e){try{var t=JSON.parse(localStorage.wData)}catch(e){var t={weatherInfo:{aqi:{pm25:""}}};throw e}send_report(137,101,"&value1=1&value2=2&value3="+localStorage.cityCode+"&value4="+t.weatherInfo.aqi.pm25),window.open(weatherURL+ws.cityCode),window.close(),stopBubble(e)},$("info_footer").onclick=function(e){var t=e.target||e.srcElement;"media_content"==t.id&&(window.open($("media_content").href),window.close()),send_report(137,101,"&value1=1&value2=4&value3="+localStorage.cityCode)},window.oncontextmenu=function(){return!1};