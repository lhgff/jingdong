var clipstring=function(a,b){if(!a||!b)return"";for(var c=0,d=0,e="",d=0;d<a.length;d++){255<a.charCodeAt(d)?c+=2:c++;if(c>b)return e+"..";e+=a.charAt(d)}return a},tuiJian={init:function(){window.localStorage.getItem("tj_state_tj");if(window.localStorage.getItem("tj_RecommendInfo")){legoAfterPlay.Report(125,30,"4","");var a=window.localStorage.getItem("tj_RecommendInfo");tuiJian.html(JSON.parse(a))}window.localStorage.removeItem("tj_state_tj")},AddTVByJson:function(a){window.external.lego.tvtrack.AddTVByJson(a)},
html:function(a){console.log("d::",a);try{var b=a.json;$(".left img").attr("src",b.coverImage);$(".right .p1").html(clipstring(b.word,30));$(".right .p1").attr("title",b.word);if(0<b.actor.length&&""!=b.actor[0]){for(a=0;a<b.actor.length&&!(1<a);a++);$(".right .p2").html("\u2014\u2014\u300a"+b.title+"\u300b")}$(".left,input,.p1").click(function(){var a=$(this).attr("_value");legoAfterPlay.Report(125,30,"1",a);window.open(b.coverUrl);window.close()});$("#addplay").click(function(){legoAfterPlay.Report(125,
30,"2","");tuiJian.AddTVByJson(JSON.stringify(b));window.close()});$(".clear").click(function(){legoAfterPlay.Report(125,30,"3","");window.close()})}catch(c){legoAfterPlay.Report(125,30,"5","")}}};tuiJian.init();setTimeout(function(){window.close()},15E3);
