<template>
  <MayaLayout
      :loading="pageLoading"
      :theme="theme"
      :menus="menus"
      :layout="layout"
      :title="title"
      :logo="Logo"
      :siderMenuType="siderMenuType"
  >
      <template #actions>
          <HeaderSearch/>
          <QuestionCircleOutlined />
          <GlobalOutlined />
          <NotificationOutlined />
          <SettingOutlined />
      </template>
      <template #avatar>
          <Avatar
              title="Skogkatt"
              :style="{ backgroundColor: colorPrimary, verticalAlign: 'middle' }" 
              :gap="4"
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"
          />                    
      </template>
      <PageContainer
          :loading="pageLoading"
      >
          <template #header>
              <PageHeader
                  title="PageTitle"
                  subTitle="PageSubTitle"
                  :onBack="() => {}"
                  :tabs="tabs"
              >
                  <template #avatar>
                      <Avatar
                          size="large"
                          :style="{ backgroundColor: colorPrimary, verticalAlign: 'middle' }" 
                          :gap="4"
                          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"
                      />
                  </template>
                  <template #extra>
                      <Button type="primary">主要操作</Button>
                      <Button>次要操作</Button>
                  </template>
                  <template #tags>
                      <Tag color="blue">Running</Tag>
                  </template>
                  <template #tabExtra>
                      TabExtra
                  </template> 
                  PageHeaderContents...
              </PageHeader>
          </template>
          <template #footer>
              PageFooter...
          </template>
      </PageContainer>
      <template #footer>
          <Footer
              :links="links"
              copyright="@2024 锐金澜创软件服务 出品"
          />
      </template>
  </MayaLayout>
</template>

<script setup lang="ts">
import MayaLayout from '../compiled/layout'
import {menus} from './menu'
import {links} from './links'
import { tabs } from './tabs'
import { ref, onMounted, onBeforeMount } from 'vue';
import { Button, Tag} from 'ant-design-vue'
import { Logo } from './logo'
import {HeaderSearch, Avatar, PageContainer, Footer, PageHeader} from '../compiled/layout'
import {
    QuestionCircleOutlined,
    GlobalOutlined,
    NotificationOutlined,
    SettingOutlined
} from '@ant-design/icons-vue'

const colorPrimary = '#0097D1'
const layout = 'mix' // 'top', 'side', 'mix'
const themeType = 'light'
const title = 'Sutras'
const siderMenuType = 'sub' // | 'group'

const theme = {
  type: themeType,
  token: {
      colorPrimary
  }
}
const pageLoading = ref(false)

onBeforeMount(() => {
    console.time()
})
onMounted(() => {
    console.timeEnd()
})
</script>

<docs lang="md">
---
title: 'ProLayout 基础使用'
badge: 'tip-beta'
style: 'compact'
previewHeight: 600
includes: ['links', 'menu', 'tabs']
defaultPreviewMode: 'browser'
---

看我能用iframe展示否！
</docs>