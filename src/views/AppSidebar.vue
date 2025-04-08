<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Bookmark, Clock4, Home, Library, TrendingUp } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'
import { cn } from '@/lib/utils'

const route = useRoute()

const mainItems = [
  {
    title: 'ホーム',
    url: '/',
    icon: Home,
  },
  {
    title: 'トレンド',
    url: '/trend',
    icon: TrendingUp,
  },
  {
    title: '最近追加',
    url: '/recent',
    icon: Clock4,
  },
]

const libraryItems = [
  {
    title: 'マイライブラリ',
    url: '/mylibrary',
    icon: Library,
  },
  {
    title: '保存済み',
    url: '/saved',
    icon: Bookmark,
  },
]
</script>

<template>
  <Sidebar>
    <SidebarHeader class="text-2xl font-semibold">TechLibrary</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel class="text-xs font-medium text-muted-foreground"
          >メインメニュー</SidebarGroupLabel
        >
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="mainItem in mainItems" :key="mainItem.title">
              <SidebarMenuButton asChild>
                <RouterLink
                  :to="mainItem.url"
                  :class="
                    cn(
                      'flex items-center gap-3 px-3 py-5 rounded-md text-sm transition-colors',
                      route.path === mainItem.url
                        ? 'bg-primary/10 text-primary font-medium hover:bg-primary/10 hover:text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                    )
                  "
                >
                  <component :is="mainItem.icon" class="h-4 w-4" />
                  <span>{{ mainItem.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel class="text-xs font-medium text-muted-foreground"
          >ライブラリ</SidebarGroupLabel
        >
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="libraryItem in libraryItems" :key="libraryItem.title">
              <SidebarMenuButton asChild>
                <RouterLink
                  :to="libraryItem.url"
                  :class="
                    cn(
                      'flex items-center gap-3 px-3 py-5 rounded-md text-sm transition-colors',
                      route.path === libraryItem.url
                        ? 'bg-primary/10 text-primary font-medium hover:bg-primary/10 hover:text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                    )
                  "
                >
                  <component :is="libraryItem.icon" class="h-4 w-4" />
                  <span>{{ libraryItem.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <Button class="py-5">ログイン</Button>
      <Button variant="outline" class="py-5"> アカウント作成 </Button>
    </SidebarFooter>
  </Sidebar>
</template>
