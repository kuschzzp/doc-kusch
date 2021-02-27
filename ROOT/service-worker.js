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
    "revision": "0e612f1e5f5eb6d6aedbafd0cd75e996"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "725d005a58c7a1faf8be4e0225b1f8b0"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "82441128a9d2d67332eecc4b695bfa70"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "0363158c5759910d266faf7e62db08e6"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ab085e873ce96054a821b044e3b26029"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "cc9be2ba904b6e5c9ac1902cf4697b58"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "354d65d762a89c07798900769eee4d6d"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "862b2480a5bdf95f15da818f1a78eb6c"
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
    "url": "assets/js/10.4708e488.js",
    "revision": "2c6e820b593588198c1942cc6c7eaaf3"
  },
  {
    "url": "assets/js/11.21ce13e0.js",
    "revision": "2454a6765c91ed47cfd71053fded41ba"
  },
  {
    "url": "assets/js/12.4ef97702.js",
    "revision": "cdba8ffac5f709a6e8af44b43a512315"
  },
  {
    "url": "assets/js/13.a9bb41ed.js",
    "revision": "37db1ec77166896f0939ef7441c23e4c"
  },
  {
    "url": "assets/js/14.107f89ae.js",
    "revision": "33317293e40aea35af1d26882965ceec"
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
    "url": "assets/js/17.19ca1d39.js",
    "revision": "79e48aeed61cb273aca14eedd20343d6"
  },
  {
    "url": "assets/js/18.fbe9ee4a.js",
    "revision": "d1ae117bba26b2c7bf7bb1ce69f4f718"
  },
  {
    "url": "assets/js/19.a8a719e2.js",
    "revision": "67daaf4b769d5ce831f2be5136b83234"
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
    "url": "assets/js/21.ba0922eb.js",
    "revision": "25af6a3e823d93c4d6422a44aa40fe37"
  },
  {
    "url": "assets/js/22.4fd0cbd5.js",
    "revision": "b6764013f60da8c20715e6f885ea668d"
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
    "url": "assets/js/25.66d95df3.js",
    "revision": "62d4f526aa9cc0eca0e5e2d7b1c3159f"
  },
  {
    "url": "assets/js/26.ebf5276b.js",
    "revision": "5b58d52e3167c38d8d4d069496ece514"
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
    "url": "assets/js/29.34d19775.js",
    "revision": "4596957438188c85b21af0f1268cd43d"
  },
  {
    "url": "assets/js/3.0d67d627.js",
    "revision": "08ac41df925fb0adac1f33c56c0e310c"
  },
  {
    "url": "assets/js/30.bdf84f92.js",
    "revision": "c09c16cf0d7f28765a69a5290bb609c3"
  },
  {
    "url": "assets/js/31.405e042f.js",
    "revision": "cc09084a99eb3484816832aa2eda8afc"
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
    "url": "assets/js/34.560dabe0.js",
    "revision": "4b6472a40d3348a83322b24230d78b8e"
  },
  {
    "url": "assets/js/35.772d5058.js",
    "revision": "59ecebcc09acc658915980cbb42891be"
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
    "url": "assets/js/4.6753ee22.js",
    "revision": "fdb256d36d0686814ab7b9f978c25ea3"
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
    "url": "assets/js/48.e4a59a6f.js",
    "revision": "3be04eb4222d0295823023d1d6e596bb"
  },
  {
    "url": "assets/js/49.603127d0.js",
    "revision": "f54650652dd2aaac312cb7d0400fad61"
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
    "url": "assets/js/52.306af62b.js",
    "revision": "2289efe93b68604cc497684dacf6a1aa"
  },
  {
    "url": "assets/js/53.55106621.js",
    "revision": "c35b084af26cb409dceaccb30129f92d"
  },
  {
    "url": "assets/js/54.d265fa6a.js",
    "revision": "7376d5945b468abde070e7c3551b6329"
  },
  {
    "url": "assets/js/55.4089d924.js",
    "revision": "57827b048b4bdde7c89d3b85ab9b8cab"
  },
  {
    "url": "assets/js/56.e06db5b7.js",
    "revision": "8d25a6e9262acf465fd22e2539af0f27"
  },
  {
    "url": "assets/js/57.53f0c277.js",
    "revision": "2a20fb7fc5fd9ff7aaa2790fbe179cfe"
  },
  {
    "url": "assets/js/58.3eaa084c.js",
    "revision": "9fb5054974fd73e7de53f0631fad6a5c"
  },
  {
    "url": "assets/js/59.c31bbabe.js",
    "revision": "11b46834a8edc8de278c22c4d90e1150"
  },
  {
    "url": "assets/js/6.c207ef8c.js",
    "revision": "2109b2c947fbef3cf5aede939930ceef"
  },
  {
    "url": "assets/js/60.d2489499.js",
    "revision": "5e744ed36fe641f41930653c86ec9a62"
  },
  {
    "url": "assets/js/61.a3126042.js",
    "revision": "9627f6dbe137d9ab463ab6443b50dd9d"
  },
  {
    "url": "assets/js/7.595cbe73.js",
    "revision": "afbf8cbc3469e9638491844687309593"
  },
  {
    "url": "assets/js/8.d3fd6c4c.js",
    "revision": "9747c00657786cc767559a6019bf3620"
  },
  {
    "url": "assets/js/9.714a7d2b.js",
    "revision": "78f7ab2ba4caa1a7cef97d1d76d0ef06"
  },
  {
    "url": "assets/js/app.c71ab571.js",
    "revision": "cec2388815b8705f1d8559f63bb9ca05"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "ba06c8e92770ad9d9393cf99ac195ebf"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "9c6e69b4173937a09c57fd3a178f7431"
  },
  {
    "url": "bugs/index.html",
    "revision": "7db2f0e96396405431762503af15ad18"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "82156e960c6b3ca6aabc7c69cb4309c4"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "715e5c87315a953435c39e2e4c6cabba"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "29ab095a4ae62ff5c1b33accfaa319e7"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "11f1f7902eae5a45b6e089aec3c1176c"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "d6198d55bf814ca34de9f8173528229e"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "3e4671d3fff528090a8e694853246d1d"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "37e857db3a73c76ae4276606845f2f07"
  },
  {
    "url": "front/index.html",
    "revision": "45da9e9bd28f320d6d45520b0ced4fc2"
  },
  {
    "url": "guide.html",
    "revision": "5c78a718c7e7dd8c24298eaeba9c3295"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "4261e0852aa7311d17f06c91f659e31f"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "8797a4b28e519b69e4af2eb6f13a13b7"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "c7c6637311b9dd24ec6f32cfbbb05098"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "d9489251c49e983a1dc49724d2b6fbc4"
  },
  {
    "url": "java/base/base4.html",
    "revision": "9c9bf201a2106596b318035630943963"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "f805723f2afa64ad3648e01417c00ea6"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "c457315436ced9ddd32fa819cbcaf520"
  },
  {
    "url": "java/base/operator.html",
    "revision": "d389783c9415b331416076f65ecd08b2"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "a4c7b892ffe019caff4f20690c47ceb7"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "93703595c27ec0a4e0e01d21570586d2"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "503f52955d3fb3a31e1b3d0d0597b9be"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "cc917d60ad38e6217c76e91329d67862"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "e74108ada61c454d659215305451cb2e"
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
    "revision": "dc65c6cb686cc60050b6e86b32dad81a"
  },
  {
    "url": "others/life01.html",
    "revision": "a135e4b96d6849c1bbef1e1d03558502"
  },
  {
    "url": "others/life02.html",
    "revision": "a92dc9cf7bbad071ac44500e1658c203"
  },
  {
    "url": "others/life03.html",
    "revision": "18b9a9465aa0d55026c4f7cace13e937"
  },
  {
    "url": "study/database/database2.html",
    "revision": "267910a43191ae05bb4389141a8dd28d"
  },
  {
    "url": "study/database/databaseIndex.html",
    "revision": "10500ebd0c124806e03c9be876801a04"
  },
  {
    "url": "study/env/env2.html",
    "revision": "bbdebabe659ecd288603ec85320a6bbf"
  },
  {
    "url": "study/env/env3.html",
    "revision": "301b324dc09ff5d8597177fcef7488c9"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "0580ecc8ec99e23e20b6142da2c4b243"
  },
  {
    "url": "study/index.html",
    "revision": "15bcc7b83b95222ada4b1234882da434"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "e49071335d0620bad4bea2b61c0a96b1"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "a4a4371e35304f2f723bce06f99ca4d4"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "c9a3c9ff1f5f040a6179912af981e0b2"
  },
  {
    "url": "study/linux/redisDocker.html",
    "revision": "401b5a52f6d299a5407127d2ea8adc2d"
  },
  {
    "url": "study/linux/xxlJobDocker.html",
    "revision": "42bcf3c4f5feb9c10fecc49c702314aa"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "ed9c96c024aa6778c4c3f978a0c23568"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "3435ac42f01fdbdaec51dc260eac7573"
  },
  {
    "url": "study/springboot/springsecurity1.html",
    "revision": "5b49849876b3f622e7fb0fceb9d5e1fe"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "53d9ad04051a29d08d16d941aff83521"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "bc52bee480cb9055573b603775ff87d0"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "da3b316c748fd3a63b11f5d5e074671e"
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
