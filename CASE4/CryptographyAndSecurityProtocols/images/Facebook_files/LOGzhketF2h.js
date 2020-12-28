if (self.CavalryLogger) { CavalryLogger.start_js(["CDOPx"]); }

__d("BaseTextArea.react",["BaseFocusRing.react","BaseInput.react","React","mergeRefs","stylex","useLayoutEffect_SAFE_FOR_SSR","usePrevious"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={unresizable:{resize:"ieid39z1"}};function a(a,c){var d=a.xstyle,e=a.minRows,f=e===void 0?1:e;e=a.maxRows;var i=e===void 0?Infinity:e;e=a.suppressFocusRing;var j=a.unresizable,k=j===void 0?!1:j,l=a.value,m=babelHelpers.objectWithoutPropertiesLoose(a,["xstyle","minRows","maxRows","suppressFocusRing","unresizable","value"]),n=g.useRef(null),o=b("usePrevious")(i),p=b("usePrevious")(l);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=n.current;if(a!=null){(o==null||p==null||l==null||i<o||l.length<p.length)&&(a.rows=Math.min(Math.max(f,1),i));while(a.rows<i&&a.clientHeight<a.scrollHeight)a.rows+=1;a.style.overflowY=a.rows<i?"hidden":"auto"}},[i,f,o,p,l]);var q=g.useMemo(function(){return b("mergeRefs")(n,c)},[c]);return g.jsx(b("BaseFocusRing.react"),{suppressFocusRing:e,children:function(a){return g.jsx(b("BaseInput.react"),babelHelpers["extends"]({},m,{ref:q,type:"textarea",value:l,xstyle:[a,k&&h.unresizable,d]}))}})}c=g.memo(g.forwardRef(a));e.exports=c}),null);
__d("CometTextInputStyles.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;b("React");var g={center:{textAlign:"oqcyycmt"},end:{textAlign:"ftzlm3b6"},inherit:{textAlign:"i1ao9s8h"},start:{textAlign:"hzawbc8m"}},h={multi:{paddingTop:"cxgpxx05",paddingEnd:"d1544ag0",paddingBottom:"sj5x9vvc",paddingStart:"tw6a2znq",resize:"ieid39z1"},single:{height:"tv7at329"}},i={disabled:{cursor:"rj84mg9z"},input:{backgroundColor:"b3i9ofy5",borderTop:"l6v480f0",borderEnd:"maa8sdkg",borderBottom:"s1tcr66n",borderStart:"aypy0576",borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",boxSizing:"rq0escxv",color:"oo9gr5id",fontSize:"l94mrbxd",fontWeight:"ekzkrbhg",paddingTop:"cxgpxx05",paddingEnd:"d1544ag0",paddingBottom:"sj5x9vvc",paddingStart:"tw6a2znq",width:"k4urcfbm","::placeholder":{color:"o8yuz56k"},":hover":{backgroundImage:"ehryuci6"},":focus":{backgroundColor:"duhwxc4d",borderTopColor:"bs68lrl8",borderEndColor:"f56r29tw",borderBottomColor:"e16z4an2",borderStartColor:"ei4baabg",boxShadow:"b4hei51z"}}};function a(a){var b=a.align;b=b===void 0?"start":b;var c=a.children,d=a.dimension;d=d===void 0?"single":d;a=a.disabled;a=a===void 0?!1:a;return c([i.input,a&&i.disabled,g[b],h[d]])}}),null);
__d("CometTextArea.react",["fbt","BaseTextArea.react","CometNumber.react","CometTextInputStyles.react","React","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j={container:{color:"oo9gr5id",fontSize:"jq4qci2q"},label:{color:"gmql0nx0",display:"a8c37x1j",fontSize:"l94mrbxd",paddingBottom:"ae35evdt"},textCount:{color:"m9osqain",display:"a8c37x1j","float":"tpga1rol",fontSize:"l94mrbxd",paddingBottom:"ae35evdt"}};function a(a,c){var d=a.disabled,e=d===void 0?!1:d;d=a.expandable;var f=d===void 0?!1:d,k=a.label;d=a.labelIsHidden;var l=d===void 0?!1:d,m=a.maxLength;d=a.rows;var n=d===void 0?1:d;d=a.showTextCount;d=d===void 0?!1:d;var o=a.textAlign,p=a.value,q=babelHelpers.objectWithoutPropertiesLoose(a,["disabled","expandable","label","labelIsHidden","maxLength","rows","showTextCount","textAlign","value"]);return i.jsxs("label",{className:(h||(h=b("stylex")))(j.container),children:[!l&&i.jsx("div",{className:(h||(h=b("stylex")))(j.label),children:k}),i.jsx(b("CometTextInputStyles.react"),{align:o,dimension:"multi",disabled:e,children:function(a){return i.jsx(b("BaseTextArea.react"),babelHelpers["extends"]({},q,{"aria-label":l?k:void 0,className:(h||(h=b("stylex")))(a),disabled:e,maxLength:m,maxRows:f?Infinity:n,minRows:n,ref:c,value:p,xstyle:a}))}}),d&&m!=null&&i.jsx("div",{className:(h||(h=b("stylex")))(j.textCount),children:g._("{charactor count}\/{maximum charactor count}",[g._param("charactor count",i.jsx(b("CometNumber.react"),{decimals:0,number:String(p).length})),g._param("maximum charactor count",i.jsx(b("CometNumber.react"),{decimals:0,number:m}))])})]})}c=i.forwardRef(a);e.exports=c}),null);
__d("CometStarRatingSingleStar.react",["ix","CometTintedIcon.react","React","fbicon"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(a){var c=i(a.size);return h.jsx(b("CometTintedIcon.react"),{color:a.color,icon:c})}function i(a){switch(a){case 12:return b("fbicon")._(g("479321"),12);case 16:return b("fbicon")._(g("479324"),16);case 20:return b("fbicon")._(g("479327"),20);case 24:return b("fbicon")._(g("479330"),24);case 32:return b("fbicon")._(g("660688"),32);default:return b("fbicon")._(g("479327"),20)}}}),null);
__d("CometStarRating.react",["fbt","CometStarRatingSingleStar.react","React","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(a){var c=a.filledColor,d=c===void 0?"fds-yellow-20":c;c=a.maxRating;c=c===void 0?5:c;var e=a.rating;a=a.size;var f=a===void 0?20:a;return h.jsx("div",{"aria-label":g._("{current rating} out of {maximum rating} rating",[g._param("current rating",e),g._param("maximum rating",c)]),className:"pq6dq46d",role:"img",children:Array(c).fill().map(function(a,c){return h.jsxs("div",{className:"l9j0dhe7 hytbnt81 j5wkysh0 j83agx80",children:[h.jsx(b("CometStarRatingSingleStar.react"),{color:"fds-gray-30",size:f}),h.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg stjgntxs ni8dbmo4 datstx6m j83agx80",style:{width:Math.max(0,Math.min(1,e-c))*100+"%"},children:h.jsx(b("CometStarRatingSingleStar.react"),{color:d,size:f})})]},c)})})}}),null);
__d("EventCometPressableText.react",["CometPressable.react","React","TetraIcon.react","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={button:{backgroundColor:"g5ia77u1",borderTop:"gcieejh5",borderEnd:"bn081pho",borderBottom:"humdl8nn",borderStart:"izx4hr6d"},buttonContent:{alignItems:"bp9cbjyn",display:"j83agx80"},buttonText:{paddingStart:"pcp91wgn"}};function a(a){var c=a.disabled,d=a.icon,e=a.iconColor;e=e===void 0?"primary":e;var f=a.onPress,j=a.text;a=a.textColor;a=a===void 0?"primary":a;a=h.jsx(b("TetraText.react"),{color:a,type:"body4",children:j});return h.jsx(b("CometPressable.react"),{disabled:c,display:"inline",onPress:f,overlayDisabled:!0,xstyle:i.button,children:d!=null?h.jsxs("div",{className:(g||(g=b("stylex")))(i.buttonContent),children:[h.jsx(b("TetraIcon.react"),{color:e,icon:d}),h.jsx("div",{className:(g||(g=b("stylex")))(i.buttonText),children:a})]}):a})}c=h.memo(a);e.exports=c}),null);
__d("usePaymentsCometCheckout",["CometCardedDialogLoadingState.react","JSResource","React","useCometLazyDialog"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("JSResource")("PaymentsCometCheckoutDialog.react").__setRef("usePaymentsCometCheckout"),h=b("React");function a(a){var c=a.onClose,d=babelHelpers.objectWithoutPropertiesLoose(a,["onClose"]);a=b("useCometLazyDialog")(g,function(){return h.jsx(b("CometCardedDialogLoadingState.react"),{})});var e=a[0];a=a[1];var f=h.useCallback(function(){e(babelHelpers["extends"]({},d,{onClose:c}),c)},[c,d,e]);return[f,a]}}),null);