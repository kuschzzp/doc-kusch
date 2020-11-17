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
    "revision": "b5f6883c88d324c52657b2f765fa8d9f"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "0d17a7d8e5d47e55f4a9048a3fc57846"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "952242395720be21aff7a8c55eb08687"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "e04da3dbd88ac7e330415ce902b6415c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3a2447ef5dd226bb8d83b0fb7356a9f7"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "03f6c13f411649ccae8604e2a1fa0329"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "20395f78613f6caf3296573353d00f65"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "67b50f9dae41c550743e95f5476d9fde"
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
    "url": "assets/js/10.9b434f78.js",
    "revision": "d5905373773adc7fcb2a4b987fc38174"
  },
  {
    "url": "assets/js/11.5a23c5ef.js",
    "revision": "5a538f564139ae6b04d1191085fa6b00"
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
    "url": "assets/js/14.3e25f63b.js",
    "revision": "911f5611933ffc7a74c27ff3337625f5"
  },
  {
    "url": "assets/js/15.0f547ad9.js",
    "revision": "a90149d62c6483874c921043a73248b1"
  },
  {
    "url": "assets/js/16.207c30c6.js",
    "revision": "63435e4b675bb5a5d4b4ccd6f4bdbec8"
  },
  {
    "url": "assets/js/17.63821fbb.js",
    "revision": "e0e9d8d6143968b3753b8cae9c41a450"
  },
  {
    "url": "assets/js/18.d3e66195.js",
    "revision": "422ac8e416074ff57a6ae0319dd44571"
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
    "url": "assets/js/20.ebd92b8f.js",
    "revision": "6a4598185c57582718cf7b0b47627ec2"
  },
  {
    "url": "assets/js/21.8096ec58.js",
    "revision": "f2a419827779e65bbd2877f9b97ce5d9"
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
    "url": "assets/js/24.144e33c2.js",
    "revision": "65ec7269e80e54e7da8e0a5ec3d829a8"
  },
  {
    "url": "assets/js/25.af87cdbb.js",
    "revision": "d612b93d13fbb0fdfd5426ce60b7bb75"
  },
  {
    "url": "assets/js/26.e0272a3e.js",
    "revision": "9bf6b4effbed35b2b741f6bd29ddbbf7"
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
    "url": "assets/js/29.46e9b070.js",
    "revision": "08d5e5e8442c7dc4f25520a6e0dad2ad"
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
    "url": "assets/js/31.879d0d21.js",
    "revision": "1ea60c18159f2339bd58b17896961f3e"
  },
  {
    "url": "assets/js/32.061c5bc0.js",
    "revision": "fe9a40edf59b73cff8d3df46421466c8"
  },
  {
    "url": "assets/js/33.ef7ea0bc.js",
    "revision": "926b4f0a9101205afb981e34f20018bf"
  },
  {
    "url": "assets/js/34.d867d67e.js",
    "revision": "8251d0c6d715513ccb0e799824c3e8cc"
  },
  {
    "url": "assets/js/35.fa9a2cab.js",
    "revision": "a7a16380fa69873d4fdbfcb51436497d"
  },
  {
    "url": "assets/js/36.cdfaee3a.js",
    "revision": "377d877bf991b7daf1941aafed7c7eec"
  },
  {
    "url": "assets/js/37.6466ba89.js",
    "revision": "f508ee8445ac20b0e7762a3c375f96a2"
  },
  {
    "url": "assets/js/38.ee750bff.js",
    "revision": "f26751edd58371b165fa4f210e2ece21"
  },
  {
    "url": "assets/js/39.39cc33d7.js",
    "revision": "3670af7e65b9c70a67c2200b6b299aa9"
  },
  {
    "url": "assets/js/4.9811ea41.js",
    "revision": "a0f645c5372e1b95130402215e457adf"
  },
  {
    "url": "assets/js/40.cf1625c1.js",
    "revision": "d87a3d980cc2d6d2f8398ed9624348d0"
  },
  {
    "url": "assets/js/41.d9ea4edf.js",
    "revision": "d3291119118cd435f6bbddd178c6545f"
  },
  {
    "url": "assets/js/42.e9b90182.js",
    "revision": "c43df864926cd598098a40a56963b1a0"
  },
  {
    "url": "assets/js/43.335086b3.js",
    "revision": "00256ed9aa2c95fbe5a9ac23b6d4c8a6"
  },
  {
    "url": "assets/js/44.ac45edab.js",
    "revision": "2b46a2e7127d35cf210ebe8c48b2eca3"
  },
  {
    "url": "assets/js/45.6288b04b.js",
    "revision": "0182b1c264c51dabccc990403fd1e155"
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
    "url": "assets/js/8.ca9c6730.js",
    "revision": "975855d5fe71c7f7e45eaea04dcf1ccc"
  },
  {
    "url": "assets/js/9.714a7d2b.js",
    "revision": "78f7ab2ba4caa1a7cef97d1d76d0ef06"
  },
  {
    "url": "assets/js/app.47a0c446.js",
    "revision": "646991c24abd48a3b2646f353f3941f4"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "3ca7e11e8a20858144bee9b3a7b1ae5e"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "661684e545dbd62a987bc93ccdf14d9e"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "a5ae0505b61a42169a82a8c63198cf5d"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "0f9975278d6ed2ccedfd4f6c7b1b204d"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "18cd0370286b62d3948bc4bf683491d9"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "fa707945a258be2ad22c200b3e1e867f"
  },
  {
    "url": "front/index.html",
    "revision": "88a5ae59c4234554a8b2c063d7b96759"
  },
  {
    "url": "guide.html",
    "revision": "a6b6b73ef2c583c9a5b45f9d68fa7447"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "cb8470f81792f1a931bae6b32c60586c"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "0d995ac41e4e8db68a283cb652ce27fe"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "3427073c471a5575c12f5fdb12d9057d"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "7df779b6cbc7b1630ac8317e18d17d87"
  },
  {
    "url": "java/base/base1.html",
    "revision": "7fd35ac88c49dd17f9df4f155eca4e53"
  },
  {
    "url": "java/base/base2.html",
    "revision": "06df4151e62b944679009cf4f36ffe37"
  },
  {
    "url": "java/base/base3.html",
    "revision": "3e49eabdf225eda70a713c84774da8af"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "47fcc6f4aa1ee05cb6cd4819cc8298d6"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "783af639743f1c1df9c94a8a20d53b3a"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "bcac84db3cbc56745d9e356024c2a101"
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
    "revision": "0ad674474a22e8ac837c4cc53ae9c366"
  },
  {
    "url": "others/life01.html",
    "revision": "e3810bddd7d96107b7af6df99abc8871"
  },
  {
    "url": "others/life02.html",
    "revision": "0382f3a182d845323bbb4e80f3c8e2fe"
  },
  {
    "url": "others/life03.html",
    "revision": "5c5fcc203a6cbf4bb71981376444a1b7"
  },
  {
    "url": "study/env/env1.html",
    "revision": "ccc7c0e2824a8afa91c1d29ce109ff47"
  },
  {
    "url": "study/env/env2.html",
    "revision": "c55bb247393307b799688fa450285b98"
  },
  {
    "url": "study/env/env3.html",
    "revision": "3e903c5b85606d097d5b6e078dcc7758"
  },
  {
    "url": "study/index.html",
    "revision": "ff264ec84a4b8ba986110fc0a1a540a9"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "b8f502a4575f7b57bd94fc69e2367a30"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "1309aaf258f41650b2214a23927a061d"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "9697918476ee7588828a7f8d51d1bb2c"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "f474a92da5194f334a9838222cca4a9d"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "ee1526b5bcdc9aed9a72dd0480999795"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "ccf1cd00b47f1e2eed12708539ff81ab"
  },
  {
    "url": "study/springcloud/springcloud1.html",
    "revision": "63e14802d3a98a7a2b2d9a35701eeed1"
  },
  {
    "url": "study/springcloud/springcloud2.html",
    "revision": "733f968863a9829ccdec6c4dc405c5ec"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "30835a36c24b815e9f36e8226827661f"
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
