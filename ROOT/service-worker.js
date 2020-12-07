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
    "revision": "2be77c70f66ac371ce76a5a6fae40b58"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "533e743f9b93c3de6a641086a0cdbece"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "df52c8491ef93791a938df09dc7f45ec"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "70f4c9ad2ca60e2ac8134ae60208f62e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "413b0df841a72c4f4aefefe773c5f373"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "4102a29531377ef8619cece5092c6693"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "4a05032256bb240d7b454e8435bfc7a2"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "01bcfd70830ed8c9ebb266c03cd1de67"
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
    "url": "assets/js/10.4708e488.js",
    "revision": "2c6e820b593588198c1942cc6c7eaaf3"
  },
  {
    "url": "assets/js/11.07fc0351.js",
    "revision": "a53ad44b4709c012f937c680c2fa6e87"
  },
  {
    "url": "assets/js/12.3d894856.js",
    "revision": "9155051f0ac5e75d39df9bf6ea4bbc84"
  },
  {
    "url": "assets/js/13.a9bb41ed.js",
    "revision": "37db1ec77166896f0939ef7441c23e4c"
  },
  {
    "url": "assets/js/14.076ec3c6.js",
    "revision": "a79bebb8fdc8457d9c96cca3fa70800f"
  },
  {
    "url": "assets/js/15.6261023a.js",
    "revision": "65dcc6c337516c4856ccb56f87c4f96a"
  },
  {
    "url": "assets/js/16.927f3b34.js",
    "revision": "e8333416f14bff34385f73eb3a4711b9"
  },
  {
    "url": "assets/js/17.29f47378.js",
    "revision": "02bd39d3b83c3e26619508ebe0ba85f0"
  },
  {
    "url": "assets/js/18.fbe9ee4a.js",
    "revision": "d1ae117bba26b2c7bf7bb1ce69f4f718"
  },
  {
    "url": "assets/js/19.a5e7ffa3.js",
    "revision": "3a1519fc0c6b290cc5d1051dfdd98410"
  },
  {
    "url": "assets/js/2.6e8d2093.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.263a1120.js",
    "revision": "597765aa2da1fb9ba00b29c26240cd49"
  },
  {
    "url": "assets/js/21.ba0922eb.js",
    "revision": "25af6a3e823d93c4d6422a44aa40fe37"
  },
  {
    "url": "assets/js/22.4fd0cbd5.js",
    "revision": "b6764013f60da8c20715e6f885ea668d"
  },
  {
    "url": "assets/js/23.017744c3.js",
    "revision": "36df809ee995031e197acab862a15107"
  },
  {
    "url": "assets/js/24.cdb23a91.js",
    "revision": "67f759258980be6d77f8c22ae3c79152"
  },
  {
    "url": "assets/js/25.71d3356a.js",
    "revision": "cd34283c886dbe9631ab0e6ec0e0248c"
  },
  {
    "url": "assets/js/26.ebf5276b.js",
    "revision": "5b58d52e3167c38d8d4d069496ece514"
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
    "url": "assets/js/29.8da4e207.js",
    "revision": "bcb3ff00e64d3746bc91b9fdaddf4ea5"
  },
  {
    "url": "assets/js/3.0d67d627.js",
    "revision": "08ac41df925fb0adac1f33c56c0e310c"
  },
  {
    "url": "assets/js/30.bdf84f92.js",
    "revision": "c09c16cf0d7f28765a69a5290bb609c3"
  },
  {
    "url": "assets/js/31.e8800ea9.js",
    "revision": "fae6256dc7dadfb59d3d49ffff3bdeda"
  },
  {
    "url": "assets/js/32.59659d37.js",
    "revision": "fa3e80c3daee7f54f86e558a447f2717"
  },
  {
    "url": "assets/js/33.a4447a90.js",
    "revision": "8bd10d249d262ec26a4afbafa1458073"
  },
  {
    "url": "assets/js/34.01a7e576.js",
    "revision": "407f6344b22192f1dfe066146053b0fd"
  },
  {
    "url": "assets/js/35.87ee1c18.js",
    "revision": "2fa334c007eeae1961c8f315c36539ce"
  },
  {
    "url": "assets/js/36.c0b43a00.js",
    "revision": "24a4f448bf61689d7e2f2afa1edce622"
  },
  {
    "url": "assets/js/37.adb3f36e.js",
    "revision": "ee2f2cc689ce921c050ba817d777ff05"
  },
  {
    "url": "assets/js/38.ed38b99a.js",
    "revision": "9dc7831a0481b9f25341e9ee3cc7aac9"
  },
  {
    "url": "assets/js/39.a2b0652c.js",
    "revision": "e0b0044e045c549998e49285a8a45113"
  },
  {
    "url": "assets/js/4.70a70d87.js",
    "revision": "7c7b0a2b91722960cbcdb6bd50a3dc05"
  },
  {
    "url": "assets/js/40.d73cf454.js",
    "revision": "209d340daf65dbbebba0f0125917374d"
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
    "url": "assets/js/44.53f14104.js",
    "revision": "25111582e9428f4bb62ca29a7e4c9dd9"
  },
  {
    "url": "assets/js/45.3f10dc5d.js",
    "revision": "6e5d770a7226e35580039d09c6d6a245"
  },
  {
    "url": "assets/js/46.97a7ebed.js",
    "revision": "249d91d5c2d3dc20186050519f3081a5"
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
    "url": "assets/js/8.edad6162.js",
    "revision": "249d08d902af3fb78c6c57acd323dac1"
  },
  {
    "url": "assets/js/9.a16c7d7c.js",
    "revision": "426a746e30df8fd93e696cded52e6c7a"
  },
  {
    "url": "assets/js/app.01480722.js",
    "revision": "5942ce590c9de8a11a52914a20a56ca8"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "1374992e8c728ddc34b85efe79d66455"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "1df21f67856a8f6b39c0000fdbdbd252"
  },
  {
    "url": "bugs/index.html",
    "revision": "19b43115028c5e3e878ce8cb0b83decf"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "f720a73be0677303c0862875197607fe"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "e1959238f2b93c84295d9956b426d7eb"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "abb6fdc4ada0b8c2ced95d4f906b7f7b"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "7e43c7dc2f859338a8d8f0f652300a38"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "b2dd17910bad39d4df9748d25ff9c40c"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "d24058b1a24006ffb53b365db7a3554f"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "3a7df0618760de84ec65eb2bc5f466a2"
  },
  {
    "url": "front/index.html",
    "revision": "5e45c36534f1a00b26e2bbf241f15114"
  },
  {
    "url": "guide.html",
    "revision": "93bae22441d5317a0d5d95e357f54e1a"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "91c15e1df756eaf51cde734f67cc4bdc"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "a6eefc3b33c565537448b7bea3f524ab"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "20bfb88b90a03ec3ad5d53b2650ef347"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "cd26cbd11a9304e3fec63c0ad94971ce"
  },
  {
    "url": "java/base/base3.html",
    "revision": "d585bc769af6ba1d227f7652e682ac08"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "d1dca0f36b99d7c85b74a99222c28f35"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "14e7d808f0332ccd42376592dc0be5ce"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "c5ccbadae1a644cb6231ddd40b402d3c"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "38ff7f71f9686915096ac3186516ecee"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "efd0f73196a0d858f4423aa45075759d"
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
    "revision": "009aae8a75466cc33cf17269666e50ba"
  },
  {
    "url": "others/life01.html",
    "revision": "fdf255715482d545c89f70c011d85254"
  },
  {
    "url": "others/life02.html",
    "revision": "00d4c6ce3a5fe544b4e452bebaddb540"
  },
  {
    "url": "others/life03.html",
    "revision": "49fff7d67e2219217acef8c1e3063885"
  },
  {
    "url": "study/env/env1.html",
    "revision": "3232622a938658bebdf29b54e1b2a7a3"
  },
  {
    "url": "study/env/env2.html",
    "revision": "20a0bdf2fef7605f4f2b2bb73c367159"
  },
  {
    "url": "study/env/env3.html",
    "revision": "c48535ed8cce40aaf0651ebb03a65347"
  },
  {
    "url": "study/index.html",
    "revision": "c7cd637bdbe702b5aadf416cf006de7f"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "59befa5890094250985de91e34266408"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "563a14a47b74e55464fa9a6985e3fd9e"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "eff6fb1207d0c1849ee97845871424e1"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "383a5e024cf5c4828d7b8134a4fb9b74"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "de064d2e47ad0c42230258208ff63412"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "78bd1dc89019668fc916023bd05a7b10"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "99fbd9c823db36393a66bb28586d081a"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "0be32e54bb8dcf49e8b0766f86dfa103"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "25776d4135acb846e8ad30de9ab6510c"
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
