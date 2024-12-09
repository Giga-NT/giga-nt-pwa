   const CACHE_NAME = 'giga-nt-cache-v1';
   const urlsToCache = [
       '/',
       '/index.html',
       '/styles.css',  // Замените на ваши стили
       // Добавьте другие ресурсы, которые нужно кэшировать
   ];

   self.addEventListener('install', (event) => {
       event.waitUntil(
           caches.open(CACHE_NAME)
               .then((cache) => {
                   return cache.addAll(urlsToCache);
               })
       );
   });

   self.addEventListener('fetch', (event) => {
       event.respondWith(
           caches.match(event.request)
               .then((response) => {
                   return response || fetch(event.request);
               })
       );
   });
