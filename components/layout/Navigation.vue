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
      <div
        v-if="link.active"
        class="app-navigation__item-active"
      />
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
    link: '#home',
    active: true,
  },
  {
    name: t('navigation.projects'),
    link: '#projects',
    active: false,
  },
  {
    name: t('navigation.aboutMe'),
    link: '#me',
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

    &-link {
      color: map-get($theme-palette, 'primary');
      text-decoration: unset;
    }

    &-active {
      height: 10rem;
      width: 2rem;
      background: map-get($theme-palette, 'primary');
      align-self: end;
    }
  }

  @media #{map-get($display-rules, 'md')} {
    display: flex;
    &__item {
      font-size: 14rem;

      &-link {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
      }
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    &__item {
      &-link {
        font-size: 18rem;
      }
    }
  }
}
</style>
