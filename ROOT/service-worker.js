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
    "revision": "729a110ec6cf9eb263353d01297a9496"
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
    "url": "assets/js/10.61c98d89.js",
    "revision": "d027d9bdef09db072f958a3546caa85a"
  },
  {
    "url": "assets/js/11.8c57aeb6.js",
    "revision": "ff271cb64fc109f478ddcbab2f10811d"
  },
  {
    "url": "assets/js/12.4af1e377.js",
    "revision": "7b963503319e4f31644861c48ecbc375"
  },
  {
    "url": "assets/js/13.e2299ea5.js",
    "revision": "3417cc57a6c99b467109cb3032c650b7"
  },
  {
    "url": "assets/js/14.872d4129.js",
    "revision": "38910ae4d05dca58a97cd2d4c5d81583"
  },
  {
    "url": "assets/js/15.2526bcdf.js",
    "revision": "546fc0c6ac60f2dfa1ccab6912c658ae"
  },
  {
    "url": "assets/js/16.ffb63bb1.js",
    "revision": "4a030dc4ddd0b2c36434978a6a3adc39"
  },
  {
    "url": "assets/js/17.59707c4c.js",
    "revision": "8bb2211ceef1faad4375a775d8495e97"
  },
  {
    "url": "assets/js/18.32a2d91d.js",
    "revision": "04a3389cfeaa0afe33599f27cdf55fe6"
  },
  {
    "url": "assets/js/19.e5d75aff.js",
    "revision": "22941a934e4744fd46bf8a31469d1770"
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
    "url": "assets/js/21.4f49be33.js",
    "revision": "7bc9c21402d2bb2950e424548a6d9e67"
  },
  {
    "url": "assets/js/22.513ee03f.js",
    "revision": "9b0626ab4f3b97e11937094fe68a0dd9"
  },
  {
    "url": "assets/js/23.6885e4a6.js",
    "revision": "53e477bf8fdc859700c489aeb30f2e42"
  },
  {
    "url": "assets/js/24.babb32d9.js",
    "revision": "4c96d5e9dba5a97850627fa64e9e89cb"
  },
  {
    "url": "assets/js/25.00db6fb6.js",
    "revision": "103d3dc2618f69397039e0d2f6d12bfb"
  },
  {
    "url": "assets/js/26.a50b7b8f.js",
    "revision": "2989e38704853a2b9c57c592bc0070a0"
  },
  {
    "url": "assets/js/27.35402d0f.js",
    "revision": "3e97b3ca0e86c28c707dfe810d4e8ca0"
  },
  {
    "url": "assets/js/28.98f1cdce.js",
    "revision": "60e46c73b4b75ed8852fdc8dcde6447d"
  },
  {
    "url": "assets/js/29.67a27a59.js",
    "revision": "557b593b9bd8daf55767a5bd3567cd89"
  },
  {
    "url": "assets/js/3.2b71fc98.js",
    "revision": "170359419e8fc6a941876c9f3c301bbe"
  },
  {
    "url": "assets/js/30.a723fed6.js",
    "revision": "d4f1a366fe565eb4950529bfe9d3ccdd"
  },
  {
    "url": "assets/js/31.8fd2b62c.js",
    "revision": "3a31d46b5f3867be9d12b16a7f23de98"
  },
  {
    "url": "assets/js/32.80994236.js",
    "revision": "8355843aa7ed522f7ca7b0037e02e4f7"
  },
  {
    "url": "assets/js/33.27163457.js",
    "revision": "60dddf23d943abe89ec1f791ed150f50"
  },
  {
    "url": "assets/js/34.b46ebc3e.js",
    "revision": "4c3577ed184f2f80731eb3e6eb347432"
  },
  {
    "url": "assets/js/35.03649b82.js",
    "revision": "f94eb7bb59f29f418ca384da5d28399b"
  },
  {
    "url": "assets/js/36.d6b49202.js",
    "revision": "13db337b1c94a334695827b0307abc66"
  },
  {
    "url": "assets/js/37.7c380ffe.js",
    "revision": "f52b781732298273c6685113d4a3d267"
  },
  {
    "url": "assets/js/38.11f6f644.js",
    "revision": "84583db2bf7e606f4a73daf84492cdab"
  },
  {
    "url": "assets/js/39.e3ec7fde.js",
    "revision": "8c6b8c5fe78e507905fefe6440c251dc"
  },
  {
    "url": "assets/js/4.08d679e4.js",
    "revision": "f3c186c41b57f7d89a4cd1455429248f"
  },
  {
    "url": "assets/js/40.09be08cf.js",
    "revision": "3ed170f4df0a186439bcb43184de97cc"
  },
  {
    "url": "assets/js/41.137fa4c4.js",
    "revision": "96b21a37817ce826aad7a0b9067202da"
  },
  {
    "url": "assets/js/42.0e7dd5f0.js",
    "revision": "6f0bfe211f38f30d15b1ff872d6a2741"
  },
  {
    "url": "assets/js/43.4ab16dad.js",
    "revision": "fe570a470aae47911b8ea53e977bc65e"
  },
  {
    "url": "assets/js/44.dcfb0a00.js",
    "revision": "a285f908dc8fcb63d32d07726ced9734"
  },
  {
    "url": "assets/js/45.857d211c.js",
    "revision": "9f55ddefd905aa1a583a633a716199e4"
  },
  {
    "url": "assets/js/46.b57431d6.js",
    "revision": "fa1f40a496cf200634a2c1755d8cd9b1"
  },
  {
    "url": "assets/js/47.9118e584.js",
    "revision": "7a2bb550d0e3b5ef5747c0293d0c566e"
  },
  {
    "url": "assets/js/48.45263711.js",
    "revision": "796b909740f3ecc6aa860317a642f1df"
  },
  {
    "url": "assets/js/49.62fa0f6b.js",
    "revision": "890e4aa1ce90a6e16746bbdc313449ae"
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
    "url": "assets/js/app.a9cc8a58.js",
    "revision": "66068a99827ba88e68d6b6eb44f8fddd"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "54d2641122e6fc28731d1eb64f251ec6"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "705ae9c87dbe0f38721daa3014a6397c"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "a512517b425ad7457ef7b007ebf0d0d7"
  },
  {
    "url": "database/mysql/使用binlog恢复数据.html",
    "revision": "7037691e88f06ed40104a72fbffbec69"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "cc3d854f56ee0b0de65ff9dcdcfe103e"
  },
  {
    "url": "database/redis/index.html",
    "revision": "246982f5d2b1208f0d1dd6a3409b6696"
  },
  {
    "url": "guide.html",
    "revision": "e3f119a07cb93559de91b2c70b6b74d7"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "4723333bedc454a7421592f79b2abd9f"
  },
  {
    "url": "interview/database/index.html",
    "revision": "80a646500a7b0f36a76444aa6f26644e"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "63a79e230176c3db2b68dfb73845c216"
  },
  {
    "url": "interview/java/index.html",
    "revision": "7e00410536b64bfd4128d2684305270a"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "e8c9cab23f6bd2c6b087e9163424f9c5"
  },
  {
    "url": "java/base/index.html",
    "revision": "f11a64467554a0c92338c887b732a442"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "296e0f668f907265a95ffc3aabdd3e16"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "3d04dab9f4790f8f170525841e617ad6"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "612e7bc1403dee6dd1f6145f783564cd"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "96d80b3d3377849d1d95afc3180526fc"
  },
  {
    "url": "java/base/重写equals和hashCode.html",
    "revision": "19e46eda76a9d6194eb4ad64708a88b9"
  },
  {
    "url": "java/design/index.html",
    "revision": "b5732ac27e27a56c3af16239d4037c53"
  },
  {
    "url": "java/internet/index.html",
    "revision": "6a6f80b51d7f7927bc34d0143d351096"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "d46bf1db50e6bbd2a5c3b2c1fa88246c"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "d7946339002bd6973f6e1ce02a43d2b5"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "99b512bb57309d7ce9e1570f51a5ce1b"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "244ced34ccc40b292a4ad975042299fc"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "cfe7c89d6b1bced9e27a3672e92c7e30"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "c5a1872add29f95f1b5fdec966f41c3a"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "ee8f94ee0b631516ee0c959c44c007f8"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "69b83be9552263704748d6d45ab8763c"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "070cf4c55ca4353b66aa2c362f36da6e"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "9414367dbae9e1d63b2f07ff6c5240da"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "bad0d67b61c1a1739d49c80132b6332c"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "36c08fd2c24addd47861e3df13492961"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "5fbc743242529a6d1f0b39d34055af27"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "bca6c4302a3c4fc1f5328d313da6453b"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "d9fc3b9dc8189942cc8b479ab669114b"
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
    "revision": "9e84840f6d5907776aacb20fb25c3f3a"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "fd309817b649e3d1b1eea3f5e6110d23"
  },
  {
    "url": "other/index.html",
    "revision": "f795f63d8095d53e0d749129215a3625"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "e79a20b58c70c820dff52d0866449756"
  },
  {
    "url": "other/常用网址记录.html",
    "revision": "f8e666d5aaa9f270e8f12858d6a29fad"
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
