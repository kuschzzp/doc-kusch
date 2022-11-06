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
    "revision": "3935ed82e3526bedb1abda5710e724c2"
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
    "url": "assets/js/16.b10e0243.js",
    "revision": "e16027755b428cc0f200bf4e27126d27"
  },
  {
    "url": "assets/js/17.f61a8f30.js",
    "revision": "adc83bf718fb06c21bddc5db4dd8ce9d"
  },
  {
    "url": "assets/js/18.77854a51.js",
    "revision": "0d62fd8ddbec267b51849889e5f387c4"
  },
  {
    "url": "assets/js/19.57e42a14.js",
    "revision": "52d34ec2a088ff6bbd7f5d323913b9c0"
  },
  {
    "url": "assets/js/2.fb7d9ac2.js",
    "revision": "440d2000c8888a43d1931641c80b5a69"
  },
  {
    "url": "assets/js/20.1bb9b2e0.js",
    "revision": "bc8410939e807ddc7e676f7fff214dc4"
  },
  {
    "url": "assets/js/21.56ed263f.js",
    "revision": "c328b187db60d99d3898ea2382373ad2"
  },
  {
    "url": "assets/js/22.ea6cd15a.js",
    "revision": "dcd9a0bf7b5507981004885074d13b12"
  },
  {
    "url": "assets/js/23.27e949af.js",
    "revision": "8ea83b59bf8cc953aed776fc87d7cde5"
  },
  {
    "url": "assets/js/24.c2f07296.js",
    "revision": "c9d7451fea419d46c53ea17564090eb3"
  },
  {
    "url": "assets/js/25.d2748ffd.js",
    "revision": "c8eec555b5e46945658c6c910bf90b2c"
  },
  {
    "url": "assets/js/26.62ad2ff7.js",
    "revision": "f511c403c847157da3a9b49a2ef41fb4"
  },
  {
    "url": "assets/js/27.33dd7d5f.js",
    "revision": "e008975387e84bd8f42ca5a9a23ed3fd"
  },
  {
    "url": "assets/js/28.e5b91f1d.js",
    "revision": "7db9e09a6f35699aff051e26de94a04e"
  },
  {
    "url": "assets/js/29.8e503679.js",
    "revision": "ba0b8f3bf534433d7d32029d527f3750"
  },
  {
    "url": "assets/js/3.f4d99ebc.js",
    "revision": "4a52f211a7755fa8acbc8fa5b6038541"
  },
  {
    "url": "assets/js/30.27bf7eba.js",
    "revision": "4e2b9cfb0929e715ce533d6a80ab865e"
  },
  {
    "url": "assets/js/31.c78bfdf7.js",
    "revision": "11e23781aedec5537d8cb3c88490afe4"
  },
  {
    "url": "assets/js/32.f49d9416.js",
    "revision": "0b06772ec51cc7ac166d9bd8e68bcc04"
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
    "url": "assets/js/36.cd161ef7.js",
    "revision": "759ec1ec7648b30d9ab530fde6a34b39"
  },
  {
    "url": "assets/js/37.72b9a117.js",
    "revision": "42d1d1df128834260b1786bc0576d14f"
  },
  {
    "url": "assets/js/38.e429fb19.js",
    "revision": "4cb42b0adc04ad840ea24151ee185e85"
  },
  {
    "url": "assets/js/39.9417740e.js",
    "revision": "c8ff2b657f875f9fd39aadcd15e2d44a"
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
    "url": "assets/js/41.689d6a15.js",
    "revision": "dea646cc8520fa0cd1648ba2a8dbff43"
  },
  {
    "url": "assets/js/42.de1cefe0.js",
    "revision": "fad087722d88f2fac0f48c3986842b3b"
  },
  {
    "url": "assets/js/43.9c3abc82.js",
    "revision": "81ee1bd9d9d6e2c7870d1421716bbe58"
  },
  {
    "url": "assets/js/44.c37ce066.js",
    "revision": "22730fa0a17ce7201f975ea9b0484515"
  },
  {
    "url": "assets/js/45.c7679a01.js",
    "revision": "213cf9c2b3bfed3f07e032a4707073a6"
  },
  {
    "url": "assets/js/46.24902f2c.js",
    "revision": "ea64210d78d82eea5210e1913852d1b0"
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
    "url": "assets/js/app.9e8bc019.js",
    "revision": "cfaaf73fbd253b4a26a354ae2f88219f"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "936258751cf4447bf3dbccc837662bb0"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "1bcfd5d7d8e469990c7c5284049dffdd"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "fb9f2a22d38937d231f2ced98c9162ea"
  },
  {
    "url": "database/mysql/使用binlog恢复数据.html",
    "revision": "6fb84bbf593b0c6d534e1eda5cffc475"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "9ac689c25d47a3588d70a624960e0666"
  },
  {
    "url": "database/redis/index.html",
    "revision": "eb28dd42eb77ef246f196125e824d539"
  },
  {
    "url": "guide.html",
    "revision": "0232b6417f48cdf4deddb1c4ac76941f"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "0987be550f84b9bf864effdd96f6fd18"
  },
  {
    "url": "interview/database/index.html",
    "revision": "1b3211e16df7f5e819040e5dafe9a104"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "4db0daec65159669b96c217b67ae54dd"
  },
  {
    "url": "interview/java/index.html",
    "revision": "73ecaaa683a10a6a3ea928d93a59d79e"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "84cfb2d42248d685f2bfc5e1e022c071"
  },
  {
    "url": "java/base/index.html",
    "revision": "db8307a816dfd0f94adc3cf5b134d3b8"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "46ac8c707d30df2594371e11c5cb0639"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "e584b0c7c16067a647d4cb4da7f6c2d4"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "866d796394d7b97dcdab3f58d2c7c056"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "aa74ccded81ed3dc660866be5d097378"
  },
  {
    "url": "java/design/index.html",
    "revision": "86c1adb189972788319070dc3c21c4d5"
  },
  {
    "url": "java/internet/index.html",
    "revision": "412b60caab4ac22cba2ee6320f76e21f"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "6e0fa150c877b31955cb2121dc2248ce"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "63cbbd6ab2056c80c79b9adea8dda143"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "acf0174832d7e9c62deca37213f25a75"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "ee61505aa57d3053895d9e3dff7bc179"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "c4dc22ff07df4c80baf160da5b21bea2"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "efeafd76b443cd66bd07ef7a4dd096da"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "2a926a5eeaa5514ab984e16698c537a5"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "a5154d4f2be7ef5fb24667de9f768f69"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "fd147a6968e29cd90fab92a4e8e024c6"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "7524fc3d3a23e9ff9bffaf3e981416c8"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "9ec42c74cc2dd770a131205fe060d12c"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "9da7ade60f5c3efd3a0b5f0b52e2fd17"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "800cf8698d892cc43c790c4b83619bb3"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "a90ccf0ce3a352efddda100fe3e3dfd1"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "a229c2196301ebfbfbc674e3d844f22c"
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
    "revision": "2429150c7c2f45a908c3ddd02c9905fb"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "ca307855204b8ae2aa4448bc4a9c8751"
  },
  {
    "url": "other/index.html",
    "revision": "0909dc976bad42fa50066ff504303e7a"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "da7c30730e3bffe085482c8e4328fd25"
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
