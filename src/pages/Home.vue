<template>
  <h1>Home</h1>
  <a-button type="primary" ghost @click="doLogin">Login</a-button>
</template>

<script>
import { login, me } from "@/api/users"
export default {
  name: "HomePage",
  methods: {
    async doLogin(){
      let response = await login({
        username:'admin',
        passowrd: 'password'
      })
      console.log(response)
      this.getProfile()
    },
    async getProfile(){
      let response = await me()
      console.log(response)
    }
  }
}
</script>

<style>

</style>
