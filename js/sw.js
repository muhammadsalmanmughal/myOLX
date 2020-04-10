//version 
var cacheName ='v1.00';
// files to cache
var files=[
    './',
    '../index.html',
    './css./index.css',
    './pic./icons./icon-72x72',
    './pic./icons./icon-96x96',
    './pic./icons./icon-128x128',
    './pic./icons./icon-144x144',
    './pic./icons./icon-152x152',
    './pic./icons./icon-192x192',
    './pic./icons./icon-384x384',
    './pic./icons./icon-512x512',
    './index.js',

];

// version 


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(files)
                    .catch(err => {
                        console.err(err)
                    })
            })
    )
    console.log('service worker installed');
    self.skipWaiting()
})
//activate
self.addEventListener('activate',event=>{
    event.waitUntil(
        caches.keys()
        .then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache=>{
                    if(cache != appVersion){
                        console.info('deleting old caches',cache);
                        return cache.delete(cache)
                    }
                })
            )
        })
    )
    return self.clients.claim();
})

// fetch 

self.addEventListener('fetch',event=>{
    console.info('sw fetch', event.request.url );
    event.respondWith(
        caches.match(event.request)
        .then(res=>{
            return res|| fetch(event.request)
        })
    )
})



//install
// // STEP #1  
// // call install events
// self.addEventListener('install', e =>{
//     console.log('service worker: installed ')
    
//     // STEP #4
//     e.waitUntil(
//         caches
//         .open(cacheName)
//         .then(cache => {
//             cache.addAll(cacheAssets);
//             console.log('service worker: All Files added in cachefiles ')
//         })
//         .then(()=> self.skipWaitiing())
//     )
// })
// // STEP #2
// //call activate events
// self.addEventListener('activate' , e =>{
//     console.log('service worker: activated')
//     e.waitUntil(
//         caches
//         .keys()
//         .then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cache =>{
//                     if(cache !== cacheName)
//                     console.log('Serice Worker: Cleaning old Caching')
//                     return caches.delete(cache)
//                 })
//             )
//         })
//     )
// })

// // STEP #5
// self.addEventListener('fetch', e =>{
//     e.respondWith(
//         fetch(e.request).catch(()=> caches.match(e.request)));
//     console.log('fetching')
//     e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
// })

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(cacheName)
//             .then(cache => {
//                 return cache.addAll(filesToCache)
//                     .catch(err => {
//                         console.err(err)
//                     })
//             })
//     )
//     console.log('service worker installed');
//     self.skipWaiting()
// })
// //activate
// self.addEventListener('activate',event=>{
//         event.waitUntil(
//             caches.keys()
//             .then(cacheNames=>{
//                 return Promise.all(
//                     cacheNames.map(cache=>{
//                         if(cache != cacheName){
//                             console.info('deleting old caches',cache);
//                             return cache.delete(cache)
//                         }
//                     })
//                 )
//             })
//         )
//         return self.clients.claim();
//     })
    
//     // fetch 
    
//     self.addEventListener('fetch',event=>{
//         console.info('sw fetch', event.request.url );
//         event.respondWith(
//             caches.match(event.request)
//             .then(res=>{
//                 return res|| fetch(event.request)
//             })
//         )
//     })

//fetch





// // version 
// var appVersion = '1.2';
// // files to cache
// var files = [
//     './',
//     './index.html',
//     './login.html',
//     './sale.html',
//     './signUp.html',
//     './scripts/app.js',
//     './images/23_OLX-512 (1).png',
//     './images/favicon.ico',
//     './images/Untitled.png'
// ]
// //install

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(appVersion)
//             .then(cache => {
//                 return cache.addAll(files)
//                     .catch(err => {
//                         console.err(err)
//                     })
//             })
//     )
//     console.log('service worker installed');
//     self.skipWaiting()
// })
// //activate
// self.addEventListener('activate',event=>{
//     event.waitUntil(
//         caches.keys()
//         .then(cacheNames=>{
//             return Promise.all(
//                 cacheNames.map(cache=>{
//                     if(cache != appVersion){
//                         console.info('deleting old caches',cache);
//                         return cache.delete(cache)
//                     }
//                 })
//             )
//         })
//     )
//     return self.clients.claim();
// })

// // fetch 

// self.addEventListener('fetch',event=>{
//     console.info('sw fetch', event.request.url );
//     event.respondWith(
//         caches.match(event.request)
//         .then(res=>{
//             return res|| fetch(event.request)
//         })
//     )
// })