if (self.CavalryLogger) { CavalryLogger.start_js(["YNBLj"]); }

__d("useThrottledComet",["CometThrottle","React","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a,c){c===void 0&&(c=100);var d=g.useRef(a);b("useLayoutEffect_SAFE_FOR_SSR")(function(){d.current=a},[a]);var e=g.useMemo(function(){return b("CometThrottle")(function(){var a=arguments;return d.current==null?void 0:d.current.apply(d,a)},c)},[c]);g.useEffect(function(){e.cancel()},[]);return e}}),null);
__d("useThrottledImpl",["requireCond","cr:1708227"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1708227")}),null);
__d("useThrottled",["useThrottledImpl"],(function(a,b,c,d,e,f){"use strict";e.exports=b("useThrottledImpl")}),null);