<template>
  <ButtonBase
    class="bg-green-500 hover:bg-green-600 text-white"
    v-on="$listeners"
  >
    <slot></slot>
  </ButtonBase>
</template>

<script>
import ButtonBase from '@/components/BaseUI/buttons/ButtonBase'

export default {
  name: 'ButtonInfo',
  components: {
    ButtonBase,
  },
}
</script>
