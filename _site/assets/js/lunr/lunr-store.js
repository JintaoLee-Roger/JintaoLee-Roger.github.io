var store = [{
        "title": "本地远程连接服务器的jupyter notebook",
        "excerpt":"本地机器远程连接服务器的jupyter notebook 当你在服务器上想使用jupyter notebook的时候，你的第一反应是不是使用ssh -X user@hostname连接服务器，然后直接jupyter notebook打开呢？这种操作需要在服务器的浏览器中打开jupyter notebook，然后将浏览器的以图形界面的形式通过X11转发回本地，所以实质上是在服务器的浏览器上进行操作。这种方式主要有两个局限性，首先可能会很卡，相信你在服务器上使用python画图或者使用evince **.pdf打开pdf的时候也有这种感受。其次，如果你的本地机器不是linux或者mac，而是windows的时候，你需要借助X11转发工具才能打开图形界面，比如使用Xshell之类的工具。 其实，是可以将服务器的jupyter notebook在本地的浏览器中打开的，这样不需要传输图形界面，几乎不会卡顿，在windows上也能够很好的操作。 1. 登录服务器，安装好jupyter notebook，生成配置文件： $ jupyter notebook --generate-config Writing default config to: /home/xxx/.jupyter/jupyter_notebook_config.py # jupyter_notebook_config.py 就是配置文件 2. 使用 Ipython 生成密码 In [1]: from notebook.auth import passwd In [2]: passwd() Enter password: Verify password: Out[2]: 'sha1:*********************************c' # Enter password 是在本地浏览器登陆使用的密码，Out[2] 输出的是填写在配置文件中的密钥...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4444/jekyll/update/2020/09/27/jupyter-remote.html",
        "teaser": null
      },{
        "title": "gitbook 的安装与使用",
        "excerpt":"gitbook 的安装与使用 最近在写 code 的时候经常要去查阅 pytorch 的文档，但官方的中文文档里面的公式有时候显示会有问题，后来发现了一个很好的中文文档：https://pytorch.apachecn.org/。这个文档在 github 上是开源的，使用 markdown 文档书写，所以就有了将其生成一个 pdf 文件供自己学习的想法，对我来说在网上查阅还是有一些不方便之处，特别是网络不好的时候。 然后我就去查阅了一下将多个 markdown 文件组织起来生成pdf文件的方法，发现可以使用 gitbook, pandoc, AsciidocFX 等方法，gitbook 使用时需要写一个 SUMMARY.md 文件来组织，而这个项目里面就有这个已经写好了的文件，所以我就折腾了一下 gitbook 的使用方法。 安装 官方文档里建议使用 npm 安装，gitbook 的官方github仓库，一个比较好的 blog 1. 安装 Node.js 使用 npm 需要安装 Node.js，先前往官网进行下载，windows系统下载对应的.msi文件，然后双击执行，默认安装即可，也可改变安装位置。linux系统下载对应的.tar.xz文件，然后解压至一个你想安装的目录下，然后把PATH加到.bashrc里面即可，如： tar -xvJf node-v12.13.1-linux-x64.tar.xz mv node-v12.13.1-linux-x64.tar.xz ~/software/node/ vim ~/.bashrc # 然后编辑该文件， 加入以下内容 export...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4444/jekyll/update/2020/09/27/gitbook.html",
        "teaser": null
      }]
