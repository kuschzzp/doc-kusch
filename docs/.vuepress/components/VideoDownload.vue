<template>
  <el-row :gutter="20">
    <el-card class="box-card">
      <div class="main" v-loading="loading">
        <div class="grid-content">
          <el-input placeholder="请粘贴分享链接" v-model="input" id="url" lass="input-with-select">
            <el-select class="thisSelect" v-model="select" slot="prepend" placeholder="请选择">
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

<style scoped>

.thisSelect{
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
</style>
