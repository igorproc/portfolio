<template>
  <div class="ui-drawer" :class="{ '--open': open }">

  </div>
</template>

<script setup lang="ts">
interface Props {
  open: boolean
}

interface Emits {
  (name: 'update:open', open: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { open } = toRefs(props)
</script>

<style lang="scss" scoped>
.ui-drawer {
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;

  &--open {
    visibility: visible;
  }
}
</style>
