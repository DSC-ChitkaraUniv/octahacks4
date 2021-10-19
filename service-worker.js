const CACHE_NAME = 'offline';
// Customize this with a different URL if needed.
const OFFLINE_URL = 'index.html';

self.addEventListener('install', event => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE_NAME);
			// Setting {cache: 'reload'} in the new request will ensure that the
			// response isn't fulfilled from the HTTP cache; i.e., it will be from
			// the network.
			await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
			// await cache.addAll([
			// 	'./',
			// 	'./assets/icons/favicon.ico',
			// 	'./assets/icons/apple-touch-icon.png',
			// 	'./assets/bg/ieilogo.png',
			// 	'./assets/bg/CU_logo.png',
			// 	'./assets/iconfont/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2',
			// 	'./css/root.css',
			// 	'./css/keyframes.css',
			// 	'./css/loader.css',
			// 	'./css/nav.css',
			// 	'./css/sidebars.css',
			// 	'./css/index.css',
			// 	'./js/navbar.js',
			// ]);
		})()
	);
	// Force the waiting service worker to become the active service worker.
	self.skipWaiting();
});

self.addEventListener('activate', event => {
	event.waitUntil(
		(async () => {
			// Enable navigation preload if it's supported.
			// See https://developers.google.com/web/updates/2017/02/navigation-preload
			if ('navigationPreload' in self.registration) {
				await self.registration.navigationPreload.enable();
			}
		})()
	);

	// Tell the active service worker to take control of the page immediately.
	self.clients.claim();
});

self.addEventListener('fetch', event => {
	event.respondWith(
		(async () => {
			try {
				// First, try to use the navigation preload response if it's supported.
				const preloadResponse = await event.preloadResponse;
				if (preloadResponse) {
					return preloadResponse;
				}

				// Always try the network first.
				const networkResponse = await fetch(event.request);
				return networkResponse;
			} catch (error) {
				// catch is only triggered if an exception is thrown, which is likely
				// due to a network error.
				// If fetch() returns a valid HTTP response with a response code in
				// the 4xx or 5xx range, the catch() will NOT be called.

				const cache = await caches.open(CACHE_NAME);
				let cachedResponse = null;
				if (event.request.mode === 'navigate') {
					cachedResponse = await cache.match(OFFLINE_URL);
				} else {
					cachedResponse = await cache.match(event.request.url);
				}
				return cachedResponse;
			}
		})()
	);

	// If our if() condition is false, then this fetch handler won't intercept the
	// request. If there are any other fetch handlers registered, they will get a
	// chance to call event.respondWith(). If no fetch handlers call
	// event.respondWith(), the request will be handled by the browser as if there
	// were no service worker involvement.
});
