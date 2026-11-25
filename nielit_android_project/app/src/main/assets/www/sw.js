const CACHE_NAME = "nielit-student-prototype-v5";
const APP_FILES = [
  "./",
  "./index.html?v=5",
  "./styles.css?v=5",
  "./app.js?v=5",
  "./manifest.webmanifest",
  "./assets/nielit-logo192.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;
  event.respondWith((async()=>{
    if(event.request.mode==="navigate"){
      try{
        const response=await fetch(event.request);
        if(response.ok){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
        }
        return response;
      }catch(error){
        const offlinePage=await caches.match("./index.html?v=5");
        if(offlinePage)return offlinePage;
        throw error;
      }
    }
    const cached=await caches.match(event.request);
    if(cached)return cached;
    try{
      const response=await fetch(event.request);
      if(response.ok){
        const copy=response.clone();
        caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
      }
      return response;
    }catch(error){
      throw error;
    }
  })());
});

self.addEventListener("notificationclick",event=>{
  event.notification.close();
  event.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(windows=>{
    const page=new URL("./index.html#notices",self.location.href).href;
    const existing=windows.find(client=>client.url.startsWith(self.location.origin));
    return existing?existing.navigate(page).then(()=>existing.focus()):clients.openWindow(page);
  }));
});
