# 中国古代历史时间轴 - 部署指南

本指南将帮助你将本地的中国古代历史时间轴网站部署到互联网上，使用免费的GitHub Pages服务。

## 准备工作

### 1. 注册GitHub账号
如果你还没有GitHub账号，请访问 [GitHub官网](https://github.com) 注册一个新账号。

### 2. 安装Git
Git是一个版本控制系统，用于管理和推送代码到GitHub。
- Windows: 下载并安装 [Git for Windows](https://git-scm.com/download/win)
- macOS: 使用Homebrew安装 `brew install git`
- Linux: 使用包管理器安装，如 `apt install git` (Ubuntu/Debian) 或 `yum install git` (CentOS/RHEL)

安装完成后，配置Git用户名和邮箱：
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 部署步骤

### 1. 创建GitHub仓库
1. 登录GitHub账号
2. 点击页面右上角的 "+" 图标，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: 输入一个仓库名称，如 `ancient-china-timeline`
   - **Description**: 可选，输入仓库描述
   - **Public**: 选择公开仓库（GitHub Pages需要公开仓库才能免费使用）
   - 勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

### 2. 克隆仓库到本地
在你的项目目录外，打开命令行工具，执行以下命令克隆仓库：
```bash
git clone https://github.com/your-username/ancient-china-timeline.git

git clone https://github.com/hammer1231/history-timeline
```

### 3. 复制项目文件到仓库
将你的历史时间轴项目文件（`index.html`、`styles.css`、`script.js`）复制到刚刚克隆的仓库目录中。

### 4. 提交并推送代码
在仓库目录中，执行以下命令：
```bash
# 查看当前仓库状态
git status

# 添加所有文件到暂存区
git add .

# 提交代码
git commit -m "Initial commit: Ancient China Timeline"

# 推送代码到GitHub
git push origin main
```

### 5. 启用GitHub Pages
1. 回到GitHub仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧导航栏中找到并点击 "Pages"
4. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 目录选择 "/ (root)"
5. 点击 "Save"

### 6. 访问你的网站
GitHub Pages需要几分钟时间来部署你的网站。部署完成后，你将在 "Pages" 设置页面看到一个绿色的提示框，显示你的网站URL，格式为：
```
https://your-username.github.io/ancient-china-timeline/
```

将此URL复制到浏览器中，你就可以访问部署在互联网上的中国古代历史时间轴网站了！

## 后续更新

如果你对项目进行了修改，只需重复以下步骤即可更新网站：
```bash
# 添加修改的文件
git add .

# 提交修改
git commit -m "Update: Add new historical event"

# 推送更新到GitHub
git push origin main
```

GitHub Pages将自动重新部署你的网站，通常几分钟后更新就会生效。

## 其他部署选项

除了GitHub Pages，你还可以考虑以下免费的静态网站托管服务：

1. **Netlify**: [https://www.netlify.com/](https://www.netlify.com/)
2. **Vercel**: [https://vercel.com/](https://vercel.com/)
3. **Cloudflare Pages**: [https://pages.cloudflare.com/](https://pages.cloudflare.com/)

这些服务都提供了简单的部署流程，支持自动部署、自定义域名等功能。

## 故障排除

如果你的网站无法访问或显示不正确，请检查以下几点：

1. 确保仓库是公开的
2. 确保 `index.html` 文件在仓库的根目录
3. 检查文件路径是否正确（特别是CSS和JavaScript的引用）
4. 查看GitHub Pages设置是否正确
5. 等待几分钟后再试（部署可能需要时间）

如果问题仍然存在，可以查看GitHub Pages的构建日志获取更多信息。