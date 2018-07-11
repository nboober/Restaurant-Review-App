//Register the service worker
if (navigator.serviceWorker){ //Browser support detection for service Worker
  navigator.serviceWorker.register('/sw.js', {
    scope: '/localhost'
  }).then(function(reg){
    console.log("Service Worker Registered");
  })catch(function(err){
    console.log("Service Worker not Registered");
  });
}

self.addEventListener('fetch', function(event){
  console.log(event.request);
});

//Installing the service worker
self.addEventListener('install', function(event){ //add event listener for the install event
  event.waitUntil(  //Signals the progress of the install
    caches.open('restaurant-reviews-v1').then(function(cache){  //Creates/Opens a new cache
      return cache.addAll(  //Anything I want the cache to store will be put in here
        '/',
        'css/styles.css',
        'img/1.png',
        'img/2.png',
        'img/3.png',
        'img/4.png',
        'img/5.png',
        'img/6.png',
        'img/7.png',
        'img/8.png',
        'img/9.png',
        'img/10.png',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js'
      );
    })
  );
});
