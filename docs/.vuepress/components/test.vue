<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="视频分享链接" prop="videoUrl">
        <el-input type="text" v-model="ruleForm.videoUrl" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios';
import fileDownload from 'js-file-download';

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入分享链接'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        videoUrl: '',
      },
      rules: {
        videoUrl: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // //验证通过，调用接口去下载文件
          // axios.get("http://47.97.18.120:17777/download/common?videoUrl=" + this.ruleForm.videoUrl, {
          //   // axios.get("http://127.0.0.1:17777/download/common?videoUrl="+ this.ruleForm.videoUrl, {
          //   responseType: 'blob',
          // }).then(res => {
          //   fileDownload(res.data, decodeURI(res.headers.realname));
          // });
          window.location.href = "http://49.235.29.74:17777/download/common?videoUrl=" + this.ruleForm.videoUrl + "&way=1";
        } else {
          console.log("表单校验失败！")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>