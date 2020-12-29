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
    "revision": "912b41a51b754da6534c1b3f6992bbbe"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "42bc3647c0b48bdb959da45b54a99879"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "a9eeae0b6fd16670c18e040c36024a7e"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "daaa76f444666fbe2252d758471bd9da"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7541b615ef5f138cb1a30e77c65edaa9"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "32b6dda7374c0accdf215da25d05cb40"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "54347a5683d16e67b0ba41bc42b61950"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "5b27828de8d6fd834ddf3631b8404553"
  },
  {
    "url": "assets/css/0.styles.d6d62cd4.css",
    "revision": "dd2943bc922ea44527fa266a23433c7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0a2e6ed6.js",
    "revision": "bb99505a802ffcb0226a2ae9bfc03acf"
  },
  {
    "url": "assets/js/11.9529aef7.js",
    "revision": "21f7ab35a6dc1cd4e59ce889ab34d42a"
  },
  {
    "url": "assets/js/12.4ef97702.js",
    "revision": "cdba8ffac5f709a6e8af44b43a512315"
  },
  {
    "url": "assets/js/13.a149f1e8.js",
    "revision": "6b9864531367033b4cd6e4317513669e"
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
    "url": "assets/js/18.d0a7578e.js",
    "revision": "52187e5b6386d0d8e6865d9ba4177e9b"
  },
  {
    "url": "assets/js/19.3509084f.js",
    "revision": "aa9ad741dc8ed49a0617ed7eac44fc9a"
  },
  {
    "url": "assets/js/2.52d076f4.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.7fed6284.js",
    "revision": "48c2aa41bf3fd905724792b6842e3374"
  },
  {
    "url": "assets/js/21.0db8e30d.js",
    "revision": "d7dc8a08f09792a60ee0abb8812ac55d"
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
    "url": "assets/js/30.49df5fb5.js",
    "revision": "d9b01c33708be1315920f1d9428cf2c8"
  },
  {
    "url": "assets/js/31.b654953a.js",
    "revision": "46eb8d9c492c16b9138f5162e23a9a52"
  },
  {
    "url": "assets/js/32.5b39d99d.js",
    "revision": "95c22b8aaad2639402d2875edeb746be"
  },
  {
    "url": "assets/js/33.386a7af3.js",
    "revision": "7e65e599fcfb5a312db0d5fff140e7c5"
  },
  {
    "url": "assets/js/34.ee7f220b.js",
    "revision": "061cab38534d5715a3da34c36fdfaebf"
  },
  {
    "url": "assets/js/35.f091fdb0.js",
    "revision": "52a3c9472c494a9fd32db2078c93372b"
  },
  {
    "url": "assets/js/36.757dd009.js",
    "revision": "b07fe62f7a806b5e0f60a49d2f64a5bc"
  },
  {
    "url": "assets/js/37.481d48af.js",
    "revision": "0191cabbe9119d02c13d1932143aade5"
  },
  {
    "url": "assets/js/38.556e2e34.js",
    "revision": "1e201e6ce483a7df71b7562d0dfcf28e"
  },
  {
    "url": "assets/js/39.05d094c9.js",
    "revision": "0f28e500acf54a8f94c9d85cdf427608"
  },
  {
    "url": "assets/js/4.03e2895c.js",
    "revision": "c9b6e1be77576d8d9dabdbe190da31b9"
  },
  {
    "url": "assets/js/40.f3200e28.js",
    "revision": "427902f5689d21dd6cd04b993585b471"
  },
  {
    "url": "assets/js/41.c5938772.js",
    "revision": "98c3e0d6fd204e8b9b35d75572488413"
  },
  {
    "url": "assets/js/42.a92dfcba.js",
    "revision": "4bc2290bee8d724f65de6e29b90fa207"
  },
  {
    "url": "assets/js/43.ba9ab8a6.js",
    "revision": "5bed74048f6755730441db560be8ad77"
  },
  {
    "url": "assets/js/44.d56299fa.js",
    "revision": "48d2020e39c5193906ee28ef39aa389b"
  },
  {
    "url": "assets/js/45.6bdb6810.js",
    "revision": "ac901f9c85d2b6744314960712ef4b11"
  },
  {
    "url": "assets/js/46.55afc3d8.js",
    "revision": "5a9288637086ba8d69baa114a0efcf06"
  },
  {
    "url": "assets/js/47.333ee1df.js",
    "revision": "375231a95db90421e9d70a2539fc6bbc"
  },
  {
    "url": "assets/js/48.c70f4156.js",
    "revision": "952ad095decc121a0789bba6151514e1"
  },
  {
    "url": "assets/js/49.30a639a2.js",
    "revision": "093c412542f2a2e1d2b7d39e28214f7a"
  },
  {
    "url": "assets/js/5.547b2f71.js",
    "revision": "a3c54f2c13b1d19d7a68b88e737e977b"
  },
  {
    "url": "assets/js/50.50e3a438.js",
    "revision": "9de31feceecce7ff166d7f6f21e22136"
  },
  {
    "url": "assets/js/51.fac46df5.js",
    "revision": "f72dac2891298b0c556070cd6fdbda2e"
  },
  {
    "url": "assets/js/52.4e1cc659.js",
    "revision": "1cdb5c5b9b14824311881e813c9396bb"
  },
  {
    "url": "assets/js/53.c584ff06.js",
    "revision": "9965052d712f9b2b0e4b6e6ecdecd7a3"
  },
  {
    "url": "assets/js/54.9eadc28b.js",
    "revision": "96e2bf3dbe052e108ac3f0c522356508"
  },
  {
    "url": "assets/js/55.90a275c9.js",
    "revision": "57827b048b4bdde7c89d3b85ab9b8cab"
  },
  {
    "url": "assets/js/56.59d49f0b.js",
    "revision": "82f1f113c8bba2d472a701985b07fa0d"
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
    "url": "assets/js/9.714a7d2b.js",
    "revision": "78f7ab2ba4caa1a7cef97d1d76d0ef06"
  },
  {
    "url": "assets/js/app.c03d2004.js",
    "revision": "d46e18f2ea8a25d13fc3d559c7fa2388"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "c928dae2cd57ca8f1bb279cf95037205"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "3ac3b6bf689dece5978c27d6a9cd002d"
  },
  {
    "url": "bugs/index.html",
    "revision": "6f380a3249af7948e322ff72420a6bf1"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "894d112782e3a9399b1a025a2dd09363"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "f5f775b16842c92c0820df935003520a"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "d80ad8a6e9588da2e4cae1b577d80269"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "c2ca6149bbcdfa31956282b48001b4d2"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "d9fcfda8356cf6fa7e4020bb0b937639"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "4f02ddfad1563db0d6638787ed1d6cd6"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "b0714728a128d8d2efcbf81520fa94da"
  },
  {
    "url": "front/index.html",
    "revision": "722a0d0dfa243c3a42d8640caa53b021"
  },
  {
    "url": "guide.html",
    "revision": "c0c5c916e99747c1d28c00e6d65fb712"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "fe91c7ef47dfab58a6af92e3f6c660d4"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "70464985c4a4b68bfbec626824bd3609"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "6c0ed4bdba25ebc9a7ac011777acc203"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "468864b16f35c6d5982ddba930c7433c"
  },
  {
    "url": "java/base/base4.html",
    "revision": "28829776f18200282bc0868378792ec8"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "0b23f28ab30628644b39fdc088f13332"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "fe04d62e1c96d7bb5f3614f5567d8a64"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "9d9ce7f39dd7e45f92f638b518b792e7"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "d5550f52223911085ab907a02be39939"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "d25098ecd5ac6b69a421484b6dabce25"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "e60f6632dd305cd325d1a076d0a330ba"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "236c020d4f4948711ed5a80e36ac7a12"
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
    "revision": "c004e7a07d4ba9b83f1b3345ebd54b21"
  },
  {
    "url": "others/life01.html",
    "revision": "eb8e02bc2d318bbc7b94cd5629b2ddde"
  },
  {
    "url": "others/life02.html",
    "revision": "cff0742de9aeb0e8fecc18682c9390cf"
  },
  {
    "url": "others/life03.html",
    "revision": "b4dea392c340e6be0be669e5a8195b54"
  },
  {
    "url": "study/env/env1.html",
    "revision": "acf1631a929eb31e856c7d90cfcb40ee"
  },
  {
    "url": "study/env/env2.html",
    "revision": "3186a089f3296c30dcf8baca9e92c181"
  },
  {
    "url": "study/env/env3.html",
    "revision": "47d33b8212dfd744a755bd4b24390d03"
  },
  {
    "url": "study/index.html",
    "revision": "1f508e43197b9df5e489842c5bd18252"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "89c3b48c1bea998ef9bc92a35bfe1774"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "c5917385f3ec03458984bef912ecd1e1"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "77a892fe1f2b476a37b513a887ea941b"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "68f135e8ec53c3679d5963c5c6d5987d"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "d679ccc3bada9551e6ccec0af5d26ae3"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "f9c0bc8da769c8f19a8851fa6dbc95ca"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "25a5a85d10e1859ecb8fb1b56ab3c420"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "657e54623a447759014c294d4b4e4876"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "a15599d7e1d3046c644d82f941799102"
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
