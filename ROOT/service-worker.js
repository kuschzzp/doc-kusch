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
    "revision": "515fbf3dca497a4d27ee5432076c1d0c"
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
    "url": "assets/js/11.c679b97e.js",
    "revision": "53c79e90aa69543b225f9ba65fcc8a0d"
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
    "url": "assets/js/14.afe1e10e.js",
    "revision": "ebaf2d431732f4dc74904a6a0d92a142"
  },
  {
    "url": "assets/js/15.86b76e7d.js",
    "revision": "aa642ff53c071baaffeff02b60123650"
  },
  {
    "url": "assets/js/16.db62aedd.js",
    "revision": "d151a2b51488f355e89f858c8f44ba4e"
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
    "url": "assets/js/20.a89d7698.js",
    "revision": "0da2b66f015a555d7f12f4fa24e083a9"
  },
  {
    "url": "assets/js/21.0fc2e872.js",
    "revision": "1cdff63595d55cb4caa2555d7e4e235b"
  },
  {
    "url": "assets/js/22.64d63d25.js",
    "revision": "bdf76d10f7f882f4cb88932a2ad9cca5"
  },
  {
    "url": "assets/js/23.a3a522b1.js",
    "revision": "e5d65d4a05886c96e99f6bd42344154a"
  },
  {
    "url": "assets/js/24.b1ab99a2.js",
    "revision": "2e675dc1dba8c9dfa4cb1d35f35da96f"
  },
  {
    "url": "assets/js/25.33bfa164.js",
    "revision": "99ec3d6a03f3c82fa71b26ef81b8a32a"
  },
  {
    "url": "assets/js/26.6b69b4ad.js",
    "revision": "c1f78e6725b13a15a663c70586b594c9"
  },
  {
    "url": "assets/js/27.9375ae2c.js",
    "revision": "cc71853f167f1b1ee0eb890e4ccf60c7"
  },
  {
    "url": "assets/js/28.2d9e4178.js",
    "revision": "b4b675a756551f6832d7b9ec1e8e5a21"
  },
  {
    "url": "assets/js/29.7b5bf88f.js",
    "revision": "5b06c01b1b668180c4bdf7444c66c77c"
  },
  {
    "url": "assets/js/3.f4d99ebc.js",
    "revision": "4a52f211a7755fa8acbc8fa5b6038541"
  },
  {
    "url": "assets/js/30.e5db9538.js",
    "revision": "58fa15d3154c15f19897442512af2c72"
  },
  {
    "url": "assets/js/31.c6b906c9.js",
    "revision": "d7efa1263639dee8b2f012169516c72e"
  },
  {
    "url": "assets/js/32.b32b4598.js",
    "revision": "470ca76815af71b0c6b16dbc0623658f"
  },
  {
    "url": "assets/js/33.f15f80ea.js",
    "revision": "067e4dd48064788cb75d9a3bb52c35ea"
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
    "url": "assets/js/36.04eb0d1b.js",
    "revision": "6870476173726316eb6cdff0268311b2"
  },
  {
    "url": "assets/js/37.5141decd.js",
    "revision": "a7c26999f7cdf3e5c6c0c1f25de84a1a"
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
    "url": "assets/js/40.c8eaa8a0.js",
    "revision": "6d7075b9fbf6c212177927ad25af791e"
  },
  {
    "url": "assets/js/41.ab2c5336.js",
    "revision": "698707b7e4b89261ecd07f979fd74419"
  },
  {
    "url": "assets/js/42.0257e3b7.js",
    "revision": "9d8854923072b57d9b4e4a41a24296a5"
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
    "url": "assets/js/9.7d6661bb.js",
    "revision": "3c775001250971c5a9ade571e67f936d"
  },
  {
    "url": "assets/js/app.f0c4d0c7.js",
    "revision": "c7eed045eef6846c8124d907a33f49d4"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "27539edf8d495f2253aef3c49b3341cf"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "246e2fbab15e8fecde6a91dfd65117f1"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "e75557ac567029df07569178ba978550"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "2a2109ecabf3d8ce4d0e30ab7d231c4a"
  },
  {
    "url": "database/redis/index.html",
    "revision": "03067407891b7125f248cab252ddcc67"
  },
  {
    "url": "guide.html",
    "revision": "8fdca2577cf2571c6a73afd1c1b24373"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "2c38514b284a439e82e42756ce0f364e"
  },
  {
    "url": "interview/database/index.html",
    "revision": "8a240cf56d8956e01e388da2c6cd6808"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "32207fb3d7ebc39d23f6ae64eeed3e38"
  },
  {
    "url": "interview/java/index.html",
    "revision": "4ba8ef4dbc75b0bc6f609b6de3e43a41"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "06b37038fb6ba42fe31222b5cdb80f98"
  },
  {
    "url": "java/base/index.html",
    "revision": "8e13b6bf6c4e4b15bb07217c51d4b5d5"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "6a8fd3f88c28c11eab441a69bb2815e6"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "d2f6083fad5577ca877731f5b54366c5"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "ebe0d595d3ab608a01594bb9d19fab09"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "a55254aac84dccb557bdacf4e32b1651"
  },
  {
    "url": "java/design/index.html",
    "revision": "20d84633952e804b7dcfb4e320eff988"
  },
  {
    "url": "java/internet/index.html",
    "revision": "f0fb977dbd02aff72973bce4c5d1ef0f"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "cbe1a6b4cd3a8cba7d4bed1b7a80d2c8"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "d682ffb570742af22d4d18fd3ce7eb37"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "8406ab2a6ab9b2431e895f0d425731cc"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "35fa1abf944fd3be98974c92f1a41b21"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "a110460f10a248e050b43aa35683bd1f"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "0ea67dd4d5c434cdea2c6e37ccc95e2e"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "1f82c8b6e734620e62cccea05e98ac5a"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "49d08d0038944886c9609c02402cfbac"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "39289cedd33f05b07bef41a40a982c13"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "b8296f939aabf7cefe28e529d4cc56e6"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "96f77239e6de89c0fb419d21c88bb9b4"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "18f0f18cd2afc38da1593f5f5af3969c"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "20813c68632267e342b675cec4d03a8a"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "405ecba2a6d4a36ed1b09c190c807d1e"
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
    "revision": "f249eeae9daaf068af2ad922fb8b0df6"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "233a8ef9002a80e9431fd0b8544c58c6"
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
