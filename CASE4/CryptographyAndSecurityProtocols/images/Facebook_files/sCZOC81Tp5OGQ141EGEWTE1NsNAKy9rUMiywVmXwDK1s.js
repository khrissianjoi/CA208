if (self.CavalryLogger) { CavalryLogger.start_js(["hXrN\/"]); }

__d("XCometGamingBrowseGamesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/browse/games/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("CometGamingVideoThumbnailInfo_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"vanity",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingVideoThumbnailInfo_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_currently_live",storageKey:null},a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_vanity_url",storageKey:null},b],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Game",kind:"LinkedField",name:"attributed_game",plural:!1,selections:[a,b],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometGamingVideoThumbnailUnit_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingVideoThumbnailUnit_video",selections:[a,{alias:null,args:null,concreteType:"Game",kind:"LinkedField",name:"attributed_game",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{kind:"InlineFragment",selections:b,type:"Page",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometGamingVideoThumbnail_video"},{args:null,kind:"FragmentSpread",name:"CometGamingVideoThumbnailInfo_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometMiddotSeparator.react",["CometMiddot.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.Children.toArray(a.children).filter(Boolean).map(function(a,c){return g.jsxs(g.Fragment,{children:[c!==0?g.jsx(b("CometMiddot.react"),{}):null,a]},c)})}}),null);
__d("CometGamingStrings",["fbt","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=b("gkx")("1229335");c=g._("Continue Playing");f.CONTINUE_PLAYING=c;d=a?g._("Live Esports"):g._("Live Esports Leagues");f.LEFT_RAIL_ESPORTS=d;e=a?g._("Suggested Games"):g._("Streams By Game");f.POPULAR_GAMES_SECTION=e;b=g._("Suggested");f.SORT_SUGGESTED=b;c=g._("History");f.VIEWER_HISTORY=c;d=g._("Browse Games");f.BROWSE_GAMES=d;e=g._("Browse Streamers");f.BROWSE_STREAMERS=e;b=g._("Browse Live Streams");f.BROWSE_LIVE_STREAMS=b;c=g._("Browse Streams");f.BROWSE_STREAMS=c;d=g._("Viewers (High to Low)");f.SORT_VIEWERS=d;e=g._("Followed Games");f.FOLLOWED_GAMES_SECTION=e;b=g._("Followed Streamers");f.FOLLOWED_STREAMERS_SECTION=b;c=g._("Following");f.FOLLOWING_FILTER_FOLLOWED_ONLY=c;d=g._("Popular Games to Watch");f.MOST_WATCHED_GAMES=d;e=g._("New and Rising Games");f.NEW_GAMES=e;b=g._("Recently Played");f.RECENTLY_PLAYED=b;c=a?g._("Recently Watched"):g._("Recently watched");f.RECENTLY_WATCHED=c;d=g._("Games You Follow");f.GAMES_YOU_FOLLOW=d;e=a?g._("Streamers You Follow"):g._("Streamers you follow");f.STREAMERS_YOU_FOLLOW=e;b=a?g._("Suggested Streamers"):g._("Suggested streamers");f.SUGGESTED_STREAMERS=b;c=a?g._("Live Trending Streamers"):g._("Live trending streamers");f.LIVE_TRENDING_STREAMERS=c;d=g._("All");f.LIVE_FILTER_ALL=d;e=g._("Live Now");f.LIVE_FILTER_LIVE_ONLY=e;b=g._("Everyone");f.CREATOR_TYPE_FILTER_ALL=b;a=g._("Partner");f.CREATOR_TYPE_FILTER_MANAGED=a;c=g._("Level Up");f.CREATOR_TYPE_FILTER_LEVELUP=c;d=g._("All Languages");f.ALL_LANGUAGES=d;e=g._("Banned People and Pages");f.BANNED_USERS=e;b=g._("People Who Like This Page");f.PEOPLE_LIKED=b;a=g._("People Who Follow This Page");f.PEOPLE_FOLLOWED=a;c=g._("People Who Support This Page");f.PEOPLE_SUPPORTED=c;d=g._("There are no banned people or Pages.");f.NO_BANNED_USERS=d;e=g._("There are no people who have liked this Page.");f.NO_PEOPLE_LIKED=e;b=g._("There are no people who follow this Page.");f.NO_PEOPLE_FOLLOWED=b;a=g._("There are no people who are supporters of this Page.");f.NO_PEOPLE_SUPPORTED=a}),null);
__d("CometGamingTracePolicyHooks",["unrecoverableViolation","useCometRouteTracePolicy"],(function(a,b,c,d,e,f){"use strict";f.useGamingRouteType=a;f.useGamingVideoLoggingProps=c;f.useGamingSurfaceFromTracePolicy=d;function g(a){switch(a){case"comet.gaming.arena.about":case"comet.gaming.arena.participants":case"comet.gaming.arena.home":case"comet.gaming.arena.brackets":case"comet.gaming.arena.standings":case"comet.gaming.arena.videos":return"GAMING_ARENA";case"comet.gaming.gaming_profile":return"GAMING_PROFILE";case"comet.gaming.clips":case"comet.gaming.directory":case"comet.gaming.gamehub":case"comet.gaming.streamer.hub":case"comet.gaming.streamers.suggested":case"comet.gaming.video":case"comet.gaming.videos":case"comet.gaming.live_videos":case"comet.gaming.mixer":case"comet.gaming.recently_watched":case"comet.gaming.mixer.streamers":case"comet.gaming.following":case"comet.gaming.following.clips":case"comet.gaming.following.games":case"comet.gaming.following.live":case"comet.gaming.following.streamers":case"comet.gaming.following.videos":case"comet.gaming.research_eligibility":case"comet.watch.gaming":case"comet.watch.gaming.gamehub":case"comet.watch.gaming.gamehub.clips":case"comet.watch.gaming.gamehub.live":case"comet.watch.gaming.gamehub.waslive":case"comet.gaming.viewing_history":return"GAMING_VIDEO";case"comet.gaming.games":case"comet.gaming.web_games":return"INSTANT_GAMES";case"comet.gaming.for_you":return"FOR_YOU";case"comet.gaming.notifications":return"SHARED";default:throw b("unrecoverableViolation")("Unexpected trace policy","gaming_video")}}function h(a){switch(a){case"comet.gaming.arena.about":return{origin:"games_video_hub",subOrigin:"games_arena_hero"};case"comet.gaming.gamehub":return{origin:"games_video_hub",subOrigin:"games_video_single_game"};case"comet.gaming.streamer.hub":return{origin:"games_video_hub",subOrigin:"games_video_home_streamer_hub"};case"comet.watch.gaming":return{origin:"video_home",subOrigin:"games_video_home"};case"comet.watch.gaming.gamehub":case"comet.watch.gaming.gamehub.clips":case"comet.watch.gaming.gamehub.live":case"comet.watch.gaming.gamehub.waslive":return{origin:"video_home",subOrigin:"games_video_single_game"};case"comet.gaming.video":case"comet.gaming.mixer":case"comet.gaming.following":case"comet.gaming.following.clips":case"comet.gaming.following.games":case"comet.gaming.following.live":case"comet.gaming.following.streamers":case"comet.gaming.following.videos":return{origin:"games_video_hub",subOrigin:"games_video_home"};case"comet.gaming.recently_watched":case"comet.gaming.viewing_history":return{origin:"games_video_hub",subOrigin:"watch_history"};case"comet.gaming.clips":case"comet.gaming.videos":case"comet.gaming.live_videos":case"comet.gaming.notifications":case"comet.gaming.research_eligibility":return{origin:"games_video_hub",subOrigin:"games_video_home_see_all"};default:throw b("unrecoverableViolation")("Unexpected trace policy","gaming_video")}}function i(a){switch(a){case"comet.gaming.gaming_profile":return"gaming_activity_hub";case"comet.gaming.clips":return"games_all_top_weekly_clips";case"comet.gaming.directory":return"games_directory";case"comet.gaming.gamehub":return"gamehub";case"comet.gaming.streamer.hub":return"streamer_hub";case"comet.gaming.streamers.suggested":return"games_all_streamers";case"comet.gaming.video":return"games_video_home";case"comet.gaming.videos":return"games_all_was_lives";case"comet.gaming.live_videos":return"games_video_section_all";case"comet.gaming.mixer":return"mixer";case"comet.gaming.following":return"following";case"comet.gaming.for_you":return"for_you";case"comet.gaming.recently_watched":return"recently_watched_video";case"comet.gaming.viewing_history":return"viewing_history";case"comet.watch.gaming":return"games_video_home";case"comet.watch.gaming.gamehub":case"comet.watch.gaming.gamehub.clips":case"comet.watch.gaming.gamehub.live":case"comet.watch.gaming.gamehub.waslive":return"gamehub";case"comet.gaming.arena.about":case"comet.gaming.arena.participants":case"comet.gaming.arena.home":case"comet.gaming.arena.brackets":case"comet.gaming.arena.standings":case"comet.gaming.arena.videos":return"tournaments";case"comet.gaming.games":return"instant_games_home";case"comet.gaming.web_games":return"games";case"comet.gaming.mixer.streamers":case"comet.gaming.research_eligibility":case"comet.gaming.notifications":default:return"unknown"}}function a(){return g(b("useCometRouteTracePolicy")())}function c(){return h(b("useCometRouteTracePolicy")())}function d(){return i(b("useCometRouteTracePolicy")())}}),null);
__d("CometGamingImpressionLogger.react",["React","useGamingVideoDestinationEventLogger","useSinglePartialViewImpression"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.dataToLog;a=b("useGamingVideoDestinationEventLogger")();var e=a.logImpression;a=g.useCallback(function(a){if(a==null)return;e(d)},[d,e]);a=b("useSinglePartialViewImpression")({onImpressionStart:a});return g.cloneElement(c,{ref:a})}}),null);
__d("CometGamingDestinationSectionContainer",["fbt","CometFlexibleHScroll.react","CometGamingImpressionLogger.react","React","TetraUnit.react","TetraUnitHeader.react","gkx","stylex","useGamingVideoDestinationEventLogger"],(function(a,b,c,d,e,f,g){"use strict";f.CometGamingDestinationGameSectionContainer=a;f.CometGamingDestinationVideoSectionContainer=c;f.CometGamingDestinationStreamerSectionContainer=d;var h=b("React");function i(a){var c=a.baseCardWidth,d=a.children,e=a.headline,f=a.maxWidth,i=a.sectionID;a=a.seeAllUrl;var j=b("useGamingVideoDestinationEventLogger")(),k=j.logClick,l={encoded_section_id:i,sub_surface:"see_all"};j=a!=null&&d.length>4;i=d.map(function(a,c){return h.jsx(b("CometFlexibleHScroll.react").Child,{children:h.jsx("div",{className:"datstx6m",children:a})},c)});return h.jsx(b("CometGamingImpressionLogger.react"),{dataToLog:l,children:h.jsx(b("TetraUnit.react"),{header:h.jsx(b("TetraUnitHeader.react"),{action:j?g._("See all"):void 0,actionLinkProps:j?{url:a}:void 0,headline:e,level:1,onActionPress:function(){return k(l)},paddingHorizontal:4}),paddingBottom:8,type:"transparent",children:h.jsx(b("CometFlexibleHScroll.react").Container,{accessibilityLabel:e,cardWidth:{minWidth:c,type:"responsive"},gap:8,maxContentWindowWidth:f,children:i})})})}function a(a){return h.jsx(i,babelHelpers["extends"]({baseCardWidth:150},a))}function c(a){return h.jsx(i,babelHelpers["extends"]({baseCardWidth:b("gkx")("1797876")?270:300,maxWidth:1800},a))}function d(a){return h.jsx(i,babelHelpers["extends"]({baseCardWidth:150},a))}}),null);
__d("CometGamingVideoEntityUnit.react",["CometAspectRatioContainer.react","CometCard.react","CometColumn.react","CometColumnItem.react","CometImageCover.react","CometPressable.react","React","TetraTextPairing.react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={body:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"tw6a2znq"},content:{display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",width:"k4urcfbm"},cta:{marginTop:"aov4n071"},footer:{marginTop:"km676qkl",paddingTop:"aodizinl"},root:{display:"j83agx80",height:"datstx6m",minWidth:"cq4ayyhn",width:"k4urcfbm"}};function j(a){switch(a){case"SQUARE":return 1;case"TALL":return 2/3;default:throw b("unrecoverableViolation")("gaming_video","Unsupported aspectRatio "+a)}}function a(a,c){var d=a.aspectRatio,e=a.children,f=a.collapseFooter;f=f===void 0?!1:f;var k=a.coverImgAddOn,l=a.cta,m=a.description,n=a.dropShadow;n=n===void 0?1:n;var o=a.name,p=a.onPress,q=a.profilePictureURL;a=a.url;return h.jsx("div",{className:(g||(g=b("stylex")))(i.root),ref:c,children:h.jsx(b("CometCard.react"),{background:"white",dropShadow:n,expanding:!0,children:h.jsxs(b("CometPressable.react"),{"aria-label":o,linkProps:{url:a},onPress:p,xstyle:i.content,children:[h.jsxs(b("CometAspectRatioContainer.react"),{aspectRatio:j(d),children:[k,h.jsx(b("CometImageCover.react"),{alt:o,src:q})]}),h.jsxs("div",{className:g(i.body),children:[h.jsx(b("TetraTextPairing.react"),{body:m,headline:o,headlineLineLimit:2,level:4}),h.jsxs("div",{className:g(!f&&i.footer),children:[h.Children.count(e)<=1?e:h.jsx(b("CometColumn.react"),{spacing:4,children:h.Children.map(e,function(a){return h.jsx(b("CometColumnItem.react"),{children:a})})}),h.jsx("div",{className:g(i.cta),children:l})]})]})]})})})}c=h.forwardRef(a);e.exports=c}),null);
__d("CometGamingVideoThumbnailInfo.react",["CometLink.react","CometMiddotSeparator.react","CometRelay","React","TetraListCell.react","XCometGamingGameVanityControllerRouteBuilder","XCometGamingVanityControllerRouteBuilder","emptyFunction","getGamingCaller","isStringNullOrEmpty","requireCond","usePlayerOriginRouteTracePolicy","useWatchSafeRouteBuilder","cr:1291368","CometGamingVideoThumbnailInfo_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=(c=b("cr:1291368"))!=null?c:b("emptyFunction"),j=g!==void 0?g:g=b("CometGamingVideoThumbnailInfo_video.graphql");function a(a){var c=a.onClick,d=a.playerOrigin,e=a.playerSubOrigin,f=a.showProfileName;f=f===void 0?!0:f;var g=a.showProfilePhoto;g=g===void 0?!0:g;a=a.video;a=b("CometRelay").useFragment(j,a);var k=a.attributed_game,l=a.owner,m=a.title_with_fallback,n=a.url;a=a.video_channel;var o=b("useWatchSafeRouteBuilder")(),p=b("getGamingCaller")(),q=i({extraData:{caller:p,channelID:a==null?void 0:a.id,origin:d,suborigin:e},href:n});d=b("usePlayerOriginRouteTracePolicy")();var r=b("isStringNullOrEmpty")(l==null?void 0:l.page_vanity_url)?l==null?void 0:l.vanity:l==null?void 0:l.page_vanity_url,s=!!(l==null?void 0:l.is_currently_live),t=l==null?void 0:l.name;l=l==null?void 0:(l=l.profile_picture)==null?void 0:l.uri;var u=k==null?void 0:k.name;k=(k==null?void 0:k.vanity)!=null?o(b("XCometGamingGameVanityControllerRouteBuilder")).buildURL({vanity:k==null?void 0:k.vanity}):void 0;o=o(b("XCometGamingVanityControllerRouteBuilder")).buildURL({vanity:r});return h.jsx(b("TetraListCell.react"),{addOnPrimary:!g||l==null?void 0:{"aria-label":(r=t)!=null?r:"",linkProps:o==null?void 0:{url:o},shape:"circle",size:48,source:{uri:l},storyStatus:s?"live":"none",type:"profile-photo"},body:h.jsxs(b("CometMiddotSeparator.react"),{children:[f&&t!=null&&h.jsx(b("CometLink.react"),{color:"secondary",href:o,children:t}),u!=null&&k!=null&&h.jsx(b("CometLink.react"),{color:"secondary",href:k,children:u})]}),bodyColor:"secondary",bodyLineLimit:2,contentHorizontalPadding:0,headline:h.jsx(b("CometLink.react"),{href:n,onClick:function(a){c==null?void 0:c(),q==null?void 0:q(a)},passthroughProps:{caller:p,channelEntryPoint:"FACEBOOK_GAMING",channelID:a==null?void 0:a.id,initialTracePolicy:d,playerSubOrigin:e},preventLocalNavigation:q!=null,children:m}),headlineLineLimit:2,level:4,paddingHorizontal:0})}}),null);
__d("CometGamingVideoThumbnailUnit.react",["CometGamingImpressionLogger.react","CometGamingVideoThumbnail.react","CometGamingVideoThumbnailInfo.react","CometRelay","React","stylex","useGamingVideoDestinationEventLogger","CometGamingVideoThumbnailUnit_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=g!==void 0?g:g=b("CometGamingVideoThumbnailUnit_video.graphql");function a(a){var c=a.playerOrigin,d=a.playerSubOrigin,e=a.sectionID,f=a.showProfileName;f=f===void 0?!0:f;var g=a.showProfilePhoto;g=g===void 0?!0:g;a=a.video;a=b("CometRelay").useFragment(i,a);var j=b("useGamingVideoDestinationEventLogger")(),k=j.logClick,l={encoded_section_id:e,game_id:(j=a.attributed_game)==null?void 0:j.id,page_id:a==null?void 0:(e=a.owner)==null?void 0:e.id,sub_surface:"video",video_id:a.id};return h.jsx(b("CometGamingImpressionLogger.react"),{dataToLog:l,children:h.jsxs("div",{className:"k4urcfbm",children:[h.jsx(b("CometGamingVideoThumbnail.react"),{onClick:function(){return k(l)},playerOrigin:c,playerSubOrigin:d,video:a}),h.jsx(b("CometGamingVideoThumbnailInfo.react"),{onClick:function(){return k(l)},playerOrigin:c,playerSubOrigin:d,showProfileName:f,showProfilePhoto:g,video:a})]})})}}),null);
__d("XCometGamingLiveVideosControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/live/",Object.freeze({following:!1}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingNotificationsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/notifications/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingSuggestedStreamersControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/streamers/",Object.freeze({is_live:!1,following:!1}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingVideoFollowingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/following/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingVideoFollowingGamesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/following/games/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingVideoFollowingStreamersControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/following/streamers/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingVideoGameDirectoryControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/directory/",Object.freeze({following:!1}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingVideoRecentlyWatchedControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/recent/streamers/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometInstantGamesHubControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/games/instantgames/",Object.freeze({category:400}),void 0);c=a;e.exports=c}),null);
__d("CometGamingNewForYou_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingNewForYou_viewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometNotificationsListItem_actor"}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"environment_alias_override",value:"GAMES_TAB"},{kind:"Literal",name:"first",value:2},{kind:"Literal",name:"notif_cache_ids",value:[]},{kind:"Literal",name:"notif_query_flags",value:["IS_COMET"]},{kind:"Literal",name:"source",value:"unknown"}],concreteType:"ViewerNotificationsPageConnection",kind:"LinkedField",name:"notifications_page",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notif",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"first_seen_time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometNotificationsListItem_notification"}],storageKey:null}],type:"NotifPageNotificationRow",abstractKey:null}],storageKey:null}],storageKey:'notifications_page(environment_alias_override:"GAMES_TAB",first:2,notif_cache_ids:[],notif_query_flags:["IS_COMET"],source:"unknown")'}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometLayoutSidePaneAndMainContentResponsiveContainer.react",["BaseContainerQueryElement.react","BaseHeadingContext","BaseView.react","CometLeftRailLayoutContext","CometLeftRailPrimaryContext","CometRouterFocusRegion.react","CometStickyHeader.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={containerResponsive:{display:"j83agx80",flexDirection:"btwxx1t3",minHeight:"dp1hu0rb",position:"l9j0dhe7","@media (max-width: 899px)":{flexDirection:"psu0lv52",zIndex:"gpq6b651"}},contentArea:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",minHeight:"dp1hu0rb",minWidth:"hpfvmrgz",position:"l9j0dhe7",zIndex:"du4w35lb"},contentAreaWithLeftRailPrimary:{"@media (max-width: 899px)":{display:"hlyrhctz"}},leftRailResponsive:{display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"dp1hu0rb",overflowAnchor:"rek2kq2y",width:"o36gj0jk",zIndex:"tkr6xdv7","@media (max-width: 899px)":{display:"hlyrhctz"}},mainContent:{display:"j83agx80",minHeight:"dp1hu0rb"},responsiveHeader:{display:"mkhogb32","@media (max-width: 899px)":{display:"f0t0fhil",zIndex:"nakwltuq"}}};function a(a){var c=a.leftRailContent,d=a.leftRailHeading,e=a.leftRailPrimary;e=e===void 0?!1:e;var f=a.mainContent,j=a.mainContentHeading;a=a.testid;a=h.useContext(b("BaseHeadingContext"));a=h.jsx("div",{className:(g||(g=b("stylex")))(i.contentArea,e===!0?i.contentAreaWithLeftRailPrimary:null),children:h.jsx(b("CometRouterFocusRegion.react"),{children:h.jsx(b("CometLeftRailLayoutContext").Provider,{value:!0,children:h.jsx(b("BaseHeadingContext").Provider,{value:a+1,children:f})})})});f=h.jsx(b("BaseContainerQueryElement.react"),{"aria-label":d,breakpoint:900,inverseToContainer:!0,maxWidth:360,minWidth:360,role:"navigation",xstyle:i.leftRailResponsive,children:c});d=h.jsx(b("BaseContainerQueryElement.react"),{"aria-label":d,breakpoint:900,inverseToContainer:!0,maxWidth:"100%",minWidth:360,role:"navigation",children:c});c=h.jsx(b("BaseContainerQueryElement.react"),{"aria-label":j,breakpoint:900,inverseToContainer:!0,maxWidth:"100%",minWidth:"calc(100% - 360px)",role:"main",xstyle:i.mainContent,children:a});return h.jsx(b("BaseView.react"),{testid:void 0,xstyle:i.containerResponsive,children:h.jsxs(b("CometLeftRailPrimaryContext").Provider,{value:e,children:[h.jsx(b("CometStickyHeader.react"),{xstyle:i.responsiveHeader,children:d}),f,c]})})}}),null);
__d("CometGamingNewForYou.react",["fbt","CometCard.react","CometNotificationsListItem.react","CometRelay","CometRow.react","CometRowItem.react","React","TetraTextPairing.react","TetraUnit.react","TetraUnitHeader.react","XCometGamingNotificationsControllerRouteBuilder","stylex","useServerTime","CometGamingNewForYou_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=h!==void 0?h:h=b("CometGamingNewForYou_viewer.graphql");function k(a,b){return Math.floor((a-b)/1e3/60)<=30}function a(a){var c=a.headerLevel;c=c===void 0?1:c;a=a.viewer;var d=b("useServerTime")();a=b("CometRelay").useFragment(j,a);var e=a.actor;a=a.notifications_page;a=(a=a==null?void 0:(a=a.nodes)==null?void 0:a.filter(function(a){a=a==null?void 0:a.notif;if(a==null)return!1;var b=a.seen_state;if(b==="UNSEEN_AND_UNREAD")return!0;if(b==="SEEN_AND_READ")return!1;b=a.first_seen_time;return b==null?!0:k(d,new Date(b*1e3))}))!=null?a:[];return a.length===0?null:i.jsx("div",{className:"tr9rh885",children:i.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:i.jsx(b("TetraUnit.react"),{header:i.jsx(b("TetraUnitHeader.react"),{action:g._("See all"),actionLinkProps:{url:b("XCometGamingNotificationsControllerRouteBuilder").buildURL({})},headline:g._("New for You"),level:c}),children:i.jsx(b("CometRow.react"),{columns:2,expanding:!0,role:"table",children:a.map(function(a){a=a.notif;return a==null?null:i.jsx(b("CometRowItem.react"),{role:"rowgroup",children:i.jsx(b("CometNotificationsListItem.react"),{actor:e,notification:a})},a.notif_id)})})})})})}}),null);
__d("CometGamingResponsiveLayout.react",["fbt","CometGamingTracePolicyHooks","CometLayoutSidePaneAndMainContentResponsiveContainer.react","CometLayoutSidePaneResponsive.react","CometLeftRailHeader.react","React","XCometGamingArenaHomeControllerRouteBuilder","XCometGamingControllerRouteBuilder","XCometInstantGamesHubControllerRouteBuilder","gkx","requireCond","useCometRouteTracePolicy","cr:1483578"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React"),i=b("gkx")("708253");function a(a){var c=a.heading,d=a.leftRailContent;a=a.mainContent;var e=b("CometGamingTracePolicyHooks").useGamingRouteType(),f=b("useCometRouteTracePolicy")();e=i?e==="GAMING_VIDEO":f==="comet.gaming.video";return h.jsx(b("CometLayoutSidePaneAndMainContentResponsiveContainer.react"),{leftRailContent:h.jsx(b("CometLayoutSidePaneResponsive.react").CometLayoutSidePaneResponsive,{header:h.jsx(b("CometLeftRailHeader.react"),{auxiliary:b("cr:1483578")!=null?h.jsx(b("cr:1483578"),{}):void 0,title:c}),primaryNav:d,topTabs:[{label:g._("Play Games"),linkProps:{url:b("XCometInstantGamesHubControllerRouteBuilder").buildURL({})},selected:f==="comet.gaming.games"},{label:g._("Gaming Video"),linkProps:{url:b("XCometGamingControllerRouteBuilder").buildURL({})},selected:e},{label:g._("Tournaments"),linkProps:{passthroughProps:{arena_ref:"gaming_left_rail"},url:b("XCometGamingArenaHomeControllerRouteBuilder").buildURL({})},selected:f==="comet.gaming.arena.home"}]}),leftRailHeading:c,mainContent:a,mainContentHeading:c})}}),null);
__d("GamesServiceGamingProfileStrings",["fbt","CometNumber.react","React"],(function(a,b,c,d,e,f,g){"use strict";f.getGamingActivityString=a;f.getGamingActivityStringUpperCase=c;f.getMediaShareSectionTitle=d;f.getMediaLibAvailableText=e;f.getMediaLibAutoDeletionText=i;f.getSeeAllText=j;f.getMediaLibManageText=k;f.getEditProfileText=l;f.getAvatarUpdatedNuxText=m;f.getAppGamingActivitySectionSelfViewTitle=n;f.getHeaderPlayerNameText=o;f.getEditText=p;f.getEditPlayerNameText=q;f.getNameStatementInfoText=r;f.getIGGamingActivitySectionSelfViewTitle=s;f.getGamesFollowedSectionSelfViewTitle=t;f.getStreamersFollowedSectionSelfViewTitle=u;f.getSuggestedGamesTitle=v;f.getSuggestedStreamersTitle=w;f.getSuggestedInstantGamesTitle=x;f.getMediaLibFilterAllText=y;f.getMediaLibFilterGamesText=z;f.getMediaLibFilterPhotosText=A;f.getMediaLibFilterVideosText=B;f.getPagesSectionTitle=C;f.getGroupsSectionTitle=D;var h=b("React");function a(){return g._("Gaming Activity")}function c(){return g._("GAMING ACTIVITY")}function d(){return g._("Your Game Captures")}function e(){return g._("Only you can see this")}function i(){return g._("Gameplay clips disappear 28 days after they are created")}function j(){return g._("See All")}function k(){return g._("Manage")}function l(){return g._("Edit This")}function m(){return g._("Your avatar's design has been updated. You can choose a new avatar at any time.")}function n(){return g._("Games You Play")}function o(){return g._("PLAYER NAME")}function p(){return g._("Edit")}function q(){return g._("Player Name")}function r(){return g._("People will see your full name next to your Player Name")}function s(){return g._("Instant Games You Play")}function t(){return g._("Games You Follow")}function u(){return g._("Streamers You Follow")}function v(){return g._("Suggested Games")}function w(){return g._("Suggested Streamers")}function x(){return g._("Suggested Instant Games")}function y(){return g._("All")}function z(){return g._("Games A-Z")}function A(){return g._("Photos")}function B(){return g._("Videos")}a=function(a){return g._({"*":"{page like count} like this","_1":"{page like count} likes this"},[g._param("page like count",h.jsx(b("CometNumber.react"),{decimals:0,number:a})),g._plural(a)])};f.getPageLikeCountText=a;c=function(a){return g._({"*":"{number} friends","_1":"1 friend"},[g._plural(a,"number")])};f.getFriendsCountText=c;function C(){return g._("Pages")}function D(){return g._("Groups")}d=function(a){return g._({"*":"{number} Members","_1":"1 Member"},[g._plural(a,"number")])};f.getGroupMemberCountText=d;e=function(a){return g._("Your {app name} activity will appear here.",[g._param("app name",h.jsx("strong",{children:a}))])};f.getAppExtraActivityText=e}),null);
__d("useGamingVideoDestinationLoggingContext",["GamingVideoDestinationLoggingContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){return g.useContext(b("GamingVideoDestinationLoggingContext"))}}),null);
__d("useGamingDestinationLogSurfaceEnter",["React","useGamingVideoDestinationEventLogger","useGamingVideoDestinationLoggingContext","useShallowEqualMemo","RunComet"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=b("useGamingVideoDestinationLoggingContext")(),d=b("useGamingVideoDestinationEventLogger")(),e=d.logEvent,f=b("useShallowEqualMemo")(babelHelpers["extends"]({},c,a)),h=g.useRef(!1),i=g.useRef(Date.now());g.useEffect(function(){c.surface!==f.surface&&e("surface_enter",f);i.current=Date.now();h.current=!1;var a=function(){c.surface!==f.surface&&!h.current&&(e("surface_exit",babelHelpers["extends"]({},f,{time_spent:Date.now()-i.current})),h.current=!0)},d=b("RunComet").onBeforeUnload(a,!1);return function(){d.remove(),a()}},[e,c,f])}c=a;e.exports=c}),null);
__d("CometGamingDestinationSurfaceLoggingContainer",["GamingVideoDestinationLoggingContext","React","useGamingVideoDestinationLoggingContext","useShallowEqualMemo"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);var d=b("useGamingVideoDestinationLoggingContext")();d=b("useShallowEqualMemo")(babelHelpers["extends"]({},d,a));return g.jsx(b("GamingVideoDestinationLoggingContext").Provider,{value:d,children:c})}}),null);
__d("CometInstantGamesHubGameCategories",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a=[{categoryID:400,fbt:g._("All Categories"),icon:"/images/games/games_falling_bits_44-2x.png"},{categoryID:414,fbt:g._("Action"),icon:"/images/instant_games/categories/ActionIcon.png"},{categoryID:426,fbt:g._("Bingo"),icon:"/images/instant_games/categories/BingoIcon.png"},{categoryID:402,fbt:g._("Board"),icon:"/images/instant_games/categories/BoardIcon.png"},{categoryID:421,fbt:g._("Builders"),icon:"/images/instant_games/categories/BuildersIcon.png"},{categoryID:403,fbt:g._("Card"),icon:"/images/instant_games/categories/CardIcon.png"},{categoryID:418,fbt:g._("Card Battle"),icon:"/images/instant_games/categories/CardBattleIcon.png"},{categoryID:422,fbt:g._("Match 3"),icon:"/images/instant_games/categories/Match3Icon.png"},{categoryID:430,fbt:g._("MOBA"),icon:"/images/instant_games/categories/MOBAIcon.png"},{categoryID:425,fbt:g._("Poker & Table"),icon:"/images/instant_games/categories/PokerIcon.png"},{categoryID:408,fbt:g._("Puzzle"),icon:"/images/instant_games/categories/PuzzleIcon.png"},{categoryID:417,fbt:g._("Role Playing"),icon:"/images/instant_games/categories/RoleIcon.png"},{categoryID:423,fbt:g._("Runner"),icon:"/images/instant_games/categories/RunnerIcon.png"},{categoryID:406,fbt:g._("Simulation"),icon:"/images/instant_games/categories/SimulationIcon.png"},{categoryID:427,fbt:g._("Slots"),icon:"/images/instant_games/categories/SlotsIcon.png"},{categoryID:412,fbt:g._("Sports"),icon:"/images/instant_games/categories/SportsIcon.png"},{categoryID:410,fbt:g._("Strategy"),icon:"/images/instant_games/categories/StrategyIcon.png"},{categoryID:420,fbt:g._("Trivia & Word"),icon:"/images/instant_games/categories/TriviaWordIcon.png"}];e.exports=a}),null);
__d("InstantGamesWebHubEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743697");c=b("FalcoLoggerInternal").create("instant_games_web_hub_events",a);e.exports=c}),null);
__d("GamesServiceGamerProfileTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GamesServiceGamerProfileLoggerConfig")}),null);
__d("InstantGamesWebHubTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:InstantGamesWebHubLoggerConfig")}),null);
__d("ShowAllReactWarnings",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;b("React");function a(a){a=a.children;return a}}),null);
__d("StrictMode",["React","ShowAllReactWarnings"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.children;return g.jsx(b("ShowAllReactWarnings"),{children:g.jsx(g.StrictMode,{children:a})})}}),null);
__d("XCometGamingArenaControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/tournaments/{arena_id}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometGamingArenaHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/gaming/tournaments/",Object.freeze({open_create_tournament_form:!1}),void 0);c=a;e.exports=c}),null);
__d("useShallowEqualMemo",["React","shallowEqual"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=g.useRef(a),d=b("shallowEqual")(c.current,a)?c.current:a;g.useEffect(function(){c.current=d},[d]);return d}}),null);
__d("useToggle",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a===void 0&&(a=!1);a=g.useState(a);var b=a[0],c=a[1];a=g.useCallback(function(a){c(a==null?function(a){return!a}:a)},[]);return[b,a]}}),null);
__d("GamingArenaFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743644");c=b("FalcoLoggerInternal").create("gaming_arena",a);e.exports=c}),null);
__d("GamingVideoDestinationLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={external_entrypoint:"unknown",surface:"unknown"};d=a.createContext(c);e.exports=d}),null);
__d("GamingDestinationTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GamingDestinationLoggerConfig")}),null);
__d("useGamingVideoDestinationEventLogger",["GamingDestinationTypedLoggerLite","GamingVideoDestinationLoggingContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useContext(b("GamingVideoDestinationLoggingContext")),c=g.useCallback(function(c,d){b("GamingDestinationTypedLoggerLite").log(babelHelpers["extends"]({event:c},a,d))},[a]),d=g.useCallback(function(a){c("click",a)},[c]),e=g.useCallback(function(a){c("impression",a)},[c]);return{logClick:d,logEvent:c,logImpression:e}}}),null);