const apiKey = new URL(location).searchParams.get('apiKey');
self.addEventListener('install', event => {
    importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey="+apiKey);
});