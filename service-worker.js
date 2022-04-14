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

workbox.routing.registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new workbox.strategies.CacheFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'pages',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);
