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
    "revision": "fda019e6713434c338b25a3a622e85d9"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "08cfa6a07d5d61c34175b7423f29d2bb"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "6553a87af7b8644f81411797f2395793"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "3ca43c7a95e2dc4c4c11f8133ccfd7d5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "39182e2b6d83b7265de5806955e3c509"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "92940c3aaed0cfd469966b62223daf92"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "6d578e2fd8acd68024532aaea2a6c24f"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "1893a34e171d68bd535ce8c45b0a4cb3"
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
    "url": "assets/js/10.0a2e6ed6.js",
    "revision": "bb99505a802ffcb0226a2ae9bfc03acf"
  },
  {
    "url": "assets/js/11.9529aef7.js",
    "revision": "21f7ab35a6dc1cd4e59ce889ab34d42a"
  },
  {
    "url": "assets/js/12.40f33724.js",
    "revision": "8a6d6dab548fdacaabaada88dc345d4a"
  },
  {
    "url": "assets/js/13.f59b5474.js",
    "revision": "f93df11dce54e238f7fc1aa59d6fce3b"
  },
  {
    "url": "assets/js/14.107f89ae.js",
    "revision": "33317293e40aea35af1d26882965ceec"
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
    "url": "assets/js/19.a5e7ffa3.js",
    "revision": "3a1519fc0c6b290cc5d1051dfdd98410"
  },
  {
    "url": "assets/js/2.52d076f4.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.263a1120.js",
    "revision": "597765aa2da1fb9ba00b29c26240cd49"
  },
  {
    "url": "assets/js/21.65775309.js",
    "revision": "be20853cea0b31134706ad2c2c377b48"
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
    "url": "assets/js/27.b11dab8b.js",
    "revision": "75f39045df3dda2d3f1c0d178bbaa630"
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
    "url": "assets/js/31.7fe08e62.js",
    "revision": "cdd0d2ec370efcbb3f2a9d1ce91675f7"
  },
  {
    "url": "assets/js/32.51603c0b.js",
    "revision": "a8cae363d58df60ea7880fee02099a10"
  },
  {
    "url": "assets/js/33.386a7af3.js",
    "revision": "7e65e599fcfb5a312db0d5fff140e7c5"
  },
  {
    "url": "assets/js/34.6891a080.js",
    "revision": "b6e2873b5dcd33b30bc3f71b12ba543c"
  },
  {
    "url": "assets/js/35.87ee1c18.js",
    "revision": "2fa334c007eeae1961c8f315c36539ce"
  },
  {
    "url": "assets/js/36.c7d71363.js",
    "revision": "fe789aa78284073fe57dfac2ba4cd463"
  },
  {
    "url": "assets/js/37.adb3f36e.js",
    "revision": "ee2f2cc689ce921c050ba817d777ff05"
  },
  {
    "url": "assets/js/38.c801ec22.js",
    "revision": "da79f6ffd38274780191d01e6e45243d"
  },
  {
    "url": "assets/js/39.28d96726.js",
    "revision": "daf52c9b7dfceb11c944d18de87bc731"
  },
  {
    "url": "assets/js/4.70a70d87.js",
    "revision": "7c7b0a2b91722960cbcdb6bd50a3dc05"
  },
  {
    "url": "assets/js/40.0ebd22e6.js",
    "revision": "cf918bcd67d9345615fcf39cdd6a84a7"
  },
  {
    "url": "assets/js/41.a23f05f0.js",
    "revision": "b31c4e31dabc6208cbf55b2fbcce5d3a"
  },
  {
    "url": "assets/js/42.d1844569.js",
    "revision": "bcb11f511583bf2513dcc2fa7dbb75e3"
  },
  {
    "url": "assets/js/43.fed9f8f7.js",
    "revision": "50457433f1a1a31658d9a167d87b1412"
  },
  {
    "url": "assets/js/44.1341b9a8.js",
    "revision": "d2dd01e536bbcf075089078cc9e80091"
  },
  {
    "url": "assets/js/45.3f10dc5d.js",
    "revision": "6e5d770a7226e35580039d09c6d6a245"
  },
  {
    "url": "assets/js/46.b0463636.js",
    "revision": "48e6975ce5638218fb21b1fd784abdce"
  },
  {
    "url": "assets/js/47.b4ec0552.js",
    "revision": "52eba12c0805b9ae750f96eb40c2e17f"
  },
  {
    "url": "assets/js/48.431aba73.js",
    "revision": "d05e4c950bb54b8e542d8478ef0b6ca0"
  },
  {
    "url": "assets/js/49.6256aafa.js",
    "revision": "98bb0ce55c010225a9c5de687756ce4e"
  },
  {
    "url": "assets/js/5.7c55ad33.js",
    "revision": "a17864284458554e01d1b8465c8d71fd"
  },
  {
    "url": "assets/js/50.2b399ca1.js",
    "revision": "2ce12e3b6f79972424725b19402522f4"
  },
  {
    "url": "assets/js/51.76e69108.js",
    "revision": "805673062684150dea3eb08b5194dce1"
  },
  {
    "url": "assets/js/52.43403678.js",
    "revision": "453bd59c1c700c7e52c201e1ee52a41c"
  },
  {
    "url": "assets/js/53.6120ec4f.js",
    "revision": "327f7d5805ccbcd9db95968fa56df316"
  },
  {
    "url": "assets/js/54.1c7f235b.js",
    "revision": "a0dad13086b7a20401c47156f8c4f195"
  },
  {
    "url": "assets/js/6.c207ef8c.js",
    "revision": "2109b2c947fbef3cf5aede939930ceef"
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
    "url": "assets/js/app.ee2bda11.js",
    "revision": "8b21029e4e6b772098449c45e331f2b9"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "2fd036f6a260ce8cac3cf132ea559c4b"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "1629418c928fd721e2059bc0894a4101"
  },
  {
    "url": "bugs/index.html",
    "revision": "7adedad83c707f4dd92b6e950a170aa2"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "6d534fba4b35cb747bc2a2699d614932"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "a8f6687ec1df2ad5ca5032b0c94c5d20"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "8d6d444d6c6e53a66638c32e005bdb97"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "26143536b34450c6ab69135ef49cdf7b"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "a6f345b3ecf7a5f1902f0e3938c56727"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "5dd382848c5925a205d5f65b8f475f4f"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "4534558341407ae636038e4e2071a895"
  },
  {
    "url": "front/index.html",
    "revision": "52033927952a7072bf7cb9549df447b5"
  },
  {
    "url": "guide.html",
    "revision": "f32284ab3f82ba559f4103ef5275a9c4"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "eef026e9ca88731dbe656e517b9b4469"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "a7c0167c53950d69343a9820f6cfb09f"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "a1636e5e13e23f3d3644d86151dcbfcd"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "c875ed702f001c1476ee837afe97fe21"
  },
  {
    "url": "java/base/base2.html",
    "revision": "e7dc68082e9132460011dc7f2f500849"
  },
  {
    "url": "java/base/base3.html",
    "revision": "a7436368c905d23b19625f396966eba5"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "9a3f412f63b94a8c30f4e4026c1366c9"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "d350c51514d6ef5dd1d8aad25a2860eb"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "cd90e760c557ebc82ccc23bae9e350f8"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "e5c7f474540142c970d903021088600c"
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
    "revision": "5cc80e0e006b23e1edc09375ae156623"
  },
  {
    "url": "others/life01.html",
    "revision": "553f1a33042aaca2bbda252b45871cbe"
  },
  {
    "url": "others/life02.html",
    "revision": "d2b1e2aa44635cbb321d23b3464eff9c"
  },
  {
    "url": "others/life03.html",
    "revision": "206b0d4a9cb2c79356ebf2723df83688"
  },
  {
    "url": "study/env/env1.html",
    "revision": "e0e4bfd7b63baac3a915f95ba05414ee"
  },
  {
    "url": "study/env/env2.html",
    "revision": "e6d7db7dafa7e15220079fe73c5070ef"
  },
  {
    "url": "study/env/env3.html",
    "revision": "d5eecb3d235fad48a649337dbe05c9dc"
  },
  {
    "url": "study/index.html",
    "revision": "caec88073a895c34c8f5414579ef9141"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "bff53e66561051291ae016e4e3e992d0"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "d5cdb37181e04f98c4ecaed4c0da0ef6"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "feea5ff31922aaf631581c0296dac804"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "1dc97109a0f59b2e74fd4272a18d9e59"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "3d63ea0c28105c798329dc473893bef8"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "7c90be2ce1133885dbe8d2b727860100"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "84749505da0fc50e4b3a32c42007237e"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "11d9953b41537969a522407cffebba07"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "714c2add90fe44e3534aac31a62c5949"
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
