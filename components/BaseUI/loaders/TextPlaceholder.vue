<template>
  <div
    class="inline-block h-8 w-8 border-4 border-t-0 border-b-0 border-blue-400 rounded-full simple-spinner"
  ></div>
</template>

<script>
export default {
  name: 'SimpleSpinner',
}
</script>

<style lang="postcss" scoped>
.simple-spinner {
  /* height: 48px; */
  /* width: 48px; */
  /* border: 5px solid rgba(150, 150, 150, 0.2); */
  /* border-radius: 50%; */
  /* border-top-color: rgba(239, 245, 255); border-blue-100 */
  animation: rotate 1s 0s infinite ease-in-out alternate;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
