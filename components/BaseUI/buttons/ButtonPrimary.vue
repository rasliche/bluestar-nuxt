<template>
  <ButtonBase
    class="bg-blue-500 hover:bg-blue-600 text-white"
    v-on="$listeners"
  >
    <slot></slot>
  </ButtonBase>
</template>

<script>
import ButtonBase from '@/components/BaseUI/buttons/ButtonBase.vue'

export default {
  name: 'ButtonPrimary',
  components: {
    ButtonBase,
  },
}
</script>
