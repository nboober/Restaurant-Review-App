//Installing service worker
self.addEventListener('install', function(event){ //add event listener for the install event
  event.waitUntil(  //Signals the progress of the install
    caches.open('restaurant-reviews-v1').then(function(cache){  //Creates/Opens a new cache
      return cache.addAll(  //Anything I want the cache to store will be put in here
        '/',
        'styles/styles.css',
        'images/1.jpg',
        'scripts/dbhelper.js',
        'scripts/main.js',
        'scripts/restaurant_info.js'

      );
    })
  );
});
