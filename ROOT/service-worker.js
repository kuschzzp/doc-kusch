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
    "revision": "f8c45d48faf5bbad83554523e5539b15"
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
    "url": "assets/js/10.f1631b06.js",
    "revision": "7f1615c3eeff0e0b4690c7cd1ca50aaf"
  },
  {
    "url": "assets/js/11.7289d739.js",
    "revision": "47e01796ad0260b1e06b250be71c58f1"
  },
  {
    "url": "assets/js/12.35a0cdfe.js",
    "revision": "4447ced6c2c9bc7bf889adab64d047ad"
  },
  {
    "url": "assets/js/13.5fe9d878.js",
    "revision": "5ff8185cbc65a6383a850e19087b26c9"
  },
  {
    "url": "assets/js/14.778758fc.js",
    "revision": "1d28231b73851d693fbbd075d3c010d0"
  },
  {
    "url": "assets/js/15.e48fd90e.js",
    "revision": "b7643d60d0ff5778a26b936c73882efd"
  },
  {
    "url": "assets/js/16.1db7ca17.js",
    "revision": "4d944b171d9ce13fb68e3678fddf1a8f"
  },
  {
    "url": "assets/js/17.d0784166.js",
    "revision": "86d5b2814f2de0e2baf1eeb40752d5f0"
  },
  {
    "url": "assets/js/18.16a5edaf.js",
    "revision": "cb682ff737f6870efa4cdd8dfad91293"
  },
  {
    "url": "assets/js/19.a2007552.js",
    "revision": "8ec8996abf126a95ffe394e443a72156"
  },
  {
    "url": "assets/js/2.fb7d9ac2.js",
    "revision": "440d2000c8888a43d1931641c80b5a69"
  },
  {
    "url": "assets/js/20.b8cad6de.js",
    "revision": "c87e2ce85f9d5281dbcde174f568298f"
  },
  {
    "url": "assets/js/21.945d50a1.js",
    "revision": "963999504255e1b6eecb8f1246cabbcf"
  },
  {
    "url": "assets/js/22.f55ed292.js",
    "revision": "280129ec08ea128db50bc68000c66224"
  },
  {
    "url": "assets/js/23.f7577399.js",
    "revision": "88c8cefaeb09c78fdfafaf5075ecaed7"
  },
  {
    "url": "assets/js/24.c2f07296.js",
    "revision": "c9d7451fea419d46c53ea17564090eb3"
  },
  {
    "url": "assets/js/25.29e6a709.js",
    "revision": "fd38cd0bb6b8503042441ae4f1175952"
  },
  {
    "url": "assets/js/26.20c8b88c.js",
    "revision": "78b114f4254b01caf916b21414e33a8b"
  },
  {
    "url": "assets/js/27.a5e92d08.js",
    "revision": "cc71853f167f1b1ee0eb890e4ccf60c7"
  },
  {
    "url": "assets/js/28.9ee3cde7.js",
    "revision": "b4b675a756551f6832d7b9ec1e8e5a21"
  },
  {
    "url": "assets/js/29.0482c2f4.js",
    "revision": "3550db8694f72b655b01006726df99a4"
  },
  {
    "url": "assets/js/3.f4d99ebc.js",
    "revision": "4a52f211a7755fa8acbc8fa5b6038541"
  },
  {
    "url": "assets/js/30.d51a0ef3.js",
    "revision": "32b2bee879f36b245e81c51bbc4f7323"
  },
  {
    "url": "assets/js/31.c78bfdf7.js",
    "revision": "11e23781aedec5537d8cb3c88490afe4"
  },
  {
    "url": "assets/js/32.09a635a5.js",
    "revision": "6624e4e4a5c8affd8db3a50e6d6583b2"
  },
  {
    "url": "assets/js/33.340a15f9.js",
    "revision": "285e1e48b5cfdca8053b0d35c8c9859a"
  },
  {
    "url": "assets/js/34.b7594e15.js",
    "revision": "9667a19adc6cbff21cf59a36065a24dc"
  },
  {
    "url": "assets/js/35.f83420b2.js",
    "revision": "1cd5ed9f62f27e6c9ec4f14817083977"
  },
  {
    "url": "assets/js/36.60457373.js",
    "revision": "52f356964a87f296e2d79bb925df856a"
  },
  {
    "url": "assets/js/37.4b7e28b2.js",
    "revision": "28becc0a25670ba12c61126666aca5fa"
  },
  {
    "url": "assets/js/38.e429fb19.js",
    "revision": "4cb42b0adc04ad840ea24151ee185e85"
  },
  {
    "url": "assets/js/39.579238f3.js",
    "revision": "c8fa34dbb0a893e989d6157f817efebc"
  },
  {
    "url": "assets/js/4.f9bafd20.js",
    "revision": "75e1950d0e4f9deee88073ad92c1960c"
  },
  {
    "url": "assets/js/40.7ed96c09.js",
    "revision": "56727eb68cba8a183b009645272b348a"
  },
  {
    "url": "assets/js/41.5fe118e9.js",
    "revision": "ed64a90dc9901ad6ccc3982a1d20dbc6"
  },
  {
    "url": "assets/js/42.de1cefe0.js",
    "revision": "fad087722d88f2fac0f48c3986842b3b"
  },
  {
    "url": "assets/js/43.7ee13064.js",
    "revision": "be38f4bcfad28b004410836d5122b520"
  },
  {
    "url": "assets/js/44.c37ce066.js",
    "revision": "22730fa0a17ce7201f975ea9b0484515"
  },
  {
    "url": "assets/js/45.4b41c238.js",
    "revision": "12c413894d1413dcc905ea6db0b39324"
  },
  {
    "url": "assets/js/46.105d2eeb.js",
    "revision": "346f7f261dd250c400ef4bc4c6adec3e"
  },
  {
    "url": "assets/js/47.4a5a180e.js",
    "revision": "8157bda8b912da24c6e662e0de70699b"
  },
  {
    "url": "assets/js/5.c36caf4d.js",
    "revision": "9b5067441af346fb71d1953020f7c0f9"
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
    "url": "assets/js/app.a43e1817.js",
    "revision": "f4471a5f0e19e8a01cae7f36ee645410"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "b1bbb262c3cb9fc39d3ec75958f51e6b"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "0fc8c81ea7df3b07db26e66e052da3c8"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "e160ca8c8620f4f7b6931d3c7112b774"
  },
  {
    "url": "database/mysql/使用binlog恢复数据.html",
    "revision": "39a2b2133b6fc83645787389df16e954"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "97095287cf0505ff065ad177995921b9"
  },
  {
    "url": "database/redis/index.html",
    "revision": "9e66354561f198d9495d751e9598ae6a"
  },
  {
    "url": "guide.html",
    "revision": "030e52ddcb257921bcaf7ff324afcfce"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "8aa8aefa2aeceb5ec5315340a93e8bd0"
  },
  {
    "url": "interview/database/index.html",
    "revision": "a942a108df69ccd719c444ca68ec1306"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "18bb600b4cbb89face0defabb9a24d18"
  },
  {
    "url": "interview/java/index.html",
    "revision": "6c9d56e23616a6fd61882e6adb6d6d50"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "2dbae34dd807d92e878100abc2c8b116"
  },
  {
    "url": "java/base/index.html",
    "revision": "0ec9a11872ab7a1b74022ba24617beca"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "160f1368eaa9ff224dfbe064b0f8713f"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "03ddec8397e8ad5cb06bf67981c54733"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "25ca3e2d40fe80eff1c2cf2fcad8b850"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "76a6f33e4d0ef7cac5af174bfda35b44"
  },
  {
    "url": "java/design/index.html",
    "revision": "fff22ae9792a470dbe3eef3fc7104df9"
  },
  {
    "url": "java/internet/index.html",
    "revision": "e99d26bd04d688073e3a70ea10b49432"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "98e5058d107638959c73034b93b6a1f7"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "b95240fefeb25fb1deee04d61893609a"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "f28f8b9b5efe65e7a6d53f6d8cf5505f"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "50e19cf322c7b638025a7413ae39d6ef"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "1f73f9aa00f6be9f2581e471f3016ec0"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "71db6793f8d7715353626684989e218b"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "4453454218f029062f87e0d958eac430"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "12cf07b6fbd3e734312a45f37f296159"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "d4db2b39d393e815452f19cca2c44c5f"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "2be8a53bbb47bebefa9f22a9553294f9"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "c4afc1e28cc9e3c2c27a44245e40d355"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "fbaf8383e1747dd4f4b8146317fcbdd7"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "2093ec43f9e40583c04f48abce1faaaa"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "f1ea23abffcc79bb09746c7444e8e933"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "24f3b54bf1513ac8bc8dfb89a5e0ee2f"
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
    "revision": "3a1fa4696fbacbc21e1948399de79100"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "44284038b021b0692d41908be59ff3cb"
  },
  {
    "url": "other/index.html",
    "revision": "11ff619a8f3b2ed8d4dd20ad7c43f6dc"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "a9cc680551eb41cdd61c65cac772d2a7"
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
