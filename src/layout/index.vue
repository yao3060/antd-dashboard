<template>
  <a-layout id="components-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: contentMinHeight + 'px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SiderMenu from "./components/SiderMenu"
import { defineComponent, ref, computed } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  name: "Layout",
  components: {
    SiderMenu
  },

  setup() {
    const store = useStore()
    console.log(store.state.settings.fixedHeader)
    const fixedHeader = computed(() => store.state.settings.fixedHeader)
    const sidebarLogo = computed(() => store.state.settings.sidebarLogo)
    let contentMinHeight = ref(window.innerHeight - 64 - 24 - 24)

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
