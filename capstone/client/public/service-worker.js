var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/static/css/2.d5386017.chunk.css',
  '/static/css/main.47e91440.chunk.css',
  '/static/js/2.7e0ea32c.chunk.js',
  '/static/js/main.917ab41e.chunk.js',
  '/static/media/fa-brands-400.ae990e80.woff2',
  '/static/media/fa-regular-400.ee232cab.woff2',
  '/static/media/fa-solid-900.52134b92.woff2'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});