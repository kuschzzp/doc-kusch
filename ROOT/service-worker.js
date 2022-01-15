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
    "revision": "b1eef42fb35464fec5cbc259c246989d"
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
    "url": "assets/js/11.adf69c8b.js",
    "revision": "06837dc464dcea55192ea609ba1f35ea"
  },
  {
    "url": "assets/js/12.9230a6db.js",
    "revision": "9ef655af7bf8437c2fbef925b422516a"
  },
  {
    "url": "assets/js/13.5b6a1f3b.js",
    "revision": "887d817fb6d03d2747c5061bd2aab225"
  },
  {
    "url": "assets/js/14.c85f928b.js",
    "revision": "bcf169b834bb852a600d15ab6773cf10"
  },
  {
    "url": "assets/js/15.218368cd.js",
    "revision": "d9458d30646705673c3eedd09224107a"
  },
  {
    "url": "assets/js/16.d91d7221.js",
    "revision": "1bf09df05411e0916332b63355490fc4"
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
    "url": "assets/js/20.395f6ef1.js",
    "revision": "bf8190d3b82c63d5ed524e7f9f1a1cca"
  },
  {
    "url": "assets/js/21.f0a742c0.js",
    "revision": "62dc634f347a1173845684e8f5de0a62"
  },
  {
    "url": "assets/js/22.3cae00a7.js",
    "revision": "d26359a5113171cac6481f9da3c929d7"
  },
  {
    "url": "assets/js/23.46c09b90.js",
    "revision": "876e106ff359f939f3fb70ce916d60be"
  },
  {
    "url": "assets/js/24.7fb5a2e3.js",
    "revision": "d5f2694fcdb45432007d9c9dd748c3df"
  },
  {
    "url": "assets/js/25.84d36ddb.js",
    "revision": "d71a9567abd106e5857e5025dd239ab2"
  },
  {
    "url": "assets/js/26.183e8bad.js",
    "revision": "de746c89233b1fc8537a29b9ec7d7e61"
  },
  {
    "url": "assets/js/27.90344b51.js",
    "revision": "7255f0d6994bd69428ed3b8f57bcec4c"
  },
  {
    "url": "assets/js/28.0b03a7dd.js",
    "revision": "efda048453bace5f475b2f1b95a006cb"
  },
  {
    "url": "assets/js/29.db20e7d0.js",
    "revision": "0caaab740e81031b8b5323abd8b0fec6"
  },
  {
    "url": "assets/js/3.da478b0d.js",
    "revision": "41244303fb5191e392f7d7afe0115de0"
  },
  {
    "url": "assets/js/30.ffb00e4f.js",
    "revision": "2f1ba2a1d61fb7c453585204ea0e04ec"
  },
  {
    "url": "assets/js/31.86ff7525.js",
    "revision": "43fc529c91acecd90c75bfc2d5103348"
  },
  {
    "url": "assets/js/32.c49a1bfb.js",
    "revision": "42ba0345f52554cb3a3815ed33a7a9a8"
  },
  {
    "url": "assets/js/33.12b3198b.js",
    "revision": "5481ea440b56765ce20a76ad7395c00d"
  },
  {
    "url": "assets/js/34.35b847ed.js",
    "revision": "6880a0133f517a0bb08ca0bd44bddd84"
  },
  {
    "url": "assets/js/35.ffbe475b.js",
    "revision": "f128e12f92848516365f27283f8f6040"
  },
  {
    "url": "assets/js/36.b3c86630.js",
    "revision": "55f303502a88cab66995d8605b0bef62"
  },
  {
    "url": "assets/js/37.b6354a98.js",
    "revision": "ac58f0a88647816719a4bed46f307108"
  },
  {
    "url": "assets/js/38.0da0a613.js",
    "revision": "82e60939039dd52892dbdb187b693d1d"
  },
  {
    "url": "assets/js/39.be5eebdc.js",
    "revision": "84da06839cb8571e2567b2516d1a58e5"
  },
  {
    "url": "assets/js/4.51a1e0b9.js",
    "revision": "0e4a2976a0c58bc5f830803ffb777cf4"
  },
  {
    "url": "assets/js/40.f4496c32.js",
    "revision": "37e618cf252ad4580d9368c0d7de009c"
  },
  {
    "url": "assets/js/41.f945d11e.js",
    "revision": "4cc55a2c31329726dc873069b6876798"
  },
  {
    "url": "assets/js/42.386f13b2.js",
    "revision": "576c2a7850ff2aa51243612bf81db231"
  },
  {
    "url": "assets/js/5.e7de6950.js",
    "revision": "c074f24ed55a3af47f0141c58a75bdee"
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
    "url": "assets/js/9.966e5296.js",
    "revision": "58b2eab7856abdf24f20281bd267d188"
  },
  {
    "url": "assets/js/app.e0875c4e.js",
    "revision": "fc7b7514acfc87a11fb07c93c567c15b"
  },
  {
    "url": "bugs/index.html",
    "revision": "0ef2ade3fd719907562dc8d85e37a586"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "a3afa0d1bcf019cc9d1aa8179030f2f8"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "266510aadee382cd4d8853008147520f"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "906142a00313d074cf66bc98af327abc"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "8c1b534ff84414890dad0e62051ea4bc"
  },
  {
    "url": "front/index.html",
    "revision": "7157f7c0c935161b239a3c0e7beca73f"
  },
  {
    "url": "guide.html",
    "revision": "af58ed3a89c418fbd76169569ffcf0ad"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "dc8477901d9681e6cf21fc9af6d96000"
  },
  {
    "url": "java/base/base4.html",
    "revision": "6255f59d6c4a1001224252caa5eab0c8"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "df7455b95e4d702cc542de02ebac9f10"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "c85b583902b3073a9f846e2c9d57b0c8"
  },
  {
    "url": "java/base/operator.html",
    "revision": "696c7eca8c53c51b0e809765b631aa6e"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "3b779b77cd0287f50def6defd32dd798"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "e508d0cc53f0bad7faf0ce6ee80c86d0"
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
    "revision": "6b6772a8ba082f1e360203804ee52af7"
  },
  {
    "url": "others/life01.html",
    "revision": "efac20c3770dbc124ae2b9e83296fedf"
  },
  {
    "url": "others/life02.html",
    "revision": "2a52b27b3af68ba8b908897cb51b8ecd"
  },
  {
    "url": "others/life03.html",
    "revision": "108c6ce350142ed94beb61c228853265"
  },
  {
    "url": "study/database/database2.html",
    "revision": "3bb7f55a64a933c5a832c9d7d23e6747"
  },
  {
    "url": "study/database/databaseIndex.html",
    "revision": "ba9f9b87d04e5d66b4314e62f1641a9c"
  },
  {
    "url": "study/env/env2.html",
    "revision": "d11261af6e678e13234f064d51c418d2"
  },
  {
    "url": "study/env/env3.html",
    "revision": "8155f9766ccd81b44e831dd34fc23556"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "f8b0d06b86dc288404b23e1feeca42c9"
  },
  {
    "url": "study/index.html",
    "revision": "381d743edc7a17549727a7ca67737067"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "21cf55f36fd186834985f6210af1c49b"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "f15a125448f0ae1c3e3b897f1f8360ea"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "32fc73d5738c9ed9b18834d71c54fe33"
  },
  {
    "url": "study/linux/redisDocker.html",
    "revision": "114d3c07d0208ec89de51f84a73a4c65"
  },
  {
    "url": "study/linux/xxlJobDocker.html",
    "revision": "801530e8e128fe1c8c0860ddb7266aba"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "d77d085bd89d9381024b6347c984fa09"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "e6292565ef5e55de4c2099f9ac28853a"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "2d9fcf5028c799fe11553d14962eb67a"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "3619da5c6953a085a0abf47b42681308"
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
