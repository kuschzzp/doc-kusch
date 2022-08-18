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
    "revision": "5ee45013da362da8e026b998c00e054e"
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
    "url": "assets/js/10.29fa8b84.js",
    "revision": "aeb2fb597c45dbd6639e8f54bab9bf04"
  },
  {
    "url": "assets/js/11.7289d739.js",
    "revision": "47e01796ad0260b1e06b250be71c58f1"
  },
  {
    "url": "assets/js/12.7d613e88.js",
    "revision": "052e17cbb9a2b1db76aaaa3e93cfc60c"
  },
  {
    "url": "assets/js/13.21455d87.js",
    "revision": "8790e5e60864ad86987a39bbc43ad4ed"
  },
  {
    "url": "assets/js/14.4975426d.js",
    "revision": "a1aeefee68401ae28ba7195b09da7d42"
  },
  {
    "url": "assets/js/15.ae25d0a5.js",
    "revision": "9b7315dd761ebb1c71baf4b51f6d1d58"
  },
  {
    "url": "assets/js/16.993a7639.js",
    "revision": "4424466fa258e4c24cb182f587086d23"
  },
  {
    "url": "assets/js/17.d7b2940d.js",
    "revision": "3b4a3a76a45af8213aba420d0dbf9096"
  },
  {
    "url": "assets/js/18.d0b0dcf9.js",
    "revision": "36854200a66218091e533628b26be043"
  },
  {
    "url": "assets/js/19.9df31148.js",
    "revision": "93c1a1e7690217b8f4785b43ef451fd4"
  },
  {
    "url": "assets/js/2.fb7d9ac2.js",
    "revision": "440d2000c8888a43d1931641c80b5a69"
  },
  {
    "url": "assets/js/20.a89d7698.js",
    "revision": "0da2b66f015a555d7f12f4fa24e083a9"
  },
  {
    "url": "assets/js/21.c5b0c2e8.js",
    "revision": "be72dd48f9a40146bb901bca448ade27"
  },
  {
    "url": "assets/js/22.c99f8750.js",
    "revision": "5d34d452c1e8e536e3347ff5ab579d4d"
  },
  {
    "url": "assets/js/23.302acb40.js",
    "revision": "7a1b330ba7c25cad1393ed26301d01c2"
  },
  {
    "url": "assets/js/24.b1ab99a2.js",
    "revision": "2e675dc1dba8c9dfa4cb1d35f35da96f"
  },
  {
    "url": "assets/js/25.8f99b1bd.js",
    "revision": "75b1b3a7ffb36fa7a04ade65555e354b"
  },
  {
    "url": "assets/js/26.e42c6256.js",
    "revision": "079bdb4ca802b138d8e450cf69c8d4c3"
  },
  {
    "url": "assets/js/27.f8f8cfa2.js",
    "revision": "861bcd547ed45c156c3da86890bdbafa"
  },
  {
    "url": "assets/js/28.1e573fb7.js",
    "revision": "7db9e09a6f35699aff051e26de94a04e"
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
    "url": "assets/js/31.47c02dcb.js",
    "revision": "a613c56408f2801a6e71182aa0bca753"
  },
  {
    "url": "assets/js/32.3f188061.js",
    "revision": "9fc276b9f5e3e462108bcf7ccc604eae"
  },
  {
    "url": "assets/js/33.cca1b4ff.js",
    "revision": "6b91d0cfbee46dfc5b98648eb2324df5"
  },
  {
    "url": "assets/js/34.a6ec1067.js",
    "revision": "b4faec140892708a92f7808e67b9a128"
  },
  {
    "url": "assets/js/35.ff23fc8e.js",
    "revision": "cac3bf3a69e66b937520eb54f983cbef"
  },
  {
    "url": "assets/js/36.f42c8607.js",
    "revision": "32358191ac8384ec5a2f4284707ebbc4"
  },
  {
    "url": "assets/js/37.c0ef604c.js",
    "revision": "51d178126ec9c313b9a8d36813529027"
  },
  {
    "url": "assets/js/38.a76a5531.js",
    "revision": "3a8b84e75f11b258c03a6056554438bb"
  },
  {
    "url": "assets/js/39.b2a3e34a.js",
    "revision": "90311c9ad18adbe1e64232064fab93b5"
  },
  {
    "url": "assets/js/4.f9bafd20.js",
    "revision": "75e1950d0e4f9deee88073ad92c1960c"
  },
  {
    "url": "assets/js/40.e0bcfede.js",
    "revision": "7ebbf134eb250133e9d8201cb653e3ff"
  },
  {
    "url": "assets/js/41.a5240287.js",
    "revision": "b21623ea9551d718d75ac534a11fad0f"
  },
  {
    "url": "assets/js/42.6025b358.js",
    "revision": "1655f76532610e2ac5475b0358a5b8b3"
  },
  {
    "url": "assets/js/5.3a1e9b4b.js",
    "revision": "4ea20060eeb51395b192af90cb235354"
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
    "url": "assets/js/9.c1e48641.js",
    "revision": "77de41074b704ceb795d7972f60627b8"
  },
  {
    "url": "assets/js/app.e0fbe004.js",
    "revision": "8b59e03b9a5e5c527188abe360920a9f"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "45e580f7ffca1baeea1ab450eaddc82e"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "3732068430a04c893aa92e7ecc561320"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "13c784e8caa41715f23406dbad70fd9f"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "0480af6fd178af3653a08de1e7f95870"
  },
  {
    "url": "database/redis/index.html",
    "revision": "c80aff93205dca34d5a12a75f0707d1d"
  },
  {
    "url": "guide.html",
    "revision": "9a0a7fec9b88f9281ad72d90c4c83cb1"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "349c830541b99c563b4e1f1d238be296"
  },
  {
    "url": "interview/database/index.html",
    "revision": "d5fd633dca26c5982fabf3b26eb63838"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "d9008dd0559bdcfc81ef6585ccf1ca3f"
  },
  {
    "url": "interview/java/index.html",
    "revision": "677c426faa89d44a5b3e71418879418e"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "08f78c369704788840a6a6a0ff9329fa"
  },
  {
    "url": "java/base/index.html",
    "revision": "afb1b1f90114f816f2a6d2dbea42a352"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "d46283cb988fe5775a715b6206f6478b"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "c1513bc0e0f3ddfb8a248a76a68f3771"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "508e8c4f43d4436b63137bf3937d5796"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "d722ef3a81917f66740f587e51b231cb"
  },
  {
    "url": "java/design/index.html",
    "revision": "83447cbb1e98c8c5361393a022c66cf4"
  },
  {
    "url": "java/internet/index.html",
    "revision": "2430abc8101431f376afc5d34b3f0869"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "1bca1520f3237288cb7af3e03cf3392f"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "9dc7d90b1047ca4b71809648953d4f8f"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "fa05ca6c2894d30048f09cefac21b289"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "219c43ff20efef354641fee0ae440cd8"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "abd6dc7f15dceb507b56fc227b5eefc3"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "cc5aaeab834f3980bfd46ff5c4bae96b"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "d2b46c0b239fb5c0b25372e2d81397ac"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "f2c8e1cf6cce04d5b252f02f470b33eb"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "c79e1f3992957d79752af7969347aa77"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "b315574129b9ee8bb4fb04a676ab62a2"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "02d90057b150fc26f2cb3798f853bd3d"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "814a9abfc5ec88602fd6eccf110c651b"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "75c36dad8c0f5fd80742d1877917b751"
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
    "revision": "4f4d8b9495a4778eafb19108f4c72c87"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "be7dec8be5789eea832ab6aadc1a4d79"
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
