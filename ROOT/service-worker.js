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
    "revision": "e028036cd5726a1fa289fbad952681cb"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "3bc5ae799a44ece77b7d8bf45eae134e"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "9180c365ba41644be06b6177660b2146"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "744b9747394b9fa79c82da9d03ec021a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "06d0b0a4e8f3d79673ff437e776ce6e6"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "57ff3cdddda00cef6315c2e52bd7e221"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "9515d7a4e50016e217fba7c6576bb443"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "a284309b61efc78f2251c5894b6f7aea"
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
    "url": "assets/js/10.4840e2ee.js",
    "revision": "8f85e86e1d505f42843d8e8042537e1f"
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
    "url": "assets/js/13.14d6b87f.js",
    "revision": "d129e2435f29199f6ea157ef5219154a"
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
    "url": "assets/js/16.5b032b2f.js",
    "revision": "1a61b20bbda5c8b35e7f3b3545d622ff"
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
    "url": "assets/js/19.90346967.js",
    "revision": "f7b285588af577461823dad5d303cc2b"
  },
  {
    "url": "assets/js/2.52d076f4.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.de3a0aa6.js",
    "revision": "ad0aa2c30e024fbb63b29cf27b9ce005"
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
    "url": "assets/js/35.fa9a2cab.js",
    "revision": "a7a16380fa69873d4fdbfcb51436497d"
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
    "url": "assets/js/41.f06c6278.js",
    "revision": "3834c205cd1d5a5f8567b05d36486cad"
  },
  {
    "url": "assets/js/42.1639e887.js",
    "revision": "bcb11f511583bf2513dcc2fa7dbb75e3"
  },
  {
    "url": "assets/js/43.9e686aec.js",
    "revision": "50457433f1a1a31658d9a167d87b1412"
  },
  {
    "url": "assets/js/44.8dbb33a6.js",
    "revision": "9cb4b9af841c8015e9cfb13a80c109df"
  },
  {
    "url": "assets/js/45.7030a713.js",
    "revision": "c9c681ab72bfab7a1bd30ed839d247b9"
  },
  {
    "url": "assets/js/46.b6976bc1.js",
    "revision": "522fa5f698097e89c3c7bb63a8757351"
  },
  {
    "url": "assets/js/47.7f3b2add.js",
    "revision": "5c6915369332a0e2effc692625d10bc2"
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
    "url": "assets/js/8.632053d5.js",
    "revision": "c4119fc229ace6069577a2958ae8e750"
  },
  {
    "url": "assets/js/9.1677dedb.js",
    "revision": "ccc608f0d727c9cba821564ac0327ebb"
  },
  {
    "url": "assets/js/app.af779aaf.js",
    "revision": "307167cdec242ad4b644092ab0123b7a"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "df1613df3ca172f92d7502b1276627b5"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "d0d83ab6605002960ab49685f29d7b47"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "1e0c5fa5ec760429972e99b95c1cc4ba"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "af6c395fc490abae5f2686caa31792e0"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "596b8710f32c750d7fda5f17c5bc7fbc"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "8d857fe0af65f8dfc53edf1738b57195"
  },
  {
    "url": "front/index.html",
    "revision": "ae139c0e583ea7e680b7cfc140c0971b"
  },
  {
    "url": "guide.html",
    "revision": "dae0aad12f67271de9fe0cdf37f9cdf7"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "5551df61575bf1ced0904b049f602e2f"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "f79d1dd7013d5071b30781d0832b1c29"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "95a364f43fbd5c0b921b013dd3108823"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "1a81bb5c1fafcb4039e41f3b9f4c9f51"
  },
  {
    "url": "java/base/base2.html",
    "revision": "518c1bed1d9a4882160e810fe25c86fa"
  },
  {
    "url": "java/base/base3.html",
    "revision": "765839216f7fe21046c10af8f9ab3881"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "00b0e8403817cd16230be15f75624935"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "356c1b538d2536d62ef73599c7175ff9"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "875a94e4179e1e05ec723653005b352c"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "4ccb03f7fedf9b05921f889b0e4abf11"
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
    "revision": "ee62fe8ed54ce03fb8efa4220439d160"
  },
  {
    "url": "others/life01.html",
    "revision": "264dd80df6f0d5f2757220ff5a492162"
  },
  {
    "url": "others/life02.html",
    "revision": "6a298a9eb4c1864606bf01aaf96a0c5e"
  },
  {
    "url": "others/life03.html",
    "revision": "418d9a726bb3001a99ec5bbd4d34b151"
  },
  {
    "url": "study/env/env1.html",
    "revision": "02ce122093ae6182a0cbbc1cf7895c44"
  },
  {
    "url": "study/env/env2.html",
    "revision": "25dda6179c564de0153685148d7261a1"
  },
  {
    "url": "study/env/env3.html",
    "revision": "69e03896a5f654b8cf00a8601cb59c7b"
  },
  {
    "url": "study/index.html",
    "revision": "24454c41bdd3c94d45e320d8a9bd2d18"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "9292af2ebbe5ae508955ebbb6a09acf7"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "d92d91067527218bfbb2105d212cccb9"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "bc9bbf3c326d8a659aa7e6d353966dcc"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "cbd651c7c49a1ada2caf6e8786e2aaec"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "71db9f2db01b921f57c731feda7dc2c5"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "7e5be4923fa44bcfcd73d475a613f85b"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "cfc34a3e5434634ec07755f19d1e8c01"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "3872a2d6e296f8bcffaa867f6348820e"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "c36eddf186633ac6b007c0e1453818b8"
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
