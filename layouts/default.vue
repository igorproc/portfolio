<template>
  <div class="app-layout app-layout--default">
    <LayoutHeader />
    <main class="app-layout__content">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.app-layout--default {
  .app-layout__content {
    padding: 16rem 18rem;
  }

  @media #{map-get($display-rules, 'md')} {
    padding: 40rem 65rem;
  }

  @media #{map-get($display-rules, 'xl')} {
    padding: 60rem 65rem;
  }
}
</style>
