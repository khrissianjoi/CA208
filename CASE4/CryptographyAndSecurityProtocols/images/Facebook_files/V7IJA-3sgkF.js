if (self.CavalryLogger) { CavalryLogger.start_js(["stpOQ"]); }

__d("LiveVideoCometAlertConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometAlertConditionalLoader_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_video_cue_system_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"LiveVideoCometAlertConditionalLoader_video",fragmentName:"LiveVideoCometAlert_videoCueSystemRenderer",fragmentPropName:"videoCueSystemRenderer",kind:"ModuleImport"}],type:"CometLiveVideoCUESystemRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_tahoe_up_next_overlay_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",fragmentName:"CometTahoeUpNextOverlayAndEndScreenWrapper_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometTahoeVODUpNextOverlayRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("LiveVideoCometAlertConditionalLoader.react",["CometPlaceholder.react","CometRelay","React","LiveVideoCometAlertConditionalLoader_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.video$key;a=a.videoID;c=b("CometRelay").useFragment(g!==void 0?g:g=b("LiveVideoCometAlertConditionalLoader_video.graphql"),c);return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:c==null?void 0:c.comet_video_cue_system_renderer,props:{videoID:a}})})}}),null);
__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader.react",["CometPlaceholder.react","CometRelay","React","CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.initialTracePolicy,d=a.logTahoeEvent,e=a.pressInteraction,f=a.reactionVideoChannelType,i=a.subOrigin,j=a.video$key;a=a.videoID;j=b("CometRelay").useFragment(g!==void 0?g:g=b("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql"),j);return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:j==null?void 0:j.comet_tahoe_up_next_overlay_renderer,props:{initialTracePolicy:c,logTahoeEvent:d,pressInteraction:e,reactionVideoChannelType:f,subOrigin:i,videoID:a}})})}}),null);
__d("XPaymentsVerificationFlowDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/payments/verification/dialog/",{payment_type:{type:"Enum",defaultValue:"nmor_donation_p4p",enumType:1},verification_product_type:{type:"Enum",defaultValue:"MANAGED_STRIPE",enumType:1},notif_id:{type:"String"},notif_t:{type:"String"},ref:{type:"String"},__asyncDialog:{type:"Int"}})}),null);