<template>
  <div class="app-page-home">
    <LayoutNavigation class="app-page-home__navigation-menu" />
    <AppMainBlock id="app" />
    <AppProjectsList id="projects" class="app-page-home__projects-list" />
  </div>
</template>

<script lang="ts" setup>
// Components
import AppMainBlock from '~/components/main/AppMainBlock.vue'
import AppProjectsList from '~/components/main/AppProjectsList.vue'
// Composables
import { observeVisibility } from '~/composables/useElementsVisisbleObserbve'
// Types & Interfaces
import type { TNavigationVisibleItemsCondition } from '~/shared/constants/navigation'

definePageMeta({
  layout: 'default',
})

const { $bus } = useNuxtApp()

onMounted(() => {
  observeVisibility(['app', 'projects'], visibleId => {
    $bus.emit('navigation:item:visible', visibleId as TNavigationVisibleItemsCondition)
  })
})
</script>

<style lang="scss">
.app-page-home {
  padding: 16rem 18rem;

  @media #{map-get($display-rules, 'md')} {
    padding: 40rem 65rem;

    &__navigation-menu {
      margin: 0 -40rem;
      width: fit-content;
      position: fixed;
    }

    &__projects-list {
      margin-top: 164rem;
    }
  }
}
</style>
