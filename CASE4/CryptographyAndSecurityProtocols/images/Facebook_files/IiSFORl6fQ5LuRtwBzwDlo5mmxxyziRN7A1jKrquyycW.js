if (self.CavalryLogger) { CavalryLogger.start_js(["Q\/leV"]); }

__d("ProfileCometHeaderActionBarMenuItem_profileAction.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"icon_color",value:"fds-black"},b={kind:"Literal",name:"icon_size",value:"20"},c={kind:"Variable",name:"scale",variableName:"scale"},d=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMenuItem_profileAction",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{alias:"secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"outline"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:"active_secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"filled"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"}],type:"ProfileAction",abstractKey:"__isProfileAction"}}();e.exports=a}),null);
__d("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"render_location"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMoreMenu_actorWithActionBar",selections:[{alias:null,args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},{kind:"Variable",name:"render_location",variableName:"render_location"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_secondary_only",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBarMenuItem_profileAction"}],storageKey:null}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"};e.exports=a}),null);
__d("ProfileCometActionTrigger_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionTrigger_action",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileActionBlockHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionMessageHandlerBlue","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler"]}],concreteType:null,kind:"LinkedField",name:"client_handler",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionBlockHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionBlockHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCreateDetailedReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCreateDetailedReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionDefaultHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionDefaultHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditFriendListHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditFriendListHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFollowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFollowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFriendRequestHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFriendRequestHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionInsightsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionInsightsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusOnboardingHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusOnboardingHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandlerBlue_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandlerBlue",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerContactHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerContactHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerVideoCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerVideoCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPreferredInteractionHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPreferredInteractionHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportMarketplaceUserHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportMarketplaceHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSeeFirstHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSeeFirstHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionViewProfileTransparencyHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionViewProfileTransparencyHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionRemoveMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionRemoveMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSearchProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSearchProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionMuteMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionMuteMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionTurnOnPostApprovalForMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionTurnOnPostApprovalForMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteModeratorHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteModeratorHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionLeaveGroupHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionLeaveGroupHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionRemoveGroupAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionRemoveGroupAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdditionalProfileRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdditionalProfileRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditContextualProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditContextualProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileReportBioHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileReportBioHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPromoteHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPromoteHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdminToolsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdminToolsHandler",abstractKey:null}],storageKey:'client_handler(supported:["ProfileActionBlockHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionMessageHandlerBlue","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler"])'}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometActionTrigger.react",["CometRelay","ProfileCometContext","React","ProfileCometActionTrigger_action.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.action,d=a.children,e=a.popoverPosition;a=a.source;c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometActionTrigger_action.graphql"),c);var f=h.useContext(b("ProfileCometContext"));f=f.isInViewAs;return f?d({disabled:!0}):h.jsx(b("CometRelay").MatchContainer,{fallback:d({disabled:!0}),match:c.client_handler,props:{children:d,popoverPosition:e,source:a}})}}),null);
__d("ProfileCometContextualProfileContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({groupID:"",isContextualProfileView:!1,renderLocation:null,userID:""});e.exports=c}),null);
__d("ProfileCometHeaderActionBarMenuItem.react",["CometMenuItem.react","CometRelay","ProfileCometActionTrigger.react","ProfileCometContextualProfileContext","React","TintableIconSource","coerceRelayImage","recoverableViolation","useProfileEngagementClickCallback","ProfileCometHeaderActionBarMenuItem_profileAction.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.action;a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarMenuItem_profileAction.graphql"),a);var c=h.useContext(b("ProfileCometContextualProfileContext")),d=c.groupID,e=c.userID;c=c.isContextualProfileView?{event_metadata:{groupID:d},item_subtype:(a.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"contextual_profile",profile_id_dummy:e,surface:"groups"}:{item_subtype:(a.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"action_bar",surface:"timeline"};var f=b("useProfileEngagementClickCallback")(c),i=a.is_active===!0?a.active_secondary_icon:a.secondary_icon,j=a==null?void 0:(d=a.title)==null?void 0:d.text;if(j==null){b("recoverableViolation")("Action has no title","profile_comet");return null}if(!i){b("recoverableViolation")("Action has no icon","profile_comet");return null}return h.jsx(b("ProfileCometActionTrigger.react"),{action:a,children:function(a){var c;return h.jsx(b("CometMenuItem.react"),{disabled:a.disabled,download:(c=(c=a.linkProps)==null?void 0:c.download)!=null?c:void 0,href:(c=(c=a.linkProps)==null?void 0:c.url)!=null?c:void 0,icon:new(b("TintableIconSource"))("FB",b("coerceRelayImage")(i),20),onClick:function(b){f(),a.onPress&&a.onPress(b)},onHoverIn:a.onHoverIn,onHoverOut:a.onHoverOut,onPressIn:a.onPressIn,primaryText:j,ref:a.ref,routeTarget:(c=(c=a.linkProps)==null?void 0:c.routeTarget)!=null?c:void 0,target:(c=(c=a.linkProps)==null?void 0:c.target)!=null?c:void 0})}})}}),null);
__d("ProfileCometHeaderActionBarMoreMenu.react",["CometMenu.react","CometRelay","ProfileCometHeaderActionBarMenuItem.react","React","recoverableViolation","ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.actor;a=a.onClose;c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"),c);if(!c||!c.profile_actions){b("recoverableViolation")("Rendering more menu with no actions","profile_comet");return null}var d=c.profile_actions.findIndex(function(a){return a.is_secondary_only});d=Math.min(d===-1?Infinity:d,3);if(d>=c.profile_actions.length){b("recoverableViolation")("Rendering more menu with no actions","profile_comet");return null}c=c.profile_actions.slice(d).filter(function(a){return a!=null});return h.jsx(b("CometMenu.react"),{onClose:a,withArrow:!0,children:c.map(function(a){return h.jsx(b("ProfileCometHeaderActionBarMenuItem.react"),{action:a},a==null?void 0:a.id)})})}}),null);
__d("ProfileEngagementTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:ProfileEngagementLoggerConfig")}),null);
__d("ProfileCometHeaderActionBarButton_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarButton_action",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},action:"THROW",path:"title.text"}],storageKey:null},action:"THROW",path:"title"},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{kind:"RequiredField",field:{alias:"primary_icon",args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},action:"THROW",path:"primary_icon"},{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometHeaderActionBar_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"render_location",variableName:"userActionBarRenderLocation"};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"userActionBarRenderLocation"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBar_actor",selections:[{kind:"RequiredField",field:{alias:null,args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},a],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_secondary_only",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBarButton_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"}],storageKey:null},action:"NONE",path:"profile_actions"},{args:[{kind:"Variable",name:"entityID",variableName:"entityID"},a],kind:"FragmentSpread",name:"ProfileCometHeaderActionBarMoreMenu_actorWithActionBar"}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"}}();e.exports=a}),null);
__d("ProfileCometHeaderActionBarButton.react",["CometProgressRingIndeterminate.react","CometRelay","ProfileCometContextualProfileContext","React","TetraButton.react","TintableIconSource","coerceRelayImage","stylex","useProfileEngagementClickCallback","ProfileCometHeaderActionBarButton_action.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a,c){var d=a.action,e=a.labelIsHidden;e=e===void 0?!1:e;var f=a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","labelIsHidden","onPress"]);d=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarButton_action.graphql"),d);var i=h.useContext(b("ProfileCometContextualProfileContext")),j=i.groupID,k=i.userID,l=(d.profile_action_type||"unknown").toLowerCase();i=i.isContextualProfileView?{event_metadata:{entry_point:l==="edit_contextual_profile"?"self-view_edit_profile":"",groupID:j},item_subtype:l==="edit_contextual_profile"?"contextual_profile_edit":null,item_type:l,product_bucket:"contextual_profile",profile_id_dummy:k,surface:"groups"}:{item_type:l,product_bucket:"action_bar",surface:"timeline"};j=b("useProfileEngagementClickCallback")(i,f);k=d.primary_icon;l=d.title.text;i="";switch(d.profile_action_type){case"FRIEND":i="add_button";break;case"MANAGE_MEMORIALIZED_ACCOUNT":i="memorialization_manage_memorialization_button";break;default:i=l}f=d.is_optimistic_update===!0;i=f?h.jsx(b("CometProgressRingIndeterminate.react"),{color:"dark",size:16}):void 0;f=!f&&(k==null?void 0:k.uri)!=null?new(b("TintableIconSource"))("FB",b("coerceRelayImage")(k),16):void 0;return h.jsx("div",{className:e?"":"k4urcfbm",ref:c,children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},a,{addOnPrimary:i,icon:f,label:l,labelIsHidden:e,onPress:j,reduceEmphasis:d.is_active===!0,size:"medium",testid:void 0,tooltip:e?l:null,type:d.is_active===!0?"primary":"secondary"}))})}c=h.forwardRef(a);e.exports=c}),null);
__d("partitionArray",[],(function(a,b,c,d,e,f){e.exports=a;function a(a,b,c){var d=[],e=[];a.forEach(function(f,g){b.call(c,f,g,a)?d.push(f):e.push(f)});return[d,e]}}),null);
__d("ProfileCometHeaderActionBar.react",["ix","fbt","CometDeferredPopoverTrigger.react","CometErrorBoundary.react","CometPlaceholder.react","CometRelay","ProfileCometActionTrigger.react","ProfileCometHeaderActionBarButton.react","React","TetraButton.react","fbicon","partitionArray","requireDeferred","stylex","ProfileCometHeaderActionBar_actor.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=b("React"),l=b("requireDeferred")("ProfileCometHeaderActionBarMoreMenu.react"),m={buttonContainer:{marginStart:"h676nmdw"},buttonContainerExpanded:{flexGrow:"buofh1pr",maxWidth:"h8xcmbcu"},buttonContainerForHovercards:{flexGrow:"buofh1pr",maxWidth:"nxkscmto"},buttonsCentered:{justifyContent:"taijpn5t"},buttonsEnd:{justifyContent:"bkfpd7mw"},root:{alignItems:"bp9cbjyn",display:"j83agx80",marginStart:"fop5sh7t",width:"g2wf7z4h"},rootPadded:{paddingBottom:"f10w8fjw",paddingTop:"pybr56ya"}},n=3;function a(a){var c=a.actor,d=a.centerButtons;d=d===void 0?!0:d;var e=a.expanded,f=e===void 0?!1:e;e=a.noPadding;e=e===void 0?!1:e;a=a.source;var o=a===void 0?"WWW_COMET_PROFILE":a;a=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometHeaderActionBar_actor.graphql"),c);if(a==null)return null;c=a.profile_actions;if(c.length===0)return null;c=b("partitionArray")(c,function(a){return a.is_secondary_only===!0});var p=c[0];c=c[1];var q=c.slice(0,n);c=[].concat(c.slice(n),p);p=k.jsxs(k.Fragment,{children:[q.map(function(a,c){return k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer,c===0&&(f?m.buttonContainerForHovercards:m.buttonContainerExpanded)),children:k.jsx(b("ProfileCometHeaderActionBarButton.react"),{action:a,disabled:!0,labelIsHidden:c>0})},c)}),c.length>0&&k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer),children:k.jsx(b("TetraButton.react"),{disabled:!0,icon:b("fbicon")._(g("484386"),16),label:h._("More"),labelIsHidden:!0,type:"secondary"})})]});return k.jsx(b("CometErrorBoundary.react"),{children:k.jsx("div",{className:(j||(j=b("stylex")))(m.root,!e&&m.rootPadded,d?m.buttonsCentered:m.buttonsEnd),"data-testid":void 0,children:k.jsxs(b("CometPlaceholder.react"),{fallback:p,children:[q.map(function(a,c){return k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer,c===0&&(f?m.buttonContainerForHovercards:m.buttonContainerExpanded)),children:k.jsx(b("CometErrorBoundary.react"),{children:k.jsx(b("ProfileCometActionTrigger.react"),{action:a,source:o,children:function(d){return k.jsx(b("ProfileCometHeaderActionBarButton.react"),babelHelpers["extends"]({},d,{action:a,labelIsHidden:c>0}))}})})},c)}),c.length>0&&k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer),children:k.jsx(b("CometDeferredPopoverTrigger.react"),{align:"middle",autoAlign:!0,popoverProps:{actor:a},popoverResource:l,popoverType:"menu",children:function(a,c){return k.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("484386"),16),label:h._("More"),labelIsHidden:!0,onPress:c,ref:a,testid:void 0,type:"secondary"})}})})]})})})}}),null);
__d("ProfileCometTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"AggregatedEntitiesAtRange",abstractKey:null};e.exports=a}),null);
__d("CometExternalLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometExternalLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometMetaLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("TetraishLink.react",["CometLink.react","React","TetraText.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.color,e=a.type;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","type"]);a=babelHelpers["extends"]({},a,{ref:c});return g.jsx(b("TetraText.react"),{color:d,type:e,children:g.jsx(b("CometLink.react"),babelHelpers["extends"]({},a,{color:d}))})}c=g.forwardRef(a);e.exports=c}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer",["fbt","CometRelay","CometTooltip.react","React","CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");h!==void 0?h:h=b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql");a=function(a,c){var d;d=(d=c.count)!=null?d:0;c=(c=c.sample_entities)!=null?c:[];d=d-c.length;var e=d>0;return i.jsx(b("CometTooltip.react"),{tooltip:i.jsxs(i.Fragment,{children:[c.map(function(a){if(a.__typename!=="User")return null;var b=a.id;a=a.name;return b!=null&&a!=null?i.jsx("div",{children:a},b):null}),e?i.jsx("div",{children:g._("and {count} more...",[g._param("count",d)])}):null]}),children:a})};e.exports=a}),null);
__d("CometInlineEntityRenderer",["React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a,c){switch(c.inline_style){case"BOLD":return g.jsx("b",{children:a});case"ITALIC":return g.jsx("i",{children:a});case"UNDERLINE":return g.jsx("u",{children:a});case"CODE":return g.jsx("code",{className:"o4yrsmyh ojkyduve ggysqto6 bglqfnb7 bk57svhc kfh7ys0q b3i9ofy5",children:a});case"LIGHTSTRIKETHROUGH":return g.jsx("strike",{className:"kgtf8isp",children:a});case"STRIKETHROUGH":return g.jsx("strike",{children:a});case"SUBSCRIPT":return g.jsx("sub",{children:a});case"SUPERSCRIPT":return g.jsx("sup",{children:a});case"QUOTE":return g.jsx("blockquote",{children:a});case"UNORDEREDLIST":return g.jsx("ul",{className:"dhix69tm mf5omzu7",children:a});case"ORDEREDLIST":return g.jsx("ol",{className:"dhix69tm mf5omzu7",children:a});case"LISTITEM":return g.jsx("li",{children:a});case"HEADLINE1":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized1",children:a});case"HEADLINE2":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:a});case"HEADLINE3":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized3",children:a});case"HORIZONTALRULER":return g.jsx("hr",{});default:return a}};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer",["CometLink.react","CometRelay","React","TetraTextContext","CometMetaLinkedEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");g!==void 0?g:g=b("CometMetaLinkedEntityRenderer_entity.graphql");a=function(a,c){var d;d=(d=h.useContext(b("TetraTextContext")))==null?void 0:d.type;if(c.url==null)return a;return d==null||!d.startsWith("meta")?h.jsx(b("CometLink.react"),{href:c.url,children:a}):h.jsx(b("CometLink.react"),{color:"secondary",href:c.url,weight:d==="meta3"||d==="meta4"?"normal":"semibold",children:a})};e.exports=a}),null);
__d("ProfileCometTextWithEntities.react",["CometAggregatedEntitiesTooltipRenderer","CometContextuallyStyledAggregatedEntitiesTooltipRenderer","CometHovercardEntityRenderer","CometImageEntityRenderer","CometInlineEntityRenderer","CometLinkedEntityRenderer","CometMetaLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","React","ProfileCometTextWithEntities_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.textWithEntities,d=a.useMetaTextContext;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities","useMetaTextContext"]);c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTextWithEntities_textWithEntities.graphql"),c);d=d!=null&&d;return h.jsx(b("CometTextWithEntitiesRelay.react"),babelHelpers["extends"]({},a,{renderers:{"*":[d?b("CometMetaLinkedEntityRenderer"):b("CometLinkedEntityRenderer")],Aggregate:[d?b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer"):b("CometAggregatedEntitiesTooltipRenderer")],Event:[b("CometHovercardEntityRenderer")],Group:[b("CometHovercardEntityRenderer")],Image:[b("CometImageEntityRenderer")()],Inline:[b("CometInlineEntityRenderer")],Page:[b("CometHovercardEntityRenderer")],User:[b("CometHovercardEntityRenderer")]},textWithEntities:c}))}}),null);
__d("ProfileCometAboutInfoDetails.react",["ProfileCometTextWithEntities.react","React","TetraTextPairing.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.color,d=a.subtitle;a=a.title;return g.jsx(b("TetraTextPairing.react"),{body:g.jsx(b("ProfileCometTextWithEntities.react"),{textWithEntities:a}),bodyColor:c,level:3,meta:d?g.jsx(b("ProfileCometTextWithEntities.react"),{textWithEntities:d}):null})}}),null);
__d("CometExternalLinkedEntityRenderer",["CometRelay","React","TetraishLink.react","TetraTextContext","CometExternalLinkedEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");g!==void 0?g:g=b("CometExternalLinkedEntityRenderer_entity.graphql");a=function(a,c){var d=h.useContext(b("TetraTextContext"));return c.url==null?a:h.jsx(b("TetraishLink.react"),{color:"blueLink",href:c.url,target:"_blank",type:(c=d==null?void 0:d.type)!=null?c:"bodyLink4",children:a})};e.exports=a}),null);
__d("getRoundedCorners",[],(function(a,b,c,d,e,f){"use strict";e.exports=b;var g={TOP_START:1,TOP_END:2,BOTTOM_START:4,BOTTOM_END:8,NONE:0,ALL:15};function a(a,b){return(a&b)===b}function b(a,b){if(a===0)return{};var c={},d=function(a,b){c[a]=((a=c[a])!=null?a:0)|b};d(0,g.TOP_START);d(Math.min(b,a)-1,g.TOP_END);var e=a-(a%b===0?b:a%b);d(e,g.BOTTOM_START);d(Math.min(e+b,a)-1,g.BOTTOM_END);a%b!==0&&e>=b&&d(e-1,g.BOTTOM_END);return c}b.hasCorner=a;b.CORNERS=g}),null);
__d("ProfileCometEngagementLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({});e.exports=c}),null);
__d("useProfileEngagementData",["ProfileCometContext","ProfileCometEngagementLoggingContext","ProfileCometSession","React","useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h="2220391788200892";function a(a){var c=g.useContext(b("ProfileCometContext")),d=g.useContext(b("ProfileCometEngagementLoggingContext")),e=b("useCurrentRoute")();return c.profileID===""?null:babelHelpers["extends"]({appid:h,profile_id_dummy:c.profileID,profile_session_id:b("ProfileCometSession").get(c.profileID,e)},d,a)}}),null);
__d("useProfileEngagementClickCallback",["React","recoverableViolation","requireDeferred","useProfileEngagementData"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("requireDeferred")("ProfileEngagementTypedLoggerLite");function a(a,c){var d=b("useProfileEngagementData")(a);d!=null&&d.product_bucket==null&&(b("recoverableViolation")("product_bucket is a required field for profile engagement logging","profile_comet"),d=babelHelpers["extends"]({},d,{product_bucket:"unknown"}));a=g.useCallback(function(a){d!=null&&(h.onReady(function(a){a=a.log;a(babelHelpers["extends"]({engagement_type:"click"},d))}),c&&c(a))},[c,d]);return a}}),null);
__d("useProfileEngagementImpression",["React","recoverableViolation","requireDeferred","useImpressionLogger","useProfileEngagementData"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("requireDeferred")("ProfileEngagementTypedLoggerLite");function a(a){var c=b("useProfileEngagementData")(a);c!=null&&c.product_bucket==null&&(b("recoverableViolation")("product_bucket is a required field for profile engagement logging","profile_comet"),c=babelHelpers["extends"]({},c,{product_bucket:"unknown"}));a=g.useCallback(function(a,b){b=a.log;c!=null&&b(babelHelpers["extends"]({engagement_type:"impression"},c))},[c]);return b("useImpressionLogger")(h,a)}}),null);