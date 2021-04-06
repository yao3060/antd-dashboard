<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>
      <a-form
        :model="formState"
        style="width:200px;margin:50px auto;"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item>
          <a-input v-model:value="formState.username" placeholder="Username">
            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.password" type="password" placeholder="Password">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.username === '' || formState.password === ''"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>
<script>
import Footer from "@/components/Footer"
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({

  components: {
    Footer,
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState = reactive({
      username: 'admin',
      password: 'password',
    })
    const store = useStore()

    const handleFinish = values => {
      console.log(values, formState)

      return store.dispatch('users/login', formState)
    }

    const handleFinishFailed = errors => {
      console.log(errors)
    }

    return {
      formState,
      handleFinish,
      handleFinishFailed,
    }
  },
})
</script>
