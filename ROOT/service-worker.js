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
    "revision": "5739354f4d7fe99eec3df6563d596279"
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
    "url": "assets/js/10.44e4e3fa.js",
    "revision": "f7a7e189c0822bfe85c627b019315b97"
  },
  {
    "url": "assets/js/11.cde0feb3.js",
    "revision": "ba59b71f1c1daa31427642ec585bc00c"
  },
  {
    "url": "assets/js/12.35a0cdfe.js",
    "revision": "4447ced6c2c9bc7bf889adab64d047ad"
  },
  {
    "url": "assets/js/13.267d5645.js",
    "revision": "37b562083d0dced97ad083694d2f0952"
  },
  {
    "url": "assets/js/14.6a57e2cb.js",
    "revision": "1d28231b73851d693fbbd075d3c010d0"
  },
  {
    "url": "assets/js/15.a4e11c79.js",
    "revision": "e028463e5279250e4cccda6ab797d745"
  },
  {
    "url": "assets/js/16.993a7639.js",
    "revision": "4424466fa258e4c24cb182f587086d23"
  },
  {
    "url": "assets/js/17.a1a8be43.js",
    "revision": "6f08e67cbf8212a4b9c778d910b915bf"
  },
  {
    "url": "assets/js/18.4280a324.js",
    "revision": "fa5b4e958aa785c3dbce2fc11050fcc1"
  },
  {
    "url": "assets/js/19.73b967ce.js",
    "revision": "9139656ec74032fce6087a5b8b1b0a6f"
  },
  {
    "url": "assets/js/2.fb7d9ac2.js",
    "revision": "440d2000c8888a43d1931641c80b5a69"
  },
  {
    "url": "assets/js/20.93f20fc8.js",
    "revision": "790f13190785bf4e5a254ce9a144f02a"
  },
  {
    "url": "assets/js/21.884956e5.js",
    "revision": "2b91407283b08280b577efafd6e788b6"
  },
  {
    "url": "assets/js/22.64d63d25.js",
    "revision": "bdf76d10f7f882f4cb88932a2ad9cca5"
  },
  {
    "url": "assets/js/23.d1303538.js",
    "revision": "40f7a77a633d72fb581ae07226129880"
  },
  {
    "url": "assets/js/24.d5cfbb45.js",
    "revision": "503df5b3749d14a1059fd2824a0445a0"
  },
  {
    "url": "assets/js/25.dac32806.js",
    "revision": "15a3c011bf9650e0eb28857907ca5845"
  },
  {
    "url": "assets/js/26.6b69b4ad.js",
    "revision": "c1f78e6725b13a15a663c70586b594c9"
  },
  {
    "url": "assets/js/27.b72e246f.js",
    "revision": "6d5b8fdddd904f3467e55f02db34b607"
  },
  {
    "url": "assets/js/28.eed85005.js",
    "revision": "f4f9264f8382d09573457d403095bd91"
  },
  {
    "url": "assets/js/29.f03285c9.js",
    "revision": "fa2deafd9e1ff232dfdfdc0538472c12"
  },
  {
    "url": "assets/js/3.f4d99ebc.js",
    "revision": "4a52f211a7755fa8acbc8fa5b6038541"
  },
  {
    "url": "assets/js/30.bd9d23d9.js",
    "revision": "e27adfe3de3e40f06166061dcbb8db05"
  },
  {
    "url": "assets/js/31.964f22c6.js",
    "revision": "9723a7a4e6ed74606653ee55c7405254"
  },
  {
    "url": "assets/js/32.36e3b743.js",
    "revision": "f74b74102e16f2bb1d35721266772732"
  },
  {
    "url": "assets/js/33.ec7805e7.js",
    "revision": "24db043c2f7c63a92de5c72f51199fbe"
  },
  {
    "url": "assets/js/34.0f48c0b0.js",
    "revision": "3753b7ff4e9d8b36018e4f6cb3325649"
  },
  {
    "url": "assets/js/35.a7467ad3.js",
    "revision": "96b8048d2e6c97e97c2240edfa23c869"
  },
  {
    "url": "assets/js/36.c58c2f25.js",
    "revision": "133fe0153a7b6bcd5c39adc9c8549dd1"
  },
  {
    "url": "assets/js/37.9433b8a3.js",
    "revision": "50ee18890680965e39964786e317df6b"
  },
  {
    "url": "assets/js/38.04f8e19d.js",
    "revision": "d56df28de6b4842ae0fe49aefc4edf24"
  },
  {
    "url": "assets/js/39.4314920d.js",
    "revision": "1b518eababf23c8c5967293e38a70d4e"
  },
  {
    "url": "assets/js/4.f9bafd20.js",
    "revision": "75e1950d0e4f9deee88073ad92c1960c"
  },
  {
    "url": "assets/js/40.2c667d80.js",
    "revision": "ddca3b162c46cd47acde0aa7f002ef5b"
  },
  {
    "url": "assets/js/41.1e26d0fb.js",
    "revision": "fdda7ce8d1efc1c0fbc542102b74274a"
  },
  {
    "url": "assets/js/42.f3972748.js",
    "revision": "f1cdc1106b5ba5ad40aacf8dcd39369d"
  },
  {
    "url": "assets/js/43.b6712410.js",
    "revision": "d2649cffcd98c702abaeff00c19eee05"
  },
  {
    "url": "assets/js/44.1d7cc7cd.js",
    "revision": "84c31d82e63ab095757a28adf6df3a5b"
  },
  {
    "url": "assets/js/45.992de25b.js",
    "revision": "9c816806460b57882bbe194ce2d8ba6d"
  },
  {
    "url": "assets/js/5.4a2c576f.js",
    "revision": "16c9c5d60ed75a381cce58617e75dfee"
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
    "url": "assets/js/app.3d03bc2d.js",
    "revision": "60a967b2043faf6d2f026f5c95c494bd"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "5202c8dec769d3552b9c7a95f8aba586"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "bd5f054c72c2178ae59440f0fc011ed8"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "6080179cb47c62e6358696bc27f88c42"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "af46e5b6cfcf0a83b27f80a969ff2fc6"
  },
  {
    "url": "database/redis/index.html",
    "revision": "276b8f2ee5c5d5ab886d1755c12a1169"
  },
  {
    "url": "guide.html",
    "revision": "27534f593a568ace42626f4c4ae70968"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "68fdb081b1e9ef4fe11cf88262759d81"
  },
  {
    "url": "interview/database/index.html",
    "revision": "178b15c4d90faf252c68876e6f178efb"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "50a9b00f9eb9d73bcedfb176b6fcf235"
  },
  {
    "url": "interview/java/index.html",
    "revision": "a19759137933c13d67d4522933ace88a"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "433ca6feba51ac2f62c076e1fd2dea01"
  },
  {
    "url": "java/base/index.html",
    "revision": "d682fa56786cf44315ac98996f73fa5f"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "f1a8d43693ffde4b8aba09c4a0537641"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "68afef0afbc39c71d85b4de7ce6937c1"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "b9e00df8531e148875a6760b60fe2ff0"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "2713ba5083079427c12664f3da9e2803"
  },
  {
    "url": "java/design/index.html",
    "revision": "cb1d0382c7dfa2a720f7b6937793af3a"
  },
  {
    "url": "java/internet/index.html",
    "revision": "43b3aadf66ebacf94a3ca0a5d405fbaf"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "76308c263b942473fbaae4f528a73281"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "8b3fe91b8c7943e0b5acca4fcba41673"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "b832193703329301dfb1a9bde6b4609a"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "d1ac340b6984c10ce8302471e84b9295"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "c545ebfe1925fc61e28156c9b6b9f475"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "76341ec6c0c45eeba4653da3f506320e"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "98bc3cd5f67b199b7c301c70f8f5858b"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "510d9c32cd0695abcd2796506ecfbf2e"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "7967ceb0291eac6a62661f08bf949c0a"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "937bd544a425420046313336dd4294a0"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "8667a8a9341b2d6d131a4c8b7c8f344b"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "160434b52451a39749e1a1621fd35c32"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "fce00f85fa4010d71cc88fbd180a8e32"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "edd166a037c50703cf4f8fe1dd6706a4"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "51bbed0d093559cb9c1fbfaf383e8f08"
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
    "revision": "cec4650eed496847577963182bdf2e30"
  },
  {
    "url": "other/index.html",
    "revision": "7df1ba37326cc2f891a18dd6b73c9de0"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "04fd513839e4f94e458eb84d7be58840"
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
