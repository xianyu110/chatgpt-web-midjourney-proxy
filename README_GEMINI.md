# Gemini Pro Chat 🚀

> 基于 Google Gemini 的先进 AI 助手，提供强大的对话体验

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/gemini-pro-chat&env=OPENAI_API_BASE_URL&env=OPENAI_API_KEY&project-name=gemini-pro-chat&repository-name=gemini-pro-chat)

![Gemini Pro Chat](./docs/gemini-preview.jpg)

## ✨ 特色功能

- 🤖 **多模型支持**: 支持最新的 Gemini 2.0 Flash, Gemini 2.5 Pro 等模型
- 💬 **智能对话**: 基于 Google 最先进的 AI 技术
- 🎨 **现代界面**: 简洁美观的聊天界面，支持暗色主题
- 📱 **响应式设计**: 完美适配手机、平板和桌面设备
- 🚀 **一键部署**: 支持 Vercel 无服务器部署
- 💰 **广告集成**: 内置 Google AdSense 支持

## 🎯 支持的模型

### Gemini 2.x 系列
- `gemini-2.0-flash` - 最新的快速响应模型
- `gemini-2.0-flash-exp-image-generation` - 支持图像生成
- `gemini-2.5-flash` - 高性能版本
- `gemini-2.5-pro` - 专业级模型

### Gemini 1.x 系列
- `gemini-1.5-pro` - 强大的多模态模型
- `gemini-1.5-flash` - 快速响应模型
- `gemini-pro` - 经典版本
- `gemini-pro-vision` - 支持图像理解

## 🚀 快速开始

### Vercel 一键部署

1. 点击上方的 "Deploy with Vercel" 按钮
2. 配置环境变量（见下文）
3. 等待部署完成
4. 享受 Gemini AI 聊天体验！

### 本地开发

```bash
# 克隆项目
git clone https://github.com/YOUR_USERNAME/gemini-pro-chat.git
cd gemini-pro-chat

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env.local
# 编辑 .env.local 文件

# 启动开发服务器
pnpm dev
```

## ⚙️ 环境变量配置

### Google AI API (推荐)
```bash
OPENAI_API_BASE_URL=https://generativelanguage.googleapis.com/v1beta
OPENAI_API_KEY=your-google-ai-api-key
```

### 第三方兼容 API
```bash
OPENAI_API_BASE_URL=https://api.your-service.com/v1
OPENAI_API_KEY=sk-your-api-key
```

### 可选配置
```bash
# 默认模型
OPENAI_API_MODEL=gemini-pro

# 自定义模型列表
CUSTOM_MODELS=gemini-2.0-flash,gemini-2.5-pro,gemini-1.5-pro

# Google Analytics
TJ_GOOGLE_ID=G-XXXXXXXXXX

# 默认主题 (light/dark)
SYS_THEME=dark
```

## 🔑 获取 API 密钥

### Google AI Studio (免费)
1. 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 使用 Google 账户登录
3. 创建新的 API 密钥
4. 复制密钥到环境变量中

### 第三方服务
支持任何兼容 OpenAI API 格式的服务商，包括：
- Azure OpenAI
- 各种第三方 API 代理服务

## 📱 功能预览

### 智能对话
- 支持长对话记忆
- 上下文理解
- 多语言支持

### 模型切换
- 动态模型选择
- 实时模型性能监控
- 自定义模型参数

### 响应式界面
- 移动端优化
- 暗色主题支持
- 消息历史管理

## 💰 广告配置

如需集成 Google AdSense：

1. 获取 AdSense 账户和发布商 ID
2. 在 `index.html` 中替换广告代码
3. 在 `AdBanner.vue` 组件中配置广告位

## 🛠️ 技术栈

- **前端**: Vue 3 + TypeScript + Vite
- **UI 库**: Naive UI + Tailwind CSS
- **状态管理**: Pinia
- **部署**: Vercel Serverless
- **API**: Google Gemini / OpenAI Compatible

## 📦 项目结构

```
gemini-pro-chat/
├── src/
│   ├── components/          # 通用组件
│   ├── views/               # 页面组件
│   │   └── chat/           # 聊天相关页面
│   ├── api/                # API 调用
│   ├── store/              # 状态管理
│   └── utils/              # 工具函数
├── api/                    # Vercel Serverless 函数
├── public/                 # 静态资源
└── docs/                   # 文档资源
```

## 🔧 自定义配置

### 添加新模型
在 `src/views/mj/aiModel.vue` 中的模型列表中添加：

```javascript
const config = ref({
  model: [
    'your-new-model',
    // ... 其他模型
  ]
})
```

### 修改界面主题
在 `src/styles/` 目录中修改样式文件

### 自定义 API 端点
在 `api/proxy.js` 中修改代理逻辑

## 🚨 重要安全提醒

- ❌ **永远不要**在前端代码中硬编码 API 密钥
- ✅ **始终使用**环境变量存储敏感信息
- 🔒 **定期更换** API 密钥
- 🛡️ **启用** Vercel 的安全功能

## 📚 部署指南

详细部署指南请参考: [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🎉 致谢

基于优秀的开源项目 [chatgpt-web-midjourney-proxy](https://github.com/Dooy/chatgpt-web-midjourney-proxy) 改造而成

---

**享受与 Gemini AI 的智能对话体验！** 🌟