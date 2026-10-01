const CACHE_NAME = "mon-espace-v100";
const APP_SHELL = ["./mon-espace.html", "./manifest.json", "./icon.svg", "./fond-accueil.jpg?v=3", "./avatar-estelle.jpg?v=1", "./avatar-clement.jpg?v=3", "./avatar-chatchats.jpg?v=1"];

self.addEventListener("install", (event) => {
  // cache: "reload" = on va chercher les fichiers sur le serveur, pas dans le cache HTTP du navigateur
  // (GitHub Pages le garde 10 min) — sinon une nouvelle version pouvait embarquer une ancienne photo.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL.map((url) => new Request(url, { cache: "reload" }))))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Cache-first (sauf la page elle-même, voir plus bas), avec mise en cache à la volée de tout ce qui est chargé
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
  // La page elle-même : réseau d'abord (en revalidant, pour passer le cache HTTP de 10 min de GitHub
  // Pages), cache en secours hors ligne — sinon chaque mise à jour n'apparaissait qu'à la 2e ouverture.
  if (event.request.mode === "navigate" || event.request.url.includes("mon-espace.html")) {
    event.respondWith(
      fetch(event.request, { cache: "no-cache" })
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((c) => c || caches.match("./mon-espace.html")))
    );
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
