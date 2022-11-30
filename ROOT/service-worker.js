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
    "revision": "923195e662062b15fbba5dbc5d91bd53"
  },
  {
    "url": "assets/css/0.styles.5171575e.css",
    "revision": "73cb99c07ae8dfd08ebe29475e858046"
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
    "url": "assets/js/10.27f0a8fb.js",
    "revision": "35662540a04d26a6384dbb6db75114cb"
  },
  {
    "url": "assets/js/11.19d90768.js",
    "revision": "a03e2384f941fcd1c52ef5eb84a98591"
  },
  {
    "url": "assets/js/12.beee739e.js",
    "revision": "c550039d523c6ba13e138a9d36bf4a73"
  },
  {
    "url": "assets/js/13.56408cb8.js",
    "revision": "22d09c2c19b1de6b5cc46c69b5d218fe"
  },
  {
    "url": "assets/js/14.63bb8aa5.js",
    "revision": "06d4c46588d2ba9bed4fa38f2304ee9d"
  },
  {
    "url": "assets/js/15.20303b25.js",
    "revision": "59801f35088a92aa0ed358e9b0fdc95b"
  },
  {
    "url": "assets/js/16.c492c7c9.js",
    "revision": "f62a06a5b1b712699c2f45beda51b1f5"
  },
  {
    "url": "assets/js/17.dc19729b.js",
    "revision": "4009d6373e730e9f4885947874c21672"
  },
  {
    "url": "assets/js/18.d2ad4988.js",
    "revision": "33f795aaa756596b87aac33ecbfb4812"
  },
  {
    "url": "assets/js/19.605356d0.js",
    "revision": "55c86cc279a1ee534719222beedfbed5"
  },
  {
    "url": "assets/js/2.f22b8e8d.js",
    "revision": "b1981ecdc5e8a9d0f1c57989c7712498"
  },
  {
    "url": "assets/js/20.6d2831c7.js",
    "revision": "5ec2adb2697c46c76fba97e12dbe5640"
  },
  {
    "url": "assets/js/21.7fc27134.js",
    "revision": "f0c49be275687ed5eb5e8d24215b4cac"
  },
  {
    "url": "assets/js/22.cc30cfb8.js",
    "revision": "f034d39c9a7173bc0c9b7010488724a3"
  },
  {
    "url": "assets/js/23.cb5348de.js",
    "revision": "23556e7339f0165110ebd7228ab70c4a"
  },
  {
    "url": "assets/js/24.f0c96ba8.js",
    "revision": "bf38f4895d9a5269a341f133fdf9a5a4"
  },
  {
    "url": "assets/js/25.5d61f2c0.js",
    "revision": "328a5205f94756ced7f2100bb4036b01"
  },
  {
    "url": "assets/js/26.8494cc1d.js",
    "revision": "41807c5348766aab80a6fda49d870ef7"
  },
  {
    "url": "assets/js/27.0a9bc4ea.js",
    "revision": "d73e5d2a6ebb47bec6c8d2cc4faf329c"
  },
  {
    "url": "assets/js/28.dd26d43d.js",
    "revision": "2f159a460d415368b87ad92e0583cf0f"
  },
  {
    "url": "assets/js/29.f847d317.js",
    "revision": "59f310a3aa82a4178dfe1e94c6fe0300"
  },
  {
    "url": "assets/js/3.59af73fa.js",
    "revision": "2a2806f4c9a6ebecb623d71c8ef261b8"
  },
  {
    "url": "assets/js/30.af0b1fbf.js",
    "revision": "e429b2ddf95a53e59e355ca1f974f137"
  },
  {
    "url": "assets/js/31.10ab76d4.js",
    "revision": "d8e2731164d205db9cbc88d5858a9d53"
  },
  {
    "url": "assets/js/32.2e9d48c8.js",
    "revision": "8458e63721a0e5b448f54bc37efcae4f"
  },
  {
    "url": "assets/js/33.4cc165fc.js",
    "revision": "1c7cfa0ae71d1e8b3c4d98392ca905bf"
  },
  {
    "url": "assets/js/34.dcdda8f1.js",
    "revision": "0580e818f63d121365be38e5789edec0"
  },
  {
    "url": "assets/js/35.9260d822.js",
    "revision": "337d6beba20b5f90b2cebda169965d98"
  },
  {
    "url": "assets/js/36.53d139d8.js",
    "revision": "51c6c3d597f74f44137327417fff9e3d"
  },
  {
    "url": "assets/js/37.33ae1c8a.js",
    "revision": "4a2f70cc199d0c223522bf4b829ac018"
  },
  {
    "url": "assets/js/38.4d173d05.js",
    "revision": "86b57b12e1fad083596388c62e263224"
  },
  {
    "url": "assets/js/39.04c84552.js",
    "revision": "eed70c311247f5c16d0d2a10779495dd"
  },
  {
    "url": "assets/js/4.cab3fad4.js",
    "revision": "09321f3891410a13a2098e53050d6034"
  },
  {
    "url": "assets/js/40.c5977513.js",
    "revision": "b6045c472a3c9f761d18689dea3b9c8e"
  },
  {
    "url": "assets/js/41.6ec465f0.js",
    "revision": "dc347e0f9d207d08420f87798555df4c"
  },
  {
    "url": "assets/js/42.760a236d.js",
    "revision": "c36b2af646321c24706837ab94b5b1f1"
  },
  {
    "url": "assets/js/43.faac3d59.js",
    "revision": "798de67409fe9a016bf4fbd60005d0e2"
  },
  {
    "url": "assets/js/44.98914e46.js",
    "revision": "3078a4abe2633f171534dacf6b253497"
  },
  {
    "url": "assets/js/45.1708f383.js",
    "revision": "35f55529b95640ddaf4eeeb0625f64d8"
  },
  {
    "url": "assets/js/46.a32ef5cf.js",
    "revision": "603f8411dec712bb23d28d521970f45b"
  },
  {
    "url": "assets/js/47.a7ec064e.js",
    "revision": "2400b9d88e3e66d0e130d8807c6d3745"
  },
  {
    "url": "assets/js/48.63c7ad81.js",
    "revision": "1fffb810d891bc8db75bf6e4a7203cca"
  },
  {
    "url": "assets/js/49.91289ff3.js",
    "revision": "8accb31bf60f3f1384b8da48e8bbc647"
  },
  {
    "url": "assets/js/5.32ae3319.js",
    "revision": "10b3c318706e01617ef39eb42cb04aed"
  },
  {
    "url": "assets/js/50.b39daa4a.js",
    "revision": "31c29381ca64fbe21393a7209db43f63"
  },
  {
    "url": "assets/js/6.c2f278fa.js",
    "revision": "da443d8ddd9097ffcd646fac0c64e8ca"
  },
  {
    "url": "assets/js/7.431c0fa7.js",
    "revision": "2bc771742b187ff2713442773ed76bd3"
  },
  {
    "url": "assets/js/8.083107a7.js",
    "revision": "ac3360a9a4f14ca9b82ca7bbe71df4f9"
  },
  {
    "url": "assets/js/9.bccc5211.js",
    "revision": "96a6da54af62a312c8bcfa918bedc436"
  },
  {
    "url": "assets/js/app.6604677a.js",
    "revision": "0b40e483b72318e96ab9c2d0fd30ce5e"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "58922b423db26fcf652069d26229dc60"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "c1527fa497d9104e72bafac1b0b2358d"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "7dbdf058d9e6cae1725c5be04fb4edc3"
  },
  {
    "url": "database/mysql/使用binlog恢复数据.html",
    "revision": "2d66e5de8dd4748cfd66e5c7df760d74"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "dfac41467c98805f7461cf4ec9f1e10d"
  },
  {
    "url": "database/redis/index.html",
    "revision": "a67188b4c16b17ff9c18f7da0cb45ffa"
  },
  {
    "url": "guide.html",
    "revision": "7daf8d237f159fbbec4d011f7613d6d1"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "ac48b38bd49468173094d3bbfd990e6a"
  },
  {
    "url": "interview/database/index.html",
    "revision": "658b209e1164f3519b90363d9046d6b3"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "8fa75f7a1db7696f3772a6673f29b056"
  },
  {
    "url": "interview/java/index.html",
    "revision": "1c129e85cd2dc879fb1756e33a1652b5"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "1bdf7e866b662e7a7031a7f39e7107a2"
  },
  {
    "url": "java/base/index.html",
    "revision": "167204c2a78b5d4790a588c8c33c8555"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "4eed741477114dfbea28ba93aadeba7f"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "fa5a9a8c183d77bcaa49db97edba172f"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "e7add4d84c3cdb831b65a4fd2f73874e"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "21dd20f909c65615047afded7ed5a0c0"
  },
  {
    "url": "java/base/重写equals和hashCode.html",
    "revision": "c6d688b2f85d1317afbd3309c8d981ea"
  },
  {
    "url": "java/design/index.html",
    "revision": "02ca5e212fa30ec7d1e1759e3efc6eb5"
  },
  {
    "url": "java/internet/index.html",
    "revision": "af7b928f6df1c9fa83d8a5d5d2370667"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "0940905ac6c2f061cca8caf29eea1ec9"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "5872235e2c82640fc46727d2519f5b34"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "f66557578a894dfdc3a1b279807e6486"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "628406231ddd4d6e05e266a81e5830e5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "ed38cfa21465901d9e4e75810c62633b"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "e1915c05b1b3a01c63bf61be22cb1b18"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "bee1b34f0fcbf48010896a66e4971298"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "045ae5b6c089a7996932bab7cceeee13"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "907baec48064b37219cddbca06d332e6"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "12cf28fce7ec8a87c0b0e36a2ac16bb6"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "fbb7007b9fc0021ebe2bab931869b9dc"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "48ce80760b31a09175d90a5d6520ea5f"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "56919b5d92a863ea67dedd89bccdd372"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "8cd0ff7de4eec357cf1845b7943c6d12"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "c264282d43a2db4e31b0ba5d457d8e43"
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
    "revision": "068958802135626de19a01b00f8f6ae5"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "9104532380a542d27a48d20ca285d6f5"
  },
  {
    "url": "other/index.html",
    "revision": "9748a60c01c782d4e4aab246bdcd2352"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "40ee7f3469b51667504374dd6f69a68f"
  },
  {
    "url": "other/常用网址记录.html",
    "revision": "5e6e8625bd8015044d4c78da6805c544"
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
