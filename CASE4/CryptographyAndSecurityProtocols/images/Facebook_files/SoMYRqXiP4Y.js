if (self.CavalryLogger) { CavalryLogger.start_js(["eiqZo"]); }

__d("TextDelightInComposerGating",["TextDelightConfig","gkx"],(function(a,b,c,d,e,f){"use strict";f.checkGKForSurface=a;f.isEnabled=c;f.isHighlightEnabled=d;f.isBackspaceEnabled=e;f.isXbuttonEnabled=h;var g=b("TextDelightConfig").composerOptions;function a(a){return a==="post"?b("gkx")("678313"):b("gkx")("678314")}function c(a){return this.checkGKForSurface(a)&&g.enabled}function d(a){return this.checkGKForSurface(a)&&g.enabled&&g.highlightEnabled}function e(a){return this.checkGKForSurface(a)&&g.enabled&&g.backspaceEnabled}function h(a){return this.checkGKForSurface(a)&&g.enabled&&g.xbuttonEnabled}}),null);
__d("TextDelightInComposerLogger",["FunnelLogger","hashString"],(function(a,b,c,d,e,f){"use strict";f.startFunnelInstance=a;f._appendAction=c;f.regexMatched=d;f.optOutTapped=e;f.optOutBackspace=m;f.rangeTapped=n;f.endFunnel=o;var g="TEXT_DELIGHTS_COMPOSER_FUNNEL",h="regex_matched",i="opt_out_tapped",j="opt_out_backspace",k="range_tapped";function l(a){return b("hashString")(a)}function a(a,c){a=l(a);if(b("FunnelLogger").getFunnelInstance(g,a))return;b("FunnelLogger").startFunnel(g,a);b("FunnelLogger").addFunnelTag(g,a,c)}function c(a,c,d,e,f){this.startFunnelInstance(a,f),b("FunnelLogger").appendActionWithPayload(g,l(a),c,{campaign_id:d,keyword:e})}function d(a,b,c,d){this._appendAction(a,h,b,c,d)}function e(a,b,c,d){this._appendAction(a,i,b,c,d)}function m(a,b,c,d){this._appendAction(a,j,b,c,d)}function n(a,b,c,d){this._appendAction(a,k,b,c,d)}function o(a){b("FunnelLogger").endFunnel(g,l(a))}}),null);