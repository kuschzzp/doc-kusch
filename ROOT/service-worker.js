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
    "revision": "204bbbbbfa7027dd9c6b0159cf128846"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "60529b76ebd30f8bac01ce9fb9ac0d08"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "b4eabfe7a2bdbaaa96dec77ef2b81b0b"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "54c534005b8c05186e3c51b8f8a4beae"
  },
  {
    "url": "algorithm/index.html",
    "revision": "517457cf355f29c986f0a860e7c783e6"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "52b9d18c2a1cf74ef995a00f56a4bc2e"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "b92d15a42201029fc8f830f62335b0b8"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "4cb0e51e13c0de68cfc4e42f21b42918"
  },
  {
    "url": "assets/css/0.styles.c1e089ed.css",
    "revision": "2fb98e2e283e2821e4dd1c1969e9975c"
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
    "url": "assets/js/11.578df3dd.js",
    "revision": "b55fb683ece00983cedb06fdcb525a82"
  },
  {
    "url": "assets/js/12.fddb2cf1.js",
    "revision": "afead6b22890a85fb0cdb8be4d43fa7f"
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
    "url": "assets/js/16.5b032b2f.js",
    "revision": "1a61b20bbda5c8b35e7f3b3545d622ff"
  },
  {
    "url": "assets/js/17.158fd231.js",
    "revision": "d7a4285044483230a60ec9e9255155aa"
  },
  {
    "url": "assets/js/18.e82f620d.js",
    "revision": "8fcbb72da68003fc6ea2ac9216210e75"
  },
  {
    "url": "assets/js/19.eadf1b98.js",
    "revision": "227bf9e7d7e6197344994202894b377a"
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
    "url": "assets/js/21.bb01b2b3.js",
    "revision": "ec071a090713ca13552356ea354347c1"
  },
  {
    "url": "assets/js/22.b27a8810.js",
    "revision": "0e05d64126662568e9f85b9d9ee3c14a"
  },
  {
    "url": "assets/js/23.678d1c9a.js",
    "revision": "1896e18ec243fe242d6c35b407e5ff45"
  },
  {
    "url": "assets/js/24.39d84cbd.js",
    "revision": "86893fcc477f2aa732d5fe9fd4cd0f7d"
  },
  {
    "url": "assets/js/25.d61b86a9.js",
    "revision": "847521100c04a0f7d590bcdd60d81fc4"
  },
  {
    "url": "assets/js/26.bc27d4c6.js",
    "revision": "379959e2e46ceb4b53a019207b42c8cb"
  },
  {
    "url": "assets/js/27.de323cb7.js",
    "revision": "df3372c533c14f8778a49a8b69341727"
  },
  {
    "url": "assets/js/28.a05adec5.js",
    "revision": "a153c9636b2ca8f21528e21c838ee272"
  },
  {
    "url": "assets/js/29.25106af4.js",
    "revision": "5a2459ac2f26bd550b4e1ac31992df40"
  },
  {
    "url": "assets/js/3.0d67d627.js",
    "revision": "08ac41df925fb0adac1f33c56c0e310c"
  },
  {
    "url": "assets/js/30.f0543149.js",
    "revision": "f08fd527ac688bff02ebc6a8db018c7c"
  },
  {
    "url": "assets/js/31.30ddab45.js",
    "revision": "a58610930d897742d6cfc1c5963211a3"
  },
  {
    "url": "assets/js/32.061c5bc0.js",
    "revision": "fe9a40edf59b73cff8d3df46421466c8"
  },
  {
    "url": "assets/js/33.c7e5f13a.js",
    "revision": "6a07151c431ecb5fa0e27fab59421796"
  },
  {
    "url": "assets/js/34.d867d67e.js",
    "revision": "8251d0c6d715513ccb0e799824c3e8cc"
  },
  {
    "url": "assets/js/35.b3e92583.js",
    "revision": "b6b3b275b0a4c7c602c583f8de5a55ac"
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
    "url": "assets/js/38.6ffdfc28.js",
    "revision": "31cfebc0a21163b5c9700fe7b587487b"
  },
  {
    "url": "assets/js/39.d5c66216.js",
    "revision": "715d5c7eb2692e7707b5724082fb2d97"
  },
  {
    "url": "assets/js/4.6813fcc2.js",
    "revision": "9c5e2efdd1768b86072d4e449fffe550"
  },
  {
    "url": "assets/js/40.cf32dbcc.js",
    "revision": "43deb1449dc891a3c699c5b1b97fd039"
  },
  {
    "url": "assets/js/41.a1298f54.js",
    "revision": "48444c4f8ecb19931393e7917a0dc238"
  },
  {
    "url": "assets/js/42.1a199e70.js",
    "revision": "2f10d656f1d842d9415a3adc01d94341"
  },
  {
    "url": "assets/js/43.e1b71c47.js",
    "revision": "6be303d77201c349c2a8be9de6416c61"
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
    "url": "assets/js/46.81ef8d96.js",
    "revision": "7b41b0e4aed491f2df61ae244dd82f6b"
  },
  {
    "url": "assets/js/47.071446c3.js",
    "revision": "879018ab1b93a9c8f93cd900cc88af63"
  },
  {
    "url": "assets/js/48.264d58db.js",
    "revision": "fa097e5b1e7e2f06c76f4a500903cc7a"
  },
  {
    "url": "assets/js/49.43df8012.js",
    "revision": "2608306c4a094fcfa071c0da0427abd3"
  },
  {
    "url": "assets/js/5.f168db12.js",
    "revision": "f650b16c5b97209c036bd72b7ce9b5df"
  },
  {
    "url": "assets/js/50.19108a6f.js",
    "revision": "9f9e1b7d3d4a4786e937a2dded595507"
  },
  {
    "url": "assets/js/6.14486b15.js",
    "revision": "3be98b2fc336df600384d5fae94e4791"
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
    "url": "assets/js/9.a16c7d7c.js",
    "revision": "426a746e30df8fd93e696cded52e6c7a"
  },
  {
    "url": "assets/js/app.46c163c9.js",
    "revision": "073ea6dc03ed1795ecac5a1999815adc"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "9ab26c9793b55cdf8dfaa57a68d4415f"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "edfef57639535118eee1b255e751f548"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "471e7d460abf63577dfc71710084dbc7"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "8d816342324aecdbe2463db9dc7b5e7e"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "d33556155a76d5889e3502a8131ce1f1"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "ce2b3bed8e59c73fddc15f726fb0e9eb"
  },
  {
    "url": "front/index.html",
    "revision": "e3406b03d76252ba5f685e8e18ebc965"
  },
  {
    "url": "guide.html",
    "revision": "142ac8a6f967ad1378ce0d23b10107b8"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "8327a4adbece34e730a61bdac25be3d7"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "1bf5574ee8c2dced9d2ac5a806bbf81f"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "44f3387aea8ced618f430118eb4b8c82"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "27f6cb369fc05c9572d74966309b11f3"
  },
  {
    "url": "java/base/base2.html",
    "revision": "4f677fdb07733bc516ad0b619652c0e0"
  },
  {
    "url": "java/base/base3.html",
    "revision": "086765c94fe48e8b9b42151d43e3956a"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "daf0aa3ec1b4442ac9dd1aeddca0c789"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "bc71220c3760d0795c9c551c1f49c59f"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "e270cb1ce8a52c9c69fb61eaf9630125"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "4ccb91c5b7c88e96958ef657e405196e"
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
    "revision": "e626126a3b5ebf4d9bb79a7f911fa3ea"
  },
  {
    "url": "others/life01.html",
    "revision": "ad732ea6a15f854520d92a9ff8212410"
  },
  {
    "url": "others/life02.html",
    "revision": "056d6768835d4749db3c5c1486713685"
  },
  {
    "url": "others/life03.html",
    "revision": "84bee118acb7662dfad24c4c64d55de1"
  },
  {
    "url": "study/env/env1.html",
    "revision": "1392d7a2fe008073c23c0f45e39c53c7"
  },
  {
    "url": "study/env/env2.html",
    "revision": "c7b27f00127ee635a7055c1bd71e783d"
  },
  {
    "url": "study/env/env3.html",
    "revision": "24e9337b0a75752b6f544bbe5f025246"
  },
  {
    "url": "study/index.html",
    "revision": "f91d7ebf60125509a358e811d4852795"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "f48cb2d5afae96dfb7122ba41f814eda"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "47bee0dcfc5d57aa14e6dea322c42e70"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "e85891b87efa49946782b1669e3e9876"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "e23234c0f08757d6133619b911659962"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "b606b3f466dccbd9350780ecde3fb12a"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "266ed8211a2dbfefe544f8a70100e073"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "433c756883a719ced904f8bf6e2a59e4"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "b1d176eccdc090377362d06f44bebad6"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "0651ed1d642c29e1c31d434db06a2613"
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
