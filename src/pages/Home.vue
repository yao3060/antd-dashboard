<template>
  <h1>Home</h1>
  <a-button type="primary" ghost @click="doLogin">Login</a-button>
</template>

<script>
import { login } from "@/api/users"
export default {
  name: "HomePage",
  methods: {
    async doLogin(){
      let response = await login({
        username:'admin',
        passowrd: 'password'
      })
      console.log(response)
    }
  }
}
</script>

<style>

</style>
