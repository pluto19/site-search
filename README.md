# Site Search Chrome Extension

一个Chrome扩展，用于在当前网站内使用Bing进行站内搜索。

## 功能特性

- 一键打开站内搜索
- 自动聚焦搜索框
- 智能提取一级域名
- 支持回车快捷搜索
- 新标签页打开搜索结果

## 安装方法

### 从Chrome Web Store安装（即将上线）

1. 访问Chrome Web Store（链接待更新）
2. 点击"添加至Chrome"

### 开发者模式安装

1. 下载本仓库代码
2. 打开Chrome浏览器，进入扩展管理页面 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目文件夹

## 使用方法

1. 在任意网页点击扩展图标
2. 输入搜索关键词（搜索框自动获得焦点）
3. 按回车或点击搜索按钮
4. 自动打开Bing搜索结果

## 开发相关

### 项目结构

```
site-search/
├── manifest.json     // 扩展配置
├── popup.html       // 搜索界面
├── popup.js        // 功能实现
├── pack.sh         // 打包脚本
└── images/         // 图标文件
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### 打包方法

运行打包脚本：
```bash
./pack.sh
```

脚本会生成格式为 `site-search-YYYYMMDD.zip` 的压缩包，可直接用于Chrome Web Store上传。

## 许可证

MIT License