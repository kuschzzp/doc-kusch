/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5cc326af7e56f1a946f6805db59c55cf"
  },
  {
    "url": "assets/css/0.styles.8eeade1e.css",
    "revision": "1fa1e81f0cd14bc5b0aab230d332c9d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.30ede1bd.js",
    "revision": "330f80675161714faab43487160ba75a"
  },
  {
    "url": "assets/js/11.1aa3e276.js",
    "revision": "51b34649bc30bb82522261aded47aef7"
  },
  {
    "url": "assets/js/12.9230a6db.js",
    "revision": "9ef655af7bf8437c2fbef925b422516a"
  },
  {
    "url": "assets/js/13.2dec8a9c.js",
    "revision": "4f67f5439d995fc7623abe827c499241"
  },
  {
    "url": "assets/js/14.d791562c.js",
    "revision": "be1bb165fb7fa8b27293fb09e23b5cd7"
  },
  {
    "url": "assets/js/15.5769b70f.js",
    "revision": "ffbd9815c84973363a7146a5a87f6376"
  },
  {
    "url": "assets/js/16.1773e019.js",
    "revision": "276218442b73e186f374880cdc14f388"
  },
  {
    "url": "assets/js/17.c4b761bd.js",
    "revision": "22cd5b6909c60b19c2354693a3f8cded"
  },
  {
    "url": "assets/js/18.ce572963.js",
    "revision": "c9b00a3dfb8f3dc07ebc61ea33d9228d"
  },
  {
    "url": "assets/js/19.4d47bed1.js",
    "revision": "f34b4db78e9a53f218ef544b4906a8f3"
  },
  {
    "url": "assets/js/2.49a801db.js",
    "revision": "1e2b93364812d5065cc9e8b8d74ae935"
  },
  {
    "url": "assets/js/20.7c3a9645.js",
    "revision": "9d4dcb6c36cfd314403b260b1a407375"
  },
  {
    "url": "assets/js/21.b2de7baa.js",
    "revision": "63f07aad6f597d8226642c50f1941dd3"
  },
  {
    "url": "assets/js/22.77af008b.js",
    "revision": "428b5d4958ef2d290c1b57f339c3bdb3"
  },
  {
    "url": "assets/js/23.c1141b8d.js",
    "revision": "ebdb21fdc75334acba3f67f27b91a9e0"
  },
  {
    "url": "assets/js/24.dfe80ea8.js",
    "revision": "b7f7996fa30043dbe28fd38a95bdb24c"
  },
  {
    "url": "assets/js/25.2c73d534.js",
    "revision": "995d4ae79a0262751dbb09236dd3f917"
  },
  {
    "url": "assets/js/26.183e8bad.js",
    "revision": "de746c89233b1fc8537a29b9ec7d7e61"
  },
  {
    "url": "assets/js/27.a849765c.js",
    "revision": "994d62bd2e353b84a7784ef77f28a4ef"
  },
  {
    "url": "assets/js/28.03b792fa.js",
    "revision": "1c79512857940062e8b22bc5803b5da7"
  },
  {
    "url": "assets/js/29.b72d5dbc.js",
    "revision": "0ac7eaa8ac2afc3c315c51ce122bc9b0"
  },
  {
    "url": "assets/js/3.da478b0d.js",
    "revision": "41244303fb5191e392f7d7afe0115de0"
  },
  {
    "url": "assets/js/30.42ba00f5.js",
    "revision": "57cd5cf9a1ec06219ac98554542d8fb3"
  },
  {
    "url": "assets/js/31.93deae39.js",
    "revision": "60fb11b14124add2f584c253f3204e35"
  },
  {
    "url": "assets/js/32.570442f5.js",
    "revision": "4a94b5079327d52de1efab4988e655bb"
  },
  {
    "url": "assets/js/33.e7ebd55e.js",
    "revision": "de9e17d9689a4fdc82a07c6518e6f7b3"
  },
  {
    "url": "assets/js/34.d5a2bd87.js",
    "revision": "9b6753f1e557429e9c1a74efe14c816b"
  },
  {
    "url": "assets/js/35.89371f36.js",
    "revision": "a9945c7bfa3ccda6ff84a884ebb9f97a"
  },
  {
    "url": "assets/js/36.b3c86630.js",
    "revision": "55f303502a88cab66995d8605b0bef62"
  },
  {
    "url": "assets/js/37.b5e9c189.js",
    "revision": "bcadde4809b08459d43a310b6eb26d29"
  },
  {
    "url": "assets/js/38.fb1ede21.js",
    "revision": "c1197a0a6c1fa0f676955f7196224af8"
  },
  {
    "url": "assets/js/39.1df8e6a6.js",
    "revision": "207d269305e941ec78693ca5594ad012"
  },
  {
    "url": "assets/js/4.51a1e0b9.js",
    "revision": "0e4a2976a0c58bc5f830803ffb777cf4"
  },
  {
    "url": "assets/js/40.d335d6e9.js",
    "revision": "c46d8926d651556da69d5fec872db74e"
  },
  {
    "url": "assets/js/41.5d1177dd.js",
    "revision": "250a700fe13115007149daaa9e8dc6de"
  },
  {
    "url": "assets/js/42.ddff23f4.js",
    "revision": "78b30a839648ddb58a6214bd7a60600a"
  },
  {
    "url": "assets/js/43.8684d5cb.js",
    "revision": "2a80f37ad8d6587a50f54fbcb0120c2f"
  },
  {
    "url": "assets/js/5.0d652a52.js",
    "revision": "d7f1f0b6dffae3508775cc3fcf18babf"
  },
  {
    "url": "assets/js/6.df13eaf9.js",
    "revision": "96179ed10085240d3cbcc59e21e29d67"
  },
  {
    "url": "assets/js/7.5bb317d7.js",
    "revision": "d1c92e3977c6e3e385f68ac1c05fa17d"
  },
  {
    "url": "assets/js/8.29dd3501.js",
    "revision": "295337d05e1ec082ad5fa7c134843db5"
  },
  {
    "url": "assets/js/9.5a925a11.js",
    "revision": "16d801dc005da7f9e98d0b8815f8f600"
  },
  {
    "url": "assets/js/app.9ad9cd00.js",
    "revision": "bc30f9bb76226ecf4cb21ccc1a1955f9"
  },
  {
    "url": "bugs/index.html",
    "revision": "9f7f298ac88b7a1f8e351b479ba0030b"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "f903d0fb96a75605165e72e15bb07b00"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "26b9950f5d0836c0df2068f2e8ab4df4"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "8ff8bab14a0d2cb915eb01915fb6135a"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "df65ae53716149e83c86120c0d0e9c41"
  },
  {
    "url": "front/index.html",
    "revision": "16785b0099eaa2c8c7849c48f22acf11"
  },
  {
    "url": "guide.html",
    "revision": "44e6a5f891b8b061ea4b3380ac0ccb3f"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "a4280d093e8eaeb521e54175b27f1267"
  },
  {
    "url": "java/base/base4.html",
    "revision": "8755992dfd79337ed693c93a7da0e4a8"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "b02cab230c258bbda4781a899e60b487"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "f33992482df228bcdbc8b074e170896b"
  },
  {
    "url": "java/base/operator.html",
    "revision": "6067a7fbfe3cdc6e6a09059fe1cca707"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "08254c108d8bd5c5676c2256d44bcabd"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "f1dc04b8f83d741776755d04b15677eb"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "5dec4e0382a6614d4add82625266fce5"
  },
  {
    "url": "live2d/epsilon2_1/assets/moc/Epsilon2.1.2048/texture_00.png",
    "revision": "abee4cdeb8018032163ffdc0a16020b0"
  },
  {
    "url": "otherImages/1.jpg",
    "revision": "163ec77fc50f1610cdbd1f6f6c4a9eec"
  },
  {
    "url": "otherImages/2.jpg",
    "revision": "083c812028eaaffde05328b243870b3f"
  },
  {
    "url": "others/index.html",
    "revision": "4a29c3ed82348be026dde1687769258c"
  },
  {
    "url": "others/life01.html",
    "revision": "49947821eb8665c923a614d5e991d814"
  },
  {
    "url": "others/life02.html",
    "revision": "4d71f60607224ed74e5bbbef3898d2b8"
  },
  {
    "url": "others/life03.html",
    "revision": "cae2d816394e6573cdc79893f7d7d673"
  },
  {
    "url": "study/database/database2.html",
    "revision": "f6dd2a7e76c7cb438b4dbac58f201d88"
  },
  {
    "url": "study/database/databaseIndex.html",
    "revision": "01a55d18139338aad06c9280d43875f0"
  },
  {
    "url": "study/env/env2.html",
    "revision": "85d10f054c1fa25b6a1a20ae4a72daf6"
  },
  {
    "url": "study/env/env3.html",
    "revision": "e03904035f1583fd52c71dd8c6e8b781"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "6b9173f796c08924ca839d79ccce87d8"
  },
  {
    "url": "study/index.html",
    "revision": "1b8252e0b5502aa0d6dc52ff7c340eff"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "afd299621f32546b6e3827a76931cced"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "58f91acb6030e719a9f068b8907238df"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "bc0fefd65b11456bbff1ac82cd60cd27"
  },
  {
    "url": "study/linux/redisDocker.html",
    "revision": "24a495d5c451668eee96e7a2582a3728"
  },
  {
    "url": "study/linux/shellstudy.html",
    "revision": "235305e8aee904eb5ae540c951b60896"
  },
  {
    "url": "study/linux/xxlJobDocker.html",
    "revision": "b90fc287db9d7a367832dd65ff44840d"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "933c6cfa268ff689178d333bcc9b946b"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "a1fc6e93d410298ce093097d9f5ce276"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "10499364010a1b54d5a1f5ff03bb6165"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "6b92b7151c3ed555994b4de0f1bd361a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
