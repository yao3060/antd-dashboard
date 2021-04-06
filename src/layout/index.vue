<template>
  <a-layout id="components-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <MenuUnfoldOutlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <MenuUnfoldOutlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <Breadcrumb style="display:inline-block;" />
        <Navbar style="display:inline-block;" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: contentMinHeight + 'px' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>

import { MenuUnfoldOutlined } from "@ant-design/icons-vue"
import SiderMenu from "./components/SiderMenu"
import Breadcrumb from "./components/Breadcrumb"
import Navbar from "./components/Navbar"

import { defineComponent, ref, computed } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  name: "Layout",
  components: {
    SiderMenu, MenuUnfoldOutlined, Breadcrumb, Navbar
  },
  setup() {
    const store = useStore()
    const fixedHeader = computed(() => store.state.settings.fixedHeader)
    const sidebarLogo = computed(() => store.state.settings.sidebarLogo)
    let contentMinHeight = ref(window.innerHeight - 160)

    return {
      fixedHeader,
      sidebarLogo,
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
      contentMinHeight
    }
  },
})
</script>
<style>
#components-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout .trigger:hover {
  color: #1890ff;
}

.ant-menu-dark .ant-menu-item a {
  color: rgba(255, 255, 255, 0.65);
}

.ant-menu-dark .ant-menu-item-selected .router-link-active {
  color: #fff;
}

#components-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
