<template>
  <div>
    <h1>Thank you for booking your trip with a Blue Star operator</h1>
    <ol>
      <li>Obey the regulations</li>
      <li>Leave only bubbles</li>
      <li>Obey the regulations</li>
    </ol>
    <input type="text" />Sign your name here
    <p>Sign the Pledge</p>
  </div>
</template>

<script>
export default {
  name: 'Pledge',
  auth: false,
  head() {
    return {
      title: 'Blue Star Pledge',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Sign a pledge showing you understand and are willing to do what it takes to protect the Florida Keys coral reef ecosystem.',
        },
      ],
    }
  },
}
</script>
