![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3118842-87afa855bb92726d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Git发展

- Linus -> Linux
- 分布式: 每一台电脑, 都可以下载完整的代码和历史消息, 都是独立的仓库
- 离线方式: 可以离线, 在没有网络的情况下, 继续使用, 可以访问所有的历史
- 仓库: 存储代码修改历史空间
- 本地仓库: 本地电脑中保存所有修改历史的空间
- 远程仓库: 保存修改历史, 并且多台电脑可以同步修改
- 本地, 远程: 远程仓库, 只保留历史修改, 不保存实际的目录和文件; 本地仓库包含仓库数据, 以及工作目录
- 工作目录: 本地仓库外会包含当前最新的一套可以修改操作的文件内容

## 创建Git本地仓库

1. git init

  1). 如果执行git init没有参数, 代表把当前目录作为GIt本地仓库来初始化
  2) 如果执行 git init --bare 代表创建远程服务器仓库
  3) 执行之后, 在指定的目录中创建.git文件夹;可以认为.git就是仓库, 存储修改历史的记录;

## 获取工作目录的状态

1. git status 获取当前工作目录的状态: 显示出当前工作目录中, 哪些文件是新添加, 哪些是删除, 以及哪些是未添加的

## 添加修改, 变化

1. 任何新的文件, 放到工作目录中, 默认Git不会管理它, 只有git add之后才能够进行管理; 相当于把修改添加到git仓库中的一个缓冲区里;

2. 只有在缓冲区的内容才可以提交给仓库管理;

3. 指令格式:
  1). git add 文件全名 添加特定的文件;
  2). git add 目录名 把指定目录的变化添加;
  3). git add . 提交当前文件夹中的所有文件;

## 提交缓冲区修改 到 仓库

1. git commit

2. 提交: 把缓冲区的内容提交到仓库内部的数据库, 修改的历史;

3. 如果是git 第一次安装执行, git 需要配置的当前用户的名称和邮箱 (Please tell me who you are ?)

  1). 配置名称: git config --global user.name "XXX"
  2). 配置邮箱: git config --global user.email "XXX@XX.XXX"



## Vim的基本命令

1. a -> 进入INSERT编辑模式
2. esc -> 退出当前模式
3. : -> 写指令
4. w -> 保存写文件
5. wq -> 保存退出
6. !q -> 强制退出

## 快速提交

1. git commit -am "message"

  1). git commit -a : 提交所有的改动 (包括删除, 修改, 添加的文件)
  2). git commit -m : 代表后面跟随 提交的日志
   3). -am -> -a -m
   4). 支持单行输入日志

## 修改并且提交

1. 修改指定的文件;
2. git status 查看当前工作目录中文件的修改状态
3. git add 被修改的文件
4. git commit 提交修改


## 删除文件并且提交


1. rm 文件 (不用太关注)
2. git status 查看当前工作目录中文件的修改状态
3. git rm 文件 相当于把删除文件的操作, 保存到缓冲区; 只有这样, 在提交的时候, 才会把删除的操作提交; 删除的文件必须是之前提交过的


## 远程仓库

> 常见的远程仓库服务器

1. github.com 公开仓库免费, 私有仓库收费
2. bitbucket.org 无限私有仓库, 国外的JIRA
3. 开源中国 git.oschina.net 1000个仓库


### 如何创建远程仓库
1. 网站管理: 指定仓库名称, 获取git网址
2. 创建时, 注意: 不要选择README, 忽略和License
3. 因为先创建本地仓库了, 提交到远程的时候, 第一次提交远程服务器必须是空的, 不能有任何文件

### 关于远程仓库的网址
1. HTTPS网址: 需要每次提交, 查看日志都需要输入用户名和密码 (尽量不要使用)
2. SSH + git 网址: git@xxx.xxx.xxx:username/repp.git, 必须设置公钥到服务器才可以用, 不需要输入用户名和密码(强烈推荐)
3. SSH公钥生成: ssh-keygen -t rsa -C "xxxxx@xxxxx.com"


### 本地仓库与远程服务器的链接

1. git remote add <别名> <网址>
2. 作用, 添加服务器配置信息;
3. 当服务器与本地仓库配置好, 就可以提交了!
4. 新工程提交到服务器: git push -u origin master  (-u 是让本地和远程服务器连接, 首次需要)
5. 查看远程仓库: git remote -v

### 代码提交流程

1. 本地提交 git commit;
2. 测试完成;
3. 从服务器同步代码;
4. 合并代码, 再次测试代码
5. push代码: 通过这种方式提交到服务器;
6. 对于第三方或者是开源的工程, 需要第5步申请PullRequest

## Git的代码下载

### Clone 从已有的仓库中同步代码

1. git clone <网址> [目标目录]
2. 只能下载, 如果希望提交, 那么需要在网站设置权限


## Android Studio中使用Git

### 基本配置


1. Settings -> Git -> Path to Git executable: 找到安装的git的目录 例: C:\Git\cmd\git.exe
2. VCS -> Enable Version Control .. : 选择Git

### 创建工程的注意事项

1. 创建工程, git init
2. 设置忽略 : .gitignore文件, 可以设置忽略的内容
3. 忽略好才可以添加和提交
4. Android Studio的.gitignore模板位置: C:\Program Files\Android\Android Studio\plugins\android\lib\templates\gradle-projects\NewAndroidProject\root

## 附: .gitignore文件

```
# IntelliJ IDEA
.idea/
*.iml
*.ipr
*.iws
out/

# Gradle build folder
/build
.gradle/

# Android files
local.properties
bin/
gen/

# JNI compile files
*.o
*.o.d

# Android 2.2 C/C++ complile
.externalNativeBuild/

# OS autogen folder information
.DS_Store
Thumbs.db

# Temp files
*.bak
*.tmp
*.temp
*.swp
*.*~
~*.*
```