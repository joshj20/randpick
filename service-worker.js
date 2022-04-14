importScripts('./workbox-sw.js');

workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-cacheable-response');
workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === 'image' ||
    request.destination === 'script' ||
    request.destination === 'style',
  new workbox.strategies.CacheFirst()
);

