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
    "revision": "50f69081852e8e80a48189335dc9faac"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "573ffc9443522194af9c9e71381137d0"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "da86b887de838b6cc9a7e95417c8d60e"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "015b3c3645499c0afb2afc7568f96530"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a923f2f2fc5336f8f4af9fc3d7e2142e"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "abd71b66c15cc44bc25a710e36d10c37"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "7bfff16466485f09b02b8fa17948feaa"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "574d5f4452f19d4d6c08facbab0cca19"
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
    "url": "assets/js/10.d48e180e.js",
    "revision": "97276acaa49729a75b3c4d04cbb652f1"
  },
  {
    "url": "assets/js/11.a0a7e9a8.js",
    "revision": "c173c572d8f11e6afca5f3f08993f92d"
  },
  {
    "url": "assets/js/12.cff595d9.js",
    "revision": "b257e91f4cdaf3e483057ac8052457a9"
  },
  {
    "url": "assets/js/13.4b9d69e7.js",
    "revision": "c8f426efc15e03ce9c56ad8fb8bb6072"
  },
  {
    "url": "assets/js/14.a12613d9.js",
    "revision": "f48fcf85e975aef070de74538f593ca5"
  },
  {
    "url": "assets/js/15.d0ba0c06.js",
    "revision": "8e52ff5637a8784aaf16640e83623109"
  },
  {
    "url": "assets/js/16.4ae86331.js",
    "revision": "a26f6ce939c28117566ebe21b55df07f"
  },
  {
    "url": "assets/js/17.9f56b122.js",
    "revision": "60be6049bf4f6e1bc68bb7e60ea96fed"
  },
  {
    "url": "assets/js/18.d3e66195.js",
    "revision": "422ac8e416074ff57a6ae0319dd44571"
  },
  {
    "url": "assets/js/19.63fc7215.js",
    "revision": "76cf04aed8d967429099cd6ff3f585f6"
  },
  {
    "url": "assets/js/2.6e8d2093.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.ebd92b8f.js",
    "revision": "6a4598185c57582718cf7b0b47627ec2"
  },
  {
    "url": "assets/js/21.fc4f521a.js",
    "revision": "d124da8a74413678d7f9b8c9210e03a9"
  },
  {
    "url": "assets/js/22.b27a8810.js",
    "revision": "0e05d64126662568e9f85b9d9ee3c14a"
  },
  {
    "url": "assets/js/23.42bf64ad.js",
    "revision": "f46a9395251ef6ce042fd305ba3c63e5"
  },
  {
    "url": "assets/js/24.144e33c2.js",
    "revision": "65ec7269e80e54e7da8e0a5ec3d829a8"
  },
  {
    "url": "assets/js/25.af87cdbb.js",
    "revision": "d612b93d13fbb0fdfd5426ce60b7bb75"
  },
  {
    "url": "assets/js/26.23e4df5e.js",
    "revision": "7e7c4b84eb526fb43c2dd1c0d8f926b2"
  },
  {
    "url": "assets/js/27.39b734b7.js",
    "revision": "df3372c533c14f8778a49a8b69341727"
  },
  {
    "url": "assets/js/28.d46df655.js",
    "revision": "c2bfe4976d4229187e9b31da19559275"
  },
  {
    "url": "assets/js/29.cf74752c.js",
    "revision": "e013345434bef158ff365916f45c829e"
  },
  {
    "url": "assets/js/3.0d67d627.js",
    "revision": "08ac41df925fb0adac1f33c56c0e310c"
  },
  {
    "url": "assets/js/30.7cc4fd96.js",
    "revision": "284b888173c2d7a97b6f215b4e42b65b"
  },
  {
    "url": "assets/js/31.9ef5e9f7.js",
    "revision": "6c9f36c27fcfa553e0a4ca2c6b0d245b"
  },
  {
    "url": "assets/js/32.061c5bc0.js",
    "revision": "fe9a40edf59b73cff8d3df46421466c8"
  },
  {
    "url": "assets/js/33.4c34a32e.js",
    "revision": "cc1fbb4d71389914acddeb7a60213215"
  },
  {
    "url": "assets/js/34.b62b4fda.js",
    "revision": "9e99b5f76b07bb033332f5dc2578f03e"
  },
  {
    "url": "assets/js/35.fa9a2cab.js",
    "revision": "a7a16380fa69873d4fdbfcb51436497d"
  },
  {
    "url": "assets/js/36.a6e0a906.js",
    "revision": "fed71d8d9f4f8b02862ba8ea55bc7673"
  },
  {
    "url": "assets/js/37.c3e3f64b.js",
    "revision": "8568fe1dd609dc5268dd0e1282a56b27"
  },
  {
    "url": "assets/js/38.9497064f.js",
    "revision": "4133af5f6ba0641f5ade19aeb4f7911e"
  },
  {
    "url": "assets/js/39.5543329a.js",
    "revision": "ff69f98727cb07f99b66d58cf66fa487"
  },
  {
    "url": "assets/js/4.9811ea41.js",
    "revision": "a0f645c5372e1b95130402215e457adf"
  },
  {
    "url": "assets/js/40.cf32dbcc.js",
    "revision": "43deb1449dc891a3c699c5b1b97fd039"
  },
  {
    "url": "assets/js/41.afa18195.js",
    "revision": "a0c930a389309d498c4650b156d22eb8"
  },
  {
    "url": "assets/js/42.1639e887.js",
    "revision": "bcb11f511583bf2513dcc2fa7dbb75e3"
  },
  {
    "url": "assets/js/43.b957bea2.js",
    "revision": "875dd4421c67f19e1560d9780fc51cd1"
  },
  {
    "url": "assets/js/44.ac45edab.js",
    "revision": "2b46a2e7127d35cf210ebe8c48b2eca3"
  },
  {
    "url": "assets/js/45.6daa747b.js",
    "revision": "b3476f3b40ae0f722df0a5f10fda4b92"
  },
  {
    "url": "assets/js/46.6c41f295.js",
    "revision": "28197d937202fa73d96ee66b3bfb55ff"
  },
  {
    "url": "assets/js/47.9f56cea2.js",
    "revision": "1291187d2cd298ec92cff957991d0d86"
  },
  {
    "url": "assets/js/48.b0d2e0de.js",
    "revision": "9eed334b350e63c2cf13d199fa0efed0"
  },
  {
    "url": "assets/js/49.8e73a579.js",
    "revision": "98bb0ce55c010225a9c5de687756ce4e"
  },
  {
    "url": "assets/js/5.8293bd5e.js",
    "revision": "77908de72fdbc8425c75506f1eb259bd"
  },
  {
    "url": "assets/js/50.19108a6f.js",
    "revision": "9f9e1b7d3d4a4786e937a2dded595507"
  },
  {
    "url": "assets/js/6.d730d013.js",
    "revision": "7356a8b184ae0ee632c50b23383296fc"
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
    "url": "assets/js/app.09ed7f61.js",
    "revision": "604bef73ba551fcc6ce6a0ac6ebf3542"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "ba7a65f9b5a31cb475923210f562063f"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "6f8ceff9a761d570a58c326bb2d8e70f"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "edf04afcd81a8b666ce93facb25e6211"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "884c4c9bf008c075ad5d19d99ed0cc87"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "f88f55bd9d785229f749099c5c265572"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "94659879a1ff5d1ea3f63d57b74adb81"
  },
  {
    "url": "front/index.html",
    "revision": "3e9761fee1a8ef95afbee257915d8a5e"
  },
  {
    "url": "guide.html",
    "revision": "4a2ae4bbb0fb241aff8cd19842af30a5"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "17914022a4027323e1c3a5d324b772c9"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "95196b0f0be5a5501e02a99f031fa914"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "5443e0b3db83d20e7cdd9c86c4f99ca8"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "1513b23213f992cc5cf9f9aa6a3d2e75"
  },
  {
    "url": "java/base/base1.html",
    "revision": "df79214daf4220a66c2cb091167274f3"
  },
  {
    "url": "java/base/base2.html",
    "revision": "9127226049e2f0c42505c8b7534ae4c3"
  },
  {
    "url": "java/base/base3.html",
    "revision": "7c5de7b46d2c8a8a180d168ec21f05bb"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "dc1e350b7f6a4707f09a327b9746c540"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "ff500e6a4064edcb4ee56daeb6cda347"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "aefe236c40fa5204d9db1159021af6fd"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "45000dbf83d9ff2a0eb627d3d5953c7c"
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
    "revision": "535720e3dce30b18e583facfa5a1191e"
  },
  {
    "url": "others/life01.html",
    "revision": "e06ec6f1b110fc6204524599de0cfb43"
  },
  {
    "url": "others/life02.html",
    "revision": "42287ccf3a1e20c2790b8d61cf5d25dc"
  },
  {
    "url": "others/life03.html",
    "revision": "56646e0c65d0481ef32d01906096cebd"
  },
  {
    "url": "study/env/env1.html",
    "revision": "9c525deb71093061d9ea7211312aca31"
  },
  {
    "url": "study/env/env2.html",
    "revision": "44c3ef1acf8f49bb23704c52a8fdee9c"
  },
  {
    "url": "study/env/env3.html",
    "revision": "dea3895d11ccb8006f5689439c9c308c"
  },
  {
    "url": "study/index.html",
    "revision": "6accb6cc77adbfd2b397e525902011ed"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "4763305630a202e0fedb14b46cde7493"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "b37912707c056a96ac8072274f8567d0"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "729b474dc3108a1a03e5fd9d26f69420"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "2e34a0c0192b1943a8d6690c00a666ce"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "b3452ca46364cf8bf07e6988df803214"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "039a8cdef2af4dd5fa13129db4e714c8"
  },
  {
    "url": "study/springcloud/springcloud1.html",
    "revision": "b2b726df68f7aaca9de331e923c0236e"
  },
  {
    "url": "study/springcloud/springcloud2.html",
    "revision": "bfb88a787e0d444d88e73e06f005be03"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "3746bd84d23a818b8414b836f2114518"
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
