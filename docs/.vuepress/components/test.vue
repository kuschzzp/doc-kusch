<template>
  <div>
    <iframe src="https://chat.superkusch.fun/" width="1000" height="800"></iframe>
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