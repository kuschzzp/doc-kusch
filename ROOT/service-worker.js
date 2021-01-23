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
    "revision": "ef2394b7110948c52e29d472b522c60f"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "0854f5249c3df9ebfe28df7fd026c849"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "465cf2c70566b72b03a05e3689991b9f"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "0e2cf0ffca915b7e665c09e77af1beff"
  },
  {
    "url": "algorithm/index.html",
    "revision": "80361937bfd14e2fd8de2fa5e994e373"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "d9f4630439610264ff513b3fe8e66bee"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "f55545fa10f31cf6be5d0a90d840e275"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "fe7db72a0448093fc3251f2b6847046d"
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
    "url": "assets/js/12.7fa643f9.js",
    "revision": "560b9f82a1926d8dfcd57d31ddd7eabc"
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
    "url": "assets/js/15.3dc7f779.js",
    "revision": "8d8c45f715c291e314c5daa11ff22ec5"
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
    "url": "assets/js/18.00660627.js",
    "revision": "51c09cba6b257e1cad3cbe37c00aa109"
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
    "url": "assets/js/20.612cf0ea.js",
    "revision": "550d03c8b8b9ea5fb44690da3206e27e"
  },
  {
    "url": "assets/js/21.0db8e30d.js",
    "revision": "d7dc8a08f09792a60ee0abb8812ac55d"
  },
  {
    "url": "assets/js/22.4fd0cbd5.js",
    "revision": "b6764013f60da8c20715e6f885ea668d"
  },
  {
    "url": "assets/js/23.10f58936.js",
    "revision": "624515690648acedfc4ffa58206d69f7"
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
    "url": "assets/js/31.4094a967.js",
    "revision": "88652d4fd2c49fa0cf79cf5d8cab66a8"
  },
  {
    "url": "assets/js/32.cab9befc.js",
    "revision": "6b3b9197a034096b6e38d79b5c6a24c8"
  },
  {
    "url": "assets/js/33.386a7af3.js",
    "revision": "7e65e599fcfb5a312db0d5fff140e7c5"
  },
  {
    "url": "assets/js/34.5453e662.js",
    "revision": "c25fd2a921d5e31af17b593b4908c1db"
  },
  {
    "url": "assets/js/35.bce62520.js",
    "revision": "2fed2003bc574253f70d8c9a563e8124"
  },
  {
    "url": "assets/js/36.80d70548.js",
    "revision": "fe789aa78284073fe57dfac2ba4cd463"
  },
  {
    "url": "assets/js/37.77612802.js",
    "revision": "1e720612918d8c58a6298098147c1e56"
  },
  {
    "url": "assets/js/38.c4c42cad.js",
    "revision": "c78466f3b9c55c1f3add16cf6abaf47f"
  },
  {
    "url": "assets/js/39.f5885894.js",
    "revision": "c372753433deb90966af56d6c3570b8e"
  },
  {
    "url": "assets/js/4.47093d68.js",
    "revision": "9fd5efda38fd045bb645683d0bc82f16"
  },
  {
    "url": "assets/js/40.199eb868.js",
    "revision": "1ac99ffbce0f00dc33164594757d531b"
  },
  {
    "url": "assets/js/41.6c785346.js",
    "revision": "473e47c323ba236cf30a27dbcb57f68a"
  },
  {
    "url": "assets/js/42.e7b62509.js",
    "revision": "eb44bc804d8f044a22b2492128589eca"
  },
  {
    "url": "assets/js/43.ae036583.js",
    "revision": "dc7089d8e7f77cf6f759a2d3e688e59b"
  },
  {
    "url": "assets/js/44.c8c45c96.js",
    "revision": "a0966a230ab63e2a0d8077a20f499e35"
  },
  {
    "url": "assets/js/45.b3f13f35.js",
    "revision": "5bf1650ea1d1b1f375c64232bd8b0b2a"
  },
  {
    "url": "assets/js/46.6e7e93c5.js",
    "revision": "7fe6e65ed5bfc0e32eb82012b4b4449e"
  },
  {
    "url": "assets/js/47.7f5c9a01.js",
    "revision": "ee52225708f98b6b62cd16b10b49c12c"
  },
  {
    "url": "assets/js/48.70ae9447.js",
    "revision": "373641a3025ae859ee08c5698732b1d8"
  },
  {
    "url": "assets/js/49.6ff3c991.js",
    "revision": "929c1d417ee0dd87c41f162da897fd80"
  },
  {
    "url": "assets/js/5.7c55ad33.js",
    "revision": "a17864284458554e01d1b8465c8d71fd"
  },
  {
    "url": "assets/js/50.ea73beb1.js",
    "revision": "85a3ea85d159561e5bac23274c055fab"
  },
  {
    "url": "assets/js/51.4bf2fb6f.js",
    "revision": "687c8a80cc61850a40d91fd68d69445d"
  },
  {
    "url": "assets/js/52.306af62b.js",
    "revision": "2289efe93b68604cc497684dacf6a1aa"
  },
  {
    "url": "assets/js/53.3d39a9d5.js",
    "revision": "fcb3424e66d744c8c7fa6de68157efcf"
  },
  {
    "url": "assets/js/54.c43b5c96.js",
    "revision": "58448603da2952d32260204f47457902"
  },
  {
    "url": "assets/js/55.2cf552b8.js",
    "revision": "cd92d75c3dfcac2c5e7e7813a5dd3aeb"
  },
  {
    "url": "assets/js/56.79c84c52.js",
    "revision": "cf0d04c406142d494bebc6179e0b8b3f"
  },
  {
    "url": "assets/js/57.ac7b408b.js",
    "revision": "c0fe34528cbc6ce686d321c0ccb3c781"
  },
  {
    "url": "assets/js/58.18989fcc.js",
    "revision": "f2888c02262faa4380e10d8cfd7f91eb"
  },
  {
    "url": "assets/js/59.dc9104ad.js",
    "revision": "b37e62d8c31ff95eb54ee41a62f07e96"
  },
  {
    "url": "assets/js/6.c207ef8c.js",
    "revision": "2109b2c947fbef3cf5aede939930ceef"
  },
  {
    "url": "assets/js/60.db728e97.js",
    "revision": "f19d31a0b81925bd5e6d8ed81494a0ce"
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
    "url": "assets/js/9.fb5a5040.js",
    "revision": "006e56414671c3310154d281b547caf6"
  },
  {
    "url": "assets/js/app.34ecf203.js",
    "revision": "94ea0fa27696e3c798e2681c0464b350"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "8593df89a837990a0803afa3a85eb1c2"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "3bc7a3070a211cb9b6e1036fc960c25d"
  },
  {
    "url": "bugs/index.html",
    "revision": "44e117ebc48124bd9ba1796313ec2da3"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "a3cc4ddfff43072347078b9b72e33200"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "3b388dc055b036920f20198494406f31"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "76152ed30d6edc29daf375d6e7ef61f0"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "2ce9e952c64cf3251a7fb4e1687907d1"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "320d0c300a1de7e12c89d879da6e0cb7"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "fec17f9dda5807ffe069081d2e539102"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "3f15d6a77fac3ed2cc3ad1683ba25786"
  },
  {
    "url": "front/index.html",
    "revision": "e2bb8dd689f0ed40a7acbd142e9ef6cb"
  },
  {
    "url": "guide.html",
    "revision": "0f4f86de2537a88f571695e08cf7f08f"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "f0d69b7c0ae661c6477d76a02942eceb"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "780ba34450fd5952723ab3d79569976e"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "1b4c18ae652b070dcde02dfcb091e272"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "a9e28700c42cfb9ba3c28fee7245c553"
  },
  {
    "url": "java/base/base4.html",
    "revision": "5d784cf5aacd4d13d7ccd89e1b83872e"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "20c83101b3890eb25b2e273f57fb767a"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "e7cc58142aa1560fc8e26ecf2b87afa7"
  },
  {
    "url": "java/base/operator.html",
    "revision": "6253544463cca8b39e8c0258023ff7e4"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "f17f0d0ea3ba3b0c704cf3de1498c747"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "fb31cce3551fe4960e5bf960ec50d419"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "170c9650e3318956628cc16b3ace7711"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "d537024509f6b81b5e0c40ed28d1e029"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "ffc2e182726a9d3c2ed04542f4b6cdb8"
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
    "revision": "941dfe0cb5376b362b89fe6ba81a8723"
  },
  {
    "url": "others/life01.html",
    "revision": "fdd2fe3962bd91f79afb436e7cd20dc1"
  },
  {
    "url": "others/life02.html",
    "revision": "a98081924c5bdfa93dd4aba4cec2a0b9"
  },
  {
    "url": "others/life03.html",
    "revision": "e1ab5afc1b0de5ed62ea460fa13efe3f"
  },
  {
    "url": "study/database/database2.html",
    "revision": "5763891889621476dfa83c370994ac7d"
  },
  {
    "url": "study/database/databaseIndex.html",
    "revision": "533f56c8c1db6239a84502315224ba18"
  },
  {
    "url": "study/env/env2.html",
    "revision": "614270ea2af0382b119255154dab9a2f"
  },
  {
    "url": "study/env/env3.html",
    "revision": "7bbfcdd7b452894674954ee3461b3e9c"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "b1459ab1e36f4dd8e456a8be1f3a1428"
  },
  {
    "url": "study/index.html",
    "revision": "5c3f63e2c972fb07be655ab08a6d36e3"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "b96d9103bf17d6b9c615e0c634c0ef0b"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "0a9547cb1ac5d384b76d9a936f541314"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "acd79a8f852a854e31ea9ff97acc5c9f"
  },
  {
    "url": "study/linux/xxlJobDocker.html",
    "revision": "0615080f04e6a93a4f3c2e79ff2571ba"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "73e5902f0a91809fe07af2dbfa08fed7"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "97e05b9f56ce7311353312245ee88f72"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "8be122677e9b9c2cdfc88c31902d802d"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "a80d98af0a71d67356ba50bce61597ca"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "6b09df0122034ec74362f1d643dd71a0"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "49b034059dcbda37090119f0dcd19e14"
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
