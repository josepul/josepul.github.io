self.addEventListener('install', event => {
  const key = new URL(location).searchParams.get('apiKey');
  console.log('Service worker installed. Key = '+key);
});
self.addEventListener('active', event => {
  const key = new URL(location).searchParams.get('apiKey');
  console.log('Service worker active. Key = '+key);
});
importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey=7e45c406f16be97a0fdba58d0c6a7222");