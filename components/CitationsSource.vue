<template>
  <li :id="anchor" class="ml-4">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'CitationsSource',
  props: {
    anchor: {
      type: String,
      required: true,
    },
  },
}
</script>
