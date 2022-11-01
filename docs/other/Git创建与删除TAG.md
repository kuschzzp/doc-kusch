# Git创建与删除TAG

## 创建

```shell
git tag -a "v1.0.0" -m "调试"
```

```shell
git push origin "v1.0.0"
```
## 删除

删除本地的TAG
```shell
git tag -d "v1.0.0"
```

删除远程的TAG
```shell
git push origin :refs/tags/v1.0.0
```