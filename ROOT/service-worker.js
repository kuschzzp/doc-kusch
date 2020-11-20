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
    "revision": "6c603896f70353554051072639309e53"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "bc9cf7469502b6e1c2207755208357a3"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "3fb04f74164d8ba4e1f4233c751fe99c"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "b40229a7b76e12e1e07227c40500b0e8"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4f559c1da5c166cbbd479cb8d81bedd9"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "711939d77f20fac09e2c72e112e568b4"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "25f5d5f5923290ccd2098aebf625800b"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "1599bc1b504f7f5787498d2d0a6b7038"
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
    "url": "assets/js/11.578df3dd.js",
    "revision": "b55fb683ece00983cedb06fdcb525a82"
  },
  {
    "url": "assets/js/12.d54ba6ad.js",
    "revision": "a88f70ef0e2db2a38b021a3216ab7e7b"
  },
  {
    "url": "assets/js/13.8c6a67a7.js",
    "revision": "48b8b4216c6111fc7816ac5c8a5a371e"
  },
  {
    "url": "assets/js/14.a12613d9.js",
    "revision": "f48fcf85e975aef070de74538f593ca5"
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
    "url": "assets/js/17.866ab03d.js",
    "revision": "51478847e8aa2e2e28c9f49f5a33653e"
  },
  {
    "url": "assets/js/18.d3e66195.js",
    "revision": "422ac8e416074ff57a6ae0319dd44571"
  },
  {
    "url": "assets/js/19.90346967.js",
    "revision": "f7b285588af577461823dad5d303cc2b"
  },
  {
    "url": "assets/js/2.6e8d2093.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.c90b5111.js",
    "revision": "75e06eed1fbf9ee78200af784bdfb94a"
  },
  {
    "url": "assets/js/21.fc4f521a.js",
    "revision": "d124da8a74413678d7f9b8c9210e03a9"
  },
  {
    "url": "assets/js/22.fe1c2852.js",
    "revision": "52954ddeeb99edad65ec583aa66eda40"
  },
  {
    "url": "assets/js/23.e8571211.js",
    "revision": "7c66d0fb2f4a6594010f0f9035f73872"
  },
  {
    "url": "assets/js/24.39d84cbd.js",
    "revision": "86893fcc477f2aa732d5fe9fd4cd0f7d"
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
    "url": "assets/js/35.b3e92583.js",
    "revision": "b6b3b275b0a4c7c602c583f8de5a55ac"
  },
  {
    "url": "assets/js/36.46b92cf6.js",
    "revision": "41b5c877ad237e3aad4d9d05ee093478"
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
    "url": "assets/js/40.26b3d185.js",
    "revision": "78e89c9eab8f3ac6ce8f0b21e4737178"
  },
  {
    "url": "assets/js/41.70b14b0c.js",
    "revision": "8b3757e2c8b7c0797dfd3930d222eb9f"
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
    "url": "assets/js/44.5a58f868.js",
    "revision": "6a9aee8c0bfe0c938ae03ec8494f3f06"
  },
  {
    "url": "assets/js/45.9d108396.js",
    "revision": "c794827d68ca72d48f23cda899df7dbe"
  },
  {
    "url": "assets/js/46.ee2d9d15.js",
    "revision": "fcd45d4345cf2c3c3b9f241c749ee057"
  },
  {
    "url": "assets/js/47.83b1c8b2.js",
    "revision": "aa02bcbe3f798aee5ab6413fc3d82fb0"
  },
  {
    "url": "assets/js/48.415905fe.js",
    "revision": "aa9e0755e018f6ef6f0fc79af0ecf87b"
  },
  {
    "url": "assets/js/49.77296ac8.js",
    "revision": "80057eb8d744d359cd1af3f792c071c9"
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
    "url": "assets/js/9.fb5a5040.js",
    "revision": "006e56414671c3310154d281b547caf6"
  },
  {
    "url": "assets/js/app.ccd93832.js",
    "revision": "d7f852e53ab161f113d0443cd4801105"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "908b71233ab582b95ff5b2c29ec71d3a"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "9f12cdf9a9b465b8beb96a6e1d76108a"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "a84e6f858aa7d51bf32be3ec50bba39c"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "fc9ae6fd321351f3cb74358f2897f442"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "870b5f731e1afd98319466ff0480c0f0"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "196240c629f24f3cca8a655c3115e08f"
  },
  {
    "url": "front/index.html",
    "revision": "6a45d1d61bedc9ffd93cd509bffd97fa"
  },
  {
    "url": "guide.html",
    "revision": "3d454cc6f54c9c09b1ee9beedb1b0c09"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "0545a171db7bfa7359b29acc06fcaa18"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "61eb65e025609ee191141e4c1512147f"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "96dd47920585812a2c32725924545776"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "79db09e574f212df26ffd977a4d392cc"
  },
  {
    "url": "java/base/base1.html",
    "revision": "a49b25072d62c41804fb246cbcc33527"
  },
  {
    "url": "java/base/base2.html",
    "revision": "c8fb40e9f539af6d41b69134c19ad72c"
  },
  {
    "url": "java/base/base3.html",
    "revision": "0d2a06e0167a2b7cc0d3dd6813736a0e"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "ab84fbdbb33b095364c70cc816ee710c"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "5a7bba833bdcf7333d00c74b02003ff9"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "3e2b0ad28b2cbefc3643d4adab7a0d92"
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
    "revision": "0cfd9fcd3d27a24b2da9ccd8fabface7"
  },
  {
    "url": "others/life01.html",
    "revision": "b89fdbda8cf6fc27a9f5882544c2f939"
  },
  {
    "url": "others/life02.html",
    "revision": "699437aa09e7934178a3f7549fc919d4"
  },
  {
    "url": "others/life03.html",
    "revision": "73f5ed32d1051ff0423ab03bb9087d12"
  },
  {
    "url": "study/env/env1.html",
    "revision": "5e88766c9dd804e71ebe099eb75755d6"
  },
  {
    "url": "study/env/env2.html",
    "revision": "2ed9de71d2f2f69460f6206329bc090f"
  },
  {
    "url": "study/env/env3.html",
    "revision": "5bd654d9678b93c8b1a4ede648777209"
  },
  {
    "url": "study/index.html",
    "revision": "512998ed75a6255e04f7c469608410ef"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "5ca3f3dc1455a10a7be8b0a25feacf46"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "7d8770c7b4e6908c14a1059fe2485a65"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "60658c39417f191bbbc14e625fca0411"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "e3432c1e0289340b8ec77174f3af749d"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "8c2dd3f7ba2ef04a5b8ac7c95896dc3f"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "e98d5e1a4c8272e5bb41f447b7defea0"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "d4ac313f4b836f09d4bdf18c55f37833"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "608b7e9297c86dab09c3d76fa9952d56"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "cf36fef2b1b98f6724a5dd31c622bd00"
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
