export default function IndexController(container){
  this._registerServiceWorker();
}

IndexController.prototype._registerServiceWorker = function() { //Service Worker implementor

  if(!navigator.serviceWorker) return;
  navigator.serviceWorker.register('/sw.js').then(function(){
    console.log("Registration Worked");
  }).catch(function(){
    console.log("Registration Failed");
  });
};
