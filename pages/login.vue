<template>
  <Login class="mx-auto" />
  <!-- <div>
    <h1>Login</h1>
    <form method="POST" @submit.prevent="userLogin">
      <div>
        <label>Email</label>
        <input v-model="login.email" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div> -->
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'Login',
  // auth: 'guest',
  components: { Login },
  head() {
    return [
      {
        title: 'Login'
      }
    ]
  }
}
</script>
