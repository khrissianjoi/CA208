if (self.CavalryLogger) { CavalryLogger.start_js(["\/jCVl"]); }

__d("ProfileCometHeaderActionBarMenuItem_profileAction.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"icon_color",value:"fds-black"},b={kind:"Literal",name:"icon_size",value:"20"},c={kind:"Variable",name:"scale",variableName:"scale"},d=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMenuItem_profileAction",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{alias:"secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"outline"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:"active_secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"filled"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"}],type:"ProfileAction",abstractKey:"__isProfileAction"}}();e.exports=a}),null);
__d("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"render_location"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMoreMenu_actorWithActionBar",selections:[{alias:null,args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},{kind:"Variable",name:"render_location",variableName:"render_location"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_secondary_only",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBarMenuItem_profileAction"}],storageKey:null}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"};e.exports=a}),null);
__d("ProfileCometActionTrigger_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionTrigger_action",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileActionBlockHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionMessageHandlerBlue","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler"]}],concreteType:null,kind:"LinkedField",name:"client_handler",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionBlockHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionBlockHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCreateDetailedReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCreateDetailedReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionDefaultHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionDefaultHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditFriendListHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditFriendListHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFollowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFollowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFriendRequestHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFriendRequestHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionInsightsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionInsightsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusOnboardingHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusOnboardingHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandlerBlue_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandlerBlue",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerContactHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerContactHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerVideoCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerVideoCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPreferredInteractionHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPreferredInteractionHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportMarketplaceUserHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportMarketplaceHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSeeFirstHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSeeFirstHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionViewProfileTransparencyHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionViewProfileTransparencyHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionRemoveMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionRemoveMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSearchProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSearchProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionMuteMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionMuteMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionTurnOnPostApprovalForMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionTurnOnPostApprovalForMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteModeratorHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteModeratorHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionLeaveGroupHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionLeaveGroupHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionRemoveGroupAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionRemoveGroupAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdditionalProfileRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdditionalProfileRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditContextualProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditContextualProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileReportBioHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileReportBioHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPromoteHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPromoteHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdminToolsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdminToolsHandler",abstractKey:null}],storageKey:'client_handler(supported:["ProfileActionBlockHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionMessageHandlerBlue","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler"])'}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometActionTrigger.react",["CometRelay","ProfileCometContext","React","ProfileCometActionTrigger_action.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.action,d=a.children,e=a.popoverPosition;a=a.source;c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometActionTrigger_action.graphql"),c);var f=h.useContext(b("ProfileCometContext"));f=f.isInViewAs;return f?d({disabled:!0}):h.jsx(b("CometRelay").MatchContainer,{fallback:d({disabled:!0}),match:c.client_handler,props:{children:d,popoverPosition:e,source:a}})}}),null);
__d("ProfileCometContextualProfileContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({groupID:"",isContextualProfileView:!1,renderLocation:null,userID:""});e.exports=c}),null);
__d("ProfileCometHeaderActionBarMenuItem.react",["CometMenuItem.react","CometRelay","ProfileCometActionTrigger.react","ProfileCometContextualProfileContext","React","TintableIconSource","coerceRelayImage","recoverableViolation","useProfileEngagementClickCallback","ProfileCometHeaderActionBarMenuItem_profileAction.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.action;a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarMenuItem_profileAction.graphql"),a);var c=h.useContext(b("ProfileCometContextualProfileContext")),d=c.groupID,e=c.userID;c=c.isContextualProfileView?{event_metadata:{groupID:d},item_subtype:(a.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"contextual_profile",profile_id_dummy:e,surface:"groups"}:{item_subtype:(a.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"action_bar",surface:"timeline"};var f=b("useProfileEngagementClickCallback")(c),i=a.is_active===!0?a.active_secondary_icon:a.secondary_icon,j=a==null?void 0:(d=a.title)==null?void 0:d.text;if(j==null){b("recoverableViolation")("Action has no title","profile_comet");return null}if(!i){b("recoverableViolation")("Action has no icon","profile_comet");return null}return h.jsx(b("ProfileCometActionTrigger.react"),{action:a,children:function(a){var c;return h.jsx(b("CometMenuItem.react"),{disabled:a.disabled,download:(c=(c=a.linkProps)==null?void 0:c.download)!=null?c:void 0,href:(c=(c=a.linkProps)==null?void 0:c.url)!=null?c:void 0,icon:new(b("TintableIconSource"))("FB",b("coerceRelayImage")(i),20),onClick:function(b){f(),a.onPress&&a.onPress(b)},onHoverIn:a.onHoverIn,onHoverOut:a.onHoverOut,onPressIn:a.onPressIn,primaryText:j,ref:a.ref,routeTarget:(c=(c=a.linkProps)==null?void 0:c.routeTarget)!=null?c:void 0,target:(c=(c=a.linkProps)==null?void 0:c.target)!=null?c:void 0})}})}}),null);
__d("ProfileCometHeaderActionBarMoreMenu.react",["CometMenu.react","CometRelay","ProfileCometHeaderActionBarMenuItem.react","React","recoverableViolation","ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.actor;a=a.onClose;c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"),c);if(!c||!c.profile_actions){b("recoverableViolation")("Rendering more menu with no actions","profile_comet");return null}var d=c.profile_actions.findIndex(function(a){return a.is_secondary_only});d=Math.min(d===-1?Infinity:d,3);if(d>=c.profile_actions.length){b("recoverableViolation")("Rendering more menu with no actions","profile_comet");return null}c=c.profile_actions.slice(d).filter(function(a){return a!=null});return h.jsx(b("CometMenu.react"),{onClose:a,withArrow:!0,children:c.map(function(a){return h.jsx(b("ProfileCometHeaderActionBarMenuItem.react"),{action:a},a==null?void 0:a.id)})})}}),null);
__d("ProfileEngagementTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:ProfileEngagementLoggerConfig")}),null);