navigator.serviceWorker.register('./worker.js')
    .then(res => console.log('[ServiceWorker] Registered'));
