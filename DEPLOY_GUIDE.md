# Gemini Pro Chat - 部署指南

## Vercel 部署步骤

### 1. 准备工作
- 拥有 Vercel 账号
- 获取 Google AI API 密钥或兼容的 OpenAI API 密钥
- Fork 或下载此项目到您的 GitHub 仓库

### 2. Vercel 部署配置

#### 方法一：一键部署
点击下方按钮进行一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/gemini-pro-chat&env=OPENAI_API_BASE_URL&env=OPENAI_API_KEY&project-name=gemini-pro-chat&repository-name=gemini-pro-chat)

#### 方法二：手动部署
1. 登录 [Vercel 控制台](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 导入您的 GitHub 仓库
4. 配置环境变量（见下文）
5. 点击 "Deploy"

### 3. 环境变量配置

在 Vercel 项目设置中配置以下环境变量：

#### 基础配置
```bash
# API 基础地址
OPENAI_API_BASE_URL=https://generativelanguage.googleapis.com/v1beta

# API 密钥
OPENAI_API_KEY=your-google-ai-api-key-here

# 或者使用兼容的第三方服务
# OPENAI_API_BASE_URL=https://your-third-party-api.com/v1
# OPENAI_API_KEY=sk-your-api-key-here
```

#### 可选配置
```bash
# 默认模型
OPENAI_API_MODEL=gemini-pro

# 自定义模型列表（逗号分隔）
CUSTOM_MODELS=gemini-pro,gemini-pro-vision,gemini-1.5-pro

# 网站标题
VITE_APP_TITLE=Gemini Pro Chat

# Google Analytics ID (可选)
TJ_GOOGLE_ID=G-XXXXXXXXXX
```

### 4. Google AI API 密钥获取

1. 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 登录您的 Google 账号
3. 点击 "Create API Key"
4. 复制生成的 API 密钥
5. 在 Vercel 中设置 `OPENAI_API_KEY` 为此密钥
6. 设置 `OPENAI_API_BASE_URL` 为 `https://generativelanguage.googleapis.com/v1beta`

### 5. 第三方 API 服务配置

如果使用第三方 API 服务（如提供的密钥），请按以下格式配置：

```bash
OPENAI_API_BASE_URL=https://api.your-service.com/v1
OPENAI_API_KEY=sk-gfRHHsB1gjhBgTmV5psW9a2JRU0v69Fqk1jGTZJxMzuvBVuW
```

### 6. Google Ads 配置

1. 获取 Google AdSense 账户
2. 创建广告单元
3. 在 `index.html` 中替换 `ca-pub-XXXXXXXXX` 为您的发布商 ID
4. 在 `AdBanner.vue` 中替换广告位 ID

### 7. 自定义域名（可选）

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加您的自定义域名
3. 按照提示配置 DNS 记录

### 8. 部署验证

部署完成后，访问您的网站地址，检查：
- [ ] 页面正常加载
- [ ] 可以选择 Gemini 模型
- [ ] 聊天功能正常工作
- [ ] 广告正常显示（如已配置）

## 故障排除

### 常见问题

**Q: API 请求失败**
A: 检查环境变量配置是否正确，确保 API 密钥有效

**Q: 模型列表为空**
A: 确认 `OPENAI_API_BASE_URL` 和 `OPENAI_API_KEY` 配置正确

**Q: 页面无法访问**
A: 检查 Vercel 部署日志，确认构建是否成功

### 日志查看
在 Vercel 控制台中可以查看：
- 构建日志
- 函数日志
- 访问统计

## 更新部署

当项目有更新时：
1. 在 GitHub 中同步最新代码
2. Vercel 会自动重新部署
3. 或者在 Vercel 控制台手动触发部署

## 安全建议

- 不要在客户端暴露 API 密钥
- 定期更换 API 密钥
- 使用环境变量存储敏感信息
- 启用 Vercel 的 DDoS 保护

## 支持

如有问题，请在项目中创建 Issue 或联系支持团队。