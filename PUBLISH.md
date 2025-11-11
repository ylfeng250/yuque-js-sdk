# 发布指南

## 前置准备

### 1. 配置 NPM Token

在 GitHub 仓库中配置 NPM 访问令牌：

1. 访问 [npm](https://www.npmjs.com/) 并登录
2. 点击头像 -> Access Tokens
3. 生成新的 token（选择 Automation 类型）
4. 复制生成的 token
5. 在 GitHub 仓库中配置：
   - 进入 Settings -> Secrets and variables -> Actions
   - 点击 "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: 粘贴你的 npm token
   - 点击 "Add secret"

## 发布流程

### 方式一：通过 Git Tag 自动发布（推荐）

```bash
# 1. 更新版本号
npm version patch  # 小版本更新 1.0.0 -> 1.0.1
# 或
npm version minor  # 次版本更新 1.0.0 -> 1.1.0
# 或
npm version major  # 大版本更新 1.0.0 -> 2.0.0

# 2. 推送代码和 tag
git push && git push --tags
```

推送 tag 后，GitHub Actions 会自动：

- 安装依赖
- 生成代码
- 构建项目
- 发布到 NPM

### 方式二：手动触发发布

1. 进入 GitHub 仓库
2. 点击 Actions 标签
3. 选择 "发布到 NPM" workflow
4. 点击 "Run workflow"
5. 选择分支并运行

### 方式三：本地发布

```bash
# 1. 确保已登录 npm
npm login

# 2. 更新版本号
npm version patch

# 3. 构建项目
npm run generate
npm run build

# 4. 发布
npm publish
```

## 版本管理建议

- **patch**: 修复 bug，不影响 API（1.0.0 -> 1.0.1）
- **minor**: 新增功能，向后兼容（1.0.0 -> 1.1.0）
- **major**: 破坏性更新，不向后兼容（1.0.0 -> 2.0.0）

## 发布检查清单

- [ ] 代码已经过测试
- [ ] README.md 已更新
- [ ] CHANGELOG.md 已更新（如果有）
- [ ] package.json 中的版本号已更新
- [ ] 构建成功无错误
- [ ] NPM_TOKEN 已在 GitHub 中配置

## 发布后验证

```bash
# 检查包是否发布成功
npm view yuque-js-sdk

# 安装并测试
npm install yuque-js-sdk
```
