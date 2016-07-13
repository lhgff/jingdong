(function(){
	var Y={
		Report:function(id,type,value,value2){
			var r= window.external.lego.Common && window.external.lego.Common.Report ? window.external.lego.Common.Report:window.external.lego.Report;
			r(id,type,'&value1='+value+'&value2='+value2);
		},
		Popup:function(str){
			var r=(external.lego.Browser && external.lego.Browser.HoldPopup)?external.lego.Browser.HoldPopup:external.lego.browser.Popup;
			r(str);
		}
	};
    function Init(){
		//调用是否成功
		external.lego.Wifi.OpenWireless(function(d){
			if(!d){
				//有没有无线网卡
				external.lego.Wifi.Wireless(function(d){
					Y.Report(128,1,"0",(d?"1":"0"));
					if(d){
						window.localStorage.setItem("star_time",String(new Date().getTime()));
						chrome.browserAction.setPopup({popup: "pop.html"});
						Y.Popup('{"popup":"0"}');
						chrome.browserAction.setPopup({popup: ''});
						external.lego.Wifi.DownLoadFile("http://dl.liebao.cn/kw/kwifi_lb.exe");
					}else{
						chrome.browserAction.setPopup({popup: "nowf.html"});
						Y.Popup('{"popup":"0"}');
						chrome.browserAction.setPopup({popup: ''});
					}
				});
			}else{
				Y.Report(128,1,"1","");
			}
		});
    }
	//当地址栏图标被点击时触发
	chrome.browserAction.onClicked.addListener(Init);
	function event_downloadcompleteCallback(d){
		var startime=window.localStorage.getItem("star_time");
		if(startime){
			var endtime=new Date().getTime();
			var time=Math.round((endtime-parseInt(startime))/1000);
			Y.Report(128,1,time,"");
		}else{
			Y.Report(128,1,"1","");
		}
		chrome.browserAction.setPopup({popup: "okpop.html"});
		Y.Popup('{"popup":"0"}');
		chrome.browserAction.setPopup({popup: ''});
		external.lego.Wifi.RunInstaller();
	}
	chrome.lego.Events.addEventListener('event_downloadcomplete', event_downloadcompleteCallback);
})();