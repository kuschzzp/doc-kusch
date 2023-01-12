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
    "revision": "18b0ac99c6267ffc75954b01c367dab4"
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
    "url": "assets/js/11.e4d53d85.js",
    "revision": "ed79f3350444a0ba43452ae89cf89566"
  },
  {
    "url": "assets/js/12.905e1390.js",
    "revision": "99a6381505234ba7bdbeeac9219d6d9e"
  },
  {
    "url": "assets/js/13.6c07b755.js",
    "revision": "2bdf6947401a1bcf0afc23fbdf77d0af"
  },
  {
    "url": "assets/js/14.1503a62d.js",
    "revision": "139f6520b723382d263b755369768a35"
  },
  {
    "url": "assets/js/15.bd0a462c.js",
    "revision": "6341162c08029beeb4af1084523583bb"
  },
  {
    "url": "assets/js/16.b3d80b5c.js",
    "revision": "93606a5386c5482ee4e0dfee7471a8e7"
  },
  {
    "url": "assets/js/17.09151539.js",
    "revision": "013d20559b8f4139f73bd564ac36192a"
  },
  {
    "url": "assets/js/18.c40fe4d6.js",
    "revision": "66ddc477c9128470a057f664f440575c"
  },
  {
    "url": "assets/js/19.78d64936.js",
    "revision": "46d01d82cb2125bcaa6a4053c3463ca3"
  },
  {
    "url": "assets/js/2.f22b8e8d.js",
    "revision": "b1981ecdc5e8a9d0f1c57989c7712498"
  },
  {
    "url": "assets/js/20.d530b27f.js",
    "revision": "11b0c8226cf8435079edbcaae84dff89"
  },
  {
    "url": "assets/js/21.3f03f368.js",
    "revision": "956e692c92767ca78665f904a0d4d1fc"
  },
  {
    "url": "assets/js/22.0d4b8626.js",
    "revision": "dfd7a8a12af95bf8820f9bd171982464"
  },
  {
    "url": "assets/js/23.f01adf30.js",
    "revision": "ba6badaa48c4d7f38288200d88556c65"
  },
  {
    "url": "assets/js/24.f76c18fb.js",
    "revision": "19e8eb26da7b9b5376a6f652a5e8ae13"
  },
  {
    "url": "assets/js/25.5838f7c9.js",
    "revision": "f47655bface23547d7151e882e7058b0"
  },
  {
    "url": "assets/js/26.d9a06055.js",
    "revision": "d7591f558cfce3f89e54ca47ac8f685a"
  },
  {
    "url": "assets/js/27.5f9b228b.js",
    "revision": "ace46bc5394e4b6db05763ac31ca0954"
  },
  {
    "url": "assets/js/28.7104493e.js",
    "revision": "c586c326632aadd671ba01bd98946ec3"
  },
  {
    "url": "assets/js/29.91f36910.js",
    "revision": "feaf9a133a17985cf9ff9f09a7c41ac3"
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
    "url": "assets/js/31.b16e9f18.js",
    "revision": "3a31d46b5f3867be9d12b16a7f23de98"
  },
  {
    "url": "assets/js/32.2e9d48c8.js",
    "revision": "8458e63721a0e5b448f54bc37efcae4f"
  },
  {
    "url": "assets/js/33.d2dbaf2f.js",
    "revision": "13461e13ee126f09e3f579eab25bfff1"
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
    "url": "assets/js/36.fd5e970b.js",
    "revision": "1cbdc708baf8aed73f4954613af0007a"
  },
  {
    "url": "assets/js/37.841815f6.js",
    "revision": "a00658dbfc7ea6b89e7805ae5a68acc8"
  },
  {
    "url": "assets/js/38.e9b27bbe.js",
    "revision": "3d47af3cd85e3773f3afd76db0a78168"
  },
  {
    "url": "assets/js/39.20e46ba0.js",
    "revision": "0c2e7ec71e864559b18abf7179d64acc"
  },
  {
    "url": "assets/js/4.cab3fad4.js",
    "revision": "09321f3891410a13a2098e53050d6034"
  },
  {
    "url": "assets/js/40.8ac8d2db.js",
    "revision": "d4d627634732fb5ba29e1a06d5602542"
  },
  {
    "url": "assets/js/41.6ec465f0.js",
    "revision": "dc347e0f9d207d08420f87798555df4c"
  },
  {
    "url": "assets/js/42.9462a62a.js",
    "revision": "6a6b1ca958f12c7a7763cdb2a106d153"
  },
  {
    "url": "assets/js/43.faac3d59.js",
    "revision": "798de67409fe9a016bf4fbd60005d0e2"
  },
  {
    "url": "assets/js/44.e1a1e1d4.js",
    "revision": "581fc19813064c4e77566bf8121fa193"
  },
  {
    "url": "assets/js/45.1708f383.js",
    "revision": "35f55529b95640ddaf4eeeb0625f64d8"
  },
  {
    "url": "assets/js/46.0bc15ca4.js",
    "revision": "be997e081876df54c83b4ce2421f6073"
  },
  {
    "url": "assets/js/47.2e1dc159.js",
    "revision": "8d562192e0c9433f65b3c797fb7aa1ed"
  },
  {
    "url": "assets/js/48.8eb3b0d2.js",
    "revision": "e327d6c72bfd5ccfc74ca773eeb4e434"
  },
  {
    "url": "assets/js/49.d33d4909.js",
    "revision": "040a763596760f74de9fd1c183cdccfb"
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
    "url": "assets/js/9.30f4de08.js",
    "revision": "ca87ae472ad349079932e56eb119c9a0"
  },
  {
    "url": "assets/js/app.a2c8f833.js",
    "revision": "f61717f41516f84533c59887091a72a2"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "c1cd4ea9cce72826b74be4c528158215"
  },
  {
    "url": "database/mysql/MySQL5安装.html",
    "revision": "7021011b4f3545f584e2da69d0e72a20"
  },
  {
    "url": "database/mysql/MySQL位图索引.html",
    "revision": "c6241cf25968b38d1e7ba01d37c84ca9"
  },
  {
    "url": "database/mysql/使用binlog恢复数据.html",
    "revision": "59f4b5a3d3d78402f05f0c22a7998216"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "7910211cbea71934099dfe34f0c46942"
  },
  {
    "url": "database/redis/index.html",
    "revision": "b9574d1b4ddf04e024f65bf6492c995e"
  },
  {
    "url": "guide.html",
    "revision": "64df1bd5626266681b2d7960ef6c7932"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "f42905d3f689c5120bfa4c56db5663be"
  },
  {
    "url": "interview/database/index.html",
    "revision": "bd6f92444b5c6832ae9b1ef87b1b7db3"
  },
  {
    "url": "interview/database/MySQL对线.html",
    "revision": "2de3de0e81e28cff83d966f7fffe87a8"
  },
  {
    "url": "interview/java/index.html",
    "revision": "49bb15cf506e45246b38b9ffe06635e4"
  },
  {
    "url": "interview/java/Java基础对线.html",
    "revision": "a88c539f1f302ff46f2ea7b1e5a8dad7"
  },
  {
    "url": "java/base/index.html",
    "revision": "3aa2aaaa70b9ff0edac38246bb44bef1"
  },
  {
    "url": "java/base/Java深浅拷贝.html",
    "revision": "ab66dc5104c265731b98f902feddc22b"
  },
  {
    "url": "java/base/Synchronized各种场景.html",
    "revision": "7c75f706e45c90331ec4fde288636e4c"
  },
  {
    "url": "java/base/Volatile关键字.html",
    "revision": "ca4e9917b1d8fa14139564cd84ec739a"
  },
  {
    "url": "java/base/常见运算符.html",
    "revision": "915912c27f74850e80d3917937d5522f"
  },
  {
    "url": "java/base/重写equals和hashCode.html",
    "revision": "a33b8592ee4c8fd498f2c9c82351333d"
  },
  {
    "url": "java/design/index.html",
    "revision": "bdb59776af23d49be4701e573d5618ad"
  },
  {
    "url": "java/internet/index.html",
    "revision": "97f224867b8e8731d9eee37d1cc058e7"
  },
  {
    "url": "java/jvm/index.html",
    "revision": "3df2262bf5694f58ab613af876f15c6d"
  },
  {
    "url": "java/springboot/index.html",
    "revision": "5c2df745198d0ca7cb0867d04b3f0fde"
  },
  {
    "url": "java/springboot/手机扫码上传文件并实时刷新列表.html",
    "revision": "2162db79a9f00ca3803ae2a809eab609"
  },
  {
    "url": "java/springcloud/index.html",
    "revision": "02af1f8623af47205980656dca22742f"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e3657219ea567777b126e5313b1f2a4a"
  },
  {
    "url": "linux/docker/Docker部署ES.html",
    "revision": "58494e3d33917dd5a3cca41c3de7cf61"
  },
  {
    "url": "linux/docker/Docker部署Jenkins.html",
    "revision": "8af61dc8799e1dc9b61e51b6eb17c01d"
  },
  {
    "url": "linux/docker/Docker部署Nginx.html",
    "revision": "ea5e92c50c5334bbff2c4433d58865b6"
  },
  {
    "url": "linux/docker/Docker部署Redis.html",
    "revision": "3261cafbd319003e0997e417d35fecc8"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "f14793eed1d2e4f0895ecddc0881d4e6"
  },
  {
    "url": "linux/normal/CentOS7设置网络.html",
    "revision": "4fb638215e14539c60d70ea6cfb530ef"
  },
  {
    "url": "linux/normal/index.html",
    "revision": "b7a6dffc4daaa6df4d0e4a0aa7d8aabf"
  },
  {
    "url": "linux/normal/Nginx安装.html",
    "revision": "fe8a8bbc0b47f7078b3b2b043299c0e4"
  },
  {
    "url": "linux/normal/服务器设置swap分区.html",
    "revision": "5a0e00035e3f3d5879fd5972be5a1515"
  },
  {
    "url": "linux/shell/index.html",
    "revision": "7b9f8cebea73fe979e39b8f2ccb62a21"
  },
  {
    "url": "linux/shell/Shell脚本编写练习.html",
    "revision": "40b7722103748108c0a77532baa8ea28"
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
    "revision": "f303bfb7f8a80dcceeb090e76c658ee0"
  },
  {
    "url": "other/Git创建与删除TAG.html",
    "revision": "4a02a34aabc520e7964597a8670c9ebc"
  },
  {
    "url": "other/index.html",
    "revision": "d686a464f385cc9c6f27b46a7a307ce2"
  },
  {
    "url": "other/Nginx部署Vuepress的坑.html",
    "revision": "6be6dce79e0344544a5839dc661d2589"
  },
  {
    "url": "other/常用网址记录.html",
    "revision": "31b222e2520fd92f7eea0ddd2e1da022"
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
