const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName: function (rpath, tpath) {
        let result = [];
        let filenames = [];
        // let fileImg = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
        let fileTypes = /\.md$/; //只匹配以md结尾的文件
        fs.readdirSync(rpath).forEach(file => {
            if (excludes.indexOf(file) < 0) {
                fullpath = rpath + "/" + file
                var fileinfo = fs.statSync(fullpath)
                if (fileinfo.isFile()) {
                    // if(file.indexOf('.md') > 0) {
                    if (fileTypes.test(file) > 0) {
                        if (file === 'index.md') {
                            file = '';
                        } else {
                            file = file.replace('.md', '');
                        }
                        if (file !== 'README'){
                            filenames.push(file);
                        }
                    }
                }
            }
        })
        // {title: '开发环境安装', path: '/front/frontbase/frontEnv'},
        // console.log(filenames)
        filenames.sort(); // 排序

        filenames.forEach(item => {
            let tmp = {
                title: item,
                path: tpath + item
            };
            result.push(tmp);
        });
        return result;
    }
}
module.exports = filehelper;