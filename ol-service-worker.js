// Install Service Worker
self.addEventListener('install', event => {
    const apiKey = new URL(location).searchParams.get('apiKey');
    console.log("Service worker installed! Apikey = "+apiKey);
});

// Service Worker Active
self.addEventListener('activate', event => {
    const apiKey = new URL(location).searchParams.get('apiKey');
    console.log("Service worker active! Apikey = "+apiKey);
});
importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey=7e45c406f16be97a0fdba58d0c6a7222");