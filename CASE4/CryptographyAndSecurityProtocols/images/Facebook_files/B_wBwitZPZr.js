if (self.CavalryLogger) { CavalryLogger.start_js(["rXGzH"]); }

__d("CometNoCursorMediaSetViewerRenderer_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNoCursorMediaSetViewerRenderer_media",selections:[{kind:"InlineFragment",selections:a,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Video",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CometMediaViewerLayout_media"}],type:"Media",abstractKey:"__isMedia"}}();e.exports=a}),null);
__d("CometNoCursorMediaSetViewerRenderer_mediaset.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"media_type",value:"ALL"},b=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}];b=[{kind:"InlineFragment",selections:b,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:b,type:"Video",abstractKey:null},{args:null,kind:"FragmentSpread",name:"useCometMediaURL_media"}];var c=[{alias:null,args:null,concreteType:"MediaSetMediaEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:b,storageKey:null}],storageKey:null}],d=[{kind:"Variable",name:"media_id",variableName:"nodeID"}];d=[{alias:"prevMediaNoCursor",args:d,concreteType:null,kind:"LinkedField",name:"media_before",plural:!1,selections:b,storageKey:null},{alias:"nextMediaNoCursor",args:d,concreteType:null,kind:"LinkedField",name:"media_after",plural:!1,selections:b,storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"loopMedia"},{kind:"RootArgument",name:"nodeID"}],kind:"Fragment",metadata:null,name:"CometNoCursorMediaSetViewerRenderer_mediaset",selections:[{condition:"loopMedia",kind:"Condition",passingValue:!0,selections:[{alias:"firstMediaNoCursor",args:[{kind:"Literal",name:"first",value:1},a],concreteType:"MediaSetMediaConnection",kind:"LinkedField",name:"media",plural:!1,selections:c,storageKey:'media(first:1,media_type:"ALL")'},{alias:"lastMediaNoCursor",args:[{kind:"Literal",name:"last",value:1},a],concreteType:"MediaSetMediaConnection",kind:"LinkedField",name:"media",plural:!1,selections:c,storageKey:'media(last:1,media_type:"ALL")'}]},{kind:"InlineFragment",selections:d,type:"GenericMediaSet",abstractKey:null},{kind:"InlineFragment",selections:d,type:"TaggedMediaOfFamilyMemberMediaSet",abstractKey:null},{kind:"InlineFragment",selections:d,type:"TaggedMediaOfUserMediaSet",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MediaUploadedByUserMediaSet",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MediaAttachmentMediaSet",abstractKey:null},{kind:"InlineFragment",selections:d,type:"TaggedInAlbumMediaSet",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MediaContainerMediaSet",abstractKey:null},{kind:"InlineFragment",selections:d,type:"ProfileFrameMediaSet",abstractKey:null}],type:"MediaSet",abstractKey:"__isMediaSet"}}();e.exports=a}),null);
__d("CometMediaViewerLayout_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerLayout_media",selections:[{args:null,kind:"FragmentSpread",name:"CometMediaViewer_media"}],type:"Media",abstractKey:"__isMedia"};e.exports=a}),null);
__d("CometMediaViewerVideoPlayerSurface_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerVideoPlayerSurface_data",selections:[a,{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"fullscreen_video_player"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlay_data"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"fullscreen_video_player")'},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometMediaViewer_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"framework",value:"WARNING_SCREENS"},b=[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewer_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[a,{kind:"Literal",name:"location",value:"photo_viewer"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:b,storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"photo_viewer")'},{args:null,kind:"FragmentSpread",name:"CometPhotoViewer_photo"}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[a,{kind:"Literal",name:"location",value:"fullscreen_video_player"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:b,storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"fullscreen_video_player")'},{args:null,kind:"FragmentSpread",name:"CometMediaViewerVideoPlayerSurface_data"},{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"}],type:"Video",abstractKey:null}],type:"Media",abstractKey:"__isMedia"}}();e.exports=a}),null);
__d("CometMediaViewerContextSectionActionWrapperComposerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"nodeID"}],b=[{kind:"Variable",name:"id",variableName:"nodeID"}],c={alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},d=[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMediaViewerComposer_textWithEntities"}],storageKey:null}],e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g=[f];g=[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[e,{kind:"InlineFragment",selections:g,type:"User",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Page",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entity_is_weak_reference",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerContextSectionActionWrapperComposerQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[c,{kind:"InlineFragment",selections:d,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:d,type:"Video",abstractKey:null}],type:"Media",abstractKey:"__isMedia"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerContextSectionActionWrapperComposerQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,f,{kind:"InlineFragment",selections:[c,{kind:"InlineFragment",selections:g,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Video",abstractKey:null}],type:"Media",abstractKey:"__isMedia"}],storageKey:null}]},params:{id:"4358065510877626",metadata:{},name:"CometMediaViewerContextSectionActionWrapperComposerQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometMediaViewerContextSectionActionWrapper_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerContextSectionActionWrapper_media",selections:[{kind:"InlineFragment",selections:a,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Video",abstractKey:null},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometMediaViewerContextSection_media"}]},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometMediaViewerComposer_media"}]}],type:"Media",abstractKey:"__isMedia"}}();e.exports=a}),null);
__d("CometMediaViewerContextSectionActionWrapper_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerContextSectionActionWrapper_story",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"legacy_story_hideable_id",storageKey:null},{alias:null,args:null,concreteType:"BoostedComponent",kind:"LinkedField",name:"post_promotion_info",plural:!1,selections:[{documentName:"CometMediaViewerContextSectionActionWrapper_story",fragmentName:"LWICometStoryButton_postPromotionInfo",fragmentPropName:"postPromotionInfo",kind:"ModuleImport"}],storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("CometMediaViewerRightRail_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],d={alias:null,args:c,concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[b],storageKey:null},e={kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometMediaUFI_feedback"}]};c={alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[b,d,{alias:null,args:c,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:[a],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFIFeedbackReactMutation_feedback"},e],storageKey:null};var f={alias:null,args:null,concreteType:"CopyrightBannerInfo",kind:"LinkedField",name:"copyright_banner_info",plural:!1,selections:[{documentName:"CometMediaViewerRightRail_media",fragmentName:"CometCopyrightBanner_copyrightBannerInfo",fragmentPropName:"copyrightBannerInfo",kind:"ModuleImport"}],storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:null,name:"CometMediaViewerRightRail_media",selections:[a,{args:null,kind:"FragmentSpread",name:"CometMediaViewerContextSectionActionWrapper_media"},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometMediaUFI_shareable"}]},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"attached_comment",plural:!1,selections:[c],storageKey:null},c,f,{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometMediaUFI_tagReview"}]}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[b,d,e],storageKey:null},f],type:"Video",abstractKey:null}],type:"Media",abstractKey:"__isMedia"}}();e.exports=a}),null);
__d("CometMediaViewerRightRail_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerRightRail_story",selections:[{args:null,kind:"FragmentSpread",name:"CometMediaViewerContextSectionActionWrapper_story"}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("CometNewsfeedKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f){"use strict";a=b("createKeyCommandWidget")();e.exports=a}),null);
__d("CometContentNotAvailable.react",["fbt","CometContentArea.react","NullStateGeneral","React","TetraNullState.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(){return h.jsx("div",{className:"k4urcfbm taijpn5t bkyfam09 j83agx80 bp9cbjyn",children:h.jsx(b("CometContentArea.react"),{verticalAlign:"middle",children:h.jsx(b("TetraNullState.react"),{headline:g._("Sorry, this content isn't available right now"),icon:b("NullStateGeneral")})})})}}),null);
__d("CometPageLayoutWithComplementaryContent.react",["BaseRow.react","BaseRowItem.react","CometRouteRenderType","CometScrollView.react","MWChatOnMediaVisibilityOverrideContext","React","gkx","stylex","useMWIsCurrentRouteMediaViewerExperiment","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("gkx")("708253"),j=b("gkx")("1217157"),k={chatSliver:{backgroundColor:"cwj9ozl2",boxShadow:"r28pvxcy",display:"j83agx80",height:"bkyfam09",top:"be9z9djy",width:"etr7akla",zIndex:"tkr6xdv7","@media (max-width: 899px)":{display:"hlyrhctz"}},container:{height:"bipmatt0",maxHeight:"qowsmv63","@media (max-width: 900px)":{flexDirection:"by9hw1fw"}},containerInPushView:{minHeight:"sn7ne77z"},containerNotInPushView:{minHeight:"jgljxmt5"},contentAreaInPushView:{height:"nznu9b0o","@media (max-width: 900px)":{height:"q4kn84j7"}},contentAreaInPushViewUsesParentHeight:{height:"datstx6m","@media (max-width: 900px)":{height:"q4kn84j7"}},contentAreaNotInPushView:{height:"bkyfam09","@media (max-width: 900px)":{height:"q4kn84j7"}},defaultBackground:{backgroundColor:"hybvsw6c"},rightRail:{height:"bipmatt0",maxHeight:"nwf6jgls","@media (max-width: 900px)":{maxWidth:"dzul8kyi",minHeight:"s8zgqcqk"}},rightRailFixed:{backgroundColor:"hybvsw6c",maxHeight:"gitj76qy",minHeight:"dp1hu0rb","@media (max-width: 900px)":{maxHeight:"kelwmyms",maxWidth:"dzul8kyi",minHeight:"e69mrdg2"}},rightRailInner:{backgroundColor:"hybvsw6c",height:"bipmatt0",maxWidth:"rirtxc74",minWidth:"nnvw5wor","@media (max-width: 900px)":{minWidth:"jkusjiy0"}},rightRailOuter:{height:"datstx6m",maxHeight:"gitj76qy","@media (max-width: 900px)":{height:"ric4tfvp",maxHeight:"mq76vbym"}},rightRailOuterNoMaxHeight:{height:"datstx6m","@media (max-width: 900px)":{height:"ric4tfvp",maxHeight:"mq76vbym"}},shadowBar:{backgroundColor:"hybvsw6c",borderBottom:"ao6pnu53",minHeight:"pxsmfnpt",position:"lpgh02oy",top:"kr520xx4",zIndex:"tkr6xdv7"},shadowBarContentAreaResponsiveness:{display:"mkhogb32","@media (max-width: 900px)":{display:"au7jv34o"}},shadowBarRightRailResponsiveness:{"@media (max-width: 900px)":{display:"ahb00how"}}};function a(a){var c=a.children;c=c===void 0?null:c;var d=a.hideContainerBackground;d=d===void 0?!1:d;var e=a.isRightRailFixed;e=e===void 0?!1:e;var f=a.rightRail;f=f===void 0?null:f;var l=a.showChatSliverOverride;l=l===void 0?!0:l;var m=a.showShadowBar;m=m===void 0?!0:m;a=a.useParentHeight;a=a===void 0?!1:a;var n=b("CometRouteRenderType").useIsPushView(),o=b("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT")&&i,p=b("useMWIsCurrentRouteMediaViewerExperiment")();p=b("MWChatOnMediaVisibilityOverrideContext").useMWChatOnMediaVisibilityOverride(p);l=l&&o&&p;return h.jsxs(b("BaseRow.react"),{align:"start",xstyle:[k.container,!d&&k.defaultBackground,n||a?k.containerInPushView:k.containerNotInPushView],children:[n&&!j?h.jsx("div",{className:(g||(g=b("stylex")))(m?k.shadowBar:null,m?k.shadowBarContentAreaResponsiveness:null)}):null,h.jsx(b("BaseRowItem.react"),{expanding:!0,role:"main",xstyle:a?k.contentAreaInPushViewUsesParentHeight:n?k.contentAreaInPushView:k.contentAreaNotInPushView,children:c}),f!=null&&h.jsxs(b("BaseRowItem.react"),{role:"complementary",xstyle:e?k.rightRailFixed:k.rightRail,children:[n&&!j?h.jsx("div",{className:(g||(g=b("stylex")))(m?k.shadowBar:null,m?k.shadowBarRightRailResponsiveness:null)}):null,h.jsxs(b("BaseRow.react"),{xstyle:a?k.rightRailOuterNoMaxHeight:k.rightRailOuter,children:[h.jsx(b("BaseRowItem.react"),{xstyle:k.rightRailInner,children:e?h.jsx(b("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,children:f}):f}),l?h.jsx("div",{className:(g||(g=b("stylex")))(k.chatSliver)}):null]})]})]})}}),null);
__d("EndianAwareDataView",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b,c){c===void 0&&(c=0),this.$2=new DataView(a,c),this.$1=b}var b=a.prototype;b.getByteLength=function(){return this.$2.byteLength};b.getU8=function(a){return this.$2.getUint8(a)};b.getI8=function(a){return this.$2.getInt8(a)};b.getU16=function(a){return this.$2.getUint16(a,this.$1)};b.getI16=function(a){return this.$2.getInt16(a,this.$1)};b.getU32=function(a){return this.$2.getUint32(a,this.$1)};b.getI32=function(a){return this.$2.getInt32(a,this.$1)};b.getF32=function(a){return this.$2.getFloat32(a,this.$1)};return a}();e.exports=a}),null);
__d("EndianAwareDataReader",["EndianAwareDataView"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,c){this.$2=new(b("EndianAwareDataView"))(a,c),this.$1=0}var c=a.prototype;c.canReadU8=function(){return this.$1<this.$2.getByteLength()};c.canReadU16=function(){return this.$1<this.$2.getByteLength()-1};c.canReadU32=function(){return this.$1<this.$2.getByteLength()-3};c.seekTo=function(a){this.$1=a};c.seekRelative=function(a){this.$1+=a};c.readU8=function(){var a=this.$2.getU8(this.$1);this.$1+=1;return a};c.peekU8=function(){return this.$2.getU8(this.$1)};c.readI8=function(){var a=this.$2.getI8(this.$1);this.$1+=1;return a};c.peekI8=function(){return this.$2.getI8(this.$1)};c.readU16=function(){var a=this.$2.getU16(this.$1);this.$1+=2;return a};c.peekU16=function(){return this.$2.getU16(this.$1)};c.readI16=function(){var a=this.$2.getI16(this.$1);this.$1+=2;return a};c.peekI16=function(){return this.$2.getI16(this.$1)};c.readU32=function(){var a=this.$2.getU32(this.$1);this.$1+=4;return a};c.peekU32=function(){return this.$2.getU32(this.$1)};c.readI32=function(){var a=this.$2.getI32(this.$1);this.$1+=4;return a};c.peekI32=function(){return this.$2.getI32(this.$1)};c.readF32=function(){var a=this.$2.getF32(this.$1);this.$1+=4;return a};c.peekF32=function(){return this.$2.getF32(this.$1)};return a}();e.exports=a}),null);
__d("CometMediaViewerReducer",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){switch(b.type){case"SET_IS_HOVERED":return babelHelpers["extends"]({},a,{isHovered:b.isHovered})}return a}}),null);
__d("CometMediaViewerVideoPlayerSurface.react",["CometRelay","CometWarningScreenOverlay.react","React","VideoPlayerDefaultControls.react","VideoPlayerHooks","VideoPlayerSurface.react","requireCond","cr:1404875","CometMediaViewerVideoPlayerSurface_data.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c,d,e,f=b("VideoPlayerHooks").useIsFullscreen();a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometMediaViewerVideoPlayerSurface_data.graphql"),a.data);c=a==null?void 0:(c=a.cix_screen)==null?void 0:c.view_model;d=a==null?void 0:(d=a.container_story)==null?void 0:d.id;var i=a==null?void 0:a.id;e=(a==null?void 0:(e=a.preferred_thumbnail)==null?void 0:(e=e.image)==null?void 0:e.uri)!=null?a==null?void 0:(e=a.preferred_thumbnail)==null?void 0:(a=e.image)==null?void 0:a.uri:"#";return h.jsxs(b("VideoPlayerSurface.react"),{children:[h.jsx(b("VideoPlayerDefaultControls.react"),{}),c!=null&&d!=null&&!f&&h.jsx(b("CometWarningScreenOverlay.react"),{alwaysShowDetails:!0,contentID:i,data:c,isFullScreenMediaPlayerStyle:!0,mediaUri:e,storyID:d,surface:"fullscreen_video_player"}),b("cr:1404875")&&h.jsx(b("cr:1404875"),{})]})}}),null);
__d("CometMediaViewer.react",["CometMediaViewerDispatcherContext","CometMediaViewerReducer","CometMediaViewerStage.react","CometMediaViewerVideoPlayerSurface.react","CometMediaViewerViewStateContext","CometPhotoViewer.react","CometRelay","CometRouteRenderType","CometWarningScreenContext","React","VideoPlayerRelay.react","stylex","useCometDisplayTimingTracker","useCurrentRoute","useRoutePassthroughProps","CometMediaViewer_media.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=[b("CometMediaViewerReducer")],k=function(a,b){a=a;for(var c=0;c<j.length;c++){var d=j[c];a=d(a,b)}return a};function a(a){var c,d=b("CometRouteRenderType").useIsPushView(),e=a.media,f=a.origHeight,j=a.origOverlayShown,l=a.origSrc,m=a.origWidth,n=a.photoTagLayerQueryReference,o=a.storyRenderLocation,p=babelHelpers.objectWithoutPropertiesLoose(a,["media","origHeight","origOverlayShown","origSrc","origWidth","photoTagLayerQueryReference","storyRenderLocation"]);e=b("CometRelay").useFragment(g!==void 0?g:g=b("CometMediaViewer_media.graphql"),e);var q=i.useReducer(k,{isHovered:!1}),r=q[0];q=q[1];var s=b("useCometDisplayTimingTracker")("MediaViewerVideo"),t=b("useRoutePassthroughProps")(),u=t==null?void 0:t.subOrigin,v=(t==null?void 0:t.initialTracePolicy)!=null?String(t==null?void 0:t.initialTracePolicy):null;t=t==null?void 0:t.portableVideoID;c=((c=e.cix_screen)==null?void 0:(c=c.view_model)==null?void 0:c.__typename)!=null;var w=(e==null?void 0:e.is_playable)===!0,x=b("useCurrentRoute")();x=(x=x==null?void 0:x.transparent)!=null?x:!1;if(w){x=i.jsx("div",{className:"l9j0dhe7 datstx6m buofh1pr cbu4d94t j83agx80","data-testid":void 0,children:i.jsx(b("CometMediaViewerStage.react"),babelHelpers["extends"]({},p,{backgroundColor:x?"dark":"default",initialTracePolicy:v,isPlayable:!0,storyRenderLocation:o,subOrigin:u,children:i.jsx("div",{className:(h||(h=b("stylex"))).dedupe({"align-items-1":"bp9cbjyn","display-1":"j83agx80","flex-grow-1":"buofh1pr","justify-content-1":"taijpn5t","width-1":"k4urcfbm"},d?{"height-1":"datstx6m"}:null,d?null:{"height-1":"mqzoxkkh"}),ref:s,children:i.jsx(b("VideoPlayerRelay.react"),{canAutoplay:c?"do_not_autoplay":"respect_user_settings",portalingEnabled:!0,portalingFromVideoID:t,portalingPlaceMetaData:{placeDescription:"media_viewer"},subOrigin:(w=u)!=null?w:"media_viewer",video:e,children:i.jsx(b("CometMediaViewerVideoPlayerSurface.react"),{data:e})})})}))})}else x=i.jsx(b("CometPhotoViewer.react"),babelHelpers["extends"]({initialTracePolicy:v,origHeight:f,origSrc:l,origWidth:m,photo:e,photoTagLayerQueryReference:n,showTag:!0,storyRenderLocation:o,subOrigin:u},p));return i.jsx(b("CometWarningScreenContext").CometWarningScreenContextProvider,{identifier:(d=a.prevMediaURI)!=null?d:"no_prev_uri",overlayExists:c,overlayShownOverride:j,children:i.jsx(b("CometMediaViewerViewStateContext").Provider,{value:r,children:i.jsx(b("CometMediaViewerDispatcherContext").Provider,{value:q,children:x})})})}}),null);
__d("CometMediaViewerLayout.react",["CometMediaViewer.react","CometNewsfeedKeyCommandWidget","CometPageLayoutWithComplementaryContent.react","CometRelay","React","gkx","CometMediaViewerLayout_media.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.media,d=a.rightRail;d=d===void 0?null:d;a=babelHelpers.objectWithoutPropertiesLoose(a,["media","rightRail"]);c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometMediaViewerLayout_media.graphql"),c);c=h.jsx(b("CometMediaViewer.react"),babelHelpers["extends"]({media:c},a));return h.jsx(b("CometNewsfeedKeyCommandWidget").Wrapper,{children:h.jsx(b("CometPageLayoutWithComplementaryContent.react"),{hideContainerBackground:b("gkx")("1645642"),isRightRailFixed:!0,rightRail:d,children:c})})}}),null);
__d("CometNoCursorMediaSetViewerRenderer.react",["CometMediaViewerLayout.react","CometRelay","React","useCometMediaURL","CometNoCursorMediaSetViewerRenderer_media.graphql","CometNoCursorMediaSetViewerRenderer_mediaset.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=g!==void 0?g:g=b("CometNoCursorMediaSetViewerRenderer_media.graphql"),k=h!==void 0?h:h=b("CometNoCursorMediaSetViewerRenderer_mediaset.graphql");function l(a,c,d,e){var f=c!==(a==null?void 0:a.id)?a==null?void 0:a.id:null;i.useEffect(function(){f!=null&&(e&&e(f))},[e,f]);return b("useCometMediaURL")(f!=null?a:null,d)}function a(a){var c,d,e,f=a.media,g=a.mediaset,h=a.mediasetToken,m=a.prefetchForId;a=babelHelpers.objectWithoutPropertiesLoose(a,["media","mediaset","mediasetToken","prefetchForId"]);f=b("CometRelay").useFragment(j,f);g=b("CometRelay").useFragment(k,g);c=(c=g==null?void 0:(c=g.firstMediaNoCursor)==null?void 0:c.edges)!=null?c:[];c=c==null?void 0:(c=c[0])==null?void 0:c.node;d=(d=g==null?void 0:(d=g.lastMediaNoCursor)==null?void 0:d.edges)!=null?d:[];d=d==null?void 0:(d=d[0])==null?void 0:d.node;var n=(c==null?void 0:c.id)===(d==null?void 0:d.id);e=!n&&(g==null?void 0:(e=g.prevMediaNoCursor)==null?void 0:e.id)===(f==null?void 0:f.id);n=!n&&(g==null?void 0:(n=g.nextMediaNoCursor)==null?void 0:n.id)==null;e=e?d:g==null?void 0:g.prevMediaNoCursor;d=l(e,f==null?void 0:f.id,h,m);e=n?c:g==null?void 0:g.nextMediaNoCursor;n=l(e,f==null?void 0:f.id,h,m);return i.jsx(b("CometMediaViewerLayout.react"),babelHelpers["extends"]({},a,{media:f,nextMediaURI:n,prevMediaURI:d}))}}),null);
__d("CometMediaViewerContextGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={container:{boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"btwxx1t3",paddingBottom:"ihqw7lf3"},imageGlimmer:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv"},imageSize48:{height:"m7zwrmfr",width:"tmrshh9y"},minutiaeGlimmer:{height:"cyypbtt7",width:"k4urcfbm"},minutiaeGlimmer2:{height:"cyypbtt7",width:"n99xedck"},roundedGlimmer:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi"},wrapper:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",justifyContent:"kwzhilbh",paddingTop:"jb3vyjys",paddingEnd:"hv4rvrfc",paddingBottom:"qt6c0cv9",paddingStart:"dati1w0a"}};function a(){return h.jsxs(b("BaseLoadingStateElement.react"),{xstyle:i.container,children:[h.jsx(b("BaseGlimmer.react"),{className:(g||(g=b("stylex")))(i.imageGlimmer,i.imageSize48),index:1}),h.jsxs("div",{className:g(i.wrapper),children:[h.jsx(b("BaseGlimmer.react"),{className:g(i.minutiaeGlimmer,i.roundedGlimmer),index:1}),h.jsx(b("BaseGlimmer.react"),{className:g(i.minutiaeGlimmer2,i.roundedGlimmer),index:1})]})]})}}),null);
__d("CometMediaViewerContextSectionActionWrapper.react",["fbt","CometButton_DEPRECATED.react","CometErrorBoundary.react","CometMediaViewerContextGlimmer.react","CometMediaViewerRightRailUFIGlimmer.react","CometPlaceholder.react","CometRelay","React","TetraButton.react","deferredLoadComponent","requireDeferred","requireDeferredForDisplay","stylex","unrecoverableViolation","CometMediaViewerContextSectionActionWrapperComposerQuery.graphql","CometMediaViewerContextSectionActionWrapper_media.graphql","CometMediaViewerContextSectionActionWrapper_story.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j,k=b("React");c=b("requireDeferred")("CometMediaViewerComposer.react");d=b("requireDeferredForDisplay")("CometMediaViewerContextSection.react");var l=b("deferredLoadComponent")(c),m=b("deferredLoadComponent")(d),n=h!==void 0?h:h=b("CometMediaViewerContextSectionActionWrapperComposerQuery.graphql");function o(a){var c=a.isEditing,d=a.media,e=a.nodeID;a=a.setIsEditing;var f=k.useCallback(function(a){var d=a.disabled;a=a.submitForm;return c?k.jsx(b("TetraButton.react"),{disabled:d,label:g._("Done Editing"),onPress:a,type:"primary"}):null},[c]),h=b("CometRelay").useLazyLoadQuery(n,{nodeID:e});h=h.node;if(h==null)throw b("unrecoverableViolation")("CometMediaViewerContextSectionActionWrapperComposerQuery: Could not find media with id: "+e,"comet_ui");var i=h.message;return k.jsx(l,{media:d,mediaType:(h==null?void 0:h.is_playable)===!0?"video":"photo",message:i!=null?i:void 0,nodeID:e,setIsEditing:a,submitButton:f})}function p(a){var c=a.media,d=a.story;a=babelHelpers.objectWithoutPropertiesLoose(a,["media","story"]);var e=a.nodeID,f=k.useState(!1),h=f[0],l=f[1];k.useEffect(function(){l(!1)},[e]);f=b("CometRelay").useFragment(i!==void 0?i:i=b("CometMediaViewerContextSectionActionWrapper_media.graphql"),c);c=b("CometRelay").useFragment(j!==void 0?j:j=b("CometMediaViewerContextSectionActionWrapper_story.graphql"),d);d=(d=f.can_viewer_edit)!=null?d:c==null?void 0:c.can_viewer_edit;return k.jsxs("div",{className:"dati1w0a f10w8fjw hv4rvrfc discj3wi","data-testid":void 0,children:[h?k.jsx("div",{className:"f10w8fjw",children:k.jsx(b("CometPlaceholder.react"),{fallback:k.jsx(b("CometMediaViewerContextGlimmer.react"),{}),children:k.jsx(o,{isEditing:h,media:f,nodeID:e,setIsEditing:l})})}):k.jsx(b("CometPlaceholder.react"),{fallback:k.jsx(b("CometMediaViewerContextGlimmer.react"),{}),children:k.jsx(m,{feedLocation:a.feedLocation,media:f})}),k.jsxs("div",{className:"j83agx80",children:[(c==null?void 0:c.post_promotion_info)!=null?k.jsx(b("CometPlaceholder.react"),{fallback:k.jsx(b("CometMediaViewerRightRailUFIGlimmer.react"),{}),children:k.jsx(b("CometRelay").MatchContainer,{match:c.post_promotion_info,props:{targetID:c==null?void 0:c.legacy_story_hideable_id}})}):null,d===!0&&!h?k.jsx(b("CometButton_DEPRECATED.react"),{onClick:function(){return l(!h)},use:"secondary",children:g._("Edit")}):null]})]})}function a(a){return k.jsx(b("CometErrorBoundary.react"),{children:k.jsx(p,babelHelpers["extends"]({},a))})}}),null);
__d("CometMediaViewerRightRail.react",["CometMediaViewerContextSectionActionWrapper.react","CometMediaViewerRightRailUFIGlimmer.react","CometPlaceholder.react","CometRelay","CometUFIFeedbackReactMutation","React","UFIReactionTypes","cometGetKeyCommandConfig","deferredLoadComponent","recoverableViolation","requireDeferredForDisplay","unrecoverableViolation","useLayerKeyCommands","CometMediaViewerRightRail_media.graphql","CometMediaViewerRightRail_story.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=b("deferredLoadComponent")(b("requireDeferredForDisplay")("CometMediaViewerRightRailUFIWithTracking.react")),k=g!==void 0?g:g=b("CometMediaViewerRightRail_media.graphql"),l=h!==void 0?h:h=b("CometMediaViewerRightRail_story.graphql");function a(a){var c,d=a.feedbackSource,e=a.feedLocation,f=a.focusCommentID,g=a.media,h=a.nodeID,m=a.onActorSelected;a=a.story;g=b("CometRelay").useFragment(k,g);a=b("CometRelay").useFragment(l,a);var n=(c=g==null?void 0:(c=g.attached_comment)==null?void 0:c.feedback)!=null?c:g==null?void 0:g.feedback;c=!Boolean(g==null?void 0:g.attached_comment);if(n==null)throw b("unrecoverableViolation")("props needs to contain a feedback object","comet_ui");var o=i.useRef(null),p=b("CometRelay").useRelayEnvironment(),q=i.useCallback(function(){var a;if(n==null){b("recoverableViolation")("No feedback for the media is associated with it","comet_ui");return}var c=n==null?void 0:n.id;a=n==null?void 0:(a=n.viewer_actor)==null?void 0:a.id;if(c==null||d==null){b("recoverableViolation")("No Feedback data is associated with it","comet_ui");return}if(a==null){b("recoverableViolation")("No actor id is associated with it","comet_ui");return}a=n==null?void 0:n.viewer_feedback_reaction_info;a!=null?a={feedback_id:c,feedback_reaction:b("UFIReactionTypes").NONE,feedback_source:d}:a={feedback_id:c,feedback_reaction:b("UFIReactionTypes").LIKE,feedback_source:d};o.current=b("CometUFIFeedbackReactMutation").commit({environment:p,input:a,onError:function(){},useDefaultActor:!1})},[p,n,d]),r=i.useMemo(function(){var a=[];a.push(b("cometGetKeyCommandConfig")("photoViewer","like",q));return a},[q]);b("useLayerKeyCommands")(r);return i.jsxs(i.Fragment,{children:[i.jsx(b("CometRelay").MatchContainer,{match:g.copyright_banner_info,props:{mediaIds:[h],source:"media_viewer"}}),i.jsx(b("CometMediaViewerContextSectionActionWrapper.react"),{feedLocation:e,media:g,nodeID:h,story:a}),i.jsx(b("CometPlaceholder.react"),{fallback:i.jsx(b("CometMediaViewerRightRailUFIGlimmer.react"),{}),children:i.jsx(j,{displayCommentsContext:null,feedLocation:e,feedback:n,feedbackSource:d,focusCommentID:(r=f)!=null?r:null,isTextOnlyStory:!0,onActorSelected:m,pendingTags:g.__typename==="Photo"?g:null,shareable:c?(h=g)!=null?h:null:null},(a=n==null?void 0:n.id)!=null?a:""+((f=n==null?void 0:(e=n.viewer_actor)==null?void 0:e.id)!=null?f:""))})]})}}),null);
__d("mediaViewerPrefetch",["CometRelay","CometRelayEnvironment","JSScheduler","JSTracing","gkx","promiseDone","relay-runtime"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){b("JSTracing").clear(function(){b("JSScheduler").scheduleLoggingPriCallback(function(){var e=b("relay-runtime").createOperationDescriptor(b("relay-runtime").getRequest(c),d),f=b("gkx")("1641577")?a:b("CometRelayEnvironment"),g=f.check(e).status==="available";g||b("promiseDone")(b("CometRelay").fetchQuery(f,c,e.request.variables).toPromise())})})}}),null);
__d("VideoPlayerWithUnmutedPlay.react",["React","VideoPlayerHooks","usePrevious"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=b("VideoPlayerHooks").useController(),c=g.useRef(!1),d=b("VideoPlayerHooks").usePaused(),e=b("usePrevious")(d);g.useEffect(function(){e===!0&&d===!1&&!c.current&&(a.setMuted(!1,"product_initiated"),c.current=!0)},[a,d,e]);return null}}),null);
__d("extractUTF8StringFromBuffer",["EndianAwareDataReader","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function g(a){return a>127}function h(a){return a>=192&&a<=223}function i(a){return a>=224&&a<=239}function j(a){return a>=240&&a<=247}function a(a,c,d){if(c+d>a.byteLength)throw new(b("unrecoverableViolation"))("offset and length exceed ArrayBuffer bounds","webgl");if("TextDecoder"in window){var e=new TextDecoder("utf-8"),f=new Uint8Array(a,c,d);return e.decode(f)}e=new(b("EndianAwareDataReader"))(a.slice(c,c+d),!1);f=[];while(e.canReadU8()){a=e.readU8();if(g(a))if(h(a)){if(!e.canReadU8())throw new(b("unrecoverableViolation"))("incomplete two-byte utf8 sequence","webgl");c=e.readU8();a=(a&31)<<6|c&63}else if(i(a)){d=e.canReadU8()?e.readU8():null;c=e.canReadU8()?e.readU8():null;if(d==null||c==null)throw new(b("unrecoverableViolation"))("incomplete three-byte utf8 sequence","webgl");a=(a&15)<<12|(d&63)<<6|c&63}else if(j(a)){d=e.canReadU8()?e.readU8():null;c=e.canReadU8()?e.readU8():null;var k=e.canReadU8()?e.readU8():null;if(d==null||c==null||k==null)throw new(b("unrecoverableViolation"))("incomplete four-byte utf8 sequence","webgl");a=(a&7)<<18|(d&63)<<12|(c&63)<<6|k&63}else throw new(b("unrecoverableViolation"))("unknown utf8 start sequence","webgl");if(a<=65535)f.push(String.fromCharCode(a));else if(a<=1114111)a-=65536,f.push(String.fromCharCode(a>>10|55296)),f.push(String.fromCharCode(a&1023|56320));else throw new(b("unrecoverableViolation"))("codepoint is beyond ","webgl")}return f.join("")}}),null);