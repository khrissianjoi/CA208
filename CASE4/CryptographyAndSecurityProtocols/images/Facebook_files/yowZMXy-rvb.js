if (self.CavalryLogger) { CavalryLogger.start_js(["bCO2U"]); }

__d("ProfileCometTimelineTabAuxBanner_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTimelineTabAuxBanner_user",selections:[{alias:"aux_banner",args:[{kind:"Literal",name:"render_location",value:"TIMELINE_TAB_AUX_COLUMN"},{kind:"Literal",name:"supported",value:["ProfilePlusNewPagesGuideBanner","ProfileCommunityQPBanner"]}],concreteType:null,kind:"LinkedField",name:"comet_profile_banner",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabAuxBanner_user",fragmentName:"ProfilePlusNewPagesGuideBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePlusNewPagesGuideBanner",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabAuxBanner_user",fragmentName:"ProfileCommunityQPBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileCommunityQPBanner",abstractKey:null}],storageKey:'comet_profile_banner(render_location:"TIMELINE_TAB_AUX_COLUMN",supported:["ProfilePlusNewPagesGuideBanner","ProfileCommunityQPBanner"])'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTimelineTabFeedBanner_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTimelineTabFeedBanner_user",selections:[{alias:"feed_banner",args:[{kind:"Literal",name:"render_location",value:"TIMELINE_TAB_FEED_COLUMN"},{kind:"Literal",name:"supported",value:["LockedProfileTryItBanner","ProfilePlusAdminComposer"]}],concreteType:null,kind:"LinkedField",name:"comet_profile_banner",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabFeedBanner_user",fragmentName:"ProfileCometLockedProfileTryItBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"LockedProfileTryItBanner",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabFeedBanner_user",fragmentName:"ProfileCometProfilePlusAdminComposer_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePlusAdminComposer",abstractKey:null}],storageKey:'comet_profile_banner(render_location:"TIMELINE_TAB_FEED_COLUMN",supported:["LockedProfileTryItBanner","ProfilePlusAdminComposer"])'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometInfoReviewUnit_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometInfoReviewUnit_user",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileWizardNUX"]}],concreteType:null,kind:"LinkedField",name:"profile_info_review_unit",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometInfoReviewUnit_user",fragmentName:"ProfileCometWizardNUX_unit",fragmentPropName:"unit",kind:"ModuleImport"}],type:"ProfileWizardNUX",abstractKey:null}],storageKey:'profile_info_review_unit(supported:["ProfileWizardNUX"])'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTimelineTabAuxBanner.react",["CometRelay","React","ProfileCometTimelineTabAuxBanner_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTimelineTabAuxBanner_user.graphql"),a.user);return h.jsx(b("CometRelay").MatchContainer,{match:a==null?void 0:a.aux_banner})}}),null);
__d("ProfileCometTimelineTabFeedBanner.react",["CometRelay","React","ProfileCometTimelineTabFeedBanner_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTimelineTabFeedBanner_user.graphql"),a.user);return h.jsx(b("CometRelay").MatchContainer,{match:a==null?void 0:a.feed_banner})}}),null);
__d("ProfileCometInfoReviewUnitGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){return g.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:[g.jsx(a=b("BaseGlimmer.react"),{className:"k5ud4834 sjgh65i0 rgmg9uty lsl2245n hqlzco19 o3c63hce lit7pgxp",index:0}),g.jsx(a,{className:"sjgh65i0 qzj7cv8z j83agx80 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:1}),g.jsxs("div",{className:"i1fnvgqd j83agx80",children:[g.jsx(a,{className:"lelwyktv tv7at329 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:2}),g.jsxs("div",{className:"n99xedck bkfpd7mw j83agx80",children:[g.jsx(a,{className:"ljni7pan tv7at329 lsl2245n hqlzco19 o3c63hce lit7pgxp tvfksri0",index:3}),g.jsx(a,{className:"ljni7pan tv7at329 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:4})]})]})]})}c=g.forwardRef(a);e.exports=c}),null);
__d("ProfileCometInfoReviewUnit.react",["CometCard.react","CometPlaceholder.react","CometRelay","ProfileCometInfoReviewUnitGlimmer.react","React","stylex","ProfileCometInfoReviewUnit_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.user;a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometInfoReviewUnit_user.graphql"),a);var c=h.useState(!0),d=c[0];c=c[1];a=a==null?void 0:a.profile_info_review_unit;return a==null||!d?null:h.jsx("div",{className:"sjgh65i0",children:h.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("ProfileCometInfoReviewUnitGlimmer.react"),{}),children:h.jsx(b("CometRelay").MatchContainer,{match:a,props:{setIsVisible:c}})})})})}}),null);
__d("ProfileCometPostFiltersDialogReducer",["ProgressiveDateUtil"],(function(a,b,c,d,e,f){"use strict";a=function(a){return{date:b("ProgressiveDateUtil").parseDate(null),postedBy:a?"YOU":"ANYONE",privacy:"ALL",taggedPosts:"ALL"}};f.getInitialState=a;c=function(a,b){switch(b.type){case"SET_FILTERS":return babelHelpers["extends"]({},a,{date:b.date,postedBy:b.postedBy,privacy:b.privacy,taggedPosts:b.taggedPosts});default:return babelHelpers["extends"]({},a)}};f.reducer=c}),null);
__d("ProfileCometPostFiltersDialogContext",["ProfileCometPostFiltersDialogReducer","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({dispatchAction:function(a){b("recoverableViolation")("ProfileCometPostFiltersDialogContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometPostFiltersDialogContext.Provider value={context} />","profile_comet")},state:b("ProfileCometPostFiltersDialogReducer").getInitialState(!1)});e.exports=c}),null);
__d("ProfileCometTimelineViewSwitcherTab.react",["CometTab.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={tab:{height:"qypqp5cg",justifyContent:"taijpn5t",width:"k4urcfbm"},tabOverlayPressed:{backgroundColor:"ckkva4tx"}};function a(a){var c=a.icon,d=a.label,e=a.linkProps,f=a.selected;f=f===void 0?!1:f;a=a.testid;return g.jsx(b("CometTab.react"),{icon:c,iconLocation:"left",label:d,linkProps:e,overlayDisabled:f,overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayPressedStyle:h.tabOverlayPressed,overlayRadius:6,selected:f,testid:void 0,underlineColor:"var(--accent)",xstyle:h.tab})}}),null);
__d("ProfileCometTimelineControls.react",["ix","fbt","BaseRow.react","BaseRowItem.react","CometCard.react","CometCardedDialogLoadingState.react","CometLazyDialogTrigger.react","CometRow.react","CometRowItem.react","CometTransientDialogProvider.react","JSResource","ProfileCometPostFiltersDialogContext","ProfileCometPostFiltersDialogReducer","ProfileCometTimelineViewSwitcherTab.react","ProfileCometURIUtils","React","TetraButton.react","TetraTextPairing.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=b("JSResource")("ProfileCometPostFiltersDialog.react").__setRef("ProfileCometTimelineControls.react"),l=b("JSResource")("ProfileCometManagePostsDialog.react").__setRef("ProfileCometTimelineControls.react"),m={buttons:{display:"j83agx80",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05"},divider:{borderTop:"l6v480f0"},filtersButton:{marginEnd:"oi9244e8"},root:{marginBottom:"sjgh65i0"},viewSwitcherTabContainer:{marginEnd:"tvfksri0",marginStart:"ozuftl9m"}};function a(a){var c=a.shouldHidePostedByFilters;c=c===void 0?!1:c;var d=a.userID;a=a.viewType;var e=j.useCallback(function(a){return j.jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,title:h._("Post Filters"),withCloseButton:!0})},[]),f=j.useCallback(function(a){return j.jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,title:h._("Manage Posts"),withCloseButton:!0})},[]),n=j.useReducer(b("ProfileCometPostFiltersDialogReducer").reducer,b("ProfileCometPostFiltersDialogReducer").getInitialState(c)),o=n[0],p=n[1];n=b("ProfileCometURIUtils").useURIForProfile();var q=b("ProfileCometURIUtils").useURIForProfileSection("grid"),r=j.useMemo(function(){return{dispatchAction:p,state:o}},[o]);return j.jsx("div",{className:(i||(i=b("stylex")))(m.root),children:j.jsxs(b("CometCard.react"),{background:"white",dropShadow:1,children:[j.jsxs(b("CometRow.react"),{paddingTop:0,children:[j.jsx(b("CometRowItem.react"),{verticalAlign:"center",children:j.jsx(b("TetraTextPairing.react"),{headline:h._("Posts"),isSemanticHeading:!0,level:2})}),j.jsx(b("CometRowItem.react"),{verticalAlign:"center",children:j.jsx("div",{className:i(m.buttons),children:j.jsx(b("ProfileCometPostFiltersDialogContext").Provider,{value:r,children:j.jsxs(b("CometTransientDialogProvider.react"),{children:[j.jsx("div",{className:i(m.filtersButton),children:j.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{shouldHidePostedByFilters:c},dialogResource:k,fallback:e,children:function(a,c,d){return j.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("500218"),16),label:h._("Filters"),onHoverIn:d,onPress:a,ref:c,type:"secondary"})}})}),j.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{shouldHidePostedByFilters:c,userID:d},dialogResource:l,fallback:f,children:function(a,c,d){return j.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("497566"),16),label:h._("Manage Posts"),onHoverIn:d,onPress:a,ref:c,testid:void 0,type:"secondary"})}})]})})})})]}),j.jsx("div",{className:i(m.divider)}),j.jsxs(b("BaseRow.react"),{role:"tablist",xstyle:m.viewSwitcherTabContainer,children:[j.jsx(b("BaseRowItem.react"),{expanding:!0,children:j.jsx(b("ProfileCometTimelineViewSwitcherTab.react"),{icon:b("fbicon")._(g("533527"),16),label:h._("List View"),linkProps:{routeTarget:"self",url:n},selected:a==="list",testid:void 0})}),j.jsx(b("BaseRowItem.react"),{expanding:!0,children:j.jsx(b("ProfileCometTimelineViewSwitcherTab.react"),{icon:b("fbicon")._(g("531309"),16),label:h._("Grid View"),linkProps:{routeTarget:"self",url:q},selected:a==="grid",testid:void 0})})]})]})})}}),null);
__d("ProfileCometTimelineEmptyState.react",["fbt","React","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(){return h.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:h.jsx(b("TetraText.react"),{align:"center",color:"secondary",type:"headlineEmphasized2",children:g._("No posts available")})})}}),null);
__d("useProfileCometTimelineFeedQueryRefetcherForFilters",["ProfileCometTimelineFilterContext","ProgressiveDateUtil","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.fetchCount,d=a.refetch;a=a.variables;var e=a.userID;a=babelHelpers.objectWithoutPropertiesLoose(a,["userID"]);var f=g.useRef(a);a=g.useState(!1);var h=a[0],i=a[1],j=g.useRef(!0),k=g.useRef(d),l=g.useRef(c),m=g.useRef(e);k.current=d;l.current=c;m.current=e;a=g.useContext(b("ProfileCometTimelineFilterContext"));var n=a.state,o=b("ProgressiveDateUtil").toLatestTimestamp(n.date),p=g.useRef({dispose:function(){}});g.useEffect(function(){if(j.current){j.current=!1;return}var a;switch(n.postedBy){case"ANYONE":a=null;break;case"OTHERS":a={group:"NON_OWNER"};break;case"YOU":a={group:"OWNER"};break}var b;switch(n.privacy){case"PUBLIC":b={exclusivity:"EXCLUSIVE",filter:"PUBLIC"};break;case"FRIENDS":b={exclusivity:"EXCLUSIVE",filter:"FRIENDS"};break;case"ONLY_ME":b={exclusivity:"EXCLUSIVE",filter:"SELF"};break;case"ALL":b={exclusivity:"INCLUSIVE",filter:"ALL"};break}var c=n.taggedPosts==="TAGGED";i(!0);p.current.dispose();p.current=k.current(babelHelpers["extends"]({},f.current,{beforeTime:o,count:l.current,id:m.current,postedBy:a,privacy:b,taggedInOnly:c}),{fetchPolicy:"store-and-network",onComplete:function(){i(!1)}})},[o,n.postedBy,n.privacy,n.taggedPosts]);return h}}),null);