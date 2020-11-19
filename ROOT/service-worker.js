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
    "revision": "07dc62682cf35839be2d6444f7b61926"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "60b9f132e478f8a150182b7e66d0651d"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "de9bfa4eef74c2071be756ee19e4a44f"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "e2a1f0666f8117ad15d1828915d55828"
  },
  {
    "url": "algorithm/index.html",
    "revision": "e79e714ab856f0ca345a70d1674443fb"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "251831f7eb89311e4a8de3192a0218d0"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "5b32e36dee020a0340b2c58f3593664f"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "7e2412d0b25c4a7543ac0d8604ce5a32"
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
    "url": "assets/js/10.9b434f78.js",
    "revision": "d5905373773adc7fcb2a4b987fc38174"
  },
  {
    "url": "assets/js/11.5a23c5ef.js",
    "revision": "5a538f564139ae6b04d1191085fa6b00"
  },
  {
    "url": "assets/js/12.cff595d9.js",
    "revision": "b257e91f4cdaf3e483057ac8052457a9"
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
    "url": "assets/js/16.cc3a9563.js",
    "revision": "3b29d0bba0e9e9d7cb082540cc9806f9"
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
    "url": "assets/js/2.6e8d2093.js",
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
    "url": "assets/js/26.e0272a3e.js",
    "revision": "9bf6b4effbed35b2b741f6bd29ddbbf7"
  },
  {
    "url": "assets/js/27.39b734b7.js",
    "revision": "df3372c533c14f8778a49a8b69341727"
  },
  {
    "url": "assets/js/28.d46df655.js",
    "revision": "c2bfe4976d4229187e9b31da19559275"
  },
  {
    "url": "assets/js/29.46e9b070.js",
    "revision": "08d5e5e8442c7dc4f25520a6e0dad2ad"
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
    "url": "assets/js/31.30ddab45.js",
    "revision": "a58610930d897742d6cfc1c5963211a3"
  },
  {
    "url": "assets/js/32.302b69ca.js",
    "revision": "359d0fdb708d9a5d54c2c7a8ae377b6b"
  },
  {
    "url": "assets/js/33.c7e5f13a.js",
    "revision": "6a07151c431ecb5fa0e27fab59421796"
  },
  {
    "url": "assets/js/34.c8b7d9b9.js",
    "revision": "dd08c76219b05333966b7d96d6c41969"
  },
  {
    "url": "assets/js/35.b4484b2e.js",
    "revision": "e8dc1af41b0174b1c78c39e8bb9a1426"
  },
  {
    "url": "assets/js/36.5bf6becd.js",
    "revision": "9de9c2694d562b6e55f25143520231c4"
  },
  {
    "url": "assets/js/37.616fc911.js",
    "revision": "ab565e2ac49060955ae8497c6f75bcd8"
  },
  {
    "url": "assets/js/38.ad8f877d.js",
    "revision": "a53c058da264b76777566cf60a6b5a8e"
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
    "url": "assets/js/40.26b3d185.js",
    "revision": "78e89c9eab8f3ac6ce8f0b21e4737178"
  },
  {
    "url": "assets/js/41.1ae3c575.js",
    "revision": "33bb2c1e2a500dd1d56bf207c3094155"
  },
  {
    "url": "assets/js/42.3ec3fd29.js",
    "revision": "8339def370ab5ee9163e15954ed03547"
  },
  {
    "url": "assets/js/43.de0a935a.js",
    "revision": "ca49623c9be67cf33ec96f6b26b19b8f"
  },
  {
    "url": "assets/js/44.32d0f2c6.js",
    "revision": "cdeec6a4cb17c69698095a8b7f69878d"
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
    "url": "assets/js/47.a94a6b19.js",
    "revision": "f0ec26670bbc696f011032a548e91eb3"
  },
  {
    "url": "assets/js/48.415905fe.js",
    "revision": "aa9e0755e018f6ef6f0fc79af0ecf87b"
  },
  {
    "url": "assets/js/49.8e73a579.js",
    "revision": "98bb0ce55c010225a9c5de687756ce4e"
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
    "url": "assets/js/8.ca9c6730.js",
    "revision": "975855d5fe71c7f7e45eaea04dcf1ccc"
  },
  {
    "url": "assets/js/9.714a7d2b.js",
    "revision": "78f7ab2ba4caa1a7cef97d1d76d0ef06"
  },
  {
    "url": "assets/js/app.72f77155.js",
    "revision": "239029f87322f967c7ce9c7a2663f31f"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "abf639436e7afabc4f811c416ffa2fbe"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "ebcecb3fc3434f56e929c2c80961bacd"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "95b1324f185c29ae690279047a637a23"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "78543f42ad5244063619bf87358c993b"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "34fb333978b5b92b4e43621037f37bf3"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "22a8732eba84252094b355c976ffa513"
  },
  {
    "url": "front/index.html",
    "revision": "37b62114b1c83040e8dc50c13efe17f5"
  },
  {
    "url": "guide.html",
    "revision": "27d0a71670ef71030a6aa42e47ac5042"
  },
  {
    "url": "images/docker1.png",
    "revision": "c58c16f1a6b534fe9a76928e3030428b"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "ace6b452841b5a660522c94f3c1c4800"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "4b018a3d825b5f0c936d2618c39c5592"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "78a5bea67a64629ed5581c4120829fef"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "562209eb5981208f169800094585eaf9"
  },
  {
    "url": "java/base/base1.html",
    "revision": "d6521d6a8b7b66b3f0ef112c48fd5ff7"
  },
  {
    "url": "java/base/base2.html",
    "revision": "50b6faaf823dd39a9e4a1dfd8cd14aea"
  },
  {
    "url": "java/base/base3.html",
    "revision": "951618304ef2883a6cae48b0fd454c3a"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "9c2b53a7dd9fc78fec579cb6fb576da0"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "644ceeeb8466a94928ae804bdd9fd070"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "d20cfb7feb50b7c4614de93319a9d677"
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
    "revision": "965c3fb0fd433f3c5b7e8e7ba108b1e2"
  },
  {
    "url": "others/life01.html",
    "revision": "fd1714095923fe748b2c5d1a62841c7f"
  },
  {
    "url": "others/life02.html",
    "revision": "3bee6bf2c95ae52ad78def3028f0cfe1"
  },
  {
    "url": "others/life03.html",
    "revision": "45d5902798583c4633efd10ec3e90b89"
  },
  {
    "url": "study/env/env1.html",
    "revision": "f07b458d9d149ccc3577bf8685fe42f0"
  },
  {
    "url": "study/env/env2.html",
    "revision": "c557fd80e3eea8b8b43a846adaec8c56"
  },
  {
    "url": "study/env/env3.html",
    "revision": "9066e919af7451033b02533fc6440438"
  },
  {
    "url": "study/index.html",
    "revision": "bd607a0da157e8811b5f6a353752c5fa"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "4f0c5075be6f7ef2e523f5e7a27077c2"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "d3e13be34dd5795b126260a5c062de4b"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "fa760c7a52a38e10e5e5d1ea832de701"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "12380b72f0b0cc1bb7960af88597a682"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "33f4861bdce69b85df15a52fd9dcb388"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "121f828c20e9f6fbf7db31071bafec96"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "2e0d6fbef25d8c53d5e1bf73a6ffd5f0"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "60a66385cf3128f27a7bff1c92b26b71"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "f2f8a75caf49f51ec577aed88cedbf1f"
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
