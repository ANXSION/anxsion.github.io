importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const HTML_CACHE = "ANXSION-html";
const JS_CACHE = "ANXSION-javascript";
const STYLE_CACHE = "ANXSION-stylesheets";
const IMAGE_CACHE = "ANXSION-images";
const FONT_CACHE = "ANXSION-fonts";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

const cacheExpiration = {
  maxEntries: 50,
  maxAgeSeconds: 30,
};

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'document',
  new workbox.strategies.NetworkFirst({
    cacheName: HTML_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'script',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: JS_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: STYLE_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'font',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: FONT_CACHE,
    plugins: [new workbox.expiration.ExpirationPlugin(cacheExpiration)],
  })
);