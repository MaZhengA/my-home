import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '铮霄驿', // 站点标题
  description: '这是一个基于 VitePress 的个人博客', // 站点描述
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' }
    ],
    sidebar: {
      '/': [
        { text: '指南', link: '/guide' },
        { text: '示例', link: '/example' }
      ]
    }
  }
})