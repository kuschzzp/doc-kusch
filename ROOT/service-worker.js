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
    "revision": "85d06e17bd3073c90c74d81e9cf38243"
  },
  {
    "url": "assets/css/0.styles.1efaddee.css",
    "revision": "c61825c9407fea613cf449e798b5c469"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fe498a71.js",
    "revision": "5dce8c4d3dd5b7510f7dc572e1355b13"
  },
  {
    "url": "assets/js/11.8c57aeb6.js",
    "revision": "ff271cb64fc109f478ddcbab2f10811d"
  },
  {
    "url": "assets/js/12.4db672ac.js",
    "revision": "f198a7ee49c41f64e85dcbfb725df153"
  },
  {
    "url": "assets/js/13.e2299ea5.js",
    "revision": "3417cc57a6c99b467109cb3032c650b7"
  },
  {
    "url": "assets/js/14.c22d04d6.js",
    "revision": "607e6c6f75e521c5ac918afebeda1462"
  },
  {
    "url": "assets/js/15.931d1db6.js",
    "revision": "f2014b0805609f4e8c0475dba1eba31a"
  },
  {
    "url": "assets/js/16.27dc7723.js",
    "revision": "75718fbae8fa7d15077e94edb191936c"
  },
  {
    "url": "assets/js/17.8809945b.js",
    "revision": "d4413f805eeb87c519c038a8dd9fe261"
  },
  {
    "url": "assets/js/18.c27935df.js",
    "revision": "4a36c3c707efc4773b3c8e763362e7bf"
  },
  {
    "url": "assets/js/19.1c8eda4a.js",
    "revision": "99a52feae986a4c144c0c664efef649f"
  },
  {
    "url": "assets/js/2.edcce156.js",
    "revision": "99b2342d110c0abff5dc38c2be59616b"
  },
  {
    "url": "assets/js/20.31fded0e.js",
    "revision": "c4bac592d28fd4fbc4768469b19dd560"
  },
  {
    "url": "assets/js/21.07d4093f.js",
    "revision": "ada931cad9c7b7ec43bab3b38acb7d63"
  },
  {
    "url": "assets/js/22.d8f80616.js",
    "revision": "866bd76677016115b6d9fe02a15b9b5b"
  },
  {
    "url": "assets/js/23.cf2732c7.js",
    "revision": "7f751edc6457b06c8aaa71fd0d72ec20"
  },
  {
    "url": "assets/js/24.574f203c.js",
    "revision": "74244c435521ad70c9bbaa6ea4b58697"
  },
  {
    "url": "assets/js/25.00db6fb6.js",
    "revision": "103d3dc2618f69397039e0d2f6d12bfb"
  },
  {
    "url": "assets/js/26.ce1cbb9c.js",
    "revision": "1275c262bc9e454ee95f410a8062df78"
  },
  {
    "url": "assets/js/27.0db32aff.js",
    "revision": "7ece28deb5236d68fc425688c304b685"
  },
  {
    "url": "assets/js/28.b5686f1d.js",
    "revision": "a5aa8ee1442ccc7fb02d4ba447e753d0"
  },
  {
    "url": "assets/js/29.e91e3292.js",
    "revision": "599652d0a0aed56b7788c251d214b4ee"
  },
  {
    "url": "assets/js/3.2b71fc98.js",
    "revision": "170359419e8fc6a941876c9f3c301bbe"
  },
  {
    "url": "assets/js/30.73ea0a98.js",
    "revision": "834d8ea8c8b432819df39cb53c41b358"
  },
  {
    "url": "assets/js/31.be22003b.js",
    "revision": "272f017661c71f9d235a49f71b7cfed4"
  },
  {
    "url": "assets/js/32.da99c19d.js",
    "revision": "81f396e517b9ddb7cfab9416173472ff"
  },
  {
    "url": "assets/js/33.06172afd.js",
    "revision": "f9a4219ad7b94df9d0879bbabf2f6432"
  },
  {
    "url": "assets/js/34.ca552d89.js",
    "revision": "8103a74241b2df56a6f5eec5a6bae38a"
  },
  {
    "url": "assets/js/35.2bbb1059.js",
    "revision": "3fc9aa6194f8afdfa27397d51744c5c5"
  },
  {
    "url": "assets/js/36.4f1b4e7d.js",
    "revision": "f49f9f1ab625dc222a2464842e311f0f"
  },
  {
    "url": "assets/js/37.7393be22.js",
    "revision": "41d6deb10e5d288e77c7bfe1b18750a8"
  },
  {
    "url": "assets/js/38.11f6f644.js",
    "revision": "84583db2bf7e606f4a73daf84492cdab"
  },
  {
    "url": "assets/js/39.0565174d.js",
    "revision": "4f2f48be33e4c4ca28338057736d7e7f"
  },
  {
    "url": "assets/js/4.08d679e4.js",
    "revision": "f3c186c41b57f7d89a4cd1455429248f"
  },
  {
    "url": "assets/js/40.592a8563.js",
    "revision": "5f3dcc270f9b58993b77252b2f5e4b68"
  },
  {
    "url": "assets/js/41.6de8d156.js",
    "revision": "105f5f195d4a77d8b09732a2f40980e0"
  },
  {
    "url": "assets/js/42.6b598fc6.js",
    "revision": "0c779903fe43cf834a6dd39421a139c5"
  },
  {
    "url": "assets/js/43.76c161b1.js",
    "revision": "fa83feabe2808165c0d69c83f3f632ad"
  },
  {
    "url": "assets/js/44.11df0dcb.js",
    "revision": "e4dd760dc2df49827d2047b671c344df"
  },
  {
    "url": "assets/js/45.dd799f69.js",
    "revision": "e82b36bf43beadc05fbcdb4bb1188827"
  },
  {
    "url": "assets/js/46.331cd29e.js",
    "revision": "fb676f41951fecb8df37bc2e871c82c9"
  },
  {
    "url": "assets/js/47.8c305d25.js",
    "revision": "dbc33109770508a0f5587773b6f4401d"
  },
  {
    "url": "assets/js/48.6ae2a27a.js",
    "revision": "c960a160fe6868bd11388e3519a0e4e3"
  },
  {
    "url": "assets/js/49.1f94fd76.js",
    "revision": "faf5bce93817d773d8c4d596dcfe0b94"
  },
  {
    "url": "assets/js/5.0e5b8816.js",
    "revision": "30cf4b077f8f37ac40062bae8368918b"
  },
  {
    "url": "assets/js/50.1fcd352a.js",
    "revision": "08ea9f6b4ff5d3226b624db750427656"
  },
  {
    "url": "assets/js/6.5944849a.js",
    "revision": "4507ee08b8d0b70038221263be9d6347"
  },
  {
    "url": "assets/js/7.b4e8cb2f.js",
    "revision": "ce10d739bdb7b9287704371a37564ce6"
  },
  {
    "url": "assets/js/8.7c51846f.js",
    "revision": "febb7bd78bf0c653fd0e923d7ec76d43"
  },
  {
    "url": "assets/js/9.1bb9e9b3.js",
    "revision": "5f9b2a52d6e1a5d56aabb125bb28aeee"
  },
  {
    "url": "assets/js/app.3e431670.js",
    "revision": "b9f35b8bb8b030957ce122f3ec5586f5"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "4f1be66d84d8ff1a97f6f9f6f70891d8"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "4f3aa658c4a3d478741e5fd904466a07"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "a0808b1363f12954109299cd5ab0600a"
  },
  {
    "url": "database/mysql/使用binlog恢复数据.html",
    "revision": "2cf1cd7d8aac223b483ee70d208d1c4e"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "888cc3b8fb3637d8240656147c346b55"
  },
  {
    "url": "database/redis/index.html",
    "revision": "c62fb97a569d327af00bcbfe7e465545"
  },
  {
    "url": "guide.html",
    "revision": "a567e22b072802df0f8aeb782e1edf31"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "7d77b0b5024912c21b6705bb89afe210"
  },
  {
    "url": "interview/database/index.html",
    "revision": "30958a635a9482172f453f965fdb8cb2"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "13596ad04601b87adbb8eccbbec1b50e"
  },
  {
    "url": "interview/java/index.html",
    "revision": "ea681fdd85f2810f1f00788503ddf316"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "e61cbfc6834b07ad49ebe4091366cc4d"
  },
  {
    "url": "java/base/index.html",
    "revision": "41506be773f2ba11f9f12c18df346698"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "c855a49cc87bd0fcc2e54b6e1f589af6"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "3a664e938e2c8dc081c236e62548db30"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "95361a644c11dea14f0731fe35a0ce32"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "23206d29a510706219d1a1d328c4c7e8"
  },
  {
    "url": "java/base/重写equals和hashCode.html",
    "revision": "6ff96114573049a9de11efdf9589c559"
  },
  {
    "url": "java/design/index.html",
    "revision": "2caad03ca6997345c6bb6a557df28ef8"
  },
  {
    "url": "java/internet/index.html",
    "revision": "256e37cd0d6435c67533d174c3848c10"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "49cf816e93533a4b62012cd23ee4e258"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "2129035a613f38de9d5742815712c07b"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "9c82640c9ebd05073a9e4454a4febb84"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "37ffa3a71fced566ab7e19f9c01695ec"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "ae11fdfbcd90f3d4c4ba0fecf8545f36"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "1568496c73af1b547235e61859200921"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "f556e6d68b7a2839e82e85dc823bac16"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "54fba5f43fadfe469ba8ae16fd3acd7e"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "7753340f043ab8c6c4fa5afd778ae558"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "f2cbcf1266ca54f20856ca1d3b7cfc1c"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "0127633b0ec15feb5f50fbf28ff5c4e3"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "2d643a6fc3c42d164c9eda097859034f"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "26f62833570f5ab5b734698a540c04eb"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "1840639051577ba2cc496f4e096906a0"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "817c34ffcb7b7e214615e54d7d79d5c1"
  },
  {
    "url": "live2d/haru/01/assets/moc/haru01.1024/texture_00.png",
    "revision": "4685fe8c12b19e64bf29cb81c0f01af1"
  },
  {
    "url": "live2d/haru/01/assets/moc/haru01.1024/texture_01.png",
    "revision": "49c7928d79f4bf012a203d0c4d6fa0b9"
  },
  {
    "url": "live2d/haru/01/assets/moc/haru01.1024/texture_02.png",
    "revision": "aeaefa34e3a53d542fde03907813db7d"
  },
  {
    "url": "other/ElasticSearch修改Mapping.html",
    "revision": "e5ff1065182a63d3caf0cf5ea237b5b2"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "dafc3ee767f55d6b615e26db4d770516"
  },
  {
    "url": "other/index.html",
    "revision": "2782345fa57da046a8337e0a1dc78831"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "5f884adb35ceaca06c3f5f79204ed780"
  },
  {
    "url": "other/常用网址记录.html",
    "revision": "852287e024c25a1037ea1b3db04435f8"
  },
  {
    "url": "otherImages/1.jpg",
    "revision": "163ec77fc50f1610cdbd1f6f6c4a9eec"
  },
  {
    "url": "otherImages/2.jpg",
    "revision": "083c812028eaaffde05328b243870b3f"
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
