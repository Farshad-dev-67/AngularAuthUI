if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./assets/scripts/ngsw-worker.js').then(res => {
        console.log('Service worker is registerd.', res);
    })
}