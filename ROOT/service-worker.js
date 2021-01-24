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
    "revision": "4462b6a3cfda36778e7727535d24f090"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "7928b1705514871dfe1a27bf329a49a7"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "c59d1483b4d16d5410de841aa841f55d"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "7258e28aede5b639095d99716bca44cd"
  },
  {
    "url": "algorithm/index.html",
    "revision": "578b9c525cdefab9cf5249f676431054"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "f218aec08ee82a861d811b96c7ec80cf"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "65dcfee5185b410b0e3e452fb7834019"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "80a49c66e1d431acc784a08c5ef47f4b"
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
    "url": "assets/js/10.24bcc6fa.js",
    "revision": "c855008951f6dfd679962b8d0621b753"
  },
  {
    "url": "assets/js/11.f3482d87.js",
    "revision": "ce68e929a89a841e9e53cdb698241302"
  },
  {
    "url": "assets/js/12.768021b9.js",
    "revision": "84a92726fff22353caffad67d1592a5e"
  },
  {
    "url": "assets/js/13.f59b5474.js",
    "revision": "f93df11dce54e238f7fc1aa59d6fce3b"
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
    "url": "assets/js/18.6df44798.js",
    "revision": "615ecc9d707cb98e93881c46947f9bcb"
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
    "url": "assets/js/30.0096e23d.js",
    "revision": "d75129c803717d0bb65fc44d9df1693b"
  },
  {
    "url": "assets/js/31.405e042f.js",
    "revision": "cc09084a99eb3484816832aa2eda8afc"
  },
  {
    "url": "assets/js/32.cab9befc.js",
    "revision": "6b3b9197a034096b6e38d79b5c6a24c8"
  },
  {
    "url": "assets/js/33.0d42412a.js",
    "revision": "39076609dbe93e9df4c9a098567a2397"
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
    "url": "assets/js/40.89d58250.js",
    "revision": "659971743ffc711adb12ce33fb3a959d"
  },
  {
    "url": "assets/js/41.6c785346.js",
    "revision": "473e47c323ba236cf30a27dbcb57f68a"
  },
  {
    "url": "assets/js/42.e7b62509.js",
    "revision": "eb44bc804d8f044a22b2492128589eca"
  },
  {
    "url": "assets/js/43.ae036583.js",
    "revision": "dc7089d8e7f77cf6f759a2d3e688e59b"
  },
  {
    "url": "assets/js/44.c8c45c96.js",
    "revision": "a0966a230ab63e2a0d8077a20f499e35"
  },
  {
    "url": "assets/js/45.33df9c4f.js",
    "revision": "81dd741ce05afe113387bee2b4d5e98a"
  },
  {
    "url": "assets/js/46.7efb8c69.js",
    "revision": "27b1f32c151da0afaf98b5cce82c3b53"
  },
  {
    "url": "assets/js/47.0727ef07.js",
    "revision": "e243c6b90f580bc83b375cbd81fb59be"
  },
  {
    "url": "assets/js/48.e4a59a6f.js",
    "revision": "3be04eb4222d0295823023d1d6e596bb"
  },
  {
    "url": "assets/js/49.f022d5dc.js",
    "revision": "6dac48fd6503523bad51350ce11ab8ed"
  },
  {
    "url": "assets/js/5.7c55ad33.js",
    "revision": "a17864284458554e01d1b8465c8d71fd"
  },
  {
    "url": "assets/js/50.ea73beb1.js",
    "revision": "85a3ea85d159561e5bac23274c055fab"
  },
  {
    "url": "assets/js/51.211eb9bc.js",
    "revision": "edc4cb97c7c019521bca165afe3b6ac4"
  },
  {
    "url": "assets/js/52.e327811b.js",
    "revision": "cc24a60094d64fefb567bde221a4253c"
  },
  {
    "url": "assets/js/53.8629ea59.js",
    "revision": "d6bc2fe5d5ac7660998461d9d1bcd5c0"
  },
  {
    "url": "assets/js/54.8a9077f6.js",
    "revision": "64c4dd93fa09a4f789f3ca2b570ecaa7"
  },
  {
    "url": "assets/js/55.a09e18f3.js",
    "revision": "a89d120ddfc96239ddc47bd4b4b53a15"
  },
  {
    "url": "assets/js/56.4eedd670.js",
    "revision": "85b4fb09f42ce16c93930b6a479b5ef0"
  },
  {
    "url": "assets/js/57.7a0cbb62.js",
    "revision": "ff7350beb747e45e527b85e2bd41b3ed"
  },
  {
    "url": "assets/js/58.3eaa084c.js",
    "revision": "9fb5054974fd73e7de53f0631fad6a5c"
  },
  {
    "url": "assets/js/59.e501aaa7.js",
    "revision": "27ceefe90fbcdc9b16ed781cfa7eb327"
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
    "url": "assets/js/8.edad6162.js",
    "revision": "249d08d902af3fb78c6c57acd323dac1"
  },
  {
    "url": "assets/js/9.b09edbba.js",
    "revision": "84fe64d6da067a09196efc9d43d67b24"
  },
  {
    "url": "assets/js/app.bd7df00f.js",
    "revision": "0f37488e82fa7c59e03411e3af8bdf26"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "7d304f3177d92fc306495ea6a1ea5dc0"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "0b70a0a0fb211158fb958b966b7f505b"
  },
  {
    "url": "bugs/index.html",
    "revision": "737ff409af18ac70ef779bcdedbc8a24"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "35ec43ba3a10ef481e467376e83177e9"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "d17ae3edb0c53171f17f8e890b840bdf"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "e03fba362fc767effef0b551940fb4a0"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "03dda933278fa819d3f562bd864c8d90"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "487b6dfff16d3d5cc3b56657b52e1de6"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "1b8d39bd1aa509f2e88d19f53094d995"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "03a12d154c3ccf65dcaa360e2f939c17"
  },
  {
    "url": "front/index.html",
    "revision": "3fc05a1636efd49be8b658866f7f79e8"
  },
  {
    "url": "guide.html",
    "revision": "a2edc842d83451383247c2b3666a4aa0"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "b3d7e756bd0d562ad4ae74bc63d4817c"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "bcc2a23eb486616c079faf9bcfa4b192"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "07d5b319424be2ce5eff7f61dde6063a"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "e836b3e258196f6fa37d8cc9f11096cc"
  },
  {
    "url": "java/base/base4.html",
    "revision": "b14f8a537cd28314b9e7d41708eca0c0"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "89135c80868e77679223aa1b5c086a39"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "1a0d79da3f4474952fc21ca206bea97f"
  },
  {
    "url": "java/base/operator.html",
    "revision": "b0d71e8fc806bc5ae471dc1adfd7e2ea"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "bad29e97f607fec4bc582c9a3de4df90"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "68512678e4037159c6b7779a00182df7"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "ab056d0cc7ab66227d6e730930b04f92"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "b41e26af830d360582f05a694ee48134"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "511f38d830deddf9388903439a016b8d"
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
    "revision": "fc7c3b5e435a5e90f82b83050cfc4c7f"
  },
  {
    "url": "others/life01.html",
    "revision": "67ef89a66f3ed69e7d25eabb95dbf5e2"
  },
  {
    "url": "others/life02.html",
    "revision": "d5add8ccf76bbbede75bf23514680cbe"
  },
  {
    "url": "others/life03.html",
    "revision": "878623c2107cb7414bd1c53392cc312d"
  },
  {
    "url": "study/database/database2.html",
    "revision": "829c912b7625930beb299b596490ea84"
  },
  {
    "url": "study/database/databaseIndex.html",
    "revision": "765a7e631878057e1aba817014bc4763"
  },
  {
    "url": "study/env/env2.html",
    "revision": "f01a1a856378ddd381c1878c0b94d5e3"
  },
  {
    "url": "study/env/env3.html",
    "revision": "4e59bccb658dde3c4cb98ba2e9dc0299"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "329131980a001fcff038a8e5f1681b83"
  },
  {
    "url": "study/index.html",
    "revision": "b68c64cfec7fb35d270de6d9f586f0f5"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "246f70649e75ae122124541c3c65931b"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "0401330411ec3a1edd086c1377c538a9"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "19edf53cecb5f2cbe302073412508b7a"
  },
  {
    "url": "study/linux/redisDocker.html",
    "revision": "a53c856b58313c99c0f5e289668eae8c"
  },
  {
    "url": "study/linux/xxlJobDocker.html",
    "revision": "5abb82ab3e414c872039ed68776203fa"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "8ce69f12ab145ba011c23f4c199d1313"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "36555a317a5e5c8b218a422550421ad9"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "c93964bd806be7d02ab5549ffc599182"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "77aa2e49f410d4e81d34d8ce8f7d5c02"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "760b1ab7ea803496bd7d19c82f7e96f4"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "21efa9808a6b279e86f8b9ec3afdaf63"
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
