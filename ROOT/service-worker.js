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
    "revision": "e4a82cb1b7927299fc31a03f929d2fb2"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "c2214f0b71b6d6ba41bac1d20e6602a3"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "35344c15ae5054b9f16fee1d01357aef"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "a8bdfd8a634ba58890d199786fd65911"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a95902c32605783c53eed2ff8ed538c8"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "49c1d24c838a44559cf7e84bc583a35c"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "a2066d70ec9c0b160f21ad433320e869"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "2681f628902cbaecc411b47e6f37a839"
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
    "url": "assets/js/10.6c82e97a.js",
    "revision": "616ed5fe134af7ad8ff3ebef55408a2e"
  },
  {
    "url": "assets/js/11.578df3dd.js",
    "revision": "b55fb683ece00983cedb06fdcb525a82"
  },
  {
    "url": "assets/js/12.93b7a4f3.js",
    "revision": "8db3b0ae6e3c11b4e1c8563df7954734"
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
    "url": "assets/js/17.866ab03d.js",
    "revision": "51478847e8aa2e2e28c9f49f5a33653e"
  },
  {
    "url": "assets/js/18.1783a088.js",
    "revision": "27f5463ee61085d5f9ec17904f52cd8d"
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
    "url": "assets/js/20.de3a0aa6.js",
    "revision": "ad0aa2c30e024fbb63b29cf27b9ce005"
  },
  {
    "url": "assets/js/21.cf302e92.js",
    "revision": "68ded4c48b0fcb6d6747d503da890dc5"
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
    "url": "assets/js/24.778e7338.js",
    "revision": "ae028cbb79b5af7c5f65517ae9d16dab"
  },
  {
    "url": "assets/js/25.bc0fd15e.js",
    "revision": "83760186a0a0631d5edbb6983216472d"
  },
  {
    "url": "assets/js/26.bc27d4c6.js",
    "revision": "379959e2e46ceb4b53a019207b42c8cb"
  },
  {
    "url": "assets/js/27.39b734b7.js",
    "revision": "df3372c533c14f8778a49a8b69341727"
  },
  {
    "url": "assets/js/28.84c03532.js",
    "revision": "ef7231939505fd9f0c37e952f2adae4d"
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
    "url": "assets/js/30.f0543149.js",
    "revision": "f08fd527ac688bff02ebc6a8db018c7c"
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
    "url": "assets/js/33.f23981e5.js",
    "revision": "2469f0307147665753e0d2ec0211f374"
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
    "url": "assets/js/37.292d5a20.js",
    "revision": "1968c72ae8023628ab6d691c252128a7"
  },
  {
    "url": "assets/js/38.6c5a6619.js",
    "revision": "fb1ebc0f0917e45d1a18390b42eda173"
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
    "url": "assets/js/40.cf32dbcc.js",
    "revision": "43deb1449dc891a3c699c5b1b97fd039"
  },
  {
    "url": "assets/js/41.d9ea4edf.js",
    "revision": "d3291119118cd435f6bbddd178c6545f"
  },
  {
    "url": "assets/js/42.1639e887.js",
    "revision": "bcb11f511583bf2513dcc2fa7dbb75e3"
  },
  {
    "url": "assets/js/43.e1b71c47.js",
    "revision": "6be303d77201c349c2a8be9de6416c61"
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
    "url": "assets/js/46.efe15ace.js",
    "revision": "12d7915dde0ad898a91fabd954207e9f"
  },
  {
    "url": "assets/js/47.c867e6a9.js",
    "revision": "8f395545f92929609039887b74dc6806"
  },
  {
    "url": "assets/js/48.a776e12c.js",
    "revision": "ae1fce86426baf64eb71f0e8edbd169e"
  },
  {
    "url": "assets/js/49.b289862f.js",
    "revision": "218be2d87e5315497bede1e26ba01641"
  },
  {
    "url": "assets/js/5.7028ed09.js",
    "revision": "34e97b3ea68ba49c58cfca657e3a3e1e"
  },
  {
    "url": "assets/js/50.19108a6f.js",
    "revision": "9f9e1b7d3d4a4786e937a2dded595507"
  },
  {
    "url": "assets/js/6.c4e7aa99.js",
    "revision": "48566cf4c460f51f495dd2ffd53e23fa"
  },
  {
    "url": "assets/js/7.595cbe73.js",
    "revision": "afbf8cbc3469e9638491844687309593"
  },
  {
    "url": "assets/js/8.98fca651.js",
    "revision": "e44ccd0318201cca127c0d6b35f6a8a1"
  },
  {
    "url": "assets/js/9.1677dedb.js",
    "revision": "ccc608f0d727c9cba821564ac0327ebb"
  },
  {
    "url": "assets/js/app.7a6db512.js",
    "revision": "fca26322dc009afebfb7afb6fd2cdace"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "50326bb32fad02f940cbf5145824bddd"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "121d92aea2c7fa16e11834eb2b1ecad7"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "eff51f2504a376d8ab8f015bdbdfe4c1"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "b1398c205c6bbf7cfe292848bf9e71e9"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "fb32a3a592d9cfe31d806a2b9f44d99e"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "fb313308ffbff1fc11b1d133aa165472"
  },
  {
    "url": "front/index.html",
    "revision": "379c59f3f368efc504e0a88fad508a88"
  },
  {
    "url": "guide.html",
    "revision": "d74a174e62e9b9472e82434c87f02a81"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "f7adf0ec254b0c606c8e1684991de53f"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "f5e122ef0db38b9f8c09c59088bb5265"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "079ee0f9ff78773aa6c3c9f507490de9"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "21b063b62dd28959025ed5b4dc4915fd"
  },
  {
    "url": "java/base/base1.html",
    "revision": "c64372ca0cfd5a05be1a67e8990ad3fa"
  },
  {
    "url": "java/base/base2.html",
    "revision": "2cbf71ac78b64e6c44b6d2a8f87b5f90"
  },
  {
    "url": "java/base/base3.html",
    "revision": "df63582c3305b982d9de70ba3321755f"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "0e5f22330a772adaa453f6587186d514"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "c2d3187e7c14e75da86ab87032b25b6a"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "4d4ed94502c729bad02b112250fdb615"
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
    "revision": "761ea52099c19203200d1b8a57ba0813"
  },
  {
    "url": "others/life01.html",
    "revision": "44110ca9804cb06e2056ddb1ac04c0f4"
  },
  {
    "url": "others/life02.html",
    "revision": "9d6e98865a8c982f3604c34e9723cc0d"
  },
  {
    "url": "others/life03.html",
    "revision": "902fcf5498650a907a70e8b3d3d39cb4"
  },
  {
    "url": "study/env/env1.html",
    "revision": "6aea7c7a31a7a062620121375ab505c4"
  },
  {
    "url": "study/env/env2.html",
    "revision": "ad585a77af7e7e19bf94cc0a1cd29b7e"
  },
  {
    "url": "study/env/env3.html",
    "revision": "b75178f979053891350af5218c50cca6"
  },
  {
    "url": "study/index.html",
    "revision": "1d8ceab3c4335032bff4c30bf54ed855"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "9ad281eca74b66f5281ebb9f9a6d6204"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "ad395102a1bb42b13ebc9dfa4d8aa38f"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "535af4836330eaa27e5789dec3c94b6f"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "6a3fc72e32df1b34541a70500d2369c1"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "9db2ee074ae46f660f22a39af4a62b72"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "568811d27bd238054db06624836b1db3"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "e834528d7a121709bc86f58eb8f8a979"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "b1f0ac42189ed2b0e753dbbbfe559022"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "e336be59f22c359afc3ac2edb06fb834"
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
