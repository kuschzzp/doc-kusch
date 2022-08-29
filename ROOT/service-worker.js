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
    "revision": "f6cfebb0a0f62c40f805367323efc1a7"
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
    "url": "assets/js/11.7289d739.js",
    "revision": "47e01796ad0260b1e06b250be71c58f1"
  },
  {
    "url": "assets/js/12.90f5958c.js",
    "revision": "1c8dde4007e1ec9fc636a803e1adf8e7"
  },
  {
    "url": "assets/js/13.4a1903e3.js",
    "revision": "680af1c84e284a7e30d0cf870f040c01"
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
    "url": "assets/js/16.3d5900b4.js",
    "revision": "ecb9154a1ecb435cd10ee2d2e0e9ed09"
  },
  {
    "url": "assets/js/17.a7da7b2e.js",
    "revision": "a154ce964fd64cf2124e17666c296f65"
  },
  {
    "url": "assets/js/18.4280a324.js",
    "revision": "fa5b4e958aa785c3dbce2fc11050fcc1"
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
    "url": "assets/js/20.93b7a7a1.js",
    "revision": "33ff6b4a4a27e9ace6dc881a9ffbf4a1"
  },
  {
    "url": "assets/js/21.b97c4af2.js",
    "revision": "94f703d3f566383c1f1c670dd5a8767c"
  },
  {
    "url": "assets/js/22.34b0a8b0.js",
    "revision": "b66c1f722dd0d7add7ece762bc9f168a"
  },
  {
    "url": "assets/js/23.302acb40.js",
    "revision": "7a1b330ba7c25cad1393ed26301d01c2"
  },
  {
    "url": "assets/js/24.29d4fad7.js",
    "revision": "f9e34e01e4fd7e55e0675554bdd92d12"
  },
  {
    "url": "assets/js/25.62f721e1.js",
    "revision": "78fbec1a0a96d2951abf69a54e743106"
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
    "url": "assets/js/28.d0a14386.js",
    "revision": "f56ee82bd4c944a78c48cb3c6dc91338"
  },
  {
    "url": "assets/js/29.c0b4f4b9.js",
    "revision": "ba0b8f3bf534433d7d32029d527f3750"
  },
  {
    "url": "assets/js/3.f4d99ebc.js",
    "revision": "4a52f211a7755fa8acbc8fa5b6038541"
  },
  {
    "url": "assets/js/30.77e1d562.js",
    "revision": "2aff2f3ba22e5cc2f6dc756872809597"
  },
  {
    "url": "assets/js/31.c6b906c9.js",
    "revision": "d7efa1263639dee8b2f012169516c72e"
  },
  {
    "url": "assets/js/32.1651f5f1.js",
    "revision": "25a71c4f83f612d7a3cda49eb83d688a"
  },
  {
    "url": "assets/js/33.f15f80ea.js",
    "revision": "067e4dd48064788cb75d9a3bb52c35ea"
  },
  {
    "url": "assets/js/34.16a520a3.js",
    "revision": "53bd7e9fcd10795a26255d3d4cb014b8"
  },
  {
    "url": "assets/js/35.fb931511.js",
    "revision": "dd3b32859b6797509a399275f2d14375"
  },
  {
    "url": "assets/js/36.0c1fab79.js",
    "revision": "9ea20a73130a78e06ebd913d8f7b78dd"
  },
  {
    "url": "assets/js/37.fce698e0.js",
    "revision": "b5d258793e60a333d2c62fcd99d53406"
  },
  {
    "url": "assets/js/38.6d7adfe7.js",
    "revision": "1c80c09c697b86ccbd2446edf0a063c9"
  },
  {
    "url": "assets/js/39.9936aba2.js",
    "revision": "1d11581ee7f8d1226d95d18642f519e2"
  },
  {
    "url": "assets/js/4.f9bafd20.js",
    "revision": "75e1950d0e4f9deee88073ad92c1960c"
  },
  {
    "url": "assets/js/40.e848c8fe.js",
    "revision": "7da13ef2ce97646d48b18e250f2355ea"
  },
  {
    "url": "assets/js/41.c35a76f8.js",
    "revision": "6f5f43170d1a0d736efcf82d7bf9fd4b"
  },
  {
    "url": "assets/js/42.7d8e22cc.js",
    "revision": "fa4b156d180a679a3aecb3496208a964"
  },
  {
    "url": "assets/js/43.5ffab837.js",
    "revision": "bf527ce7ccafa8994168b5826b8b7ae5"
  },
  {
    "url": "assets/js/5.bb042889.js",
    "revision": "4261b9c8b7bb827fe05bc575ad5b0e4c"
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
    "url": "assets/js/9.4082ec6c.js",
    "revision": "0ca90ab38e7a72ab5d1a893ddd71379c"
  },
  {
    "url": "assets/js/app.5ed2e019.js",
    "revision": "4be1abfaa32fbdf0adf32bba77010d46"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "fca556196651a0dd6e60f90d285bccd1"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "21cc4c1d36e18e49a120ace0c1554a78"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "e86969177cd6ba4b5cf954b9d06ec842"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "df48494e14a54da1f55c8e061756c83e"
  },
  {
    "url": "database/redis/index.html",
    "revision": "e90588f970f79ed12cd54d68ae13972e"
  },
  {
    "url": "guide.html",
    "revision": "62b09b5110c5d51a5b05ca5a39fdca09"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "ad9ac982f1aa184e51b56ad035072e11"
  },
  {
    "url": "interview/database/index.html",
    "revision": "3998613de15ef73af445af9335526a1d"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "d378014658ecaaf68087b90cc2b30203"
  },
  {
    "url": "interview/java/index.html",
    "revision": "f16d428a20306dcc9f1f7bf8f701725a"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "22427c113d7ee306cde20603b1a5a82d"
  },
  {
    "url": "java/base/index.html",
    "revision": "38b9f4d25592d37909ad51dcf355521a"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "7cd73da4cce2487e9f5a506b69961aa2"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "78f825358130440284dda80046b4d100"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "e5dd8212a91cccb89f6e73f5a7d14598"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "bb506c271beb2a882ce0decea43aa6c3"
  },
  {
    "url": "java/design/index.html",
    "revision": "c20c4bef415d19334f179347e31bc6b9"
  },
  {
    "url": "java/internet/index.html",
    "revision": "0bc0b7cf953ae7944d6051aa381d57a4"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "d115207ea8b30623aae165c5cda6978c"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "fb271a54a05dfb5fea9bd5c060678cef"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "fb7f703efa4f576479cf4c51a86141e5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "4e2b35e60525df51e76da2cc68843c64"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "0787fb690ba34668b14a1e37869a3a8d"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "d0edd54fed1761c177c7bca754332c0e"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "2ca88e21713e5faf7255c3fceb2b1383"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "831f043d0d1f3a32477efa491a73333d"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "9c01b99a0eace4bef1be1aebaeb606e3"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "17ef2dca6e6f32b0c60c5d335091d591"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "d264c139f45bbf7a653749ff80db5ad9"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "2a507c949c703285427ac8f233156134"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "80ea16169f16222027ed0a19ac0dc303"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "773285aa1eb5410d74bf0aaf3fa4a2dd"
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
    "revision": "a222bb575f63c87efe5c0fe9b8bef0aa"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "2705fbdf0764168ec2e5c1f6dc134f8a"
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
