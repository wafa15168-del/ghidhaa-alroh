var V="ghr-v1",F=["./","index.html","manifest.json","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
e.respondWith(caches.match(e.request).then(function(r){var n=fetch(e.request).then(function(res){if(res&&res.ok&&new URL(e.request.url).origin===location.origin){var cp=res.clone();caches.open(V).then(function(c){c.put(e.request,cp)})}return res}).catch(function(){return r});return r||n}))});
