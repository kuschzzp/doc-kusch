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
    "revision": "4903bd7dd9e679c2b7aec71aa7bb4073"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "e6f7461814067b61c787e56dd4a76332"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "60f4b1cc2f9d67edc65734117344bdff"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "89f32437848881dde0f03dd8c58d0171"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1833182483924b2f0a3ce428c4f5bb19"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "1ba3cf5ba262bc9b8fa372f544f5dc3e"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "a81690a58834196ad562681a6e45ea7a"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "36c84307db77f7b69ef28c89c172f53e"
  },
  {
    "url": "assets/css/0.styles.6eae1f93.css",
    "revision": "3a4947cc5f1a0248b07b2f22999d36b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0a2e6ed6.js",
    "revision": "bb99505a802ffcb0226a2ae9bfc03acf"
  },
  {
    "url": "assets/js/11.9529aef7.js",
    "revision": "21f7ab35a6dc1cd4e59ce889ab34d42a"
  },
  {
    "url": "assets/js/12.4ef97702.js",
    "revision": "cdba8ffac5f709a6e8af44b43a512315"
  },
  {
    "url": "assets/js/13.a149f1e8.js",
    "revision": "6b9864531367033b4cd6e4317513669e"
  },
  {
    "url": "assets/js/14.2427574d.js",
    "revision": "6421b8bdb23d230d5cdead0e17013c7e"
  },
  {
    "url": "assets/js/15.4695bc7e.js",
    "revision": "a209ce31d3c5e8268c0cb790dc33d62f"
  },
  {
    "url": "assets/js/16.927f3b34.js",
    "revision": "e8333416f14bff34385f73eb3a4711b9"
  },
  {
    "url": "assets/js/17.d07216c7.js",
    "revision": "cdad688672a22805ad3a6517e37efbd0"
  },
  {
    "url": "assets/js/18.d0a7578e.js",
    "revision": "52187e5b6386d0d8e6865d9ba4177e9b"
  },
  {
    "url": "assets/js/19.a5e7ffa3.js",
    "revision": "3a1519fc0c6b290cc5d1051dfdd98410"
  },
  {
    "url": "assets/js/2.52d076f4.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.263a1120.js",
    "revision": "597765aa2da1fb9ba00b29c26240cd49"
  },
  {
    "url": "assets/js/21.65775309.js",
    "revision": "be20853cea0b31134706ad2c2c377b48"
  },
  {
    "url": "assets/js/22.f97aa7e1.js",
    "revision": "da5dc33bcd1424266e5861020f31df8e"
  },
  {
    "url": "assets/js/23.017744c3.js",
    "revision": "36df809ee995031e197acab862a15107"
  },
  {
    "url": "assets/js/24.4965ef71.js",
    "revision": "b389b6f00b0fb3885472c24106bea88b"
  },
  {
    "url": "assets/js/25.db82d05a.js",
    "revision": "c618f04a86ace7d155729e8fe857b966"
  },
  {
    "url": "assets/js/26.c587f510.js",
    "revision": "25c3fb81f3bd098af212a5cc2988ad7a"
  },
  {
    "url": "assets/js/27.f69aab95.js",
    "revision": "6008ed8fb6a69f07ae0ef27618984897"
  },
  {
    "url": "assets/js/28.f56c3dd6.js",
    "revision": "6fa491b0645edb3cc34df9000dae2fb4"
  },
  {
    "url": "assets/js/29.9c946364.js",
    "revision": "77fb287218ace1736553aff149f71cef"
  },
  {
    "url": "assets/js/3.0d67d627.js",
    "revision": "08ac41df925fb0adac1f33c56c0e310c"
  },
  {
    "url": "assets/js/30.49df5fb5.js",
    "revision": "d9b01c33708be1315920f1d9428cf2c8"
  },
  {
    "url": "assets/js/31.b654953a.js",
    "revision": "46eb8d9c492c16b9138f5162e23a9a52"
  },
  {
    "url": "assets/js/32.59659d37.js",
    "revision": "fa3e80c3daee7f54f86e558a447f2717"
  },
  {
    "url": "assets/js/33.42836d8c.js",
    "revision": "5a25b392f4bb1a73b446fc0a84decdd7"
  },
  {
    "url": "assets/js/34.23ec40c0.js",
    "revision": "4a0ece0ba5e9771eb77c5a9899744cb4"
  },
  {
    "url": "assets/js/35.5586491a.js",
    "revision": "f8dafaea86b2b61d083fe796d0d31d49"
  },
  {
    "url": "assets/js/36.2479cbb4.js",
    "revision": "7429c87f897f0a9f82946d4a4fd216a9"
  },
  {
    "url": "assets/js/37.575c8b81.js",
    "revision": "21575db4b395004fc077f6fdb5f9ab67"
  },
  {
    "url": "assets/js/38.75015e95.js",
    "revision": "a1cd00081fb5255b8e0a5e9e57d15d24"
  },
  {
    "url": "assets/js/39.db8636c1.js",
    "revision": "230d5af31309604628f02934b62eb0b5"
  },
  {
    "url": "assets/js/4.d37fcdb5.js",
    "revision": "a3db50c0691a3dc8712b67d6a1737d6b"
  },
  {
    "url": "assets/js/40.a1907ebe.js",
    "revision": "4f73bcad61b7b9b024adb717a9f2be15"
  },
  {
    "url": "assets/js/41.57b3b93c.js",
    "revision": "c2214fe8a51e0e77e814e1a01edb3c01"
  },
  {
    "url": "assets/js/42.462a0205.js",
    "revision": "369f64fa65a6c09275f4760619e73611"
  },
  {
    "url": "assets/js/43.1339a9b2.js",
    "revision": "0f8a51ad315b9de274ecef11a24d74f1"
  },
  {
    "url": "assets/js/44.ec165d3f.js",
    "revision": "6c73e636f4a1443b743db56cce025515"
  },
  {
    "url": "assets/js/45.5191488a.js",
    "revision": "ee43627c9449dd87a5988d0b4bad8c01"
  },
  {
    "url": "assets/js/46.7efb8c69.js",
    "revision": "27b1f32c151da0afaf98b5cce82c3b53"
  },
  {
    "url": "assets/js/47.94c2125f.js",
    "revision": "52eba12c0805b9ae750f96eb40c2e17f"
  },
  {
    "url": "assets/js/48.d833a3e2.js",
    "revision": "d62da717983d6eec5c21886092f91b62"
  },
  {
    "url": "assets/js/49.6ff3c991.js",
    "revision": "929c1d417ee0dd87c41f162da897fd80"
  },
  {
    "url": "assets/js/5.7c55ad33.js",
    "revision": "a17864284458554e01d1b8465c8d71fd"
  },
  {
    "url": "assets/js/50.c0acf396.js",
    "revision": "8e7b0f1141ab101ff1e124d40f1841aa"
  },
  {
    "url": "assets/js/51.ac022fd0.js",
    "revision": "f01f4d2d11a98a35cc47de605c176af9"
  },
  {
    "url": "assets/js/52.a12b36a6.js",
    "revision": "d6ed228e4a4d34291f9705e072d642e6"
  },
  {
    "url": "assets/js/53.d37df0af.js",
    "revision": "7c9da2f1599d4d6259a18d8983c607d3"
  },
  {
    "url": "assets/js/54.4b201489.js",
    "revision": "673d3a52a13fe355725e5d15dcf62561"
  },
  {
    "url": "assets/js/55.065211c1.js",
    "revision": "ef47d18914e0edd46a9536551562e0e6"
  },
  {
    "url": "assets/js/56.4c0b73b9.js",
    "revision": "0110ffe048074bf65e0801b2a33ea804"
  },
  {
    "url": "assets/js/57.c1977500.js",
    "revision": "f15a871b9a2820857fee7441ac865180"
  },
  {
    "url": "assets/js/58.e8f3a2b5.js",
    "revision": "dc2f5746f7c728cc617bc09b133e222f"
  },
  {
    "url": "assets/js/59.e8b74b4a.js",
    "revision": "909bd97101c233da89d1fe08cee9b5a1"
  },
  {
    "url": "assets/js/6.c207ef8c.js",
    "revision": "2109b2c947fbef3cf5aede939930ceef"
  },
  {
    "url": "assets/js/7.595cbe73.js",
    "revision": "afbf8cbc3469e9638491844687309593"
  },
  {
    "url": "assets/js/8.edad6162.js",
    "revision": "249d08d902af3fb78c6c57acd323dac1"
  },
  {
    "url": "assets/js/9.fb5a5040.js",
    "revision": "006e56414671c3310154d281b547caf6"
  },
  {
    "url": "assets/js/app.3569b0a7.js",
    "revision": "460fe6c8d5d1edbadaacb580c384d91a"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "1ad403ead61476ea8f07d8dc07b9d53b"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "bccfa219613fc2231c5fc015464de8ab"
  },
  {
    "url": "bugs/index.html",
    "revision": "b6c2627be645eb3234968bffcb786d1a"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "ea40f8232d7b8d2126af651f4903380f"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "8e3a2ae3126b89266ec2a7df90ef0f35"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "83b119ecb515a6f6a641bd5bd7ddf976"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "0f110c42a419f5a3a133b5183ceba41e"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "2971ff9ea7066aeb7ede0b37d4090c67"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "b12302ff041e58f8cd9b8c9733fc74d1"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "f228e2b8685619a64ad452d32f789cfa"
  },
  {
    "url": "front/index.html",
    "revision": "fb6c2f3ec5edea1cb0a93a34b7059795"
  },
  {
    "url": "guide.html",
    "revision": "cfe11e52fbeba1eea9980aa44e888ef7"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "43e826197feb0f719da2e515fe93fd33"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "3b239d211ffe224f0de2ac3e8f88ee55"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "b5b7899b1883c5bcb57c09caa3de9a26"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "c1540e51e1e281e979dfd83f34fba74a"
  },
  {
    "url": "java/base/base4.html",
    "revision": "983806f08962d10296d7244caf2181f8"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "73e62aedc1c0201b1f6d60e671cb70a1"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "680206512b4951e5f58d4e6bd267c661"
  },
  {
    "url": "java/base/operator.html",
    "revision": "9dbb08c79f933c36006e9d6a708c88d3"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "8ef92c9a9ea1e040e74c2a181741731c"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "1d43c58981a3d5f756225c3f8e8afcd8"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "28d481e61d0f9df5e4563a023c8c4820"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "7d79aec23ab3da68b71c14bf03c22522"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "23dc3df70f2566ac316eb80f39d2cdb1"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "1292c3ec12b25156210014e47a504140"
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
    "revision": "de21bf030b3b699a6f7afc737d612781"
  },
  {
    "url": "others/life01.html",
    "revision": "62bf25e5abb5d8afebf1e6eb8be3b721"
  },
  {
    "url": "others/life02.html",
    "revision": "ae4ef1b4ae51558a1d490e077eb1ec24"
  },
  {
    "url": "others/life03.html",
    "revision": "8c681931f293ffd147f163bef154fe3a"
  },
  {
    "url": "study/database/database2.html",
    "revision": "55e09a83292dd6b7a5dd2688667b62a9"
  },
  {
    "url": "study/database/databaseIndex.html",
    "revision": "43be64a8ca97378f084d34f58fab9f3d"
  },
  {
    "url": "study/env/env2.html",
    "revision": "321be4967a1d298860628b78c91ef3d5"
  },
  {
    "url": "study/env/env3.html",
    "revision": "e580d2ccccdf977f23a47d21354855a0"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "9c0ee8af33a88771d2381c1af0eee3b7"
  },
  {
    "url": "study/index.html",
    "revision": "add7f52022d426697825222850a59452"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "04f0d8b129d5cb9ca178d6c5b644d8f7"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "82c71b065e848ac3b3b60745d37d423e"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "fb7562136062b0f74c06493c3792ee5a"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "72a08f8b3468c1373d35ddba40029c6f"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "edeca56dc24cc1743f3fcb9c09f4ca28"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "6cfd7a5abd7499280a9cae9d008765e4"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "1aa1251ab0da91a2f7302a88829bec44"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "25d04b648faa42119c9e6b699912519a"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "e9c286abece9f83e69114a25b39c56f7"
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
