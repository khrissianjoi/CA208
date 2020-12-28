if (self.CavalryLogger) { CavalryLogger.start_js(["+fzwa"]); }

__d("XCometVideoHomeLiveControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/watch/live/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("ShowSurfacesLoggingUtil",["Banzai","WebSession"],(function(a,b,c,d,e,f){"use strict";f.log=a;var g="show_surfaces";function a(a,c,d,e,f,h,i,j,k){b("Banzai").post(g,{entrypoint_surface:c,event:e,event_data:f,page_id:a,player_origin:j,player_suborigin:k,session_id:b("WebSession").getId(),surface:d,video_id:h,video_list_id:i})}}),null);
__d("cometVideoHomeScrollTo",["VideoHomeTypedLoggerLite","gkx","scrollTo"],(function(a,b,c,d,e,f){"use strict";e.exports=c;function c(c,d,e){c=c.getBoundingClientRect();var f=c.height;c=c.top;e=(window.innerHeight-d-e-f)/2+d;f=e-c;d=b("gkx")("1243461");b("scrollTo")({behavior:d?"auto":"smooth",left:a.pageXOffset,top:a.pageYOffset-f});b("VideoHomeTypedLoggerLite").log({event:"auto_scroll"})}}),null);
__d("cometVideoHomeScrollToRef",["cometVideoHomeScrollTo"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){if(a==null)return;a=a.current;if(a==null)return;b("cometVideoHomeScrollTo")(a,c,d)}}),null);
__d("VideoPlayerWithAutoCenterOnUserInitiatedPlay.react",["CometViewportMarginsContext","React","VideoPlayerHooks","cometVideoHomeScrollToRef","stylex","usePrevious"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useRef(null),c=b("VideoPlayerHooks").usePaused(),d=b("usePrevious")(c),e=b("VideoPlayerHooks").useLastPlayReason(),f=g.useContext(b("CometViewportMarginsContext")),h=f.bottom,i=f.top;g.useEffect(function(){d===!0&&c===!1&&e==="user_initiated"&&b("cometVideoHomeScrollToRef")(a,i,h)},[e,c,d,h,i]);return g.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb",ref:a})}}),null);
__d("CometVideoHomeFeedAutoAdvanceAPIContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({advance:function(){},register:function(){},unregister:function(){}});e.exports=c}),null);
__d("CometVideoHomeFeedUnitPositionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(0);e.exports=c}),null);
__d("VideoPlayerWithVideoHomeAutoAdvance.react",["CometVideoHomeFeedAutoAdvanceAPIContext","CometVideoHomeFeedUnitPositionContext","React","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=b("VideoPlayerHooks").useController(),c=g.useContext(b("CometVideoHomeFeedAutoAdvanceAPIContext")),d=g.useContext(b("CometVideoHomeFeedUnitPositionContext")),e=b("VideoPlayerHooks").useVideoPlayerCurrentLoop(),f=b("VideoPlayerHooks").useVideoPlayerTotalLoops(),h=g.useRef(a.getCurrentState().ended);g.useEffect(function(){var b=a.subscribe(function(){var b=a.getCurrentState();b=b.ended;!h.current&&b&&e>=f&&c.advance(d);h.current=b});return function(){b.remove()}},[c,a,e,d,f]);return null}}),null);
__d("VideoPlayerWithVideoHomeLogging.react",["React","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.feedAggregationType,d=a.reactionVideoChannelType,e=b("VideoPlayerHooks").useController();g.useEffect(function(){d!=null&&e.setAdditionalLogData("reaction_video_channel_type",d),c!=null&&e.setAdditionalLogData("feed_aggregation_type",c)},[e,c,d]);return null}}),null);
__d("VideoPlayerWithVideoCardsOverlayDeferred.react",["React","deferredLoadComponent","requireDeferred"],(function(a,b,c,d,e,f){"use strict";b("React");a=b("deferredLoadComponent")(b("requireDeferred")("VideoPlayerWithVideoCardsOverlay.react"));e.exports=a}),null);
__d("useVideoPlayerClickToPauseInteraction",["fbt","React","VideoPlayerHooks","gkx"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(){var a=b("VideoPlayerHooks").usePlaying(),c=b("VideoPlayerHooks").useController(),d=b("VideoPlayerHooks").useIsLive(),e=h.useCallback(function(){c.pause("user_initiated")},[c]);a=a&&!(b("gkx")("1269128")&&d);return a?{ariaLabel:g._("Pause video"),handler:e,overlayLabel:""}:null}}),null);
__d("generateChainingSessionID",["Random"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){return"f"+(b("Random").random()*(1<<30)).toString(16).replace(".","")}}),null);
__d("useCometTahoeChainingDepth",["React","generateChainingSessionID"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=g.createContext({chainingDepthDispatch:null,chainingDepthState:0,chainingSessionID:null});a=function(){var a=0,c=function(a,b){switch(b.type){case"INCREMENT":return a+1;default:return a}};c=g.useReducer(c,a);var d=c[0],e=c[1];a=g.useState(function(){return b("generateChainingSessionID")()});var f=a[0];a[1];return g.useMemo(function(){return{chainingDepthDispatch:e,chainingDepthState:d,chainingSessionID:f}},[e,d,f])};f.useChainingDepth=a;c=function(){return g.useContext(h)};f.useChainingDepthContext=c;d=function(a){var b=a.children;a=a.value;return g.jsx(h.Provider,{value:a,children:b})};f.CometTahoeChainingDepthContextProvider=d}),null);
__d("VideoHomeCometErrorBoundary.react",["CometErrorBoundary.react","React","VideoHomeTypedLoggerLite"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=g.useCallback(function(c){b("VideoHomeTypedLoggerLite").log({event:"js_error",exception:c.message,exception_trace:c.componentStack,module_class:a.moduleClass,unit_position:a.unitPosition})},[a.moduleClass,a.unitPosition]);return g.jsx(b("CometErrorBoundary.react"),{context:{project:"www_watch"},fallback:a.fallback,onError:c,children:a.children})}}),null);
__d("CometVideoHomeThreeDotContextMenuWrapperContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({contextMenuEnabled:null});e.exports=c}),null);
__d("CometVideoHomeFunnelLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({hasPermalinkInjection:!1});e.exports=c}),null);
__d("CometVideoHomeRootContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({autoplay:!0,injectedVideoID:null,isFacebookReferrer:!1,qplInstanceKey:0,renderedInWatchRoot:!1});e.exports=c}),null);
__d("CometVideoHomeSectionPositionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("CometVideoHomeShowSurfacesLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({entrypoint:"",pageID:null,sectionTypeName:"",surface:""});e.exports=c}),null);
__d("VideoHomeGlobalSoundContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({muted:!0,setMuted:function(){},setVolume:function(){},volume:1});e.exports=c}),null);
__d("useClearVideoHomeWatchAndScrollTriggerOnRouteChange",["CometVideoHomeWatchAndScrollTriggerContext","React","useCometRouterMainTabKey","useCometRouteTracePolicy"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=b("useCometRouterMainTabKey")(),c=b("useCometRouteTracePolicy")(),d=g.useContext(b("CometVideoHomeWatchAndScrollTriggerContext")),e=d.setWatchAndScrollTriggerVideo;g.useEffect(function(){a==="watch"&&e(null)},[c,e,a])}}),null);
__d("CometTahoeTracePolicyContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("VideoPlayerLoggingExternalLogContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({externalLogID:null,externalLogType:null});e.exports=c}),null);
__d("logVideoHomeWebFunnel",["CurrentUser","WebFunnelLogger","gkx"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d,e){if(!b("gkx")("1238150"))return;var f=new(b("WebFunnelLogger"))("VideoHomeWWWFunnelDefinition").setAction(a).setSessionKey(b("CurrentUser").getID());c!=null&&Object.entries(c).forEach(function(a){var b=a[0];a=a[1];f.addFunnelPayload(b,a)});d!=null&&Object.entries(d).forEach(function(a){var b=a[0];a=a[1];f.addActionPayload(b,a)});e&&f.markStart();f.log()}}),null);
__d("CometVideoHomeProfilePhotoLiveBadgeAddOn.react",["fbt","React","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(){return h.jsx("div",{className:"l9j0dhe7",children:h.jsx("div",{className:"k4urcfbm oqcyycmt j9ispegn pmk7jnqg b3onmgus iuny7tx3 ph5uu5jm ipjc6fyt f9o22wc5 myj7ivm5 ad2k81qe km676qkl n7fi1qx3 q9uorilb rq0escxv a0vgkybk qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj l44iypv3",children:h.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:"meta4",children:g._("LIVE")})})})}}),null);
__d("useInjectionPortalingFromVideoIDCloseWatchAndScroll",["CometSetWatchAndScrollVideoContext","CometVideoHomeInjectionPortalingContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useContext(b("CometVideoHomeInjectionPortalingContext"));a=a.portableVideoID;var c=null;a!=null&&(c=a);var d=g.useContext(b("CometSetWatchAndScrollVideoContext"));g.useLayoutEffect(function(){c!=null&&d(null)},[]);return c}}),null);
__d("LiveVideoCometPageTimelineTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:LiveVideoCometPageTimelineLoggerConfig")}),null);