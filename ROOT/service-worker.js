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
    "revision": "282b378f5a9649bfa035e5bd31a386ed"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "4bc0dc4d54b55a9460ce737a50fa2ede"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "25f8250b394656a5799d30b48c3075d9"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "7d62a23621c9f97a47d23d5f40cdc0f5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7e47576b43a51f190093649979afe82c"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "5103ae342361e0210f45318686a6eb66"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "abfffa28c5ebbfd9ee837df3c91179aa"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "f0ff1231b6b7c6f0bc8218e7646bedb2"
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
    "url": "assets/js/11.3d124efa.js",
    "revision": "52e33725a4084639d3cedf489b369742"
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
    "url": "assets/js/14.67be832d.js",
    "revision": "dd338a4ffafd054f4be4ff6aa1f07572"
  },
  {
    "url": "assets/js/15.197ed649.js",
    "revision": "5484c7c20648228872c16a43eec909a3"
  },
  {
    "url": "assets/js/16.4ae86331.js",
    "revision": "a26f6ce939c28117566ebe21b55df07f"
  },
  {
    "url": "assets/js/17.158fd231.js",
    "revision": "d7a4285044483230a60ec9e9255155aa"
  },
  {
    "url": "assets/js/18.8bc39c10.js",
    "revision": "e28406c5d140107cc44ee09d0c7cc8a2"
  },
  {
    "url": "assets/js/19.59e96cb0.js",
    "revision": "a43547421cdec6c1881c828361fbe793"
  },
  {
    "url": "assets/js/2.52d076f4.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.ebd92b8f.js",
    "revision": "6a4598185c57582718cf7b0b47627ec2"
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
    "url": "assets/js/23.678d1c9a.js",
    "revision": "1896e18ec243fe242d6c35b407e5ff45"
  },
  {
    "url": "assets/js/24.144e33c2.js",
    "revision": "65ec7269e80e54e7da8e0a5ec3d829a8"
  },
  {
    "url": "assets/js/25.af93e06e.js",
    "revision": "16a72553d08ba4e468cefcaee34d6321"
  },
  {
    "url": "assets/js/26.bc27d4c6.js",
    "revision": "379959e2e46ceb4b53a019207b42c8cb"
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
    "url": "assets/js/30.2a6a5d1b.js",
    "revision": "74954affec50f20ef8e29df014b0cfa5"
  },
  {
    "url": "assets/js/31.9ef5e9f7.js",
    "revision": "6c9f36c27fcfa553e0a4ca2c6b0d245b"
  },
  {
    "url": "assets/js/32.302b69ca.js",
    "revision": "359d0fdb708d9a5d54c2c7a8ae377b6b"
  },
  {
    "url": "assets/js/33.c7e5f13a.js",
    "revision": "6a07151c431ecb5fa0e27fab59421796"
  },
  {
    "url": "assets/js/34.b62b4fda.js",
    "revision": "9e99b5f76b07bb033332f5dc2578f03e"
  },
  {
    "url": "assets/js/35.b4484b2e.js",
    "revision": "e8dc1af41b0174b1c78c39e8bb9a1426"
  },
  {
    "url": "assets/js/36.0f47921c.js",
    "revision": "dc4b17f1e610b942298ddaf4f37c1513"
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
    "url": "assets/js/39.6b2c75ce.js",
    "revision": "f7fb791b6fd424859b46c1da37b6e70e"
  },
  {
    "url": "assets/js/4.9811ea41.js",
    "revision": "a0f645c5372e1b95130402215e457adf"
  },
  {
    "url": "assets/js/40.0ba0e71c.js",
    "revision": "307677f65044ad59a58682d5d6f4ec3a"
  },
  {
    "url": "assets/js/41.a1298f54.js",
    "revision": "48444c4f8ecb19931393e7917a0dc238"
  },
  {
    "url": "assets/js/42.3ec3fd29.js",
    "revision": "8339def370ab5ee9163e15954ed03547"
  },
  {
    "url": "assets/js/43.9e686aec.js",
    "revision": "50457433f1a1a31658d9a167d87b1412"
  },
  {
    "url": "assets/js/44.ac45edab.js",
    "revision": "2b46a2e7127d35cf210ebe8c48b2eca3"
  },
  {
    "url": "assets/js/45.7030a713.js",
    "revision": "c9c681ab72bfab7a1bd30ed839d247b9"
  },
  {
    "url": "assets/js/46.ee2d9d15.js",
    "revision": "fcd45d4345cf2c3c3b9f241c749ee057"
  },
  {
    "url": "assets/js/47.c867e6a9.js",
    "revision": "8f395545f92929609039887b74dc6806"
  },
  {
    "url": "assets/js/48.02e0dd4a.js",
    "revision": "5cd3a1fd48b0ce2a7e1a01750502d354"
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
    "url": "assets/js/app.5edfdf16.js",
    "revision": "21a0ecb0c0e2af0df4880975d2026113"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "7335f390b6ccf87bae439cddb4071edd"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "f11523174fef7ee34b00a5c76ef74db1"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "3bd848dcdef790e36506c5b3abc4cb38"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "21418f2f0068b0acfaf422b6632a1773"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "d942f72cc6f688023e0f69283cf485a9"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "5c5e6ba696b287a46e4322273336caea"
  },
  {
    "url": "front/index.html",
    "revision": "13bf94a4da66f07de8da47fa5489553e"
  },
  {
    "url": "guide.html",
    "revision": "b52ab12f9c0b90e415e871b8db281cd9"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "3d9d4f210c0b2b2121c95f58e9d636fa"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "c5c68f2ad594efaf03cf79ce6cb31e61"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "2a2c7dcb75ddfef4e7c38bf9a56e9f27"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "1fe2dbf4695dab947803b935071167b0"
  },
  {
    "url": "java/base/base2.html",
    "revision": "59295a66677204ac75934607e3a7431b"
  },
  {
    "url": "java/base/base3.html",
    "revision": "a1e14242f4987f6f236f5e89987c52d3"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "60500c465093316783c31a233d9aaacf"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "483af81acd594e85005150d2fb69a2e3"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "0699f5d91ecc8a5c2b90853b152fd17d"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "438a9dc58ac30aa6ae6afb2c7a7c0af3"
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
    "revision": "a151d631ad7f66d4135c50f510d5d7ad"
  },
  {
    "url": "others/life01.html",
    "revision": "6bcb4a1f80407f904abb33f8e18ff687"
  },
  {
    "url": "others/life02.html",
    "revision": "9a59042a6d167885b1ff71670c073c9e"
  },
  {
    "url": "others/life03.html",
    "revision": "2186f49823dd717cd11ba34f1f26c0d3"
  },
  {
    "url": "study/env/env1.html",
    "revision": "75f3e271969b9fbf5dc6d0484e62e711"
  },
  {
    "url": "study/env/env2.html",
    "revision": "8ff5b3b89798190aaf779b1b17b8f61c"
  },
  {
    "url": "study/env/env3.html",
    "revision": "2c492caee78e4535fdd8f8a04d715d23"
  },
  {
    "url": "study/index.html",
    "revision": "24f575c7f70405bb7dfe452918c06936"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "1c6acf26e4713a22a7c3905fa3163956"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "7eccd0d92653272d37142504ecac9f80"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "6f9c22d74ef6a2bdcb3ee4cb95225698"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "67ddc9d8c45004b72b49fab8fba362e4"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "56c3407ee4020e084289902e8b274563"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "c5888cc61933c1fbab635d437462fbdc"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "6b5c12283c32daafd53849fa378bf92c"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "ba09180b9dd7934763f546c0db56f32c"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "8cf6e25a9f35bc5c2ba1c7c46c24c924"
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
