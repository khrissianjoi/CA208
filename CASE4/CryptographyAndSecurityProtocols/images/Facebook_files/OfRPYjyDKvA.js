if (self.CavalryLogger) { CavalryLogger.start_js(["r\/f6D"]); }

__d("CometPhotoPermalinkRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3452018171579995",metadata:{},name:"CometPhotoPermalinkRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3442082422539929",metadata:{},name:"CometPhotoRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3389729364436558",metadata:{},name:"CometPhotosLoggedOutCTAWrapperFooterDataQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoTagLayerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3446763525361360",metadata:{},name:"CometPhotoTagLayerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoPermalinkRoot.entrypoint",["JSResource","WebPixelRatio","CometPhotoPermalinkRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.comment_id,d=a.fbid,e=a.reply_comment_id;a=a.set;e=(e=e)!=null?e:c;c={UFI2CommentsProvider_commentsKey:"CometPhotoPermalinkRootQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PERMALINK",feedbackSource:2,focusCommentID:e!=null?String(e):null,mediasetToken:a,nodeID:d,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:b("WebPixelRatio").get(),useDefaultActor:!1};return{queries:{photoPermalinkRootQueryReference:{parameters:b("CometPhotoPermalinkRootQuery$Parameters"),variables:c}}}},root:b("JSResource")("CometPhotoPermalinkRoot.react").__setRef("CometPhotoPermalinkRoot.entrypoint")};e.exports=a}),null);
__d("CometPhotoRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","gkx","CometPhotoRootQuery$Parameters","CometPhotoTagLayerQuery$Parameters","CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.comment_id,d=a.fbid,e=a.reply_comment_id;a=a.set;e=(e=e)!=null?e:c;c={UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:e!=null?String(e):null,isMediaset:a!=null,loopMedia:!1,mediasetToken:a,nodeID:d,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:b("WebPixelRatio").get(),useDefaultActor:!1};e={nodeID:d,scale:b("WebPixelRatio").get()};a={photoRootQueryReference:{parameters:b("CometPhotoRootQuery$Parameters"),variables:c},photoTagLayerQueryReference:{parameters:b("CometPhotoTagLayerQuery$Parameters"),variables:e}};if(b("gkx")("1692176"))return{queries:babelHelpers["extends"]({},a,{loggedOutCTAfooterDataQueryReference:{parameters:b("CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{nodeID:d,scale:b("WebPixelRatio").get()}}})};else return{queries:a}},root:b("JSResourceForInteraction")("CometPhotoRoot.react").__setRef("CometPhotoRoot.entrypoint")};e.exports=a}),null);