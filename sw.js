const SW_VERSION = '2026-08-21i';
const CACHE_NAME = `yubisashi-thai-${SW_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './images/dishes/thumb_00.jpg',
  './images/dishes/full_00.jpg',
  './images/dishes/thumb_01.jpg',
  './images/dishes/full_01.jpg',
  './images/dishes/thumb_02.jpg',
  './images/dishes/full_02.jpg',
  './images/dishes/thumb_03.jpg',
  './images/dishes/full_03.jpg',
  './images/dishes/thumb_04.jpg',
  './images/dishes/full_04.jpg',
  './images/dishes/thumb_05.jpg',
  './images/dishes/full_05.jpg',
  './images/dishes/thumb_06.jpg',
  './images/dishes/full_06.jpg',
  './images/dishes/thumb_07.jpg',
  './images/dishes/full_07.jpg',
  './images/dishes/thumb_08.jpg',
  './images/dishes/full_08.jpg',
  './images/dishes/thumb_09.jpg',
  './images/dishes/full_09.jpg',
  './images/dishes/thumb_10.jpg',
  './images/dishes/full_10.jpg',
  './images/dishes/thumb_11.jpg',
  './images/dishes/full_11.jpg',
  './images/dishes/thumb_12.jpg',
  './images/dishes/full_12.jpg',
  './images/dishes/thumb_13.jpg',
  './images/dishes/full_13.jpg',
  './images/dishes/thumb_14.jpg',
  './images/dishes/full_14.jpg',
  './images/dishes/thumb_15.jpg',
  './images/dishes/full_15.jpg',
  './images/dishes/thumb_16.jpg',
  './images/dishes/full_16.jpg',
  './images/dishes/thumb_17.jpg',
  './images/dishes/full_17.jpg',
  './images/dishes/thumb_18.jpg',
  './images/dishes/full_18.jpg',
  './images/dishes/thumb_19.jpg',
  './images/dishes/full_19.jpg',
  './images/dishes/thumb_20.jpg',
  './images/dishes/full_20.jpg',
  './images/dishes/thumb_21.jpg',
  './images/dishes/full_21.jpg',
  './images/dishes/thumb_22.jpg',
  './images/dishes/full_22.jpg',
  './images/dishes/thumb_23.jpg',
  './images/dishes/full_23.jpg',
  './images/dishes/thumb_24.jpg',
  './images/dishes/full_24.jpg',
  './images/dishes/thumb_25.jpg',
  './images/dishes/full_25.jpg',
  './images/dishes/thumb_26.jpg',
  './images/dishes/full_26.jpg',
  './images/dishes/thumb_27.jpg',
  './images/dishes/full_27.jpg',
  './images/dishes/thumb_28.jpg',
  './images/dishes/full_28.jpg',
  './images/dishes/thumb_29.jpg',
  './images/dishes/full_29.jpg',
  './images/dishes/thumb_30.jpg',
  './images/dishes/full_30.jpg',
  './images/dishes/thumb_31.jpg',
  './images/dishes/full_31.jpg',
  './images/dishes/thumb_32.jpg',
  './images/dishes/full_32.jpg',
  './images/dishes/thumb_33.jpg',
  './images/dishes/full_33.jpg',
  './images/dishes/thumb_34.jpg',
  './images/dishes/full_34.jpg',
  './images/dishes/thumb_35.jpg',
  './images/dishes/full_35.jpg',
  './images/dishes/thumb_36.jpg',
  './images/dishes/full_36.jpg',
  './images/dishes/thumb_37.jpg',
  './images/dishes/full_37.jpg',
  './images/dishes/thumb_38.jpg',
  './images/dishes/full_38.jpg',
  './images/dishes/thumb_39.jpg',
  './images/dishes/full_39.jpg',
  './images/dishes/thumb_40.jpg',
  './images/dishes/full_40.jpg',
  './images/dishes/thumb_41.jpg',
  './images/dishes/full_41.jpg',
  './images/dishes/thumb_42.jpg',
  './images/dishes/full_42.jpg',
  './images/dishes/thumb_43.jpg',
  './images/dishes/full_43.jpg',
  './images/dishes/thumb_44.jpg',
  './images/dishes/full_44.jpg',
  './images/dishes/thumb_45.jpg',
  './images/dishes/full_45.jpg',
  './images/dishes/thumb_46.jpg',
  './images/dishes/full_46.jpg',
  './images/dishes/thumb_47.jpg',
  './images/dishes/full_47.jpg',
  './images/dishes/thumb_48.jpg',
  './images/dishes/full_48.jpg',
  './images/dishes/thumb_49.jpg',
  './images/dishes/full_49.jpg',
  './images/dishes/thumb_50.jpg',
  './images/dishes/full_50.jpg',
  './images/dishes/thumb_51.jpg',
  './images/dishes/full_51.jpg',
  './images/dishes/thumb_52.jpg',
  './images/dishes/full_52.jpg',
  './images/dishes/thumb_53.jpg',
  './images/dishes/full_53.jpg',
  './images/icons/tuktuk.png',
  './images/icons/songthaew.png',
  './images/icons/atm.png',
  './images/icons/bag.png',
  './images/icons/bowl.png',
  './images/icons/bus.png',
  './images/icons/calculator.png',
  './images/icons/cart.png',
  './images/icons/clock.png',
  './images/icons/compass.png',
  './images/icons/cross.png',
  './images/icons/coffee.png',
  './images/icons/female.png',
  './images/icons/hand.png',
  './images/icons/hospital.png',
  './images/icons/hotel.png',
  './images/icons/male.png',
  './images/icons/money.png',
  './images/icons/motorbike.png',
  './images/icons/numpad.png',
  './images/icons/pin.png',
  './images/icons/pointhand.png',
  './images/icons/search.png',
  './images/icons/store.png',
  './images/icons/taxi.png',
  './images/icons/ticket.png',
  './images/icons/toilet.png',
  './images/icons/train.png',
  './images/icons/walk.png',
  './images/icons/suitcase.png',
  './images/icons/star.png',
  './images/icons/calc.png',
  './images/icons/agoda.png',
  './images/icons/trip.png',
  './images/icons/klook.png',
  './images/icons/getyourguide.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Stale-while-revalidate: 即座にキャッシュを返して高速表示しつつ、
// 裏側でネットワークから最新版を取得してキャッシュを更新する(次回起動時に反映)。
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);
        return cachedResponse || fetchPromise;
      })
    )
  );
});
