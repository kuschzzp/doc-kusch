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
    "revision": "25a070d4c8996aa3af983a6409699011"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "8f646c22a9c28334dd605ce6ceb610f6"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "8126d522c52b6c996d9d191a89347ced"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "83354c55f51a89765b27dc5326d1ba61"
  },
  {
    "url": "algorithm/index.html",
    "revision": "370d161acb9d624964d4e35459d5d588"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "add797ce4d12ae0f6820f3369d3d4ebd"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "9d60fa7f65900f649c64f1a30e85fc5f"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "4b1f3eba724c98d251ded9973b45ac88"
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
    "url": "assets/js/10.3c0fda19.js",
    "revision": "101a7783c2bdee093c8e15e05a882146"
  },
  {
    "url": "assets/js/11.958dc74f.js",
    "revision": "f5dbeedcedb0a88c2535fa3759a839e2"
  },
  {
    "url": "assets/js/12.cff595d9.js",
    "revision": "b257e91f4cdaf3e483057ac8052457a9"
  },
  {
    "url": "assets/js/13.7f4227e3.js",
    "revision": "14e1bd9b411547e334377dc897faa8a6"
  },
  {
    "url": "assets/js/14.67be832d.js",
    "revision": "dd338a4ffafd054f4be4ff6aa1f07572"
  },
  {
    "url": "assets/js/15.bde76938.js",
    "revision": "7898be7b500a62935701e6c1d6a0105c"
  },
  {
    "url": "assets/js/16.5b032b2f.js",
    "revision": "1a61b20bbda5c8b35e7f3b3545d622ff"
  },
  {
    "url": "assets/js/17.9f56b122.js",
    "revision": "60be6049bf4f6e1bc68bb7e60ea96fed"
  },
  {
    "url": "assets/js/18.b0424534.js",
    "revision": "4090ac2e4364212e15cc401203f6c925"
  },
  {
    "url": "assets/js/19.a11872b5.js",
    "revision": "529c6553af5e78767999454c3509877d"
  },
  {
    "url": "assets/js/2.6e8d2093.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.7d4b4967.js",
    "revision": "dd070e61d0db5b8b08cd4ace43d769a7"
  },
  {
    "url": "assets/js/21.a9bd409c.js",
    "revision": "460de54cbfc4e027e227b898b06dd9af"
  },
  {
    "url": "assets/js/22.08bc4f04.js",
    "revision": "9202e905035cd00167929a881fed4d5a"
  },
  {
    "url": "assets/js/23.e8571211.js",
    "revision": "7c66d0fb2f4a6594010f0f9035f73872"
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
    "url": "assets/js/26.34ce8144.js",
    "revision": "503f3b8d2bb2bf089f43f73636c785ab"
  },
  {
    "url": "assets/js/27.da401dee.js",
    "revision": "7e9dd5322115c8680790a09d60c75437"
  },
  {
    "url": "assets/js/28.7ee374d2.js",
    "revision": "c2bfe4976d4229187e9b31da19559275"
  },
  {
    "url": "assets/js/29.2cb13ab5.js",
    "revision": "04677f42c775f90c177e7ee3e53338d8"
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
    "url": "assets/js/34.b62b4fda.js",
    "revision": "9e99b5f76b07bb033332f5dc2578f03e"
  },
  {
    "url": "assets/js/35.a289dbde.js",
    "revision": "6d6420b6b8047daf290efbcd53ac072c"
  },
  {
    "url": "assets/js/36.46b92cf6.js",
    "revision": "41b5c877ad237e3aad4d9d05ee093478"
  },
  {
    "url": "assets/js/37.616fc911.js",
    "revision": "ab565e2ac49060955ae8497c6f75bcd8"
  },
  {
    "url": "assets/js/38.fc12e5c7.js",
    "revision": "adcc0da0394535c5c261c2543fde1d67"
  },
  {
    "url": "assets/js/39.d5c66216.js",
    "revision": "715d5c7eb2692e7707b5724082fb2d97"
  },
  {
    "url": "assets/js/4.9811ea41.js",
    "revision": "a0f645c5372e1b95130402215e457adf"
  },
  {
    "url": "assets/js/40.fd111197.js",
    "revision": "0335d526a98491c5b567eb7d93ca4ab6"
  },
  {
    "url": "assets/js/41.3bc4d93a.js",
    "revision": "03d28abdd5f76c73c5170bfd8fbb10f7"
  },
  {
    "url": "assets/js/42.1639e887.js",
    "revision": "bcb11f511583bf2513dcc2fa7dbb75e3"
  },
  {
    "url": "assets/js/43.a09d94ea.js",
    "revision": "bfde0ea40eb65ca4dabe16cebb699917"
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
    "url": "assets/js/46.4bdb347a.js",
    "revision": "5630700a1da07cda502bf15b9d938435"
  },
  {
    "url": "assets/js/47.7f3b2add.js",
    "revision": "5c6915369332a0e2effc692625d10bc2"
  },
  {
    "url": "assets/js/48.463dd12f.js",
    "revision": "5248cbff6bca5478c32f3867270b3f13"
  },
  {
    "url": "assets/js/49.43df8012.js",
    "revision": "2608306c4a094fcfa071c0da0427abd3"
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
    "url": "assets/js/9.1677dedb.js",
    "revision": "ccc608f0d727c9cba821564ac0327ebb"
  },
  {
    "url": "assets/js/app.65c52788.js",
    "revision": "9791f06fabb8a572bde9614f6ff11944"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "1243b0bfdccff4119f5d21139469f033"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "49adaec93ae4de176deb0ce63c7f6a7f"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "f511b6fcde74525e7b38b6d752b73907"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "0fc9d90012063590ad979cf99139adf8"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "2012d4387c1dd36be3669ace356d4990"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "e980765adc5de8c2da1ccecb53754361"
  },
  {
    "url": "front/index.html",
    "revision": "d915fafdf4cf164e45bd921c75f76b9d"
  },
  {
    "url": "guide.html",
    "revision": "a3872a2bb18064b0146968a1db0944cc"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "417fe109df075095220cc16abd751fd7"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "038415b67b637e2637af754f842d72e6"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "03e1ca0d7ef2226ac4edf7d83fe6b683"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "338251a3e1c2e2abd7493ec34ec48920"
  },
  {
    "url": "java/base/base2.html",
    "revision": "f50fc6031042e1f7ff9133c007a706fd"
  },
  {
    "url": "java/base/base3.html",
    "revision": "7fb41f4e3d21ed0917401043bdbbcb15"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "3dfd9ac7dafa88fbf32ed470a30353cc"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "e5530334343e377a4d31d4a96441ba42"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "e98da3504d6841db19121e6a7471f812"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "ddb00f4217f0a2712c7e5fa83eb1c118"
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
    "revision": "e6a4e828638f6cbc03f59b346bac6c3d"
  },
  {
    "url": "others/life01.html",
    "revision": "500fd3cc3c2db3433e0fe5b0bf305022"
  },
  {
    "url": "others/life02.html",
    "revision": "71d4eee4b89c6904fb0e36419900a3a3"
  },
  {
    "url": "others/life03.html",
    "revision": "946f641e06fd618b43a77cdfd71b7f89"
  },
  {
    "url": "study/env/env1.html",
    "revision": "5d38a8ca23c25b4d18c6a06f8155a2e0"
  },
  {
    "url": "study/env/env2.html",
    "revision": "562417438fa20d9b0bb747485337e77e"
  },
  {
    "url": "study/env/env3.html",
    "revision": "c0dc83a7b0eec692085cac62281c8a49"
  },
  {
    "url": "study/index.html",
    "revision": "e990d140df312b1aa5be7da429aea0f7"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "75043912f0f73ebb55a3a979e6886dad"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "d09051b6d2cedd2e9c58c2011b81deae"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "2ce21bbfe740f6274348f040a55944d8"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "eec88ee95e60da5e8bc4cc3871e1289d"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "6027c752a9a24f087b5b21bd66719c31"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "ca8b60525e470e5b84c438da564622db"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "e696f7ef52f56efb3db7f40af96717f8"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "8c5f6734755a84924744198f0c3af332"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "801bd389b0cc9305cb10701b503628d5"
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
