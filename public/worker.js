const version = '23032019'
const cacheName = 'github-page-'+version
const filesCache = [
    'index.html',
    'worker.js'
]

this.addEventListener('install', event => {
    this.skipWaiting();

    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(filesCache)
            })
    )
})

this.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith('github-page-')))
                    .filter(cache => (cache !== cacheName))
                    .map(cacheName => caches.delete(cacheName))
            )
        })
    )
})

this.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request)
            })
            .catch(()=>{
                return caches.match('/offline/index.html')
            })
    )
})
