if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./assets/scripts/service-workers.js').then(res => {
        console.log('Service worker is registerd.', res);
    })
}