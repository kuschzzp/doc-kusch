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
    "revision": "820368a037c7b69aa495de7db391ed86"
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
    "url": "assets/js/11.ad89fff1.js",
    "revision": "92de3a731dbbe842ba8f1c8af514d88a"
  },
  {
    "url": "assets/js/12.64c5898a.js",
    "revision": "5073e879d33fd22002cbae1e743f2470"
  },
  {
    "url": "assets/js/13.56408cb8.js",
    "revision": "22d09c2c19b1de6b5cc46c69b5d218fe"
  },
  {
    "url": "assets/js/14.c53bb3d4.js",
    "revision": "53cc4d6c51f2d89e6fb6418bd0435672"
  },
  {
    "url": "assets/js/15.d1b1dce4.js",
    "revision": "5376845ff70c590f885ba756d2f59c0f"
  },
  {
    "url": "assets/js/16.ddeae417.js",
    "revision": "2cba55fcf28aedc42df164058f337e62"
  },
  {
    "url": "assets/js/17.5316a06f.js",
    "revision": "ced1b5e4f63e7b4f997aef3ebba7d745"
  },
  {
    "url": "assets/js/18.04d755ab.js",
    "revision": "a2071bd21153557f4fbba098a00b9d76"
  },
  {
    "url": "assets/js/19.bd6b7fbe.js",
    "revision": "d301faca1116de767eeed786f173c4c3"
  },
  {
    "url": "assets/js/2.f22b8e8d.js",
    "revision": "b1981ecdc5e8a9d0f1c57989c7712498"
  },
  {
    "url": "assets/js/20.609885cf.js",
    "revision": "02402333a477a3384e6079f4959f9d7b"
  },
  {
    "url": "assets/js/21.3f03f368.js",
    "revision": "956e692c92767ca78665f904a0d4d1fc"
  },
  {
    "url": "assets/js/22.acdccc7d.js",
    "revision": "0f8a179a966b038986cf7535b10fb0ab"
  },
  {
    "url": "assets/js/23.d41fcf27.js",
    "revision": "40b6a906f680a1826c2d68698cc90155"
  },
  {
    "url": "assets/js/24.f0c96ba8.js",
    "revision": "bf38f4895d9a5269a341f133fdf9a5a4"
  },
  {
    "url": "assets/js/25.5838f7c9.js",
    "revision": "f47655bface23547d7151e882e7058b0"
  },
  {
    "url": "assets/js/26.b22105ca.js",
    "revision": "9d891f8d6a845647bc10bddccb0f1f7a"
  },
  {
    "url": "assets/js/27.0a9bc4ea.js",
    "revision": "d73e5d2a6ebb47bec6c8d2cc4faf329c"
  },
  {
    "url": "assets/js/28.974cfbec.js",
    "revision": "6a268e15e930dd53810e719d48c276cd"
  },
  {
    "url": "assets/js/29.57d2633d.js",
    "revision": "e2d310e77b81c7a856bf809ac0977c1e"
  },
  {
    "url": "assets/js/3.59af73fa.js",
    "revision": "2a2806f4c9a6ebecb623d71c8ef261b8"
  },
  {
    "url": "assets/js/30.611a5c04.js",
    "revision": "566b67cfe59cf72073979d2b4bb82be5"
  },
  {
    "url": "assets/js/31.edc3c216.js",
    "revision": "272f017661c71f9d235a49f71b7cfed4"
  },
  {
    "url": "assets/js/32.1835064f.js",
    "revision": "1d56cd40500667f6d9033639bb4512e6"
  },
  {
    "url": "assets/js/33.8ff1f5d0.js",
    "revision": "2f329335d2e4f408350f50a9811758ef"
  },
  {
    "url": "assets/js/34.4552e255.js",
    "revision": "7968e885f30d66088cce4ab501f2bba8"
  },
  {
    "url": "assets/js/35.3e9693de.js",
    "revision": "06bd1e6158407b725a7f7f224de1bdd8"
  },
  {
    "url": "assets/js/36.5413fbd4.js",
    "revision": "f224c8d40dbd1aa84dfd58da3a9494ff"
  },
  {
    "url": "assets/js/37.f0a176c0.js",
    "revision": "7c7b9c3de468864a4252224b33ecf9e4"
  },
  {
    "url": "assets/js/38.c234a4db.js",
    "revision": "58597679530c16b32e790dc941003611"
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
    "url": "assets/js/40.de275ddb.js",
    "revision": "a025b9b9fadedde92a075fdde1862572"
  },
  {
    "url": "assets/js/41.60c1b140.js",
    "revision": "645e6eb1f253b22e8bd05a81d7959369"
  },
  {
    "url": "assets/js/42.9462a62a.js",
    "revision": "6a6b1ca958f12c7a7763cdb2a106d153"
  },
  {
    "url": "assets/js/43.a9dd4842.js",
    "revision": "e585eebc258a207e34b7ea90f9ca10f0"
  },
  {
    "url": "assets/js/44.0bb97ac3.js",
    "revision": "8224297c74a996cfb1d241be5e8f0588"
  },
  {
    "url": "assets/js/45.a50b31e3.js",
    "revision": "d42a5563047f4804b4a99e2920521307"
  },
  {
    "url": "assets/js/46.0bc15ca4.js",
    "revision": "be997e081876df54c83b4ce2421f6073"
  },
  {
    "url": "assets/js/47.29e95b9c.js",
    "revision": "b060de0b7c1de7248cdf2222d395a27d"
  },
  {
    "url": "assets/js/48.3d5180e0.js",
    "revision": "42b59fe9a5b5337a05ef031cdea7f29d"
  },
  {
    "url": "assets/js/49.92d110b2.js",
    "revision": "e0d309a3856e45ebc4c55cff31d9ceb0"
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
    "url": "assets/js/9.afd16704.js",
    "revision": "fc1ad51a3a8a868583e354c6df48a1fc"
  },
  {
    "url": "assets/js/app.14218b1b.js",
    "revision": "fd6d60904932883ff83cbb5af982f57f"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "079bc79f1eeb479f5d79b326767f456f"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "9202906102284ff4bd7efad30d5d9029"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "f8bc5c82f688ec0ee7e192b305708863"
  },
  {
    "url": "database/mysql/使用binlog恢复数据.html",
    "revision": "9a8e1d032b0c2fa753d3b2991003a582"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "13dcae2019f1c0d5039e409df3e0d93d"
  },
  {
    "url": "database/redis/index.html",
    "revision": "089066aa357ef1b653cadd6b9d9e664c"
  },
  {
    "url": "guide.html",
    "revision": "07b6ad1d1c6d0838964b1b0fe8de1261"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "d38d8b681abca07213e36c9a8286fb91"
  },
  {
    "url": "interview/database/index.html",
    "revision": "68b00347318be57fd8013b6f0dfdbad7"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "61ab40eec67e288c014a5aa8921a884b"
  },
  {
    "url": "interview/java/index.html",
    "revision": "865a643bb110449e61cc1355911e60b6"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "0a69875c4990abaec565d7006063b2bd"
  },
  {
    "url": "java/base/index.html",
    "revision": "1b5a55e6af4f061f00b0aae353e3526f"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "b12035616a83b1b6a41fff8e183d1992"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "1f1bea2447ca9636082e1f65b4eeed59"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "da0fd810fae527b50a076b0df74bff1b"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "ead4632cd1f6a1242391c156dadeeb9c"
  },
  {
    "url": "java/base/重写equals和hashCode.html",
    "revision": "e85ffc82269bad78e36f9371a1d7c284"
  },
  {
    "url": "java/design/index.html",
    "revision": "386064fe81440ba438ae99b541d8911f"
  },
  {
    "url": "java/internet/index.html",
    "revision": "56a3a8f2f21ff11527c389f1aec017ea"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "ccfb696c0294b8e1b128f7737b214aec"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "2ebe03e575b06b3430d286a6343f5475"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "0b6c92ffced41d7516050230dfa76361"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "70f7cfd4969673805280c830d67f39e6"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "ef70003d48b36d0dcad93cffd38dd4cd"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "9db40cccdaad42211632b626c00063c6"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "8857714139259cb46ce7e9ab8afbb3e5"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "78273b4bece96f7e99c7dbcfa672854f"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "c8e38f9fc1abf4e75d158900c75510df"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "c3911d5a36172642cc39c2b050465325"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "c1195a36c046252cc16591689dfe9f7b"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "7abdf8a7931daff7c8f8147213e54f7b"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "bd2429df036aadb764a7e24455e855fb"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "23503fde53217194043844b47afbdb94"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "338b14887543c0c04424da67902b14db"
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
    "revision": "eeb63e8332cd877c10c08c8db78e0440"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "2fc008e91ca5c49880b702a0ee3e4b4b"
  },
  {
    "url": "other/index.html",
    "revision": "5072aa07b85503b53462a261a3a03f78"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "118ae1af809deec1b5cc2b157b8aa6fc"
  },
  {
    "url": "other/常用网址记录.html",
    "revision": "3d033a22e08496ed5dcd4901099ed753"
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
