'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "317d1471a0a6697f4b813414bb20d066",
"assets/AssetManifest.bin.json": "285457e19574699403d343f607f805f7",
"assets/AssetManifest.json": "e5fc1cd60e1288c7dd71ab571f6d1e2a",
"assets/FontManifest.json": "c4d48f97bdedc0ca84c3c1c55c59646b",
"assets/fonts/MaterialIcons-Regular.otf": "94f78b811bd8b4f144c5d0ea8a317acc",
"assets/fonts/Nexa_Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/Nexa_Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/Poppins-Bold.ttf": "5db3d2b3980827dae28161da22b1753a",
"assets/images/1.png": "b7a0a3dec38a0e7f5257990183a4ccb1",
"assets/images/10.png": "bee24ace6c0b8875b0246d9d93447242",
"assets/images/11.png": "221dc1602bfc8c2786483e59ba7381dc",
"assets/images/12.png": "5c8f16e834b2fdd32eef2f2f21c22d8c",
"assets/images/13.png": "14b6f31e37799da04182f8c38a307ca3",
"assets/images/14.png": "11d086d34f3d844906ff945e2281ad7f",
"assets/images/15.png": "2a2b2c731cda9838768f6ee33dfe8c81",
"assets/images/16.png": "fc1cd50ae72ca8b83f2bbc1c1487d3f8",
"assets/images/17.png": "690469e1a7ff331124810af4d50d2312",
"assets/images/18.png": "1a3982047608b3e6d9028e93ce87772f",
"assets/images/19.png": "39c028efeedba973ed02cfb5ce2e7561",
"assets/images/2.png": "9cab021944f6a8b8a1065774123075fb",
"assets/images/20.png": "c27dce0678bf6bd335f5265c78a884dc",
"assets/images/21.png": "838a55b71048b27cd16ff9fbbb7c02ec",
"assets/images/22.png": "87fec5d9724cc606252a9864341f0032",
"assets/images/23.png": "d8a1058edbfae18fb95ccf9e7cf741c5",
"assets/images/24.png": "1e3ce2966dab0a1ffd81e4114eae0723",
"assets/images/25.png": "d5fede9eb2bd54843d3a81d43f807df8",
"assets/images/26.png": "dd36f708d8a908288d6e7313e71c849a",
"assets/images/27.png": "351006c581e31cf7169f1c508f0e4d3e",
"assets/images/28.png": "b7cba470013710be0b3b3d8020650ab1",
"assets/images/29.png": "fdca7bb0491a37dd209e37b720dd6cbb",
"assets/images/3.png": "fcc834a82855458a76bd73e030559ef9",
"assets/images/30.png": "4beeae07b65ceec22062ef1c189ced4c",
"assets/images/31.png": "300c1f61270a97c72ea2e3788e75e5f9",
"assets/images/32.png": "930cf74dfaa31747d4c28811717c0f96",
"assets/images/33.png": "92c2fac41d2e125ee1ed82440132160e",
"assets/images/34.png": "388f77232c46e5aeec8492207fd15c40",
"assets/images/35.png": "86cad35e6393b701378525e4d0e7b8d9",
"assets/images/36.png": "2b8a092421f315b410be9954c5dabf84",
"assets/images/37.png": "0319294d1b908d299bca62aa58ce8afb",
"assets/images/38.png": "4e94e8d715a429ad1b9ef90a737f216f",
"assets/images/39.png": "4ff63fb00efb3fbf9047a271bfaf453b",
"assets/images/4.png": "e81d842a47471576ca4eba1aef53c262",
"assets/images/40.png": "5b99f1b3975b1573087dca6f774d9808",
"assets/images/41.png": "774f5b2339e5cb071fe136fabe3566b2",
"assets/images/42.png": "70e94cf2a269a417cf089302bc933cbf",
"assets/images/43.png": "11205328590b983d4608ec070e4529fd",
"assets/images/5.png": "08bd999fc86bef9f8de2ffa2ff1207d0",
"assets/images/6.png": "fe3a4f9a4f220703bfdb3929088ceb7a",
"assets/images/7.png": "a9e38ad27af52ead7d1fa89d92dcd7f9",
"assets/images/8.png": "908ea46cc84171541dc279b8b185782b",
"assets/images/9.png": "e94b484f370231f8711fa4ab1b34f56a",
"assets/images/chicken.png": "29f435c9d5fe7c266c797de76e8a178d",
"assets/images/coke.png": "a234f20e2c0bfa05b28f88a0f20b8fae",
"assets/images/coke05.png": "d291ce112390c7680f09732860f8d5c7",
"assets/images/coke15l.png": "8aedfe86dabb0a51c65f6713c2c4fbbb",
"assets/images/coke1l.png": "2baee3ba417ef093d071446b07c3046e",
"assets/images/cokelogo.png": "2ca16ff055874c9f3f80f5bc2a70b17d",
"assets/images/donut.png": "c4254509a7b4533630697d4b0cce5a65",
"assets/images/fanta.png": "beb2a6ab4f6b467a3501dd6801d9776b",
"assets/images/fanta05.png": "d15c1842a00ec1c48c93028d7f13413c",
"assets/images/fanta15l.png": "7a058bc3e62e27f4c22aa84fe70031b3",
"assets/images/fanta1l.png": "5883b7e18ab26fc9d8c113cad7da4c43",
"assets/images/fantalogo.png": "5868792d96be703c5be33010ff4c252f",
"assets/images/fusetea05.png": "accf8c925111e836d04b3e6b8b31c966",
"assets/images/fusetea1.png": "5f5a8826338296a0ddc92fe285efc71b",
"assets/images/icecream.png": "53b268f119622d5d5c9d40556bd3f4e7",
"assets/images/keyfsi.png": "c792431b22c70d218cd32974347338c4",
"assets/images/logo1.png": "23a9950e8a3717bcb8cb4bff8484e7e3",
"assets/images/logo2.png": "4e10fecd8406e55285c415207942792a",
"assets/images/muzqaymoq.png": "ebb7ed9ba82fd968a7cc581e22553ea3",
"assets/images/pepsi.png": "9ffa8f7d52f569fbfc51f3d6dc2f011b",
"assets/images/pepsi05.png": "cb7aad2f2f2859aa2d35ee19678166f5",
"assets/images/pepsi15l.png": "706677254f245756b0a824d8a0a08ea4",
"assets/images/pepsi1l.png": "e4a59eb9b502e6dba9dac9597f534df3",
"assets/images/pepsilogo.png": "c65a09a48e6b073bc17c73b583d7c141",
"assets/images/salad4.png": "5e4cd664a8d951126fdaf2bd29616615",
"assets/images/screen1.png": "3f95493e7a5bae31efe53640edf82d58",
"assets/images/screen2.png": "69747a2b15b6ae50fe1d3f980f09bb4a",
"assets/images/screen3.png": "927d09a1c0c98d80daff49a9d8b196c9",
"assets/images/soda.png": "023a0e73c3a2243409c77d29797ed559",
"assets/images/tort.png": "1c749098a486b15bde90349386c34230",
"assets/images/tovuq.png": "449134aa3aaadce1d4342eaec8556b64",
"assets/NOTICES": "a67ebe4331533fe05d6305602e3834b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "0da21e00e58b5dde7e6b405e628e9ffb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "db20f8ad4d02ba6f82c69ed67d19c4fe",
"icons/apple-touch-icon.png": "e55c5cbe3653dce6e748718b0765e8b7",
"icons/favicon-16x16.png": "28f9ea140727ed06044c0d243ef69e12",
"icons/favicon-32x32.png": "314486d5e6817558ef1e787ce0a611fc",
"icons/Icon-192.png": "ce6a08e30b29e35169e3cfb9ecc58a6f",
"icons/Icon-512.png": "76bfe7f67241cc180dff1783084323ac",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "271119c9b39b25430d0f3ab9dff01e4a",
"/": "271119c9b39b25430d0f3ab9dff01e4a",
"main.dart.js": "e97c3efbb9e97ad0e123991f88abf69d",
"manifest.json": "1f53212f6468b4042288a64e05be557d",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "4b59a9c088d4450da0fbb402e8a5eacb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
