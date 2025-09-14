
// anxsion-serviceworker.js
// Enhanced service worker for anxsion.github.io using Workbox
// Features: versioned caches, offline fallback, pre-caching, improved strategies, and documentation

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Cache versioning for easier updates
const CACHE_VERSION = 'v2';
const HTML_CACHE = `ANXSION-html-${CACHE_VERSION}`;
const JS_CACHE = `ANXSION-javascript-${CACHE_VERSION}`;
const STYLE_CACHE = `ANXSION-stylesheets-${CACHE_VERSION}`;
const IMAGE_CACHE = `ANXSION-images-${CACHE_VERSION}`;
const FONT_CACHE = `ANXSION-fonts-${CACHE_VERSION}`;
const PRECACHE = `ANXSION-precache-${CACHE_VERSION}`;

// List of core assets to pre-cache for offline support
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/404.html',
  '/style/structure.css',
  '/manifest.webmanifest',
  // Add more core assets as needed
];

// Listen for skipWaiting message for immediate activation
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Precache core assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

// Clean up old caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => ![
          HTML_CACHE, JS_CACHE, STYLE_CACHE, IMAGE_CACHE, FONT_CACHE, PRECACHE
        ].includes(key)).map(key => caches.delete(key))
      )
    )
  );
});

// Cache expiration settings
const cacheExpiration = {
  maxEntries: 60,
  maxAgeSeconds: 24 * 60 * 60, // 1 day for static assets
};

// HTML: Network first, fallback to cache, then offline page
workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'document',
  new workbox.strategies.NetworkFirst({
    cacheName: HTML_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 60 * 60 })],
    networkTimeoutSeconds: 5,
  })
);

// JS: Stale-while-revalidate, longer cache
workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'script',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: JS_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);

// CSS: Stale-while-revalidate, longer cache
workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: STYLE_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);

// Images: Stale-while-revalidate, longer cache
workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);

// Fonts: Cache first, long cache
workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: FONT_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 30 * 24 * 60 * 60 })], // 30 days
  })
);

// Offline fallback for navigation (HTML) requests
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match('/index.html'))
    );
  }
});

// Optionally, handle other errors (e.g., offline images) with a fallback image
// self.addEventListener('fetch', (event) => {
//   if (event.request.destination === 'image') {
//     event.respondWith(
//       fetch(event.request).catch(() => caches.match('/asset/icon/lawfirm512.png'))
//     );
//   }
// });

// End of anxsion-serviceworker.js