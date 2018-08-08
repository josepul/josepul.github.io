self.addEventListener('install', event => {
  const apiKey = new URL(location).searchParams.get('apiKey');
  console.log(apiKey);
});
importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey=7e45c406f16be97a0fdba58d0c6a7222");