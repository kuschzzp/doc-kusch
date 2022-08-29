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
    "revision": "d0f8c14076ff605996eb7b4254e9192c"
  },
  {
    "url": "assets/css/0.styles.73cffc03.css",
    "revision": "82f9ba53ed57df8ec8badb5f24c502a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f1631b06.js",
    "revision": "7f1615c3eeff0e0b4690c7cd1ca50aaf"
  },
  {
    "url": "assets/js/11.7289d739.js",
    "revision": "47e01796ad0260b1e06b250be71c58f1"
  },
  {
    "url": "assets/js/12.953befc2.js",
    "revision": "dc73e8ba63a8c278eaef565660b13bac"
  },
  {
    "url": "assets/js/13.267d5645.js",
    "revision": "37b562083d0dced97ad083694d2f0952"
  },
  {
    "url": "assets/js/14.e323114a.js",
    "revision": "f91831a3c0a7757ed12570b04b8069f3"
  },
  {
    "url": "assets/js/15.a4650ffb.js",
    "revision": "1aa0f7dcf01323f15fdbc0bc1750bcbe"
  },
  {
    "url": "assets/js/16.3d5900b4.js",
    "revision": "ecb9154a1ecb435cd10ee2d2e0e9ed09"
  },
  {
    "url": "assets/js/17.fa015322.js",
    "revision": "7cc3816488da10a9e82cd3a857c6d326"
  },
  {
    "url": "assets/js/18.71c2c112.js",
    "revision": "a1757bd884838038a78148d93d836bae"
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
    "url": "assets/js/20.2fd331ca.js",
    "revision": "509edc7f1df3795438205423d7bde16d"
  },
  {
    "url": "assets/js/21.5dcbedeb.js",
    "revision": "0637da99a4525f016d682c97e0a16658"
  },
  {
    "url": "assets/js/22.049b56ac.js",
    "revision": "3ecdf79a42913523ccc0c4a3e257329f"
  },
  {
    "url": "assets/js/23.a3a522b1.js",
    "revision": "e5d65d4a05886c96e99f6bd42344154a"
  },
  {
    "url": "assets/js/24.bfe01c00.js",
    "revision": "874cf9b721787766d614a0d7b7ab2539"
  },
  {
    "url": "assets/js/25.3801ee4c.js",
    "revision": "9bb35d83b0ef0ffc23780917fbd46f57"
  },
  {
    "url": "assets/js/26.10b0130a.js",
    "revision": "f511c403c847157da3a9b49a2ef41fb4"
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
    "url": "assets/js/30.0b08ea0f.js",
    "revision": "cfd61a9aac3e34dab18c52fcf2502c77"
  },
  {
    "url": "assets/js/31.f6e08ad5.js",
    "revision": "4515c248b978bbd52f0bddf2e8e1ee6f"
  },
  {
    "url": "assets/js/32.b32b4598.js",
    "revision": "470ca76815af71b0c6b16dbc0623658f"
  },
  {
    "url": "assets/js/33.c6809116.js",
    "revision": "959d1cdbfa6d24597b6a0fa25602e787"
  },
  {
    "url": "assets/js/34.4bd2b9e3.js",
    "revision": "804460129a382be1dcbbd239e8637575"
  },
  {
    "url": "assets/js/35.617e5a9f.js",
    "revision": "3b3e8d914adc796b34b977ff3c6f0c98"
  },
  {
    "url": "assets/js/36.8dd35cb9.js",
    "revision": "a25ca14de9f334ac0d9ca999050a06b0"
  },
  {
    "url": "assets/js/37.f4d73dc3.js",
    "revision": "6804f7acf3cbf3fc7d4511c096bf5eef"
  },
  {
    "url": "assets/js/38.540168d0.js",
    "revision": "146ba8b573803c913e6465be631ea264"
  },
  {
    "url": "assets/js/39.e5b5671a.js",
    "revision": "885345d717b4d4d702e03781c3017a25"
  },
  {
    "url": "assets/js/4.f9bafd20.js",
    "revision": "75e1950d0e4f9deee88073ad92c1960c"
  },
  {
    "url": "assets/js/40.51bf5fcd.js",
    "revision": "81e776161bceef4b683880e57371917a"
  },
  {
    "url": "assets/js/41.650e3a51.js",
    "revision": "e9d34ad5be26274b4897a921291e6ef9"
  },
  {
    "url": "assets/js/42.34a00764.js",
    "revision": "04a4d835fcba7c61ce8705e1024ed1a8"
  },
  {
    "url": "assets/js/43.56129ac4.js",
    "revision": "e515a876435cedaf35f0a01537c176cb"
  },
  {
    "url": "assets/js/44.a192adbc.js",
    "revision": "a63ee2cbdfd409320b843491f2bf8b8d"
  },
  {
    "url": "assets/js/5.9022d31a.js",
    "revision": "654a19a93e1d23c6cc224462535f0f32"
  },
  {
    "url": "assets/js/6.dad19577.js",
    "revision": "0b1e18d89eb5bc3287b6ba26aba4e308"
  },
  {
    "url": "assets/js/7.b5cb9cea.js",
    "revision": "e84b3a0b1126efa3429d3cf5440856e1"
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
    "url": "assets/js/app.cce4fc00.js",
    "revision": "d09fdb1c4933a037645a459936fd4965"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "af1269be2bb4701c4ab262a308edec00"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "11c8a0de56492eecf5512f9b26df59d1"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "3204252b96407f05a190d4c9d671870b"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "ac376fc307c583ac42392c9665f13691"
  },
  {
    "url": "database/redis/index.html",
    "revision": "849682da5796001bee8b7274c9cabc07"
  },
  {
    "url": "guide.html",
    "revision": "05e2fea947160d3afc1021b0cdf97bb5"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "9b092ee122753b9bc448053328d81db7"
  },
  {
    "url": "interview/database/index.html",
    "revision": "2dd1bf52824e604ec68ca5ecc0dcb3c6"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "a46816d16503e340277291c459ec837c"
  },
  {
    "url": "interview/java/index.html",
    "revision": "3d9a3eafe69cb97257d65b7aaf6446fe"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "f7e5966f278c6fb3b19f5bbb912edb7c"
  },
  {
    "url": "java/base/index.html",
    "revision": "3463533ec9990ab82326c692835a6639"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "b8b05ffb2027546c0fda9b4de920d83f"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "d11a5280b1a4d1e028b7455f09dacb5d"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "929adf21fe91d686b1c92d340b9b43f0"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "b82998f31d1e307badbc1060d7382cfd"
  },
  {
    "url": "java/design/index.html",
    "revision": "22bc104246b8cc487000c81c5d86bc27"
  },
  {
    "url": "java/internet/index.html",
    "revision": "949a1060c8d0b9efd624ef8c407d04ff"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "e012272440a04de677564d8b5655a74b"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "24c015907366b2576d91206d639295c2"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "86ad6445da7dfa4f8f13d9d39ad081da"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "8a778fffafbb2cf78fc12245a2cb6a88"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "8a492bf311038fff85425e2989dd2155"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "1039e2c5c3388ed9685a1b0aea6dcbc4"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "b2f6a590fa1ee47e6b8ad9d696378b5f"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "1d4fa4ee4f91526dfa035642a610ae86"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "5a58a50e348faa1f0473d5e145102a05"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "afa0946182fc26b5dc4e681c7b932445"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "96e86a69f56de89fb39df050f2d434a9"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "a326435e7ac3efbe5f6b0e595d73b776"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "4a808299b19ee7b72e5f2c0d500b7954"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "9cdfe16d902dd6289de23055a9be7abc"
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
    "revision": "9d8edb69b3f265fc3f386976ee9acd71"
  },
  {
    "url": "other/index.html",
    "revision": "8996513f493038ae74d40f86ae753a0a"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "98b5e5cfd70bd5d77363ecf853e883ae"
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
