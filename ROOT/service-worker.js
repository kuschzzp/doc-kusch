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
    "revision": "afb10138fd0317608e1d9b938c4f7f07"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "29819a4f234347cf985dc699760c69ea"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "facbc3b0b07ab527a31fa5b42379a20f"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "8ce8bdf5c5dc6073eb779c448b874bd0"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a358fcaa6093a60195176ae2eb99814d"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "9af679cc801f476074139aedc7a313c9"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "f2fcb936dd5182756b238d7cbffa3537"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "fa30f33e61de6e9048cc328a4ed76edc"
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
    "url": "assets/js/17.5b1d54c5.js",
    "revision": "4bc97d61e8d2e2c4a3e4b8478e9a75c0"
  },
  {
    "url": "assets/js/18.d20443f0.js",
    "revision": "e3743d0780966a67cfeceba707f3aca6"
  },
  {
    "url": "assets/js/19.696c5a15.js",
    "revision": "065ae59ca78336ab53b15c907842510c"
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
    "url": "assets/js/24.2492260e.js",
    "revision": "a5767ff397897cac2630365014601c1e"
  },
  {
    "url": "assets/js/25.d61b86a9.js",
    "revision": "847521100c04a0f7d590bcdd60d81fc4"
  },
  {
    "url": "assets/js/26.e0272a3e.js",
    "revision": "9bf6b4effbed35b2b741f6bd29ddbbf7"
  },
  {
    "url": "assets/js/27.de323cb7.js",
    "revision": "df3372c533c14f8778a49a8b69341727"
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
    "url": "assets/js/32.d025e200.js",
    "revision": "bbeb95f821b537032e434f1ebe734f1d"
  },
  {
    "url": "assets/js/33.19633d96.js",
    "revision": "28f3e8048443fdcabe9abc339f7c70df"
  },
  {
    "url": "assets/js/34.d867d67e.js",
    "revision": "8251d0c6d715513ccb0e799824c3e8cc"
  },
  {
    "url": "assets/js/35.a289dbde.js",
    "revision": "6d6420b6b8047daf290efbcd53ac072c"
  },
  {
    "url": "assets/js/36.0f47921c.js",
    "revision": "dc4b17f1e610b942298ddaf4f37c1513"
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
    "url": "assets/js/39.6b2c75ce.js",
    "revision": "f7fb791b6fd424859b46c1da37b6e70e"
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
    "url": "assets/js/41.5d630b06.js",
    "revision": "23301429e7bdcbb651f274d52eb8026d"
  },
  {
    "url": "assets/js/42.0e580467.js",
    "revision": "4701294546aaf09b15420e997d1a5dd8"
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
    "url": "assets/js/47.071446c3.js",
    "revision": "879018ab1b93a9c8f93cd900cc88af63"
  },
  {
    "url": "assets/js/48.d211acac.js",
    "revision": "f1a77b9bc9d898bf40a40e9c2cf0ab41"
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
    "url": "assets/js/9.1677dedb.js",
    "revision": "ccc608f0d727c9cba821564ac0327ebb"
  },
  {
    "url": "assets/js/app.8d228ac0.js",
    "revision": "fa9ca452822985cd97938ee5c1df070e"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "4e9af7b8f0aa7e8f1031b8fca2eb9944"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "f9fb41551fbca01982b90d96c7c63cf1"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "39c7504b8451f610a50f21f0fed5ff77"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "87d17b08ba9b46e5187b87353630e35c"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "51434f789744e5cc740be5006e769368"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "85e5587aa49d7a0f81bbb949d3ba4bfb"
  },
  {
    "url": "front/index.html",
    "revision": "51fc3f462d932da253e3a9b4f028ac48"
  },
  {
    "url": "guide.html",
    "revision": "e42dbea0f5efd3c9bf852c18286cabd8"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "1dfe23483bd844ac1badbb650e593726"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "b980056e0c3a222c3c7f857a0da445d1"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "12527171b28965aa82ba32a019fcf68d"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "38e17cfe278755053378abbb75d3d2ea"
  },
  {
    "url": "java/base/base2.html",
    "revision": "c4ccb26ad9825e9b4ec44580e19762f5"
  },
  {
    "url": "java/base/base3.html",
    "revision": "14f873c3d0ddff76a4a6cca2aec8fdc0"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "7fa359d297a53fce5883b7363a5d3a23"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "b11efc606c5512e8391fdebde4691207"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "3c5095592b3403226b23a172bb89f8a3"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "b02299338d117c554a5047d4a7a4cacb"
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
    "revision": "2cdc1113208c9f71a85bf31ecdf441ac"
  },
  {
    "url": "others/life01.html",
    "revision": "97fe9aad179c24bbd135e7b204555d3b"
  },
  {
    "url": "others/life02.html",
    "revision": "07bfb25f103c70fb8e7d03a89a62cb16"
  },
  {
    "url": "others/life03.html",
    "revision": "334d78f1377ba32b05c4714bcc7596c4"
  },
  {
    "url": "study/env/env1.html",
    "revision": "6f3ae9a7f7c485c1e229b9ece93a2736"
  },
  {
    "url": "study/env/env2.html",
    "revision": "242f025fd0f1a6301184c1c10eaafd2f"
  },
  {
    "url": "study/env/env3.html",
    "revision": "4467c5f1d5dece2b8b97735bd9402937"
  },
  {
    "url": "study/index.html",
    "revision": "36527acc4eeb153733fb7bf6a6df947e"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "0e6db966a7379351294155c353024d20"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "2ce53ceb4fde484b4d693fdfadd303c2"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "4eb17712b41a0186de514ff052e5dcb1"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "5d1474e40c69f0fe1d5f7d98108c262e"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "2b1bfe5c986c689e78c0c653e74b2038"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "556cc3d9665c44074114a3293682ab2f"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "6e8266b2537db7e0dae61f38c32ac978"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "9b890e53fd4162aa6f8fb63282cfe855"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "20b2b86ce47c5d3a12cc325d8b7aaf49"
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
