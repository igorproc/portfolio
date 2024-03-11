<template>
  <aside class="app-navigation">
    <div
      v-for="link in linksList"
      :key="link"
      class="app-navigation__item"
    >
      <a
        :href="link.link"
        class="app-navigation__item-link"
      >
        {{ link.name }}
      </a>
      <div v-if="link.active" class="app-navigation-item--active" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { TNavigationVisibleItemsCondition } from '~/shared/constants/navigation'

const { t } = useI18n()
const { $bus } = useNuxtApp()

type TNavigationItem = {
  name: string,
  link: TNavigationVisibleItemsCondition,
  active: boolean,
}

const linksList = ref<TNavigationItem[]>([
  {
    name: t('navigation.home'),
    link: '#app',
    active: true,
  },
  {
    name: t('navigation.projects'),
    link: '#projects',
    active: false,
  },
  {
    name: t('navigation.aboutMe'),
    link: '#about',
    active: false,
  },
  {
    name: t('navigation.contact'),
    link: '#contact',
    active: false,
  },
])

const changeActiveLink = (activeLink: TNavigationVisibleItemsCondition) => {
  const currentActiveLinkList = linksList
    .value
    .find(link => link.active)

  if (currentActiveLinkList) {
    currentActiveLinkList.active = false
  }

  const providedActiveLink = linksList
    .value
    .find(link => link.link === activeLink)

  if (providedActiveLink) {
    providedActiveLink.active = true
  }
}

$bus.on(
  'navigation:item:visible',
  visibleId => changeActiveLink(visibleId as TNavigationVisibleItemsCondition)
)
</script>

<style lang="scss">
.app-navigation {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 22rem;

  &__item {
    display: flex;

    .app-navigation__item-link {
      color: map-get($theme-palette, 'primary');
      text-decoration: unset;
    }

    .app-navigation-item--active {
      height: 10rem;
      width: 2rem;
      background: var(--color-primary);
      align-self: end;
    }
  }

  @media #{map-get($display-rules, 'md')} {
    display: flex;
    &__item {
      font-size: 14rem;

      .app-navigation__item-link {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
