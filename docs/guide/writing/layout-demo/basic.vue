<template>
    <Layout style="height: 100vh">
    <Sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <Menu 
        v-model:selectedKeys="state.selectedKeys"
        theme="dark" 
        mode="inline"
        :open-keys="state.openKeys"
        :items="items"
        @openChange="onOpenChange"
      />
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0" />
      <Content style="margin: 0 16px">
        <Breadcrumb style="margin: 16px 0">
          <BreadcrumbItem>User</BreadcrumbItem>
          <BreadcrumbItem>Bill</BreadcrumbItem>
        </Breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </Content>
      <Footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Layout, Menu, Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { items } from './menu-data'
const { Header, Sider, Content, Footer } = Layout
const collapsed = ref<boolean>(false);
const state = reactive({
  rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
  openKeys: ['sub1'],
  selectedKeys: [],
});
const onOpenChange = (openKeys: any[]) => {
  const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>

<docs lang="md">
---
previewHeight: 500
style: compact
includes: [./menu-data]
---
</docs>
