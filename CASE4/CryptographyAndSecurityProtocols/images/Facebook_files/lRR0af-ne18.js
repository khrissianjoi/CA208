if (self.CavalryLogger) { CavalryLogger.start_js(["4uGVA"]); }

__d("useNUX_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useNUX_nux",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("useNUX",["CometDismissFBNuxMutation","CometLogImpressionFBNuxMutation","CometRelay","React","RelayHooks","useNUX_nux.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=b("RelayHooks").useRelayEnvironment();a=b("RelayHooks").useFragment(g!==void 0?g:g=b("useNUX_nux.graphql"),a);var d=a.nux_id,e=a.should_show===!0&&d!=null;h.useEffect(function(){d!=null&&e&&b("CometLogImpressionFBNuxMutation").commit(c,d)},[c,d,e]);a=h.useCallback(function(){d!=null&&b("CometDismissFBNuxMutation").commit(c,d)},[c,d]);return[e,a]}}),null);
__d("TetraishContextualMessage.react",["ix","fbt","CometRow.react","CometRowItem.react","React","TetraIcon.react","TetraTextPairing.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k={closeButton:{marginEnd:"dlv3wnog",marginTop:"sv5sfqaa"},icon:{marginTop:"muag1w35"},root:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"ecm0bbzt",paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus",paddingBottom:"ihqw7lf3"}},l={highlight:{backgroundColor:"is6700om"},primary:{backgroundColor:"cwj9ozl2"},secondary:{backgroundColor:"pykisdsp"}};function a(a){var c=a.addOnPrimary,d=a.addOnSecondary,e=a.body,f=a.headline,m=a.icon,n=a.level;n=n===void 0?3:n;var o=a.onClose,p=a.testid;p=a.type;a=p===void 0?"primary":p;return j.jsxs("div",{className:(i||(i=b("stylex")))(k.root,l[a]),"data-testid":void 0,children:[j.jsxs(b("CometRow.react"),{verticalAlign:"center",children:[m!=null?j.jsx(b("CometRowItem.react"),{verticalAlign:"start",children:j.jsx("div",{className:(i||(i=b("stylex")))(k.icon),children:m})}):null,j.jsx(b("CometRowItem.react"),{expanding:!0,children:j.jsx(b("TetraTextPairing.react"),{body:e,bodyColor:a==="highlight"?"white":"secondary",headline:f,headlineColor:a==="highlight"?"white":"primary",headlineLineLimit:2,level:n})}),o!=null?j.jsx(b("CometRowItem.react"),{verticalAlign:"start",children:j.jsx("div",{className:(i||(i=b("stylex")))(k.closeButton),children:j.jsx(b("TetraIcon.react"),{"aria-label":h._("Dismiss"),color:a==="highlight"?"white":"secondary",icon:b("fbicon")._(g("478232"),16),onPress:o,size:16,testid:void 0})})}):null]}),c,d]})}}),null);
__d("EventCometActionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({event_action_history:[]});e.exports=c}),null);