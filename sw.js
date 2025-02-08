const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/pwa/",  
  "/pwa/index.html",
  "/pwa/style.css",
  "/pwa/script.js",
  "/pwa/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

