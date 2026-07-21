self.addEventListener('install', () => {

  self.skipWaiting();

});

 

self.addEventListener('activate', (event) => {

  event.waitUntil((async () => {

    const keys = await caches.keys();

    for (const key of keys) {

      if (/listnote|listnote-v/i.test(key)) {

        await caches.delete(key);

      }

    }

    await self.registration.unregister();

  })());

});
