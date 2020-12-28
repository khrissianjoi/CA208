if (self.CavalryLogger) { CavalryLogger.start_js(["kQvAU"]); }

__d("CometHovercardQueryRendererQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"actorID"},b={defaultValue:"DEFAULT",kind:"LocalArgument",name:"context"},c={defaultValue:null,kind:"LocalArgument",name:"groupID"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e=[{kind:"Variable",name:"id",variableName:"actorID"}],f={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,b,c,d],kind:"Fragment",metadata:null,name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometHovercard_actor"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,a,b,c],kind:"Operation",name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:["CometHovercardCoworkerUserRenderer","CometHovercardMarketplaceUserRenderer","CometHovercardUserRenderer","CometHovercardProfilePlusUserRenderer","WIGHovercardAdminUserRenderer","WIGHovercardUserRenderer","CometHovercardPageRenderer","WIGHovercardPageRenderer","CometHovercardGroupRenderer","WIGHovercardGroupRenderer","WIGHovercardGroupPrivacyInfoRenderer","CometHovercardEventRenderer","WIGHovercardEventRenderer","CometHovercardGroupAnonProfileRenderer","CometHovercardGroupMemberRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardCoworkerUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardCoworkerUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WIGHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WIGHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Actor",abstractKey:"__isActor"}],storageKey:null}]},params:{id:"3586923998028040",metadata:{},name:"CometHovercardQueryRendererQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometHovercard_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"context"}],kind:"Fragment",metadata:null,name:"CometHovercard_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:["CometHovercardCoworkerUserRenderer","CometHovercardMarketplaceUserRenderer","CometHovercardUserRenderer","CometHovercardProfilePlusUserRenderer","WIGHovercardAdminUserRenderer","WIGHovercardUserRenderer","CometHovercardPageRenderer","WIGHovercardPageRenderer","CometHovercardGroupRenderer","WIGHovercardGroupRenderer","WIGHovercardGroupPrivacyInfoRenderer","CometHovercardEventRenderer","WIGHovercardEventRenderer","CometHovercardGroupAnonProfileRenderer","CometHovercardGroupMemberRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardCoworkerUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardCoworkerUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WIGHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"WIGHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WIGHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHovercard_actor",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometHovercard.react",["CometRelay","CometTrackingNodeProvider.react","React","recoverableViolation","CometHovercard_actor.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.actor;a=a.visualStyle;a=a===void 0?"default":a;c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometHovercard_actor.graphql"),c);var d=c==null?void 0:c.comet_hovercard_renderer;return d===null?b("recoverableViolation")("Unhandled actor for Hovercard "+c.__typename,"comet_ui"):h.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:250,children:h.jsx(b("CometRelay").MatchContainer,{fallback:null,match:d,props:{visualStyle:a}})})}}),null);
__d("CometHovercardQueryRenderer.react",["CometHovercard.react","CometRelay","FBLogger","React","CometHovercardQueryRendererQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.props;a=a.queries;var d=b("CometRelay").usePreloadedQuery(g!==void 0?g:g=b("CometHovercardQueryRendererQuery.graphql"),a.hovercardQueryReference);d=d==null?void 0:d.node;if(d==null){b("FBLogger")("comet_ui").mustfix("Error renderering Hovercard missing actor for id, %s",a.hovercardQueryReference.variables.actorID);return null}return h.jsx(b("CometHovercard.react"),{actor:d,visualStyle:c.visualStyle})}}),null);