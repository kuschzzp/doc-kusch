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
    "revision": "ec205bbd69c23b798f7120312c363c74"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "8bdf0a4c7bca8f7dbd18e8f922fa16e1"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "1012df1e7df2e0815821713e6d4d20b1"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "336e96f2e3f1b5eb07240a8b6337af9b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1ed95386b241877c0696d730ca132115"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "55b71204de1d4fcce8b2c99f7725c6d5"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "c2b2fbf4490599727bf0de1587b70ab3"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "8b8e4f633fc77dd2bb0b66f77f9a561f"
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
    "url": "assets/js/10.6c82e97a.js",
    "revision": "616ed5fe134af7ad8ff3ebef55408a2e"
  },
  {
    "url": "assets/js/11.cacfbf4c.js",
    "revision": "583c9b01a271b2362ccbf590c4ad69be"
  },
  {
    "url": "assets/js/12.d54ba6ad.js",
    "revision": "a88f70ef0e2db2a38b021a3216ab7e7b"
  },
  {
    "url": "assets/js/13.7f4227e3.js",
    "revision": "14e1bd9b411547e334377dc897faa8a6"
  },
  {
    "url": "assets/js/14.806ad30b.js",
    "revision": "6871977ed4b1fc7e61cf4b01e3970657"
  },
  {
    "url": "assets/js/15.d0ba0c06.js",
    "revision": "8e52ff5637a8784aaf16640e83623109"
  },
  {
    "url": "assets/js/16.5b032b2f.js",
    "revision": "1a61b20bbda5c8b35e7f3b3545d622ff"
  },
  {
    "url": "assets/js/17.63821fbb.js",
    "revision": "e0e9d8d6143968b3753b8cae9c41a450"
  },
  {
    "url": "assets/js/18.72863eb4.js",
    "revision": "67a54552c7bac879947dd624e8e12bd1"
  },
  {
    "url": "assets/js/19.5484bc5a.js",
    "revision": "13441959335b1c6011606f568197f001"
  },
  {
    "url": "assets/js/2.6e8d2093.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.91d76f65.js",
    "revision": "44052f51c289279d211e591c8c55e22a"
  },
  {
    "url": "assets/js/21.bb01b2b3.js",
    "revision": "ec071a090713ca13552356ea354347c1"
  },
  {
    "url": "assets/js/22.b27a8810.js",
    "revision": "0e05d64126662568e9f85b9d9ee3c14a"
  },
  {
    "url": "assets/js/23.6f9e7774.js",
    "revision": "28d9fe8b139b607a67ec9f3b865bdcff"
  },
  {
    "url": "assets/js/24.2492260e.js",
    "revision": "a5767ff397897cac2630365014601c1e"
  },
  {
    "url": "assets/js/25.d61b86a9.js",
    "revision": "847521100c04a0f7d590bcdd60d81fc4"
  },
  {
    "url": "assets/js/26.34ce8144.js",
    "revision": "503f3b8d2bb2bf089f43f73636c785ab"
  },
  {
    "url": "assets/js/27.602eae92.js",
    "revision": "7e9dd5322115c8680790a09d60c75437"
  },
  {
    "url": "assets/js/28.d46df655.js",
    "revision": "c2bfe4976d4229187e9b31da19559275"
  },
  {
    "url": "assets/js/29.8857dcdb.js",
    "revision": "ae0969d80ef4dd67bf4625c2f5b7d0d0"
  },
  {
    "url": "assets/js/3.0d67d627.js",
    "revision": "08ac41df925fb0adac1f33c56c0e310c"
  },
  {
    "url": "assets/js/30.487bb793.js",
    "revision": "166be2a703f8611852b8fca77653a600"
  },
  {
    "url": "assets/js/31.5192535d.js",
    "revision": "e149105d7aaf5d1b847f00eb12c89771"
  },
  {
    "url": "assets/js/32.d025e200.js",
    "revision": "bbeb95f821b537032e434f1ebe734f1d"
  },
  {
    "url": "assets/js/33.4c34a32e.js",
    "revision": "cc1fbb4d71389914acddeb7a60213215"
  },
  {
    "url": "assets/js/34.094c8444.js",
    "revision": "045b9b5ee616ae25516f70d6c6d6a39a"
  },
  {
    "url": "assets/js/35.b4484b2e.js",
    "revision": "e8dc1af41b0174b1c78c39e8bb9a1426"
  },
  {
    "url": "assets/js/36.5bf6becd.js",
    "revision": "9de9c2694d562b6e55f25143520231c4"
  },
  {
    "url": "assets/js/37.292d5a20.js",
    "revision": "1968c72ae8023628ab6d691c252128a7"
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
    "url": "assets/js/42.e9b90182.js",
    "revision": "c43df864926cd598098a40a56963b1a0"
  },
  {
    "url": "assets/js/43.de0a935a.js",
    "revision": "ca49623c9be67cf33ec96f6b26b19b8f"
  },
  {
    "url": "assets/js/44.5a58f868.js",
    "revision": "6a9aee8c0bfe0c938ae03ec8494f3f06"
  },
  {
    "url": "assets/js/45.6288b04b.js",
    "revision": "0182b1c264c51dabccc990403fd1e155"
  },
  {
    "url": "assets/js/46.4bdb347a.js",
    "revision": "5630700a1da07cda502bf15b9d938435"
  },
  {
    "url": "assets/js/47.c7f74310.js",
    "revision": "701255433eecb9d2a997b96697c87e25"
  },
  {
    "url": "assets/js/48.9b3d1233.js",
    "revision": "cc707ee87d7ffff7efb56129cc1fa469"
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
    "url": "assets/js/8.d3fd6c4c.js",
    "revision": "9747c00657786cc767559a6019bf3620"
  },
  {
    "url": "assets/js/9.714a7d2b.js",
    "revision": "78f7ab2ba4caa1a7cef97d1d76d0ef06"
  },
  {
    "url": "assets/js/app.bc4c34f7.js",
    "revision": "6467a49fc9b17a0bf30b4d8406ed10c3"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "70a94fdc4bbae81d614dc4631f9582a1"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "89f5fac960a44fad71c1ea0969c5c720"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "0b3cfcf000304eeae801144d86a94a39"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "12a67d206f54d65f2457c161e3eced11"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "5bf3b1bf5c1a2396e507a7147d138068"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "09491f40c7b4031ff24233cd24963fde"
  },
  {
    "url": "front/index.html",
    "revision": "ce207a1fc4d8c991434f7be10ea5e7f3"
  },
  {
    "url": "guide.html",
    "revision": "5f3c294f867b68a85ff79f4f7bcbe889"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "3796035acaf61583d1c4eaab8eb17935"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "3582ae75a0a521e85f448456f6fa5206"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "0673702780dca767a132b8e8a42ee895"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "1757f008d045b17531a25152e991572f"
  },
  {
    "url": "java/base/base1.html",
    "revision": "a1b53ee2ed39b07f1aa2f389b3ab5d63"
  },
  {
    "url": "java/base/base2.html",
    "revision": "2302abc7f92d61d7917feb2078817cbd"
  },
  {
    "url": "java/base/base3.html",
    "revision": "735a9a816ecea039497dce50cefb31c7"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "376245981480cb9170b66b72122aa95f"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "5ebddf53795b7b8a772ad7a900a7d315"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "035ec2e772b037445e35a3040db715d8"
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
    "revision": "68fff275a7b52f095c827c6ddcc92590"
  },
  {
    "url": "others/life01.html",
    "revision": "3d612c20297afc3b31de3b9d2b300b5c"
  },
  {
    "url": "others/life02.html",
    "revision": "d9b7ea33a13b13e7bec6951a820378c6"
  },
  {
    "url": "others/life03.html",
    "revision": "f22fce0913188740528fa15154d7c87c"
  },
  {
    "url": "study/env/env1.html",
    "revision": "ed4ca600af5cac469af75c2ecb75a000"
  },
  {
    "url": "study/env/env2.html",
    "revision": "beeb59d4934a46b7c1e450e3d2f81ee8"
  },
  {
    "url": "study/env/env3.html",
    "revision": "29f534b82c299f307337c4c933e99502"
  },
  {
    "url": "study/index.html",
    "revision": "c693a5e9e869154430a01b7fc75e2ea6"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "9dfa63b7fc998403968e6a79adcadf1d"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "1f5ee291ff285d4963ca14bb96cf0622"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "e19a1a28850321b852468f9545a315fa"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "edc8213d93a91a88abcf3ca6e2f1a481"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "43edd4896a2e424fb5bbbc460381d8a8"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "89657ed00c0d2f86b66094658b336135"
  },
  {
    "url": "study/springcloud/springcloud1.html",
    "revision": "415ae8db5aa7f492231265285e38d9b4"
  },
  {
    "url": "study/springcloud/springcloud2.html",
    "revision": "edcbfd3dfd6f8531273b610a8c855108"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "3dfe2a51c5b331c3d6d2290ce14588c7"
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
