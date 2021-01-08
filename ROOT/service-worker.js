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
    "revision": "a7f646577481d77bc9a68869f1fdeb06"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "31d2e41223c6e91781c1a1b5f87f7465"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "c6a1ec76b74a89d5d475c4248deb4d57"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "be1891d18cf59deed1df843cdf8b0666"
  },
  {
    "url": "algorithm/index.html",
    "revision": "8745be224a9c4676140093c75ca15944"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "a470b2f348ce83dc215fbacd78a623ab"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "561615dacd9e8b780673bad6ec19639a"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "2eecb5bb95126ef5ccab460eefe28aff"
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
    "url": "assets/js/20.2c4707f9.js",
    "revision": "65568a8edff32683f16c8c5cebeb63d7"
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
    "url": "assets/js/30.0096e23d.js",
    "revision": "d75129c803717d0bb65fc44d9df1693b"
  },
  {
    "url": "assets/js/31.405e042f.js",
    "revision": "cc09084a99eb3484816832aa2eda8afc"
  },
  {
    "url": "assets/js/32.8fe23f9a.js",
    "revision": "db8b3f96964cdb3b6a694a8f8743e417"
  },
  {
    "url": "assets/js/33.03372d4f.js",
    "revision": "86865e790838f5816c2ae3b63e216eb8"
  },
  {
    "url": "assets/js/34.ee7f220b.js",
    "revision": "061cab38534d5715a3da34c36fdfaebf"
  },
  {
    "url": "assets/js/35.caffe23a.js",
    "revision": "fe4fea11c51a985149d5ca763864e3a2"
  },
  {
    "url": "assets/js/36.f9a56bdc.js",
    "revision": "7429c87f897f0a9f82946d4a4fd216a9"
  },
  {
    "url": "assets/js/37.e56782c2.js",
    "revision": "2f7e7427ba0742734c0b6ed0d5a44d09"
  },
  {
    "url": "assets/js/38.0fc2c931.js",
    "revision": "a428ba543f0ce1c361691082d03a22d1"
  },
  {
    "url": "assets/js/39.3785f9e7.js",
    "revision": "225ad120e950489c647ac0643802c3c8"
  },
  {
    "url": "assets/js/4.7494cf5d.js",
    "revision": "6c9e199ccd8c8063c21e03a15ff6e8ce"
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
    "url": "assets/js/42.06853518.js",
    "revision": "41c30ed6bb27614542bb7ed7b2b866ad"
  },
  {
    "url": "assets/js/43.b970de81.js",
    "revision": "f5fd97c02f8aa0b8801f3f68bf2b1bbf"
  },
  {
    "url": "assets/js/44.c717d192.js",
    "revision": "06418f3b0ea8956aeb4a885b164970ff"
  },
  {
    "url": "assets/js/45.3de206c3.js",
    "revision": "ac901f9c85d2b6744314960712ef4b11"
  },
  {
    "url": "assets/js/46.9a7cf387.js",
    "revision": "085a2b54e72c3c7f0e055bddf6552dc1"
  },
  {
    "url": "assets/js/47.748ab16e.js",
    "revision": "2957532cb479f8d8b0e0b6fc6c68b0f0"
  },
  {
    "url": "assets/js/48.c70f4156.js",
    "revision": "952ad095decc121a0789bba6151514e1"
  },
  {
    "url": "assets/js/49.fd389891.js",
    "revision": "1549cb3dcb6255239e4f397c9ad42bc5"
  },
  {
    "url": "assets/js/5.6343fe11.js",
    "revision": "a9cffd3e13861ac5b3057495160c132e"
  },
  {
    "url": "assets/js/50.1b5128b3.js",
    "revision": "ebe6fd7c115eba7a5f49567817cb00a2"
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
    "url": "assets/js/6.f5d825ca.js",
    "revision": "da18c4f444038f5fa66e3b8ab10c4378"
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
    "url": "assets/js/app.414fb610.js",
    "revision": "dce2b24b95e1971098838ab3189daa5c"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "f9aa62c52cc483eb3d185e47527fab1d"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "ba6c47f6be65c55837253339d7c44850"
  },
  {
    "url": "bugs/index.html",
    "revision": "0cf46e617c900aea1759ac8042eabcfa"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "bf1c08a02a3571ad0d9d9d76a2c884b2"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "5eacd73ad3c113c01fc965f67a9e5da7"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "3099812779bcaa455a5ea63c28af2358"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "8e73c687e2994c11b5ecdeacaa0aeaeb"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "05345ace354e6f38fabf13f80e370daf"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "5b7cce748210091feaf27ce413f9b2b6"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "380f9dce9ad2d3b48f77214de2dc1ab7"
  },
  {
    "url": "front/index.html",
    "revision": "b22775f1dc0d963f088ac7fa7830a146"
  },
  {
    "url": "guide.html",
    "revision": "5bb047ddb59b126d5c7b919980430c65"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "0a0a98ce75a00d1fd8993d0b1650b26b"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "29585465cfc900fd3c1e5ab49d0fceff"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "0d00cf04037ea52ee90c564f3e4d3db2"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "67331b0dd2bef198059ee66de263d7e7"
  },
  {
    "url": "java/base/base4.html",
    "revision": "b2a1ba6c3579a9be071a0b1657fdc475"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "d58109ddb107c20f9a29ddb32470ad41"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "9bdad682f62444f7b109ae79a4e33783"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "00155b3fbeb8c734eff2e13e63d544bb"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "f0fbc4a691006c390e10a35d6abfeabf"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "8c0aa43b976e173ccccd86b793b17b6f"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "30a961da64d577fafbe6a535d7cc65cf"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "1109d6e0a475f8fb9605c009592faabf"
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
    "revision": "a6425a768c7dd0c9bab923c8b8e98f87"
  },
  {
    "url": "others/life01.html",
    "revision": "3d92073eb4d7d7e346187c1dcb8c2906"
  },
  {
    "url": "others/life02.html",
    "revision": "b9621235906dd6824c4eb8b5645d120e"
  },
  {
    "url": "others/life03.html",
    "revision": "42e014281f6e3e1138c396f6c0bd4bd6"
  },
  {
    "url": "study/env/env2.html",
    "revision": "6e4b6ce9fc409d1d09615658f19b141b"
  },
  {
    "url": "study/env/env3.html",
    "revision": "ef0af35663af50f394ffec946df2e7ca"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "90f15dc9c6a9b6ed91a9eb0cfa76ce12"
  },
  {
    "url": "study/index.html",
    "revision": "cdb80704e7fb7a1e3f854f738d43dd43"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "47de0c237320766baf1f20c0dc78153c"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "b684d46e516fc8979349ca20cbac12b6"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "5e08b3b123f1d45a622d8f0d5c71aea7"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "de8032bb4b4d0ab81fe98b19fdc60d9c"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "fae1c68aca1bea6ac40834bf5a47390f"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "8c9ace14ecee5cc775a5cb2b85fcf06a"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "bea2394758a12b29f7e1892880b27a3e"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "6b96b86da03d29acb52830d3e367e46b"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "5d735aad7e584a96b674ee1d037e950a"
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
