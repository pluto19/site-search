#!/bin/bash

# 创建临时目录
TMP_DIR="tmp_extension"
mkdir -p $TMP_DIR

# 复制必要文件
cp manifest.json $TMP_DIR/
cp popup.html $TMP_DIR/
cp popup.js $TMP_DIR/
cp -r images $TMP_DIR/

# 创建zip文件
zip_name="site-search-$(date +%Y%m%d).zip"
cd $TMP_DIR
zip -r "../$zip_name" *

# 返回上级目录
cd ..

# 清理临时目录
rm -rf $TMP_DIR

echo "打包完成：$zip_name"