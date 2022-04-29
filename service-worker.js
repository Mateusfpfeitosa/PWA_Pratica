var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',  
       
        './css/style.css',

        './css/normalize.css',
        './imagens/120.png',
        './imagens/114.png',
        './imagens/180.png',
        './imagens/29.png',
        './imagens/40.png',
        './imagens/57.png',
        './imagens/58.png',
        './imagens/80.png',
        './imagens/depoimento.png',
        './imagens/fundo-foto.png',
        './imagens/fundo-rodape.png',
        './imagens/fundo.png',
        './imagens/imagem1.jpg',
        './imagens/imagem2.jpg',
        './imagens/imagem3.jpg',
        './imagens/imagem4.jpg',
        './imagens/imagem5.jpg',
        './imagens/imagem6.jpg',
        './imagens/logo.png',
        './imagens/museu.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});