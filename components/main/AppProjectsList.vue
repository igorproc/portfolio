<template>
  <div class="app-projects-list">
    <div class="app-projects-list__title">
      <h2 class="app-projects-list__title-content">
        {{ t('personal projects') }}
      </h2>

      <div class="app-projects-list__title--additional" />
    </div>

    <div class="app-projects-list__items">
      <ui-card
        v-for="project in projectsList"
        :key="project.imageUrl"
        :image-url="project.imageUrl"
        :title="project.title"
        :subtitle="project.subtitle"
        :description="project.description"
        :button-label="t('see project')"
      >

      </ui-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// Utils
import { generateId } from '~/utils/generateId'
// Types & Interfaces
import type { TUiIconNames } from '#build/types/ui-icon'

interface IProductTags {
  id: number | string,
  label: string,
  icon: TUiIconNames,
}

type TProjectItem = {
  imageUrl: string,
  title: string,
  subtitle: string,
  description: string,
  tags: IProductTags[],
  url: string,
}

const { t } = useI18n()

const projectsList: TProjectItem[] = [
  {
    imageUrl: 'https://s3.specto.su/product-1.png',
    title: t('Specto.su'),
    subtitle: t('Ecommerce'),
    description: t(`
      Мой собственный проект - это интернет-магазин, основанный на Node.js, с использованием Nuxt 3 для веб-интерфейса и
      NestJS для серверной части. В нем реализованы основные функции, включая страницы товаров, настраиваемые товары,
      списки желаний и корзина покупок.
    `),
    tags: [
      {
        id: generateId(),
        label: 'TypeScript',
        icon: 'brands/typescript'
      },
      {
        id: generateId(),
        label: 'Nuxt 3',
        icon: 'brands/nuxtjs'
      },
      {
        id: generateId(),
        label: 'Nest JS',
        icon: 'brands/nestjs',
      }
    ],
    url: 'https://specto.su'
  }
]
</script>

<style lang="scss">
.app-projects-list {
  &__title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &-content {
      color: map-get($theme-palette, 'primary');
      font-weight: 800;
      text-align: right;
    }
    &--additional {
      width: 7%;
      height: 5rem;
      background-color: map-get($theme-palette, 'primary');
    }
  }

  @media #{map-get($display-rules, 'md')} {
    &__title {
      &-content {
        font-size: 30rem;
      }
    }
  }
}
</style>
