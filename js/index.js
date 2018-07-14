let staticCacheName = 'restaurant-reviews-v1';

//Register the service worker
if (navigator.serviceWorker){ //Browser support detection for service Worker
  navigator.serviceWorker.register('./index.js', {
    scope: '/localhost'
  }).then(function(reg){
    console.log("Service Worker Registered");
  })catch(function(err){
    console.log("Service Worker not Registered");
  });
}

//Installing the service worker
self.addEventListener('install', function(event){ //add event listener for the install event
  event.waitUntil(  //Signals the progress of the install
    caches.open(staticCacheName).then(function(cache){  //Creates/Opens a new cache
      return cache.addAll(  //Anything I want the cache to store will be put in here
        './',
        '../css/styles.css',
        '../img/1.png',
        '../img/2.png',
        '../img/3.png',
        '../img/4.png',
        '../img/5.png',
        '../img/6.png',
        '../img/7.png',
        '../img/8.png',
        '../img/9.png',
        '../img/10.png',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js'
      );
    })
  );
});

self.addEventListener('fetch', function(event){
  event.respondWith(
        caches.match(event.request).then(function(response){
          if (response) return response;
          return fetch(event.request);
        });
      );
    });

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all{
      cacheNames.filter(function(cacheNames){
        return cacheName.startsWith('restaurant') &&
              cacheName != staticCacheName;
            }).map(function(cacheName){
              return cache.delete(cacheName);
        });
      })
    })
  );
});
