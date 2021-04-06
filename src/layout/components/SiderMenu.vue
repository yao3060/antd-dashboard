<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item key="dashboard">
      <DashboardOutlined />
      <span><router-link to="/">{{ $t("route.dashboard") }}</router-link></span>
    </a-menu-item>
    <a-sub-menu key="users">
      <template #title>
        <span>
          <TeamOutlined />
          <span>{{ $t("route.users") }}</span>
        </span>
      </template>
      <a-menu-item key="usersindex">
        <TeamOutlined />
        <span><router-link to="/users/index">{{ $t("route.users") }}</router-link></span>
      </a-menu-item>
      <a-menu-item key="usersadd">
        <UserAddOutlined />
        <span><router-link to="/users/add">{{ $t("route.add_users") }}</router-link></span>
      </a-menu-item>
      <a-sub-menu key="permission">
        <template #title>
          <span>
            <SafetyOutlined />
            <span>Permission</span>
          </span>
        </template>
        <a-menu-item key="userspermissionroles">
          <span><router-link to="/users/permission/roles">{{ $t("route.roles") }}</router-link></span>
        </a-menu-item>
        <a-menu-item key="userspermissionpermissions">
          <span><router-link to="/users/permission/permissions">{{ $t("route.permissions") }}</router-link></span>
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-menu-item key="2">
      <TeamOutlined />
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
</template>

<script>
import {
  DashboardOutlined,
  TeamOutlined,
  UserAddOutlined,
  SafetyOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue"
import { ref } from "vue"
import { useRoute } from 'vue-router'

export default {
  name: "SiderMenu",
  components: {
    DashboardOutlined,
    TeamOutlined,
    UserAddOutlined,
    SafetyOutlined,
    UploadOutlined,
  },
  setup() {
    let route = useRoute()
    let selectedKeys = ref([route.path.replaceAll('/', '')])
    return {
      // route,
      selectedKeys,
    }
  },
}
</script>

<style></style>
