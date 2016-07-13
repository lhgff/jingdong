(function(){
    if(!window.external || !external.lego || !external.lego.Events){
        return;
    }

    if(!chrome.lego){
        chrome.lego = {};
    }

    var events = Object.create(null);

    function $slice(args, pos){
        return Array.prototype.slice.call(args, pos);
    };

    external.lego.Events.dispatch = function(ev,a1){
        if(ev in events){
            var arr = events[ev];
            var len = arr.length;
            if(len !== 0){
                var args = $slice(arguments, 1).map(function(a){
                    return a;
                });
                for(var i=0;i<len;++i){
                    arr[i].apply(null, args);
                }
            }
        }
    };

    chrome.lego.Events = {};

    chrome.lego.Events.addEventListener = function(ev, listener){
        if(!(ev in events) || events[ev].length === 0){
            external.lego.Events.AttachEvent(ev);
        }
        (events[ev] || (events[ev] = [])).push(listener);
    };

    chrome.lego.Events.removeEventListener = function(ev, listener){
        if(ev in events){
            var arr = events[ev];
            var len = arr.length;
            for(var i=0;i<len;++i){
                if(arr[i] === listener){
                    arr.splice(i, 1);
                    break;
                }
            }
            if(arr.length === 0){
                delete events[ev];
                external.lego.Events.DetachEvent(ev);
            }
        }
    }
})();