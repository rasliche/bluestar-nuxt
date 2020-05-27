<template>
  <register class="mx-auto" />
  <!-- <div>
    <h1>Register</h1>
    <form method="POST" @submit.prevent="userRegister">
      <div>
        <label>Name</label>
        <input v-model="register.name" type="text" />
      </div>
      <div>
        <label>Email</label>
        <input v-model="register.email" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="register.password" type="password" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input v-model="register.confirmPassword" type="password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div> -->
</template>

<script>
import Register from '@/components/Register'

export default {
  name: 'Register',
  // auth: 'guest',
  components: { Register },
  head() {
    return [
      {
        title: 'Register'
      }
    ]
  }
}
</script>
