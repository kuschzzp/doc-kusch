<template>
  <el-row :gutter="20">
    <el-card class="box-card">
      <div class="main" v-loading="loading">
        <div class="grid-content">
          <el-input placeholder="请粘贴分享链接" v-model="input" id="url" lass="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="视频" value="1"></el-option>
              <el-option label="图集" value="2"></el-option>
            </el-select>
            <el-button slot="append" @click="onSubmit" style="color: black">解析</el-button>
          </el-input>
        </div>
        <div class="download" v-if="seen">
          <h5>{{info.title}}</h5>
          <a :href="info.cover" target="_blank"><el-button plain>下载封面</el-button></a>
          <a :href="info.url" target="_blank"><el-button plain>下载视频</el-button></a>
          <a :href="info.music.url" v-if="music" target="_blank"><el-button plain>下载音乐</el-button></a>
        </div>
        <div class="waterfall" v-if="iseen">
          <div class="item" v-for="url in images_url" :key ="url">
            <el-image
                :src="url"
                :preview-src-list="images_url">
            </el-image>
          </div>
        </div>
      </div>
    </el-card>
  </el-row>
</template>
<script>
export default {
  name: "VideoDownload",
  data() {
    return {
      info: {},
      input: '',
      select: '1',
      music: false,
      seen: false,
      iseen: false,
      loading: false,
      images_url: {}
    }
  },
  methods: {
    onSubmit() {
      this.seen = false
      this.iseen = false
      this.loading = true
      const url = /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.exec(this.input)
      if(this.select === '1' || this.select === ''){
        axios.get('https://tenapi.cn/v2/video?url=' + encodeURIComponent(url[0])).then((res) => {
          if(res.data.code === 200){
            if(res.data.data.music != null){
              this.music = true
            }
            this.seen = true
            this.info = res.data.data
            this.loading = false
            this.$notify.success({
              title: '解析成功',
              message: '请及时下载音视频'
            });
          }else{
            this.seen = false
            this.loading = false
            this.$notify.error({
              title: '解析失败',
              message: '视频不存在或接口失效'
            });
          }
        })
      }else{
        this.seen = false
        axios.get('https://tenapi.cn/v2/images?url=' + encodeURIComponent(url[0])).then((res) => {
          if(res.data.code == 200){
            this.iseen = true
            this.loading = false
            this.images_url = res.data.data.images
            this.$notify.success({
              title: '解析成功',
              message: '图集暂不支持批量下载，请长按下载或右键另存为'
            });
          }else{
            this.iseen = false
            this.loading = false
            this.$notify.error({
              title: '解析失败',
              message: '图集不存在或接口失效'
            });
          }
          console.log(this.images_url);
        })
      }
    },
  }
}
</script>

<style>
::selection {
  background: rgba(0,149,255,.1);
}

body:before{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .3;
  z-index: -1;
  content: "";
  position: fixed;
  background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
}

.grid-content {
  margin-top: 1em;
  border-radius: 4px;
  min-height: 50px;
}

.el-select .el-input {
  width: 80px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;

}

.box-card {
  margin-top: 4em!important;
  margin-bottom: 10em!important;
  opacity: .8;
}

@media screen and (max-width: 700px){
  .box-card {
    margin-top: 1em!important;
    margin-bottom: 1em!important;
  }
}
.download h3{
  margin-top: 2em;
}

.download button{
  margin-right: 0.5em;
  margin-left: 0.5em;
}

.waterfall {
  -moz-column-count: 3;
  -webkit-column-count: 3;
  column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  column-gap: 1em;
}

.item {
  padding: 5px;
  break-inside: avoid;
}

.item img {
  width: 100%;
  margin-bottom: 10px;
}
.typo {
  text-align: left;
}
.typo a {
  color: #2c3e50;
  text-decoration:none;
}

hr{
  height: 10px;
  margin-bottom: .8em;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,.12);
}

</style>
