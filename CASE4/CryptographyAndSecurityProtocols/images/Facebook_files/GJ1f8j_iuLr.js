if (self.CavalryLogger) { CavalryLogger.start_js(["y8EHv"]); }

__d("StoriesCometSuspenseSingleBucketRootWithEntryPoint.react",["React","StoriesCometSuspenseSingleBucketRootWrapper.react","deferredLoadComponent","requireDeferredForDisplay","useStoriesSingleBucketProcessRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("deferredLoadComponent")(b("requireDeferredForDisplay")("StoriesViewerSingleBucketWithEntryPoint.react"));function a(a){var c=a.props;a=a.queries;c=b("useStoriesSingleBucketProcessRoute")(c.routeProps.bucket_id_from_card_id);var d=c.bucketID,e=c.cardID,f=c.source,i=c.traySessionID;c=c.viewerSessionID;return g.jsx(b("StoriesCometSuspenseSingleBucketRootWrapper.react"),{bucketID:d,children:g.jsx(h,{bucketID:d,cardID:e,openSource:f,queries:a,traySessionID:i,viewerSessionID:c})})}}),null);
__d("StoriesViewerSingleBucketWithEntryPoint.react",["CometStyleXSheet","React","StoriesSuspenseContentPaneRootWithEntryPoint.react","StoriesViewerSingleBucketWrapper.react","emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");b("CometStyleXSheet").rootStyleSheet.injectTheme();function a(a){var c=a.bucketID,d=a.cardID,e=a.openSource,f=a.queries,h=a.traySessionID;a=a.viewerSessionID;var i=c;return g.jsx(b("StoriesViewerSingleBucketWrapper.react"),{bucketID:i,openSource:e,traySessionID:h,viewerSessionID:a,children:g.jsx(b("StoriesSuspenseContentPaneRootWithEntryPoint.react"),{bucketID:i,initialBucketID:c,initialCardID:d,queryRefernce:f.storiesSuspenseContentPaneRootReference,updateFetchPolicy:b("emptyFunction"),viewerSessionID:a})})}}),null);