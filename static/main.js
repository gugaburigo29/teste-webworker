navigator.serviceWorker.register('/static/worker.js?v=2')
    .then(res => {
        console.log('[worker] registred')
    })
    .catch(res => {
        console.log('[worker] error, not registred')
        console.log(res)
    })
