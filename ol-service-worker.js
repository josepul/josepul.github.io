let apiKey;
self.addEventListener('install', event => {
    apiKey = new URL(location).searchParams.get('apiKey');
});
importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey="+apiKey);