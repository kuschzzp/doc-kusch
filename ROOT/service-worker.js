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
    "revision": "c05c23c090d48c151f1c5cfdc9480c83"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "f0a370ea1aad9f3168357870c5828de2"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "e56fa3bdd707e6717dd620d2ccac5147"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "a18b061997c3255e3a75ca5408ea38e1"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f8e11bbb626ef8075d194e90acd0a0e8"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "c61de040e87b53186c8576fcfcd7ea29"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "ec74a5bab4d2c0b3958ae95da1ec51f5"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "e0e1182c731bce9f1c98f5f4b75cdcaa"
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
    "url": "assets/js/31.884c2f92.js",
    "revision": "fae6256dc7dadfb59d3d49ffff3bdeda"
  },
  {
    "url": "assets/js/32.dc95cd44.js",
    "revision": "f4fb27196fdb0eaf4e94fb6493c4d5a7"
  },
  {
    "url": "assets/js/33.42836d8c.js",
    "revision": "5a25b392f4bb1a73b446fc0a84decdd7"
  },
  {
    "url": "assets/js/34.1b193b13.js",
    "revision": "d38b2390301f0e55d50a4cd658b428dc"
  },
  {
    "url": "assets/js/35.a04b2148.js",
    "revision": "fe4fea11c51a985149d5ca763864e3a2"
  },
  {
    "url": "assets/js/36.c7d71363.js",
    "revision": "fe789aa78284073fe57dfac2ba4cd463"
  },
  {
    "url": "assets/js/37.ed68d40c.js",
    "revision": "42aff2247fa403c057b1667e60b85cb4"
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
    "url": "assets/js/40.9330c8a3.js",
    "revision": "33bf659f329ac65f958746c8a0504bdf"
  },
  {
    "url": "assets/js/41.838243e6.js",
    "revision": "c527c3c39bf61c7135aa3e22ad1eb423"
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
    "url": "assets/js/44.73efceb2.js",
    "revision": "48d2020e39c5193906ee28ef39aa389b"
  },
  {
    "url": "assets/js/45.1866d63c.js",
    "revision": "39ef0c79b0a254fd20e35c67d131ac1d"
  },
  {
    "url": "assets/js/46.29bc1eb6.js",
    "revision": "16971bf2717a9cd9b670f3b3bffebe84"
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
    "url": "assets/js/51.6cfb289a.js",
    "revision": "df1995ae5b8f6aac579233e5f397e164"
  },
  {
    "url": "assets/js/52.12b8c58e.js",
    "revision": "2ddd7404782b442d9f526bdd9e74f946"
  },
  {
    "url": "assets/js/53.3271e067.js",
    "revision": "d8aa1900e4635c796055615f08693911"
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
    "url": "assets/js/app.f1829438.js",
    "revision": "7fb8819e3b1bcc13e33e3dec1094fbb4"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "c45cc6587f239cce7b00d22c74a01d1a"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "8b248781797c92189db6861acfa3673d"
  },
  {
    "url": "bugs/index.html",
    "revision": "89e6b7cc45771329189bf707877e0f96"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "a9b654df91a6235ce125a2c441f22b8a"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "a80580570e62eb61f7185162c39e6544"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "620fc473e38b16bb14e82f0301316efd"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "151015ea28b08d58ccd9c24eebc49f15"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "73d941a46e896f150b035f058bca7f33"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "4041ca8e8edf0bebb628d6b04be5b4ab"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "bd900e1a794a740fb974e1ff53b17cbd"
  },
  {
    "url": "front/index.html",
    "revision": "c1c52b89d9293c74b8b77827cfb46f3e"
  },
  {
    "url": "guide.html",
    "revision": "27119c23c84e9a48df1657a91e33c6e4"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "34d7f845006603852e2d72eb6e8d2594"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "1c4195f2f913e9445596f4d1221b2bb1"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "9b77b05d5bfb775f1cfd7a4599b6157e"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "943ad8cc0b0b78d859498f69565c4af9"
  },
  {
    "url": "java/base/base2.html",
    "revision": "3b25f75dafd8153402643177a36bcd1d"
  },
  {
    "url": "java/base/base3.html",
    "revision": "c66fcf7fc2b55ed4507596b3a4797098"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "815babca16d0a32a04d7f551a12c4d41"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "cdcfc038320b0049b346943d4b843b15"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "ebfcce809abc7a92a691d82df8b11015"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "91a0c3d858b482ae91a7330e558a3135"
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
    "revision": "41f0923c6f39535d16b1cb42e8edc3dd"
  },
  {
    "url": "others/life01.html",
    "revision": "9739906f29cb6082bd6286fb082d3970"
  },
  {
    "url": "others/life02.html",
    "revision": "8e055eb6e8e78ad8835d1e6310da661e"
  },
  {
    "url": "others/life03.html",
    "revision": "2750c551358d32d725a9f3aa1f39f034"
  },
  {
    "url": "study/env/env1.html",
    "revision": "708e4e87631391ff138f518a990836bb"
  },
  {
    "url": "study/env/env2.html",
    "revision": "e37c9730b848cc49f630723f68e2f393"
  },
  {
    "url": "study/env/env3.html",
    "revision": "1aa1556a93e4f21a60ea0ba4933e4979"
  },
  {
    "url": "study/index.html",
    "revision": "30816a98191ded6e53992dff0b3e4fe6"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "56950dbe4c7bbdfd96d27fcd894df24c"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "ac11e535fccdf06c89ca3bcea9641d07"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "5ea2a9649be8562725954f108783df22"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "9e6752494bd06716915ece9de7048c75"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "39c462682d56891d99cf30dbf386f82e"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "ba8ea20b5b5d32a3463a51a1153808c8"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "78961eadb47bc787efdda90c95c85b05"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "388119fd188ef7d38b68c6d2a49aca94"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "6185c0aa71c59e6841afb90c698840b6"
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
