const apiKeyParam = new URL(location).searchParams.get('apiKey');
console.log(apiKeyParam);
importScripts("https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey="+apiKeyParam);