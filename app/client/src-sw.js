const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});
// Implement asset caching
// Set up asset cache
const cacheName = 'static-resources';
const matchCallback = ({request}) =>
  // CSS
  request.destination === 'style' ||
  // JavaScript
  request.destination === 'script' ||
  // Web Workers
  request.destination === 'worker';

registerRoute(
  matchCallback,
  new CacheFirst({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

