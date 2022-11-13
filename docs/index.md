---
layout: home

hero:
    name: Trigger JS
    text: Create scroll-based animation without JavaScript.
    tagline: A library for creating scroll-based animation with HTML attributes and CSS variables.
    actions:
        - theme: brand
          text: Getting Started
          link: /guide/getting-started
        - theme: alt
          text: View on GitHub
          link: https://github.com/triggerjs/trigger
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/stevenlei.png',
    name: 'Steven Lei',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'ttps://github.com/stevenlei' },
      // { icon: 'youtube', link: 'https://youtube.com/CodingStartup' }
    ]
  },
  {
    avatar: 'https://www.github.com/plainheart.png',
    name: 'Zhongxiang Wang',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'ttps://github.com/plainheart' },
    ]
  },
  {
    avatar: 'https://www.github.com/ahhshm.png',
    name: 'ahhshm',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'ttps://github.com/ahhshm' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
