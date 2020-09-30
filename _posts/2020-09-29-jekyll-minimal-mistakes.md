---
layout: single
title: "使用jekyll和minimal-mistakes主题搭建github博客"
date: 2020-09-29 21:00:00 +0800
---

使用jekyll搭建github博客，minimal mistakes主题的使用配置及改动

## 安装jekyll

> 参考[jekyll官方文档](https://jekyllrb.com/docs/installation/)

#### 安装依赖
jekyll依赖于ruby，首先安装依赖：
```bash
$ sudo apt-get install gcc g++ make ruby-full build-essential zlib1g-dev
```

#### 使用gem安装jekyll
我习惯于尽可能少的使用sudo权限，所以我会将jekyll以及其他使用gem安装的软件安装在用户的home目录上。
编辑`~/.bashrc`文件，写入一下内容：
```bash
# Install Ruby Gems to ~/software/gems
export GEM_HOME="$HOME/software/gems"
export PATH="$HOME/software/gems/bin:$PATH"
```
然后 `source ~/.bashrc` 激活设置

安装jekyll和bundle
```bash
$ gem install jekyll bundler
```

#### 初次使用
创建一个新的blog目录并运行
```bash
$ jekyll new myblog
$ cd myblog
$ jekyll serve
```
