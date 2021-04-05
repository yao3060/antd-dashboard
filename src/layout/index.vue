<template>
  <a-layout id="components-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <DashboardOutlined />
          <span><router-link to="/">Dashboard</router-link></span>
        </a-menu-item>
        <a-sub-menu key="users">
          <template #title>
            <span>
              <UserOutlined />
              <span>Users</span>
            </span>
          </template>
          <a-menu-item key="all_users">Users</a-menu-item>
          <a-menu-item key="add_users">Add</a-menu-item>
          <a-menu-item key="roles">Roles</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2">
          <UserOutlined />
          <span>Users</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>404</span>
        </a-menu-item>

        <a-menu-item key="4">
          <upload-outlined />
          <span><router-link to="/about">Go to About</router-link></span>
        </a-menu-item>
      </a-menu>
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
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  DashboardOutlined,
  UserOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Layout",
  components: {
    DashboardOutlined,
    UserOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    const store = useStore();
    console.log(store.state.settings.fixedHeader);
    const fixedHeader = computed(() => store.state.settings.fixedHeader);
    const sidebarLogo = computed(() => store.state.settings.sidebarLogo);
    return {
      fixedHeader,
      sidebarLogo,
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
    };
  },
});
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
