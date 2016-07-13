var Report=function(id,type,value,value1){
		var r= external.lego.Common && external.lego.Common.Report ? external.lego.Common.Report:external.lego.Report;
		r(id,type,'&value1='+value+'&value1='+value1);
	}
var $=function(id){return document.getElementById(id);}
$("clear").onclick=function(){
	window.close();
};
$("star").onclick=function(){
	Report(128,3,"0","");
};
/*$("open").onclick=function(){
	Report(128,3,"1","");
	window.open("http://wifi.liebao.cn/thread-3802-1-1.html");
};*/