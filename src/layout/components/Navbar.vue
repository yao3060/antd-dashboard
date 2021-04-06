<template>
  <div class="right-menu">
    <a-dropdown class="avatar-container right-menu-item">
      <a class="ant-dropdown-link" @click.prevent>
        <a-avatar shape="square" size="small" style="backgroundcolor: #87d068">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        Hover me
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'Navbar',
    components: {
    UserOutlined,
  },
})
</script>

<style lang="scss" scoped>
  .right-menu {
    float: right;
    height: 100%;

    .right-menu-item {
      padding: 0 30px;
      height: 100%;
      font-size: 14px;
    }
  }
</style>
