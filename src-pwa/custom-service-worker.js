/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
if (workbox) {
    workbox.precaching.precache(self.__precacheManifest)

    self.addEventListener('fetch', function (event) {
        event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
        )
    })
}