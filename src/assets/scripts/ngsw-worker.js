self.addEventListener("install", (event) => {
    console.log('installation', event);
});
self.addEventListener("activate", (event) => {
    console.log('activated', event);
});