const CACHE_NAME = "mon-espace-v42";
const APP_SHELL = ["./mon-espace.html", "./manifest.json", "./icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Cache-first, avec mise en cache à la volée de tout ce qui est chargé
// (React/Babel/polices) pour que l'app fonctionne aussi hors ligne.
// EXCEPTION IMPORTANTE : les appels vers Supabase (données live synchronisées entre appareils)
// ne doivent JAMAIS être mis en cache ni servis depuis le cache — sinon l'app relit indéfiniment
// la toute première réponse figée au lieu des données à jour (bug réel rencontré le 14/09/2026,
// qui a fait croire pendant longtemps à un problème de synchro alors que c'était juste ça).
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.url.includes("supabase.co")) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
