<template>
    <ConfigProvider :theme="theme">
        <Layout>
            <slot></slot>
        </Layout>
    </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from 'ant-design-vue'
import Theme from 'vitepress/theme'

const Layout = Theme.Layout
const theme = {
    token: {
        colorPrimary: '#0097D1',
    }
}
</script>