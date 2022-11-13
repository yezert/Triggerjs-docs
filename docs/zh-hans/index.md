---
layout: home

hero:
  name: Trigger JS
  text: 毋须编写 JavaScript，建立页面滚动动画。
  tagline: 使用 HTML 属性和 CSS 变量创建基于滚动的动画的JavaScript库
  actions:
    - theme: brand
      text: 快速开始
      link: /zh-hans/guide/getting-started
    - theme: alt
      text: Github
      link: https://github.com/triggerjs/trigger
---



<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/stevenlei.png',
    name: 'Steven Lei',
    title: '创始人',
    links: [
      { icon: 'github', link: 'ttps://github.com/stevenlei' },
      // { icon: 'youtube', link: 'https://youtube.com/CodingStartup' }
    ]
  },
  {
    avatar: 'https://www.github.com/plainheart.png',
    name: 'Zhongxiang Wang',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'ttps://github.com/plainheart' },
    ]
  },
  {
    avatar: 'https://www.github.com/ahhshm.png',
    name: 'ahhshm',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'ttps://github.com/ahhshm' },
    ]
  },
]
</script>


<VPTeamMembers size="small" :members="members" />
