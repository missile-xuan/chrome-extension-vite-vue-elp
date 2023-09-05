# chrome-extension-vite-vue-elp

这是一个基于vite vue3 elementplus ts 的chrome v3版本插件框架
### 使用方法
npm install
调整manifest.json中的网址配置
调整逻辑
npm run build
将dist倒入插件管理器中
### 文件结构

```
chrome-extension-vite-vue-elp
├─ .env  // 配置dom id 注意同时使用多个插件时注意id冲突问题
├─ .eslintrc.cjs
├─ .gitignore
├─ env.d.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  │  └─ logo.svg
│  ├─ content.js // 入口文件为了解决 export 报错问题
│  ├─ favicon.ico
│  └─ manifest.json // 插件配置文件
├─ README.md
├─ src
│  ├─ App.vue // 最外城拖拽控制逻辑，没啥问题可以不动里面内容
│  ├─ assets
│  │  └─ less
│  │     └─ main.less // 样式文件
│  ├─ components
│  │  ├─ Home.vue // 功能逻辑入口文件
│  │  └─ icons
│  │     └─ IconCommunity.vue
│  ├─ main.ts
│  └─ stores
│     └─ counter.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```