# 语雀 JavaScript SDK

> 代码是 cursor 写的，没有经过校验

基于 TypeScript 的语雀 API 封装库，提供完整的类型定义和友好的调用接口。

## 特性

- 🚀 完整的 TypeScript 类型支持
- 📦 基于官方 OpenAPI 规范自动生成
- 🔧 简洁的 API 调用方式
- 🛡️ 完善的错误处理
- 📝 详细的代码注释和文档

## 安装

```bash
npm install @yuque/sdk
```

或使用 yarn:

```bash
yarn add @yuque/sdk
```

## 快速开始

### 获取 API Token

1. 登录语雀
2. 访问 [个人设置 - Token](https://www.yuque.com/settings/tokens)
3. 创建新的 Token

### 基础用法

```typescript
import { YuqueClient } from "@yuque/sdk";

// 创建客户端实例
const client = new YuqueClient({
  token: "your-api-token",
});

// 获取当前用户信息
async function getUserInfo() {
  try {
    const result = await client.user.userApiV2UserInfo();
    console.log("用户信息:", result.data);
  } catch (error) {
    console.error("请求失败:", error);
  }
}

getUserInfo();
```

## API 使用示例

### 用户相关

```typescript
// 心跳检测
const hello = await client.user.userApiV2Hello();

// 获取用户信息
const userInfo = await client.user.userApiV2UserInfo();
```

### 团队相关

```typescript
// 获取团队列表
const groups = await client.group.groupApiV2GroupsUserLogin({
  login: "user-login",
});

// 获取团队详情
const groupDetail = await client.group.groupApiV2GroupDetail({
  login: "group-login",
});

// 获取团队成员
const members = await client.group.groupApiV2GroupUsers({
  login: "group-login",
});
```

### 知识库相关

```typescript
// 获取知识库列表
const repos = await client.repo.repoApiV2ReposByGroupLogin({
  login: "group-login",
});

// 获取知识库详情
const repoDetail = await client.repo.repoApiV2RepoDetail({
  namespace: "group-login/repo-slug",
});

// 获取知识库目录
const toc = await client.repo.repoApiV2RepoToc({
  namespace: "group-login/repo-slug",
});
```

### 文档相关

```typescript
// 获取文档列表
const docs = await client.doc.docApiV2DocsByRepoId({
  namespace: "group-login/repo-slug",
});

// 获取文档详情
const docDetail = await client.doc.docApiV2DocDetail({
  namespace: "group-login/repo-slug",
  slug: "doc-slug",
});

// 创建文档
const newDoc = await client.doc.docApiV2DocCreateByRepoId({
  namespace: "group-login/repo-slug",
  requestBody: {
    title: "新文档标题",
    body: "# 文档内容\n\n这是文档内容",
    format: "markdown",
  },
});

// 更新文档
const updated = await client.doc.docApiV2DocUpdate({
  namespace: "group-login/repo-slug",
  id: 123456,
  requestBody: {
    title: "更新后的标题",
    body: "# 更新后的内容",
  },
});

// 删除文档
await client.doc.docApiV2DocDelete({
  namespace: "group-login/repo-slug",
  id: 123456,
});
```

### 搜索相关

```typescript
// 搜索文档
const searchResult = await client.search.searchApiV2Search({
  q: "搜索关键词",
  type: "doc",
  scope: "group-login",
});

// 搜索知识库
const repoSearch = await client.search.searchApiV2Search({
  q: "搜索关键词",
  type: "repo",
});
```

### 统计相关

```typescript
// 获取团队统计数据
const statistics = await client.statistic.statisticApiV2StatisticByBooks({
  login: "group-login",
});
```

## 高级配置

### 自定义基础 URL

```typescript
const client = new YuqueClient({
  token: "your-api-token",
  baseUrl: "https://custom.yuque.com",
});
```

### 自定义请求头

```typescript
const client = new YuqueClient({
  token: "your-api-token",
  headers: {
    "User-Agent": "MyApp/1.0.0",
  },
});
```

### 动态更新配置

```typescript
const client = new YuqueClient({
  token: "old-token",
});

// 更新 token
client.updateConfig({
  token: "new-token",
});
```

## 错误处理

```typescript
import { ApiError } from "@yuque/sdk";

try {
  const result = await client.user.userApiV2UserInfo();
} catch (error) {
  if (error instanceof ApiError) {
    console.error("API 错误:", {
      status: error.status,
      message: error.message,
      body: error.body,
    });
  } else {
    console.error("未知错误:", error);
  }
}
```

## 类型定义

SDK 提供了完整的 TypeScript 类型定义，包括：

- `V2User` - 用户信息
- `V2Group` - 团队信息
- `V2Book` - 知识库信息
- `V2Doc` - 文档信息
- 以及更多...

```typescript
import type { V2User, V2Doc, V2Book } from "@yuque/sdk";

const user: V2User = {
  id: 123456,
  login: "username",
  name: "用户名",
  // ...
};
```

## API 文档

完整的 API 文档请参考：

- [语雀开发者文档](https://www.yuque.com/yuque/developer)
- [语雀 OpenAPI 规范](https://www.yuque.com/yuque/developer/api)

## 开发

### 重新生成代码

当 OpenAPI 规范更新后，可以重新生成代码：

```bash
npm run generate
```

### 构建项目

```bash
npm run build
```

## 许可证

MIT

## 相关链接

- [语雀官网](https://www.yuque.com)
- [语雀开发者文档](https://www.yuque.com/yuque/developer)
- [API Token 管理](https://www.yuque.com/settings/tokens)
