---
title: ElasticSearch修改Mapping
author: kusch
top: false
summary: ElasticSearch修改Mapping
categories: Markdown
---

## ElasticSearch修改Mapping

首先我们要知道的是：
- 索引mapping一旦建好，就不支持修改了（有几种特例是可以修改的），同时也不支持删除其中字段，除非 reindex
- 你是可以随意增加字段的

下面一起看一下重建步骤吧

## 重建
### 首先看一下要重建的索引
```
# 查看所有索引
GET /_cat/indices?v

# 查看某个索引的详细信息
GET /gkims_recruitment_index/_mapping
```
![如图](http://cdn.superkusch.fun/docs/WeChat218286c7d9520d8222e7b26ccc2dd9b0.png)

### 建立新的索引和映射
```
# 建立新索引
PUT /gkims_recruitment_index111
# 为新索引建立新mapping
PUT /gkims_recruitment_index111/_mapping
{
      "properties" : {
        "age" : {
          "type" : "long"
            }
        }
        ...............
        ...............
        ...............
}
```
### 迁移数据到新索引
```
# 使用reindex api将旧索引数据导入新索引
POST _reindex
{
  "source": {
    "index": "gkims_recruitment_index"
  },
  "dest": {
    "index": "gkims_recruitment_index111"
  }
}
```
### 删除旧索引
```
# 删除旧索引
DELETE /gkims_recruitment_index
```

### 索引名称还原

**一般情况下索引名称不是随便能改的， 为了索引名称的还原，我们按照上面新建新索引的步骤再走一遍，建立旧索引，最后删除新索引即可。**

> 还有一种做法就是给新索引取老索引的别名
> ```
> POST /_aliases
> {
>     "actions": [
>         { "add": {
>             "index": "gkims_recruitment_index_111",
>             "alias": "gkims_recruitment_index"
>         }}
>     ]
> }
> ```

> 特例：
> [文档1](https://elastic.blog.csdn.net/article/details/121528491?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121528491-blog-85048633.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121528491-blog-85048633.pc_relevant_multi_platform_whitelistv4&utm_relevant_index=2)
> [文档2](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/indices-put-mapping.html#updating-field-mappings)
> [文档3](https://stackoverflow.com/questions/40305880/elastic-search-index-mapping-updation)






