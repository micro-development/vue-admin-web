# ITTLR 云写作管理

> 管理端 云写作模块。

## 配置环境变量文件

克隆 app-config 仓库，把 `app-config/ai.ittlr.org/env-file/.env.development` 复制到当前文件夹。


## 启动项目


```bash
it-md install # 必须在仓库根目录执行
yarn install
npm run serve
```

浏览器打开访问：[http://localhost:8004](http://localhost:8004)

当收到更新模块通知时，执行一下命令更新：

```bash
it-md update # 必须在仓库根目录执行
```

## 线上预览

当你提交完代码，并推送到远端，稍等片刻，可以通过：[https://ai.ittlr.org/write/](https://ai.ittlr.org/write/) 预览你的效果。

