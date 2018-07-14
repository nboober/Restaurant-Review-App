import restaurants from '../data/restaurants.json';
import reviews from '../data/restaurants.json';

export default function IndexController(container){
  this._container = container;
  this._restaurants = new restaurant(this._container);
  this._reviews = new review(this._container);
  this._lostConnectionToast = null;
  this._openSocket();
  this._registerServiceWorker();
}

// open a connection to the server for live updates
IndexController.prototype._openSocket = function() {
  var indexController = this;
  var latestPostDate = this._postsView.getLatestPostDate();

  ws.addEventListener('message', function(event) {
    requestAnimationFrame(function() {
      indexController._onSocketMessage(event.data);
    });
  });

  // called when the web socket sends message data
  IndexController.prototype._onSocketMessage = function(data) {
    var messages = JSON.parse(data);
    this._restaurants.addPosts(messages);
    this._reviews.addPosts(messages);
  };

IndexController.prototype._registerServiceWorker = function() { //Service Worker implementor

  if(!navigator.serviceWorker) return;
  navigator.serviceWorker.register('./index.js').then(function(){
    console.log("Registration Worked");
  }).catch(function(){
    console.log("Registration Failed");
  });
};
