---
layout: single
title:  "本地远程连接服务器的jupyter notebook"
date:   2020-09-27 23:23:03 +0800
categories: jekyll update
description: "本地机器远程连接服务器的jupyter notebook"
---

本地机器远程连接服务器的jupyter notebook


当你在服务器上想使用jupyter notebook的时候，你的第一反应是不是使用`ssh -X user@hostname`连接服务器，然后直接`jupyter notebook`打开呢？这种操作需要在服务器的浏览器中打开jupyter notebook，然后将浏览器的以图形界面的形式通过`X11`转发回本地，所以实质上是在服务器的浏览器上进行操作。这种方式主要有两个局限性，首先可能会很卡，相信你在服务器上使用`python`画图或者使用`evince **.pdf`打开`pdf`的时候也有这种感受。其次，如果你的本地机器不是`linux`或者`mac`，而是`windows`的时候，你需要借助`X11`转发工具才能打开图形界面，比如使用`Xshell`之类的工具。

其实，是可以将服务器的`jupyter notebook`在本地的浏览器中打开的，这样不需要传输图形界面，几乎不会卡顿，在`windows`上也能够很好的操作。

#### 1. 登录服务器，安装好jupyter notebook，生成配置文件：
```
$ jupyter notebook --generate-config
Writing default config to: /home/xxx/.jupyter/jupyter_notebook_config.py
# jupyter_notebook_config.py 就是配置文件
```

#### 2. 使用 `Ipython` 生成密码
```python
In [1]: from notebook.auth import passwd

In [2]: passwd()
Enter password:
Verify password:
Out[2]: 'sha1:*********************************c'
# Enter password 是在本地浏览器登陆使用的密码，Out[2] 输出的是填写在配置文件中的密钥

In [3]: exit()
```

#### 3. 编辑配置文件
```python
$ vim ~/.jupyter/jupyter_notebook_config.py
# 在该文件中搜索以下配置，没有的话就添加

c.NotebookApp.allow_remote_access = True    # 可能没有需要自己添加
c.NotebookApp.ip = '*'
c.NotebookApp.open_browser = False
c.NotebookApp.password = u'sha1:*********************************c' # 填写刚才在第二步Out[2]生成的密钥
c.NotebookApp.port = 2020   # 自己设置一个就行
# 完成后保存退出
```

#### 4. 运行
在服务器运行 `jupyter notebook`。
然后在本地打开浏览器，网址处输入`hostname:port`，其中`hostname`就是服务器的`ip`地址， `port`是在配置中设置的，如刚才设置的是`2020`。例子 `222.119.152.73:2020`，然后输入在第二步设置的密码即可。
> 必须在服务器上打开`jupyter notebook`才能在本地浏览器使用。

#### 5. 另一种设置
第四步是一种简单的方式，在有些情况下可能不适用，比如**不知道服务器的ip地址**（使用别名），或者**登陆时需要指定端口**（比如执行`ssh -p 5025 user@feg.org`登陆，`-p 5025`是端口， `feg.org`是别名）。这时候，我们需要进行以下设置：
```python
ssh -N -f -L localhost:8888:localhost:2020 username@serverIP
```
使用一个例子，登陆服务器时使用`ssh -p 5025 xxx@feg.org`，在`jupyter_notebook_config.py`里面设置的端口为`2020`，则需要运行：
```python
ssh -N -f -L localhost:8888:localhost:2020 -p 5025 xxx@feg.org
```
然后打开浏览器，在网址栏输入
```python
localhost:8888
```
然后输入之前设置的密码登陆即可。