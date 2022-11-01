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
    "revision": "b491848151ab338510c985da047db819"
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
    "url": "assets/js/13.0975f710.js",
    "revision": "1d7cc3edf592141fc0d1b60d3c17d9d3"
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
    "url": "assets/js/16.af5c12f6.js",
    "revision": "338f4c811e71fdc7fe053cea688ed2fd"
  },
  {
    "url": "assets/js/17.d7b2940d.js",
    "revision": "3b4a3a76a45af8213aba420d0dbf9096"
  },
  {
    "url": "assets/js/18.4280a324.js",
    "revision": "fa5b4e958aa785c3dbce2fc11050fcc1"
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
    "url": "assets/js/20.a89d7698.js",
    "revision": "0da2b66f015a555d7f12f4fa24e083a9"
  },
  {
    "url": "assets/js/21.884956e5.js",
    "revision": "2b91407283b08280b577efafd6e788b6"
  },
  {
    "url": "assets/js/22.f8a80301.js",
    "revision": "6adaf42e2f9f47328ebadac8300ecfb6"
  },
  {
    "url": "assets/js/23.302acb40.js",
    "revision": "7a1b330ba7c25cad1393ed26301d01c2"
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
    "url": "assets/js/27.f8f8cfa2.js",
    "revision": "861bcd547ed45c156c3da86890bdbafa"
  },
  {
    "url": "assets/js/28.d0a14386.js",
    "revision": "f56ee82bd4c944a78c48cb3c6dc91338"
  },
  {
    "url": "assets/js/29.8786ee28.js",
    "revision": "1a07c0cdb5c71a2c82eeb87d39810fd1"
  },
  {
    "url": "assets/js/3.f4d99ebc.js",
    "revision": "4a52f211a7755fa8acbc8fa5b6038541"
  },
  {
    "url": "assets/js/30.7de40a5e.js",
    "revision": "47de32655ad054208712e743c24e8623"
  },
  {
    "url": "assets/js/31.229f5deb.js",
    "revision": "b9ca12998843435e0dc85ef715a3fd2a"
  },
  {
    "url": "assets/js/32.6e9db701.js",
    "revision": "e292675736e741ad71afb08996a4ab14"
  },
  {
    "url": "assets/js/33.04260d0b.js",
    "revision": "428122cf155b90ebe1acd046530ccf86"
  },
  {
    "url": "assets/js/34.eb10e559.js",
    "revision": "2dcd9aeaece68e05d2d0bce93c4e5143"
  },
  {
    "url": "assets/js/35.a7467ad3.js",
    "revision": "96b8048d2e6c97e97c2240edfa23c869"
  },
  {
    "url": "assets/js/36.33a8536c.js",
    "revision": "06252dbd55519b147d7b1db11a516cd1"
  },
  {
    "url": "assets/js/37.df8f2e42.js",
    "revision": "f1c460f9e8c6c9b329dced2e8f007dcb"
  },
  {
    "url": "assets/js/38.b572667c.js",
    "revision": "3a8b84e75f11b258c03a6056554438bb"
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
    "url": "assets/js/40.5b097637.js",
    "revision": "087db58a07aa718523e6ab7e139a5104"
  },
  {
    "url": "assets/js/41.4740e15b.js",
    "revision": "e5710eea2fe0a41ed3d57dfc5c9bc3e8"
  },
  {
    "url": "assets/js/42.c690dcba.js",
    "revision": "c1baa0b14fab9327bb29a32f344411a3"
  },
  {
    "url": "assets/js/43.db79be02.js",
    "revision": "1798e790b63e6bdd4cba47e1c709b969"
  },
  {
    "url": "assets/js/44.d9640f15.js",
    "revision": "0751deda11d31f9a4ce64f0fed4d403f"
  },
  {
    "url": "assets/js/45.862f953a.js",
    "revision": "5406149257ff4b3f41de4dc5135e1698"
  },
  {
    "url": "assets/js/46.9129d11a.js",
    "revision": "5cd92c807bf260a986b2ffd59cf20d5e"
  },
  {
    "url": "assets/js/5.48c554f2.js",
    "revision": "0cb4c997a1400fd6b6fb8dd3160392a6"
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
    "url": "assets/js/9.4c08f45e.js",
    "revision": "04f3bffd74214f346239a4b31b1db8cb"
  },
  {
    "url": "assets/js/app.584bd382.js",
    "revision": "0cce514b3084b9a34c781580f6fcb334"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "c21bd53afc6edad63d84f517a166b893"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "2edd116e92c30fe69a697e708f238e1e"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "6fb09007e6b1119815a8c96fda8bbb42"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "f4e7217f7c51d870df770bbd7012ddd2"
  },
  {
    "url": "database/redis/index.html",
    "revision": "aaab42f575a7df5931384de3a0b67f15"
  },
  {
    "url": "guide.html",
    "revision": "5aacf172a7cee70fa77b65a059352fc8"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "fa7c9e41b3e0c83ba17a7ca02a533844"
  },
  {
    "url": "interview/database/index.html",
    "revision": "361a5e54586a0cd903d9312e631fe0ea"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "c39f6e0130971d1031bc857680dfd5a3"
  },
  {
    "url": "interview/java/index.html",
    "revision": "3e0dcf7b9f3f49a331a2b7cce387353c"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "0fbc00deb573e2b7cad1d761fed6d181"
  },
  {
    "url": "java/base/index.html",
    "revision": "4578dd36c942d0d8457b8a431ab16820"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "41d4048ab76a3f781abfc0a15e0099b6"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "d65b31c0a9cb1bd8dd291e1f30787984"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "61b2c5cf7c2c3f0c12fa555096f28bd8"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "c9fe3d4a0b5320e94bc7f3ed39b4e5c8"
  },
  {
    "url": "java/design/index.html",
    "revision": "7b5138f0794ddaf85827b12ea3ff2074"
  },
  {
    "url": "java/internet/index.html",
    "revision": "d03c4ddfb75ab7c267525f6de5f6ed3b"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "12a11b17825c4e0a4632d0bf7d84cc02"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "f2ddbbd8a18627c3e98d6ca82f0133ce"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "ee8b39907068547a2bb514c3ba0f023f"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "b0621bef8eee4a846bcdd797275cec01"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "1815f34a082080fe77e4b161e21a2f01"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "01b322c46f470b9d4523d32471a83155"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "4ecde725812549fc1590184cd34f54d6"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "e92bd7ee8d1e003175258a3f96c55b8d"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "2cc82bc2ce5d02063804109087db147b"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "bfd9dd28630350f7ad708d5c3e1cba23"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "0eeff22ed5316bbed4ab62f8d00e4107"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "79f833429bfdb5915212cb523659b439"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "aae8d95200a323a080769cf55e483760"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "56c76f21a2a78402d236ffc9109df880"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "ff314f85770ea77f3f61a631a558d100"
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
    "revision": "2ceb3f8a0f5959ef3eb0ba8b21dd787f"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "beb115b1583621655bbf9a366c380568"
  },
  {
    "url": "other/index.html",
    "revision": "7d9677f0ba62a4e20561b917fa14a8e9"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "632e9121eddd319d3bea811b98db7b1c"
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
