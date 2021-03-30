<template>
  <ButtonBase class="border bg-gray-100 hover:bg-gray-400" v-on="$listeners">
    <slot></slot>
  </ButtonBase>
</template>

<script>
import ButtonBase from '~/components/BaseUI/buttons/ButtonBase'

export default {
  name: 'ButtonSecondary',
  components: {
    ButtonBase,
  },
}
</script>
