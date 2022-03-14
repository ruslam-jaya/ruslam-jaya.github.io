var APP_PREFIX = 'App_Ruslam';
var VERSION = 'version_02';
var URLS = '.';

const NOT_FOUND_CACHE_FILES = 'https://ruslam.id/index.html';
const CACHE_NAME = 'CACHE_OFFLINE_APP_RUSLAM';
const OFFLINE_URL = 'https://ruslam.id/index.html';
const NOT_FOUND_URL = 'https://ruslam.id/index.html';

self.addEventListener('fetch', function(event) {
  // console.log('[Service Worker] Fetch', event.request.url);
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }
});

// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "CACHE_OFFLINE_APP_RUSLAM";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "/offline/";
const offlineFallbackPage = "https://ruslam.id/index.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});

// This is the "Offline copy of assets" service worker

const QUEUE_NAME = "bgSyncQueue";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(QUEUE_NAME, {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE,
    plugins: [
      bgSyncPlugin
    ]
  })
);


// This is the service worker with the Cache-first network

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.CacheFirst({
    cacheName: CACHE
  })
);


//This is the service worker with the Advanced caching

const HTML_CACHE = "html";
const JS_CACHE = "js";
const STYLE_CACHE = "css";
const IMAGE_CACHE = "img";
const FONT_CACHE = "fonts";
const ICON_CACHE = "icons";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'HTML',
  new workbox.strategies.NetworkFirst({
    cacheName: HTML_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'JS',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: JS_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'CSS',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: STYLE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'IMG',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'FONT',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: ICON_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'icons',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);



// This is the "serving cached media" service worker

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.loadModule('workbox-cacheable-response');
workbox.loadModule('workbox-range-requests');

workbox.routing.registerRoute(
  /.*\.mp4/,
  new workbox.strategies.CacheFirst({
    cacheName: CACHE,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({statuses: [20]}),
      new workbox.rangeRequests.RangeRequestsPlugin(),
    ],
  }),
);
