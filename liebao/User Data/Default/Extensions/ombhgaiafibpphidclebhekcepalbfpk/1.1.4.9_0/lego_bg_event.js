(function(){if(window.external&&external.lego&&external.lego.Events){chrome.lego||(chrome.lego={});var b=Object.create(null);external.lego.Events.dispatch=function(a,e,c,g,d,m){if(a in b){var h=b[a],k=h.length;if(0!==k)for(var l=Array.prototype.slice.call(arguments,1).map(function(a){return a}),f=0;f<k;++f)h[f].apply(null,l)}};chrome.lego.Events={};chrome.lego.Events.addEventListener=function(a,e){a in b&&0!==b[a].length||external.lego.Events.AttachEvent(a);(b[a]||(b[a]=[])).push(e)};chrome.lego.Events.removeEventListener=
function(a,e){if(a in b){for(var c=b[a],g=c.length,d=0;d<g;++d)if(c[d]===e){c.splice(d,1);break}0===c.length&&(delete b[a],external.lego.Events.DetachEvent(a))}}}})();