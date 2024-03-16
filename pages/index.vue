<template>
  <div class="app-page-home">
    <LayoutNavigation class="app-page-home__navigation-menu" />
    <AppMainBlock id="home" class="app-page-home__main-block" />
    <AppProjectsList id="projects" class="app-page-home__projects-list" />
    <AppAboutMe id="me" class="app-page-home__about-me" />
    <AppContactMe id="contact" class="app-page-home__contact" />
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
import AppAboutMe from '~/components/main/AppAboutMe.vue'
import AppContactMe from '~/components/main/AppContactMe.vue'

definePageMeta({
  layout: 'default',
})

const { $bus } = useNuxtApp()

onMounted(() => {
  observeVisibility(['home', 'projects', 'me', 'contact'], visibleId => {
    $bus.emit('navigation:item:visible', visibleId as TNavigationVisibleItemsCondition)
  })
})
</script>

<style lang="scss">
.app-page-home {
  &__projects-list,
  &__about-me,
  &__contact {
    margin-top: 64rem;
  }

  @media #{map-get($display-rules, 'md')} {
    &__navigation-menu {
      margin: 0 -40rem;
      width: fit-content;
      position: fixed;
    }

    &__projects-list,
    &__about-me,
    &__contact {
      margin-top: 164rem;
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    &__projects-list,
    &__about-me,
    &__contact {
      margin-top: 250rem;
    }
  }
}
</style>
