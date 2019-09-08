importScripts('./cache-polyfill.js');


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('portfolio').then(function (cache) {
            return cache.addAll([
                './',
                './index.html',
                './css/style.min.css'
            ]);
        })
    );
});