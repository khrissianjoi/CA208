if (self.CavalryLogger) { CavalryLogger.start_js(["UTq06"]); }

__d("MWMSForwardMessage.re",["bs_curry","MWMSForwardMessage.bs"],(function(a,b,c,d,e,f){a=function(){var a=b("MWMSForwardMessage.bs").useForwardAttachment();return function(c){c=b("bs_curry")._2(a,c.to_,c.copyAttachmentID);return c}};f.useForwardAttachment=a}),null);
__d("MWChatMediaViewerControls.react",["ix","fbt","BanzaiODS","CometTooltip.react","requireCond","cr:1485120","React","TetraCircleButton.react","TetraRow.react","TetraRowItem.react","useCometLazyDialog","fbicon","gkx","stylex","useMWChatForward","JSResource"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("cr:1485120").useForwardAttachment,j=b("React"),k=b("JSResource")("MWChatMediaViewerAttachmentInfoDialog.react").__setRef("MWChatMediaViewerControls.react"),l={iconHovered:{backgroundColor:"m8invena"}},m=h._("Download");c=h._("Share to Facebook");var n=h._("Forward"),o=h._("Info");function a(a){var c=a.attachmentID,d=a.canForward;d=d===void 0?!0:d;var e=a.downloadLink,f=a.messageID;a=j.useState(function(){return!1});var h=a[0],p=a[1];a=j.useState(function(){return!1});var q=a[0];q=a[1];a=j.useState(function(){return!1});q=a[0];var r=a[1],s=i(),t=b("useMWChatForward")({messageID:f,onSend:function(a){s({copyAttachmentID:c,to_:a})}}),u=function(){b("BanzaiODS").bumpEntityKey(3185,"mwchat_media_viewer","forward"),t&&t.onClick()};a=b("useCometLazyDialog")(k);var v=a[0],w=j.useCallback(function(){v({attachmentID:c,messageID:f})},[v,f,c]);return j.jsxs(b("TetraRow.react"),{paddingTop:0,spacing:8,children:[e!=null?j.jsx(b("TetraRowItem.react"),{children:j.jsx(b("CometTooltip.react"),{align:"middle",tooltip:m,children:j.jsx(b("TetraCircleButton.react"),{color:"white",icon:h?b("fbicon")._(g("1433212"),20):b("fbicon")._(g("1441392"),20),label:m,linkProps:{download:!0,target:"_blank",url:e},onHoverIn:function(a){return p(function(){return!0})},onHoverOut:function(a){return p(function(){return!1})},overlayHoveredStyle:l.iconHovered,size:36,testid:void 0,type:"deemphasized"})})}):null,d===!0?j.jsx(b("TetraRowItem.react"),{children:j.jsx(b("CometTooltip.react"),{align:"middle",tooltip:n,children:j.jsx(b("TetraCircleButton.react"),{color:"white",icon:b("fbicon")._(g("1433236"),20),label:n,onPress:function(a){return u()},overlayHoveredStyle:l.iconHovered,size:36,testid:void 0,type:"deemphasized"})})}):null,null,b("gkx")("1463539")&&b("gkx")("1555108")?j.jsx(b("TetraRowItem.react"),{children:j.jsx(b("CometTooltip.react"),{align:"middle",tooltip:o,children:j.jsx(b("TetraCircleButton.react"),{color:"white",icon:q?b("fbicon")._(g("479177"),20):b("fbicon")._(g("479180"),20),label:o,onHoverIn:function(a){return r(function(){return!0})},onHoverOut:function(a){return r(function(){return!1})},onPress:function(a){return w()},overlayHoveredStyle:l.iconHovered,size:36,testid:void 0,type:"deemphasized"})})}):null]})}}),null);