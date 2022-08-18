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
    "revision": "a72953ac117351ce17f5ee16da46db85"
  },
  {
    "url": "assets/css/0.styles.8eeade1e.css",
    "revision": "1fa1e81f0cd14bc5b0aab230d332c9d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d9bf7d3b.js",
    "revision": "7b453ac0cc77293c42491e2f95a28f85"
  },
  {
    "url": "assets/js/11.cde0feb3.js",
    "revision": "ba59b71f1c1daa31427642ec585bc00c"
  },
  {
    "url": "assets/js/12.edcb509f.js",
    "revision": "c93c6a0fa55220a7127b4acf725c0209"
  },
  {
    "url": "assets/js/13.267d5645.js",
    "revision": "37b562083d0dced97ad083694d2f0952"
  },
  {
    "url": "assets/js/14.5c81f833.js",
    "revision": "2f861b1099389e05af2b2cd086de40dc"
  },
  {
    "url": "assets/js/15.ae25d0a5.js",
    "revision": "9b7315dd761ebb1c71baf4b51f6d1d58"
  },
  {
    "url": "assets/js/16.af5c12f6.js",
    "revision": "338f4c811e71fdc7fe053cea688ed2fd"
  },
  {
    "url": "assets/js/17.d7b2940d.js",
    "revision": "3b4a3a76a45af8213aba420d0dbf9096"
  },
  {
    "url": "assets/js/18.5b6851d4.js",
    "revision": "bbc600cd7ee2a5b57a823d5987aa63ca"
  },
  {
    "url": "assets/js/19.c6206a8d.js",
    "revision": "ad3933cf5b80831061b7a8a9e2eff757"
  },
  {
    "url": "assets/js/2.fb7d9ac2.js",
    "revision": "440d2000c8888a43d1931641c80b5a69"
  },
  {
    "url": "assets/js/20.1858d8ff.js",
    "revision": "365a7ae43890a4a1f2f6cea9ff2c5f32"
  },
  {
    "url": "assets/js/21.ac6dcec5.js",
    "revision": "7f196e684df192d0937fd84f6dead68b"
  },
  {
    "url": "assets/js/22.804f6bdb.js",
    "revision": "e9999c32b5fdbd0eecd2d0e4066d3856"
  },
  {
    "url": "assets/js/23.51bffb20.js",
    "revision": "dfb2d7ab5c55b7bcec40834ebbf939b8"
  },
  {
    "url": "assets/js/24.29d4fad7.js",
    "revision": "f9e34e01e4fd7e55e0675554bdd92d12"
  },
  {
    "url": "assets/js/25.3801ee4c.js",
    "revision": "9bb35d83b0ef0ffc23780917fbd46f57"
  },
  {
    "url": "assets/js/26.6b69b4ad.js",
    "revision": "c1f78e6725b13a15a663c70586b594c9"
  },
  {
    "url": "assets/js/27.f8f8cfa2.js",
    "revision": "861bcd547ed45c156c3da86890bdbafa"
  },
  {
    "url": "assets/js/28.188e7b1b.js",
    "revision": "bf8ab967c5f0921eee07ec6f4ccc24ce"
  },
  {
    "url": "assets/js/29.e0dcacdd.js",
    "revision": "56d053015dd1aad6e166aab8e4735940"
  },
  {
    "url": "assets/js/3.f4d99ebc.js",
    "revision": "4a52f211a7755fa8acbc8fa5b6038541"
  },
  {
    "url": "assets/js/30.08573d57.js",
    "revision": "9341cc6dbd51edb0ba41f81672f755c7"
  },
  {
    "url": "assets/js/31.07f39087.js",
    "revision": "5f25a2c29e234db00f96ef6d677a6fb4"
  },
  {
    "url": "assets/js/32.4b5a673d.js",
    "revision": "cd1aee8c1df0a96bb6686c612203dbc8"
  },
  {
    "url": "assets/js/33.a6c435fd.js",
    "revision": "bb9f8bbc0ffa3090fe50e323d46a62fa"
  },
  {
    "url": "assets/js/34.100f9469.js",
    "revision": "3ba82f7e9d84f5ba4a5dbe86640db065"
  },
  {
    "url": "assets/js/35.2f106ef3.js",
    "revision": "9a69ef0e50af95d634abe17fef254fc1"
  },
  {
    "url": "assets/js/36.1a708ead.js",
    "revision": "a879515a6cbe9e151ba7f12b82830021"
  },
  {
    "url": "assets/js/37.40455b02.js",
    "revision": "4245ebb3f39b1d0bf172e2d31d14ec2e"
  },
  {
    "url": "assets/js/38.edeb19fb.js",
    "revision": "c3cda1f8503d5c89bb6851cd6f6579af"
  },
  {
    "url": "assets/js/39.be0457d4.js",
    "revision": "058ef761443825ca838cb7fb9209704c"
  },
  {
    "url": "assets/js/4.f9bafd20.js",
    "revision": "75e1950d0e4f9deee88073ad92c1960c"
  },
  {
    "url": "assets/js/40.23c1592c.js",
    "revision": "cd2c69d594ce317b8f8c22291dce72d9"
  },
  {
    "url": "assets/js/41.561dc5ff.js",
    "revision": "6cedb0c0e0a33e4a8cf6cadebcd1c8b7"
  },
  {
    "url": "assets/js/5.9656d583.js",
    "revision": "78974e6431842fbbb7bffad5bab53d08"
  },
  {
    "url": "assets/js/6.4124fb9d.js",
    "revision": "9b6afd97871c4b8dd866f8aac6bcdf22"
  },
  {
    "url": "assets/js/7.2e7194ed.js",
    "revision": "2fa731ad52c4315dd4a3f0cbdba626ad"
  },
  {
    "url": "assets/js/8.08b08ea4.js",
    "revision": "fa3822d777e57cfa4a073d3ea43f731e"
  },
  {
    "url": "assets/js/9.8d59a7c5.js",
    "revision": "3d2afb8607069418d415c59738d39221"
  },
  {
    "url": "assets/js/app.7ba9e02f.js",
    "revision": "540ca3ff01d7bf1c0ed8699be3e4d2df"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "3ba4462919a3b1f0570dd803598a8f96"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "a35b7cd9a99790b83c20ff4f973c163f"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "f387ef6eff4dbeb1e18919073263567f"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "cdfd053abeeddb7f77aab98eabbccd35"
  },
  {
    "url": "database/redis/index.html",
    "revision": "7017ac9c9bcd6e4a39cacbdee3113b32"
  },
  {
    "url": "guide.html",
    "revision": "6413c84a4a5cc4e27169e8ba8ecb9169"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "b83e3ff0f7667424d86521f50a2b6678"
  },
  {
    "url": "interview/database/index.html",
    "revision": "92b9d0c0f07899e0cf699981a454c8df"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "c040aced6c7a908691557ac9bec0dcfa"
  },
  {
    "url": "interview/java/index.html",
    "revision": "f419c6d4899f068604b332a914af7999"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "c58c50ec9f910b5874178d0346397ed3"
  },
  {
    "url": "java/base/index.html",
    "revision": "15b47ede574d6e2f09445c3bb2c1da96"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "34d6372c6ca0c49eb2e9f24ad2ccc4ca"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "71cdf3d6096a81d80e77350af6f4933d"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "bdff6bddce4b68369cfb8bfb88a4c4f0"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "fb4da64fcd721bfd0e8c7838790ba920"
  },
  {
    "url": "java/design/index.html",
    "revision": "3d4702b23d1c1269c35aeb43723a6f0f"
  },
  {
    "url": "java/internet/index.html",
    "revision": "b069551c9f54f4a8ef0187851b2ccd3b"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "28c4d3e2b720dd9085975ba2ff1427a9"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "dee674178816cc7e45a758dbe9814ba1"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "1e6713da23063df12fb7402e8ac7ebb4"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "d84e5f69b6cae436b8d62d980f61b0ee"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "ad4e589933f3dfaeb02320c8c238e4fe"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "45486e59cbfef38a23af5d4e373c18b3"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "325c4a058ef22cc40546d87d4a56b3ab"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "b0fd7eb269f9a67b0cb391cc5b3e8085"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "2feb27e4a427c4f3407edbacaea5933b"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "4a300f9cac76355c861d98f16d8c99fc"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "43228c0c6c35c430064bb073d1c6cfe6"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "58c447a1fc97115ac6da7a2873ef0a0f"
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
    "url": "other/index.html",
    "revision": "4bb24333b2cdd9d33cb1203bf4fd586b"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "cadaab88d6c17b9d8e7ca7d236ad579f"
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
