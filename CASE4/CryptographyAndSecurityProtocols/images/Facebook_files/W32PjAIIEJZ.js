if (self.CavalryLogger) { CavalryLogger.start_js(["TvvX2"]); }

__d("ProfileCometHeaderQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"userID"}],b=[{kind:"Variable",name:"id",variableName:"userID"}],c=[{kind:"Literal",name:"nux_id",value:8362}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[d,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[d,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"story_bucket(first:1)"},f={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},i={kind:"Variable",name:"scale",variableName:"scale"},j={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},k=[j],l={alias:null,args:null,kind:"ScalarField",name:"profile_picture_expiration_time",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},n={kind:"TypeDiscriminator",abstractKey:"__isProfile"},o={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},p={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},r={alias:"viewer_image",args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},i,{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[p,q],storageKey:null},s={alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[o,d],storageKey:null},t={alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"profile_photo",plural:!1,selections:[d,m,r],storageKey:null},u={alias:"profilePic160",args:[{kind:"Literal",name:"height",value:160},i,{kind:"Literal",name:"width",value:160}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:k,storageKey:null},v={alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[s,d],storageKey:null},w=[n,{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"profile_photo",plural:!1,selections:[m,r,d],storageKey:null},u,v,{alias:null,args:null,kind:"ScalarField",name:"profile_picture_is_silhouette",storageKey:null}],x={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},y={kind:"Literal",name:"icon_color",value:"fds-black"},z={kind:"Literal",name:"icon_variant",value:"filled"},A=[p,{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},j,q],B={kind:"Literal",name:"icon_size",value:"20"},C=[i];j=[j,q,p];q=[e];p=[g,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null}];var D={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},E={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},F=[{kind:"Literal",name:"delight_surface",value:"COMMENT"}],G={kind:"InlineFragment",selections:[d],type:"Node",abstractKey:"__isNode"},H={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},I=[{alias:null,args:null,kind:"ScalarField",name:"is_wem_private_sharing_enabled",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"ProfileCometHeaderQuery",selections:[{alias:null,args:b,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTetraishEntityHeader_user"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTetraishEntityHeader_viewer"}],storageKey:null},{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTetraishEntityHeader_nux"}],storageKey:"nux(nux_id:8362)"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"ProfileCometHeaderQuery",selections:[{alias:null,args:b,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null},{alias:null,args:[{kind:"Literal",name:"render_location",value:"PROFILE_PICTURE"}],concreteType:"ProfileActiveMessengerRoom",kind:"LinkedField",name:"profile_active_messenger_room",plural:!1,selections:[{documentName:"ProfileCometProfilePictureContainer_user",fragmentName:"ProfileCometProfilePictureMessengerRoomPill_profile_active_messenger_room",fragmentPropName:"profile_active_messenger_room",kind:"ModuleImport"}],storageKey:'profile_active_messenger_room(render_location:"PROFILE_PICTURE")'},e,{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileLoggedInTabs","ProfileLoggedOutTabs"]}],concreteType:null,kind:"LinkedField",name:"profile_tabs",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{documentName:"ProfileCometTetraishEntityHeader_user",fragmentName:"ProfileCometTabs_cometProfileTabs",fragmentPropName:"cometProfileTabs",kind:"ModuleImport"}],type:"ProfileLoggedInTabs",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTetraishEntityHeader_user",fragmentName:"ProfileCometLoggedOutTabs_cometProfileTabs",fragmentPropName:"cometProfileTabs",kind:"ModuleImport"}],type:"ProfileLoggedOutTabs",abstractKey:null}],storageKey:'profile_tabs(supported:["ProfileLoggedInTabs","ProfileLoggedOutTabs"])'},{alias:null,args:null,kind:"ScalarField",name:"alternate_name",storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"username_for_profile",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"is_visibly_memorialized",storageKey:null},{alias:null,args:null,concreteType:"CometFundraiserWithPresenceBadgeRenderer",kind:"LinkedField",name:"active_fundraiser_badge_renderer",plural:!1,selections:[{documentName:"ProfileCometInfo_user",fragmentName:"ProfileCometFundraiserBadge_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"WEMPrivateSharingBundle",kind:"LinkedField",name:"wem_private_sharing_bundle",plural:!1,selections:[{alias:null,args:null,concreteType:"WemPrivateSharingControlModel",kind:"LinkedField",name:"private_sharing_control_model_for_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"private_sharing_enabled",storageKey:null}],storageKey:null}],storageKey:null},d,{kind:"InlineFragment",selections:[{alias:"profile_picture_for_sticky_bar",args:[{kind:"Literal",name:"height",value:40},i,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:k,storageKey:null},l,{kind:"InlineFragment",selections:[f,m],type:"Entity",abstractKey:"__isEntity"},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureContainer_profile",selections:[n,g,{alias:"profilePhoto",args:null,concreteType:"Photo",kind:"LinkedField",name:"profile_photo",plural:!1,selections:[o,r,d],storageKey:null},{alias:"profilePicNormal",args:[{kind:"Literal",name:"height",value:168},i,{kind:"Literal",name:"width",value:168}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:k,storageKey:null},{alias:"profilePicSmall",args:[{kind:"Literal",name:"height",value:100},i,{kind:"Literal",name:"width",value:100}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:k,storageKey:null},{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[s,d,{"if":null,kind:"Defer",label:"ProfileCometProfilePictureContainer_profile$defer$TetraProfileVideoSection_profileVideo",selections:[{documentName:"TetraProfileVideoSection_profileVideo",fragmentName:"TetraProfileVideo_profileVideo",fragmentPropName:"profileVideo",kind:"ModuleImport"}]}],storageKey:null},{"if":null,kind:"Defer",label:"ProfileCometProfilePictureContainer_profile$defer$ProfileCometProfilePictureEditButton_profile",selections:[n,l,t,u,v]}]},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureEditMenu_profile",selections:w},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureTemporaryEditMenu_profile",selections:[n,t,l,u,v]},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_profile$defer$ProfileCometProfilePictureViewMenu_profile",selections:w}],type:"Profile",abstractKey:"__isProfile"},{"if":null,kind:"Defer",label:"ProfileCometTetraishEntityHeader_user$defer$ProfileCometHeaderActionBar_actor",selections:[{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"is_secondary_only",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[x],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:"primary_icon",args:[y,{kind:"Literal",name:"icon_size",value:"16"},z,i],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:A,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileActionBlockHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionMessageHandlerBlue","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler"]}],concreteType:null,kind:"LinkedField",name:"client_handler",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionBlockHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionBlockHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCreateDetailedReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCreateDetailedReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionDefaultHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionDefaultHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditFriendListHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditFriendListHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFollowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFollowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFriendRequestHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFriendRequestHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionInsightsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionInsightsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusOnboardingHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusOnboardingHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandlerBlue_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandlerBlue",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerContactHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerContactHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerVideoCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerVideoCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPreferredInteractionHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPreferredInteractionHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportMarketplaceUserHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportMarketplaceHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSeeFirstHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSeeFirstHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionViewProfileTransparencyHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionViewProfileTransparencyHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionRemoveMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionRemoveMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSearchProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSearchProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionMuteMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionMuteMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionTurnOnPostApprovalForMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionTurnOnPostApprovalForMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteModeratorHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteModeratorHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionLeaveGroupHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionLeaveGroupHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionRemoveGroupAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionRemoveGroupAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdditionalProfileRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdditionalProfileRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditContextualProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditContextualProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileReportBioHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileReportBioHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPromoteHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPromoteHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdminToolsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdminToolsHandler",abstractKey:null}],storageKey:'client_handler(supported:["ProfileActionBlockHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionMessageHandlerBlue","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler"])'},d,{alias:"secondary_icon",args:[y,B,{kind:"Literal",name:"icon_variant",value:"outline"},i],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:A,storageKey:null},{alias:"active_secondary_icon",args:[y,B,z,i],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:A,storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_actions(render_location:"WWW_COMET_PROFILE")'}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"}]},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"focus",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[d,{alias:null,args:C,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:j,storageKey:null},r,{alias:"blurred_image",args:[{kind:"Literal",name:"blur",value:50},{kind:"Literal",name:"width",value:320}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:j,storageKey:"image(blur:50,width:320)"},m],storageKey:null}],storageKey:null}],type:"RenderedProfile",abstractKey:"__isRenderedProfile"},{"if":null,kind:"Defer",label:"ProfileCometProfilePictureContainer_user$defer$ProfileCometProfilePictureEditButton_user",selections:q},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_user$defer$ProfileCometLockedProfilePopover_user",selections:p},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_user$defer$ProfileCometProfilePictureViewMenu_user",selections:q},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_user$defer$ProfileCometProfilePictureEditMenu_user",selections:q},{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_user$defer$ProfileCometProfilePictureTemporaryEditMenu_user",selections:q},{"if":null,kind:"Defer",label:"ProfileCometInfo_user$defer$CometLockedProfileBadgeWithPopover_user",selections:p},{"if":null,kind:"Defer",label:"ProfileCometInfo_user$defer$ProfileCometBioTextContainer_user",selections:[{alias:null,args:null,concreteType:"ProfileIntroCard",kind:"LinkedField",name:"profile_intro_card",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"bio",plural:!1,selections:[{alias:null,args:null,concreteType:"DelightAtRange",kind:"LinkedField",name:"delight_ranges",plural:!0,selections:[D,E,{alias:null,args:null,concreteType:"TextDelightCampaign",kind:"LinkedField",name:"campaign",plural:!1,selections:[f,{alias:null,args:F,concreteType:"TextDelightStylePair",kind:"LinkedField",name:"delight_styles",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:'delight_styles(delight_surface:"COMMENT")'},{alias:null,args:F,concreteType:"DelightsAnimation",kind:"LinkedField",name:"delight_asset",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"animation_uri",storageKey:null}],storageKey:'delight_asset(delight_surface:"COMMENT")'},d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[D,E,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[f,{alias:null,args:C,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:A,storageKey:null},G],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[D,E,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[D,E,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[f,{kind:"InlineFragment",selections:[d,g],type:"User",abstractKey:null},G],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[f,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[d,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},d,h,{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[f,m,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},{kind:"InlineFragment",selections:[H,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[H,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},G],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entity_is_weak_reference",storageKey:null},D,E],storageKey:null},{alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[D,E,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},x],storageKey:null},d],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_use_page_rename",storageKey:null}]}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{"if":null,kind:"Defer",label:"ProfileCometProfilePicture_viewer$defer$ProfileCometLockedProfilePopover_viewer",selections:I},{"if":null,kind:"Defer",label:"ProfileCometInfo_viewer$defer$CometLockedProfileBadgeWithPopover_viewer",selections:I}],storageKey:null},{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[f,d,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null}],storageKey:"nux(nux_id:8362)"}]},params:{id:"3448404891862443",metadata:{},name:"ProfileCometHeaderQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("BaseLinkEndpointModifierProvider.react",["BaseLinkEndpointModifierContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.modifier,e=g.useContext(b("BaseLinkEndpointModifierContext"));a=g.useMemo(function(){return[].concat(e,[d])},[e,d]);return g.jsx(b("BaseLinkEndpointModifierContext").Provider,{value:a,children:c})}}),null);
__d("CometUserVerificationBadge.react",["CometLazyPopoverTrigger.react","CometPageVerificationIcon.react","JSResource","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("JSResource")("CometVerificationBadgeInfoPopover.react").__setRef("CometUserVerificationBadge.react");function a(a){a=a.size;var c=a===void 0?"large":a;return g.jsx(b("CometLazyPopoverTrigger.react"),{popoverProps:{verificationBadge:"USER_VERIFIED"},popoverResource:h,position:"above",children:function(a,d){return g.jsx("span",{onMouseEnter:d,ref:a,children:g.jsx(b("CometPageVerificationIcon.react"),{size:c,verificationBadge:"BLUE_VERIFIED"})})}})}}),null);
__d("ProfileCometHeader.react",["CometRelay","React","deferredLoadComponent","recoverableViolation","requireDeferredForDisplay","ProfileCometHeaderQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("deferredLoadComponent")(b("requireDeferredForDisplay")("ProfileCometTetraishEntityHeader.react"));function a(a){a=a.headerQueryReference;a=b("CometRelay").usePreloadedQuery(g!==void 0?g:g=b("ProfileCometHeaderQuery.graphql"),a);var c=a.nux,d=a.user;a=a.viewer;if(d==null||a==null){b("recoverableViolation")("Profile needs user and viewer props","profile_comet");return null}return h.jsx(i,{nux:c,user:d,viewer:a})}}),null);
__d("ProfileCometTabsGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={root:{display:"j83agx80",marginBottom:"n851cfcs",marginStart:"dhix69tm",marginTop:"n1l5q3vz"},tab:{borderTopStartRadius:"lit7pgxp",borderTopEndRadius:"o3c63hce",borderBottomEndRadius:"hqlzco19",borderBottomStartRadius:"lsl2245n",height:"jnigpg78",marginTop:"aov4n071",marginEnd:"gso5pdkr",marginBottom:"bi6gxh9e",marginStart:"hcukyx3x",width:"nxfmr2wi"}};function a(){return h.jsxs(b("BaseLoadingStateElement.react"),{xstyle:i.root,children:[h.jsx(b("BaseGlimmer.react"),{className:(g||(g=b("stylex")))(i.tab),index:1}),h.jsx(b("BaseGlimmer.react"),{className:g(i.tab),index:2}),h.jsx(b("BaseGlimmer.react"),{className:g(i.tab),index:3}),h.jsx(b("BaseGlimmer.react"),{className:g(i.tab),index:4}),h.jsx(b("BaseGlimmer.react"),{className:g(i.tab),index:5})]})}}),null);
__d("ProfileCometHeaderGlimmer.react",["BaseGlimmer.react","ProfileCometProfilePictureGlimmer.react","ProfileCometTabsGlimmer.react","React","TetraishEntityHeaderBottomRow.react","TetraishEntityHeaderCoverPhotoRow.react","TetraishEntityPageHeader.react","TetraishProfileHeaderTopRow.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.jsx(b("TetraishProfileHeaderTopRow.react"),{actor:g.jsx(b("ProfileCometProfilePictureGlimmer.react"),{size:168}),titleBlock:g.jsx(b("BaseGlimmer.react"),{className:"qrv0bcbf sjgh65i0 rgmg9uty l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:3})}),c=g.jsx(b("TetraishEntityHeaderBottomRow.react"),{buttonGroup:null,tabs:g.jsx(b("ProfileCometTabsGlimmer.react"),{})});return g.jsx(b("TetraishEntityPageHeader.react"),{bottomRow:c,coverPhotoRow:g.jsx(b("TetraishEntityHeaderCoverPhotoRow.react"),{coverPhoto:g.jsx(b("BaseGlimmer.react"),{className:"bglkmn5o f9o22wc5 oygrvhab ad2k81qe kvgmc6g5 c8w9cs3w lsl2245n hqlzco19",index:1})}),topRow:a})}}),null);
__d("ProfileCometSessionCleaner",["ProfileCometSessionConfig","ProfileCometSessionUtil","WebStorage","setTimeout"],(function(a,b,c,d,e,f){"use strict";f.cleanup=a;f.wipe=c;var g;function h(a){a===void 0&&(a=!0);var c=(g||(g=b("WebStorage"))).getLocalStorage();if(!c)return;var d=b("ProfileCometSessionUtil").getStorageKeys(c);if(a){var e=Date.now();d=d.filter(function(a){a=c.getItem(a);if(a==null)return!0;a=a.split(":");a[0];a=a[1];a=parseInt(a,10);return e-a>=b("ProfileCometSessionConfig").TIMEOUT_MS})}d.map(function(a){return c.removeItem(a)})}function a(){h(),b("setTimeout")(h,b("ProfileCometSessionConfig").TIMEOUT_MS)}function c(){h(!1)}}),null);
__d("useProfileCometSession",["CometRouteMatch","ProfileCometSession","ProfileCometSessionCleaner","React","getTopMostRoute","useCometRouterState","useOnBeforeUnload"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){b("useOnBeforeUnload")(function(){return b("ProfileCometSessionCleaner").cleanup()});var c=b("useCometRouterState")(),d=c!=null?b("getTopMostRoute")(c):null,e=b("CometRouteMatch").useCurrentRouteMatcher(b("CometRouteMatch").MatchFunctions.routeMatchFunction);return g.useCallback(function(){if(!b("ProfileCometSession"))return;if(d){var c=e(d);c&&b("ProfileCometSession").extend(a,d)}},[a,e,d])}}),null);
__d("ProfileCometSessionExtender.react",["useGlobalEventListener","useProfileCometSession"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c;a=a.userID;a=b("useProfileCometSession")(a);(c=b("useGlobalEventListener"))("focus",a);c("keydown",a);c("mousedown",a);c("scroll",a);return null}}),null);
__d("ProfileCometViewAsEndpointModifier.react",["BaseLinkEndpointModifierProvider.react","ProfileCometContext","React","URI"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.children;var c=h.useContext(b("ProfileCometContext")),d=c.isInViewAs,e=c.profileID,f=c.profileVanity,i=c.viewerID;c=h.useCallback(function(a){if(!d)return a;var c=new(g||(g=b("URI")))(a);if(c.getQueryData().viewas==="")return a;var h=c.getPath().startsWith("/me/")||c.getPath()==="/me",j=f!=null&&(c.getPath().startsWith("/"+f+"/")||c.getPath()==="/"+f),k=c.getPath()==="/profile.php"&&c.getQueryData().id===e;return h||j||k?c.addQueryData("viewas",i).toString():a},[d,e,f,i]);return h.jsx(b("BaseLinkEndpointModifierProvider.react"),{modifier:c,children:a})}}),null);
__d("useProfileCometViewAsExitHandler",["fbt","ProfileCometRoutingUtils","useOnBeforeUnload"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;function a(a){b("useOnBeforeUnload")(function(c){if(!c)return;if(a&&!(b("ProfileCometRoutingUtils").isProfilePolicy(c==null?void 0:c.tracePolicy)&&(c==null?void 0:(c=c.params)==null?void 0:c.viewas)!=null))return{warnMessage:g._("Do you want to exit View As mode?")}})}}),null);
__d("ProfileCometRoot.react",["Actor","CometErrorBoundary.react","CometErrorRoot.react","CometLayout.react","CometPlaceholder.react","CometRelay","CometStickyHeaderContentArea.react","CometTransientDialogProvider.react","ProfileCometContext","ProfileCometHeader.react","ProfileCometHeaderGlimmer.react","ProfileCometSessionExtender.react","ProfileCometViewAsEndpointModifier.react","React","useOnRefreshScrollToTop","useProfileCometViewAsExitHandler"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.entryPoints,d=a.props;a=a.queries;d=d.routeProps;var e=d.userID,f=d.userVanity,h=d.viewerID;d=b("Actor").useActor();d=d[0];var i=d!==h&&h!=null;d=g.useMemo(function(){return{isInViewAs:i,profileID:e,profileVanity:f,viewerID:h}},[i,e,f,h]);b("useOnRefreshScrollToTop")();b("useProfileCometViewAsExitHandler")(i);return g.jsxs(g.Fragment,{children:[g.jsx(b("ProfileCometSessionExtender.react"),{userID:e}),g.jsx(b("ProfileCometContext").Provider,{value:d,children:g.jsx(b("ProfileCometViewAsEndpointModifier.react"),{children:g.jsx(b("Actor").ActorProvider,{initialActorID:h,readonly:!0,children:g.jsx(b("CometTransientDialogProvider.react"),{children:g.jsx(b("CometLayout.react"),{testid:void 0,children:g.jsx(b("CometStickyHeaderContentArea.react"),{contentTestID:"ProfileCometContentRoot",header:g.jsxs(g.Fragment,{children:[i&&c.viewAsEntryPoint&&g.jsx(b("CometRelay").EntryPointContainer,{entryPointReference:c.viewAsEntryPoint,props:{}}),g.jsx(b("CometPlaceholder.react"),{fallback:g.jsx(b("ProfileCometHeaderGlimmer.react"),{}),children:g.jsx(b("ProfileCometHeader.react"),{headerQueryReference:a.headerQueryReference})})]}),scrollKey:e,useDeprecatedStyles:!0,children:g.jsx(b("CometErrorBoundary.react"),{fallback:function(){return g.jsx(b("CometErrorRoot.react"),{})},children:g.jsx(b("CometPlaceholder.react"),{fallback:g.jsx("div",{}),children:g.jsx(b("CometRelay").EntryPointContainer,{entryPointReference:c.contentEntryPoint,props:{}})})})})},h+"_"+e)})})})})]})}c=g.memo(a);e.exports=c}),null);