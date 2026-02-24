# 开发文档

## 整合包打包

GitHub Action 会对每次提交进行客户端的打包并上传到 Action 的 artifacts 中，对于 release 和手动触发的打包会进行服务端的打包并同时上传 Action artifacts 和 release 附件。

### 客户端打包

手动进行客户端打包需要先安装 [packwiz](https://github.com/packwiz/packwiz)，安装方法详见 packwiz 的 README。安装完成后通过命令进行打包：

```shell
$ ./packwiz refresh # 更新 .toml 索引
$ ./packwiz curseforge export # 导出 curseforge 格式整合包
```

### 服务端打包

服务端打包需要先拉取所有 mod 文件：

```shell
$ java -jar scripts/action/packwiz-installer-bootstrap.jar ./pack.toml
```

剩下的打包流程详见 GitHub Action 的 build.yml 文件，主要是将 scripts/server 中的文件复制到当前目录下，并删除一些不必要的文件，最后打包成 zip 文件。

## 添加新 mod

添加新 mod 需要使用 packwiz：

```shell
$ packwiz curseforge install [url]
```

## Core mod 开发

整合包的 Core mod 统一打包进了 CTNH-Core 一个模组中，该模组的 workspace 在 [CTNH-Team/CTNH-Modules](https://github.com/CTNH-Team/CTNH-Modules) 仓库中，具体的编译方法、子 mod 介绍详见该仓库。
