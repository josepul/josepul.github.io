self.addEventListener('install', function(event) {
  var key = new URL(location).searchParams.get('apiKey');
  console.log('Service worker installed. Key = '+key);
});
importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey=7e45c406f16be97a0fdba58d0c6a7222");