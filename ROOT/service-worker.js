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
    "revision": "7507c33c1ba5bea2da22deaf083d0fcf"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "0a9b2fc2a422c1301a0b74966bab2918"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "7f1aa4708b333f23c19acf5bb25b59f4"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "e1154693216287d526e0cacea067fdc7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c10b67b4cff975d23d6d01657b2d2fea"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "42ff054d727162ec4aff3b5cea003ea1"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "cbb6d7e6eb79a13126ec0e27f3764821"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "9e2a56c8dd4d387424fab37dd23a3e7e"
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
    "url": "assets/js/10.4840e2ee.js",
    "revision": "8f85e86e1d505f42843d8e8042537e1f"
  },
  {
    "url": "assets/js/11.43d55b01.js",
    "revision": "4edf4a0f488c89efdc5a9c5b8bfd156d"
  },
  {
    "url": "assets/js/12.5e97cafd.js",
    "revision": "73fa8f74f7d02cc8a1fce48c817ae248"
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
    "url": "assets/js/15.197ed649.js",
    "revision": "5484c7c20648228872c16a43eec909a3"
  },
  {
    "url": "assets/js/16.4ae86331.js",
    "revision": "a26f6ce939c28117566ebe21b55df07f"
  },
  {
    "url": "assets/js/17.9f56b122.js",
    "revision": "60be6049bf4f6e1bc68bb7e60ea96fed"
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
    "url": "assets/js/24.144e33c2.js",
    "revision": "65ec7269e80e54e7da8e0a5ec3d829a8"
  },
  {
    "url": "assets/js/25.af87cdbb.js",
    "revision": "d612b93d13fbb0fdfd5426ce60b7bb75"
  },
  {
    "url": "assets/js/26.34ce8144.js",
    "revision": "503f3b8d2bb2bf089f43f73636c785ab"
  },
  {
    "url": "assets/js/27.da401dee.js",
    "revision": "7e9dd5322115c8680790a09d60c75437"
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
    "url": "assets/js/30.487bb793.js",
    "revision": "166be2a703f8611852b8fca77653a600"
  },
  {
    "url": "assets/js/31.5192535d.js",
    "revision": "e149105d7aaf5d1b847f00eb12c89771"
  },
  {
    "url": "assets/js/32.d025e200.js",
    "revision": "bbeb95f821b537032e434f1ebe734f1d"
  },
  {
    "url": "assets/js/33.4c34a32e.js",
    "revision": "cc1fbb4d71389914acddeb7a60213215"
  },
  {
    "url": "assets/js/34.b62b4fda.js",
    "revision": "9e99b5f76b07bb033332f5dc2578f03e"
  },
  {
    "url": "assets/js/35.fa9a2cab.js",
    "revision": "a7a16380fa69873d4fdbfcb51436497d"
  },
  {
    "url": "assets/js/36.46b92cf6.js",
    "revision": "41b5c877ad237e3aad4d9d05ee093478"
  },
  {
    "url": "assets/js/37.292d5a20.js",
    "revision": "1968c72ae8023628ab6d691c252128a7"
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
    "url": "assets/js/40.26b3d185.js",
    "revision": "78e89c9eab8f3ac6ce8f0b21e4737178"
  },
  {
    "url": "assets/js/41.afa18195.js",
    "revision": "a0c930a389309d498c4650b156d22eb8"
  },
  {
    "url": "assets/js/42.1639e887.js",
    "revision": "bcb11f511583bf2513dcc2fa7dbb75e3"
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
    "url": "assets/js/46.6c41f295.js",
    "revision": "28197d937202fa73d96ee66b3bfb55ff"
  },
  {
    "url": "assets/js/47.e7ee8837.js",
    "revision": "7c6600260025e36ec036ab73bcf8c826"
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
    "url": "assets/js/8.ca9c6730.js",
    "revision": "975855d5fe71c7f7e45eaea04dcf1ccc"
  },
  {
    "url": "assets/js/9.a16c7d7c.js",
    "revision": "426a746e30df8fd93e696cded52e6c7a"
  },
  {
    "url": "assets/js/app.e2a93afe.js",
    "revision": "c247b5707db496681220eb1d29a508f0"
  },
  {
    "url": "front/frontbase/base1.html",
    "revision": "0544794e3c1ee4e97b6c84950fbcc0cf"
  },
  {
    "url": "front/frontbase/base2.html",
    "revision": "a534b09f7456da0d1a7ff5ed8e9836bc"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "971104b33a5d8c28a6bac84bc87dd9b6"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "ef14c24caa1df7f0b5c659daa0fa1c1c"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "437268e2cc08d890b0295f9a7b1556c6"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "ca3daa511130df096c7fc8e75a65dcc4"
  },
  {
    "url": "front/index.html",
    "revision": "3521c5df309926b8832c433e6211ed21"
  },
  {
    "url": "guide.html",
    "revision": "743e153320325ea70ee6723103d723e8"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "9ae70b5189ed4b93500d64218da0b8c2"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "0c87754ec78927f447868273fcb4bfa5"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "7cf1aaffa88ac797b541aefd35aa1875"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "3f01721826c8c95d726644088d575a77"
  },
  {
    "url": "java/base/base2.html",
    "revision": "c28b68cf4c702cefd98fe40414c91f05"
  },
  {
    "url": "java/base/base3.html",
    "revision": "66502ae6f76b485ea1a4d775e79a8ed6"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "11b6ea18be97d4455479e258b9294782"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "2ba87b3be2375dac71e990cc6b511d21"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "95ede68233306c20a590c92d7910492e"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "bc6583e6044d98220ea5b21297a26e2a"
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
    "revision": "1f9f922b5f7064f2b8c0ad2644775e6b"
  },
  {
    "url": "others/life01.html",
    "revision": "0775a3c0a420355028e91073f688be76"
  },
  {
    "url": "others/life02.html",
    "revision": "6afa5a50e5581c0749e2f67f9c44e05e"
  },
  {
    "url": "others/life03.html",
    "revision": "ce29f1fdea01a533bc5f29e226705111"
  },
  {
    "url": "study/env/env1.html",
    "revision": "c69690b5fb8f957199826d8fee84072a"
  },
  {
    "url": "study/env/env2.html",
    "revision": "816cbdcc53584fe4b5afb0e92a0b1abd"
  },
  {
    "url": "study/env/env3.html",
    "revision": "13886942e44ebd25a37ad50b72a8b698"
  },
  {
    "url": "study/index.html",
    "revision": "620508026589a227a1afad60eed645a8"
  },
  {
    "url": "study/linux/linux1.html",
    "revision": "ca5f57e6a190f2d94791b330d5b97d4f"
  },
  {
    "url": "study/linux/linux2.html",
    "revision": "1f14f26428786c52100e11f90123b9c8"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "6a33891e3d5f7299647e694a751d8e7d"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "e2e36d489bb2da9c9b7e06d1e56aedde"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "72431f10ed17fbf65748171784068c64"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "b8c48ac9b3f4ba7a84b2507e1c77881c"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "72ea5310f8fce68a7c60cabc0f959f5d"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "06e3ef5c3e11b2b8cbdd869b32e208e5"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "96c34beb367b65fd01d7f418f15897e3"
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
