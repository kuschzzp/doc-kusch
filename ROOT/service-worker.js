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
    "revision": "3b4ed24c345b8d0ff1ac422add6243df"
  },
  {
    "url": "algorithm/common/common1.html",
    "revision": "63893536d6ae8928e90a6f9d1dea84fa"
  },
  {
    "url": "algorithm/common/common2.html",
    "revision": "c4e824c0b2f6f296454351947df1e4fa"
  },
  {
    "url": "algorithm/common/common3.html",
    "revision": "fb97fc0d7c50d501c3907b59421b9f7f"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0993b61c85b421798d699c7dfe5647cb"
  },
  {
    "url": "algorithm/structure/structure1.html",
    "revision": "a98af2eefc6792be612f2e4f31aedf73"
  },
  {
    "url": "algorithm/structure/structure2.html",
    "revision": "ba75c707f111d4ad92cd940f05e5f7de"
  },
  {
    "url": "algorithm/structure/structure3.html",
    "revision": "b875b0a603e8c39431c04f842ed75eb1"
  },
  {
    "url": "assets/css/0.styles.6eae1f93.css",
    "revision": "3a4947cc5f1a0248b07b2f22999d36b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f0717729.js",
    "revision": "c3ab2fe394451fd45955dbb004486f53"
  },
  {
    "url": "assets/js/11.21ce13e0.js",
    "revision": "2454a6765c91ed47cfd71053fded41ba"
  },
  {
    "url": "assets/js/12.f67d3724.js",
    "revision": "107114136665710dda42027ce2e1d251"
  },
  {
    "url": "assets/js/13.f59b5474.js",
    "revision": "f93df11dce54e238f7fc1aa59d6fce3b"
  },
  {
    "url": "assets/js/14.107f89ae.js",
    "revision": "33317293e40aea35af1d26882965ceec"
  },
  {
    "url": "assets/js/15.3dc7f779.js",
    "revision": "8d8c45f715c291e314c5daa11ff22ec5"
  },
  {
    "url": "assets/js/16.927f3b34.js",
    "revision": "e8333416f14bff34385f73eb3a4711b9"
  },
  {
    "url": "assets/js/17.29f47378.js",
    "revision": "02bd39d3b83c3e26619508ebe0ba85f0"
  },
  {
    "url": "assets/js/18.fbe9ee4a.js",
    "revision": "d1ae117bba26b2c7bf7bb1ce69f4f718"
  },
  {
    "url": "assets/js/19.a8a719e2.js",
    "revision": "67daaf4b769d5ce831f2be5136b83234"
  },
  {
    "url": "assets/js/2.52d076f4.js",
    "revision": "72af3f0e8f4b4b24016046526dec78e7"
  },
  {
    "url": "assets/js/20.7fed6284.js",
    "revision": "48c2aa41bf3fd905724792b6842e3374"
  },
  {
    "url": "assets/js/21.0db8e30d.js",
    "revision": "d7dc8a08f09792a60ee0abb8812ac55d"
  },
  {
    "url": "assets/js/22.4fd0cbd5.js",
    "revision": "b6764013f60da8c20715e6f885ea668d"
  },
  {
    "url": "assets/js/23.10f58936.js",
    "revision": "624515690648acedfc4ffa58206d69f7"
  },
  {
    "url": "assets/js/24.c7591af3.js",
    "revision": "6493d68a98654cb77334105ffc5cd3f3"
  },
  {
    "url": "assets/js/25.71d3356a.js",
    "revision": "cd34283c886dbe9631ab0e6ec0e0248c"
  },
  {
    "url": "assets/js/26.ebf5276b.js",
    "revision": "5b58d52e3167c38d8d4d069496ece514"
  },
  {
    "url": "assets/js/27.f69aab95.js",
    "revision": "6008ed8fb6a69f07ae0ef27618984897"
  },
  {
    "url": "assets/js/28.f56c3dd6.js",
    "revision": "6fa491b0645edb3cc34df9000dae2fb4"
  },
  {
    "url": "assets/js/29.c3ff9a21.js",
    "revision": "f5ecc9a32dbdbdc1d3557f80284642b8"
  },
  {
    "url": "assets/js/3.0d67d627.js",
    "revision": "08ac41df925fb0adac1f33c56c0e310c"
  },
  {
    "url": "assets/js/30.bdf84f92.js",
    "revision": "c09c16cf0d7f28765a69a5290bb609c3"
  },
  {
    "url": "assets/js/31.405e042f.js",
    "revision": "cc09084a99eb3484816832aa2eda8afc"
  },
  {
    "url": "assets/js/32.cab9befc.js",
    "revision": "6b3b9197a034096b6e38d79b5c6a24c8"
  },
  {
    "url": "assets/js/33.0d42412a.js",
    "revision": "39076609dbe93e9df4c9a098567a2397"
  },
  {
    "url": "assets/js/34.5453e662.js",
    "revision": "c25fd2a921d5e31af17b593b4908c1db"
  },
  {
    "url": "assets/js/35.772d5058.js",
    "revision": "59ecebcc09acc658915980cbb42891be"
  },
  {
    "url": "assets/js/36.1915e208.js",
    "revision": "3718bd2bffdbeee2450e15e9e91d7c72"
  },
  {
    "url": "assets/js/37.b6eee21b.js",
    "revision": "3143d65ebada182e5cc582ee1197c91d"
  },
  {
    "url": "assets/js/38.477c9df2.js",
    "revision": "1e33d95f8aafd0053d535bba3f8c8e45"
  },
  {
    "url": "assets/js/39.32bef436.js",
    "revision": "fee2a9f1b5bcf46d3b30912ed6f2e68c"
  },
  {
    "url": "assets/js/4.6753ee22.js",
    "revision": "fdb256d36d0686814ab7b9f978c25ea3"
  },
  {
    "url": "assets/js/40.c57dc0ce.js",
    "revision": "bfc7249d3c9ea40bd0bfad6403ca92cc"
  },
  {
    "url": "assets/js/41.7f6d1f42.js",
    "revision": "b9dc3ac10a0096a6d32fa86bf1fe13a4"
  },
  {
    "url": "assets/js/42.a4857016.js",
    "revision": "fe7b338b17e2341c5596178b9c66560f"
  },
  {
    "url": "assets/js/43.9e1becc3.js",
    "revision": "aaddd250d523797df357885e66118d5d"
  },
  {
    "url": "assets/js/44.779e42b8.js",
    "revision": "dabc40bd3db966276de3895d52c469ad"
  },
  {
    "url": "assets/js/45.5b27c190.js",
    "revision": "19a2977fd66c4676ab7fdc06d7f6dc2e"
  },
  {
    "url": "assets/js/46.e669e2fd.js",
    "revision": "500c41676787ef4005c11c86d3bb264a"
  },
  {
    "url": "assets/js/47.a4f1f538.js",
    "revision": "a82e01c1ab9ce5ed0324575398418cd8"
  },
  {
    "url": "assets/js/48.ca8ca264.js",
    "revision": "bf7612b37d4efd7217c2ab16cdff0d56"
  },
  {
    "url": "assets/js/49.ed25db1e.js",
    "revision": "c67d65c6c72cc3d9f8f6600245454ac5"
  },
  {
    "url": "assets/js/5.7c55ad33.js",
    "revision": "a17864284458554e01d1b8465c8d71fd"
  },
  {
    "url": "assets/js/50.544c1dc9.js",
    "revision": "8614c8923741daefaa1a9305431c1ac3"
  },
  {
    "url": "assets/js/51.e4fb858e.js",
    "revision": "ccdd1e73fdae954cb3a62f5a6c63286e"
  },
  {
    "url": "assets/js/52.e327811b.js",
    "revision": "cc24a60094d64fefb567bde221a4253c"
  },
  {
    "url": "assets/js/53.8629ea59.js",
    "revision": "d6bc2fe5d5ac7660998461d9d1bcd5c0"
  },
  {
    "url": "assets/js/54.23303086.js",
    "revision": "6a124d17feaff3200ce147596ee5523a"
  },
  {
    "url": "assets/js/55.06fe8873.js",
    "revision": "7940638796e8e30404bf4bd700a07be0"
  },
  {
    "url": "assets/js/56.efe160aa.js",
    "revision": "a7f066e006e6f36e60f1a6cc0d40d5b9"
  },
  {
    "url": "assets/js/57.b1e7b225.js",
    "revision": "84defdbb5110dcd70f39a3764882b49a"
  },
  {
    "url": "assets/js/58.ddc1bc13.js",
    "revision": "1224873cd404a53406a77590053b82ed"
  },
  {
    "url": "assets/js/59.c31bbabe.js",
    "revision": "11b46834a8edc8de278c22c4d90e1150"
  },
  {
    "url": "assets/js/6.c207ef8c.js",
    "revision": "2109b2c947fbef3cf5aede939930ceef"
  },
  {
    "url": "assets/js/60.054c7e97.js",
    "revision": "5da9a0cc5fe5086bb705118932fcc95f"
  },
  {
    "url": "assets/js/61.a3126042.js",
    "revision": "9627f6dbe137d9ab463ab6443b50dd9d"
  },
  {
    "url": "assets/js/7.595cbe73.js",
    "revision": "afbf8cbc3469e9638491844687309593"
  },
  {
    "url": "assets/js/8.edad6162.js",
    "revision": "249d08d902af3fb78c6c57acd323dac1"
  },
  {
    "url": "assets/js/9.fb5a5040.js",
    "revision": "006e56414671c3310154d281b547caf6"
  },
  {
    "url": "assets/js/app.d598da09.js",
    "revision": "c07732013a7951c99f3f704d6148851c"
  },
  {
    "url": "bugs/bugs2.html",
    "revision": "6b13f4ba9cb6000035b5f3332497b1db"
  },
  {
    "url": "bugs/bugs3.html",
    "revision": "66526073bb2aa391f3037a36c004b9a8"
  },
  {
    "url": "bugs/index.html",
    "revision": "8ebee7a8089100869ebee7ea55ed8ebe"
  },
  {
    "url": "bugs/vuepressNginx.html",
    "revision": "4f448e69aae9a19baf713cd6caa8816c"
  },
  {
    "url": "front/frontbase/base3.html",
    "revision": "20c5feddef7f593ab05de04955cdc677"
  },
  {
    "url": "front/frontbase/createvuepress.html",
    "revision": "4b7d68ab4e926ebbbff703f31f7befb7"
  },
  {
    "url": "front/frontbase/frontEnv.html",
    "revision": "84821a85180be65b91e51dfb095a1130"
  },
  {
    "url": "front/frontmiddle/middle1.html",
    "revision": "99a2b1778a5e6f4dc12a959f2be3ca4d"
  },
  {
    "url": "front/frontmiddle/middle2.html",
    "revision": "4c445cb3c30e20ccb490e90e873ca98e"
  },
  {
    "url": "front/frontmiddle/middle3.html",
    "revision": "5cc327261de7355f05dc518e0c22f6ee"
  },
  {
    "url": "front/index.html",
    "revision": "9faec7569c935d7f791f6457be607f4e"
  },
  {
    "url": "guide.html",
    "revision": "b31713869b57353d1ebec72aaaf05b75"
  },
  {
    "url": "images/photo.jpg",
    "revision": "fd674223590db4fe81d1fe20e252465a"
  },
  {
    "url": "index.html",
    "revision": "89744d7cc7a21089bac27f9734fb3d80"
  },
  {
    "url": "java/advance/advance1.html",
    "revision": "aa97c2cf6bc56b3cbd6d31aea3d066cf"
  },
  {
    "url": "java/advance/advance2.html",
    "revision": "72a18cae48eba24a557ed968f8b4edbc"
  },
  {
    "url": "java/advance/advance3.html",
    "revision": "bf611b094041e6616defe8ed0842def9"
  },
  {
    "url": "java/base/base4.html",
    "revision": "215284e9df81baabf4b20f55d2c08939"
  },
  {
    "url": "java/base/javaClone.html",
    "revision": "9e8fb774f13a5edd48ded7c1b8a6390f"
  },
  {
    "url": "java/base/javaReference.html",
    "revision": "1ce6a9d6d687a6236739c955ac51890b"
  },
  {
    "url": "java/base/operator.html",
    "revision": "7138ec35faa2919377da9dbfdd216490"
  },
  {
    "url": "java/base/volatile.html",
    "revision": "2dbee7c077d3f1ad693586d2d2155e8e"
  },
  {
    "url": "java/cold/cold1.html",
    "revision": "34843d940ea3d6c08985ce2ef7006a11"
  },
  {
    "url": "java/cold/cold2.html",
    "revision": "3357e3cb5751e675385af6da2cf39a77"
  },
  {
    "url": "java/cold/cold3.html",
    "revision": "cdb5d3dfdd974db1c63f89f8d58d736b"
  },
  {
    "url": "java/designpattern/singleton.html",
    "revision": "e1d9df8bd5e7d80fc21e70b41dbe6f54"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "1292c3ec12b25156210014e47a504140"
  },
  {
    "url": "live2d/epsilon2_1/assets/moc/Epsilon2.1.2048/texture_00.png",
    "revision": "abee4cdeb8018032163ffdc0a16020b0"
  },
  {
    "url": "otherImages/1.jpg",
    "revision": "163ec77fc50f1610cdbd1f6f6c4a9eec"
  },
  {
    "url": "otherImages/2.jpg",
    "revision": "083c812028eaaffde05328b243870b3f"
  },
  {
    "url": "others/index.html",
    "revision": "5c86c711e3d8cc7573ce655aa43e34b1"
  },
  {
    "url": "others/life01.html",
    "revision": "b79681e57efb6c41b96f51dee2832747"
  },
  {
    "url": "others/life02.html",
    "revision": "317be1d53341d43d03a0b414e65d7293"
  },
  {
    "url": "others/life03.html",
    "revision": "3351af3755bb705f43e633927dd853fc"
  },
  {
    "url": "study/database/database2.html",
    "revision": "6c7dcf1903cc70d0a1c809cbef7d1d4a"
  },
  {
    "url": "study/database/databaseIndex.html",
    "revision": "a361baa798fa8c52fcbec01541a0f854"
  },
  {
    "url": "study/env/env2.html",
    "revision": "b3fdead48e6c8f6623a75b81f731ddd6"
  },
  {
    "url": "study/env/env3.html",
    "revision": "d02f6a2b547d62086d0b3115a7bf3844"
  },
  {
    "url": "study/env/mysql57.html",
    "revision": "c3b2de08b28cf77625572b20d0f3fddf"
  },
  {
    "url": "study/index.html",
    "revision": "ec3bda47ec1033318af70b8a1bd4b88b"
  },
  {
    "url": "study/linux/centOS7Network.html",
    "revision": "ea33621822bea8f98884c993b5348f45"
  },
  {
    "url": "study/linux/centOSNginx.html",
    "revision": "b07f53893b3386ece8d0d6a64aa9ed11"
  },
  {
    "url": "study/linux/linux3.html",
    "revision": "a171dcb0ad2113f460f77166e66434b0"
  },
  {
    "url": "study/linux/redisDocker.html",
    "revision": "d7f9d228138dbc1bd21d783d7447042b"
  },
  {
    "url": "study/linux/xxlJobDocker.html",
    "revision": "16c8b27f174e9e29314dc740b6a0c564"
  },
  {
    "url": "study/springboot/springboot1.html",
    "revision": "14895671d584e582c92365871ac9637e"
  },
  {
    "url": "study/springboot/springboot2.html",
    "revision": "156c8e0117650336a309833357b7e084"
  },
  {
    "url": "study/springboot/springboot3.html",
    "revision": "3133ec17969b27594f981c60b60fcbfe"
  },
  {
    "url": "study/springcloud/docker.html",
    "revision": "54b543bbafe01791bfeaa76436266f99"
  },
  {
    "url": "study/springcloud/jenkins.html",
    "revision": "405fcd38bda55e1131dc8d7e23371ad6"
  },
  {
    "url": "study/springcloud/springcloud3.html",
    "revision": "5047020ffc03a80f4e4619cd2b7c1d9c"
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
