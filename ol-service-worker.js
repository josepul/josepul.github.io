self.addEventListener('install', event => {
    const apiKey = new URL(location).searchParams.get('apiKey');
    importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey="+apiKey);
});