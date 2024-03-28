<template>
  <section class="app-contact-me">
    <div class="app-contact-me__title">
      <h4 class="app-contact-me__title-content">
        {{ t('contactMe.title') }}
      </h4>

      <div class="app-contact-me__title--additional" />
    </div>

    <div class="app-contact-me__variants-list contact-variants">
      <a
        v-for="item in linkItems"
        :key="item.id"
        :href="item.href"
        target="_blank"
        aria-label="Redirect to my contact"
        class="contact-variants__item"
      >
        <ui-icon :name="item.prependIcon" class="contact-variants__item-icon" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const linkItems = [
  {
    id: generateId(),
    href: 'https://github.com/igorproc',
    prependIcon: 'brands/contact/github'
  },
  {
    id: generateId(),
    href: 'mailto:type19790098@gmail.com',
    prependIcon: 'brands/contact/gmail'
  },
  {
    id: generateId(),
    href: 'https://t.me/pr0s1k',
    prependIcon: 'brands/contact/telegram'
  },
  {
    id: generateId(),
    href: 'https://vk.com/pr0s1k',
    prependIcon: 'brands/contact/vk'
  }
]
</script>

<style lang="scss">
.app-contact-me {
  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-content {
      text-align: center;
      color: map-get($theme-palette, 'primary');
    }

    &--additional {
      margin-top: 3rem;
      width: 10%;
      height: 3rem;
      background-color: map-get($theme-palette, 'primary');
    }
  }

  &__variants-list {
    margin-top: 35rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media #{map-get($display-rules, 'md')} {
    &__variants-list {
      max-width: 75%;
      margin-left: 12%;

      .contact-variants__item-icon {
        font-size: 24rem !important;
      }
    }
  }

  @media #{map-get($display-rules, 'lg')} {
    &__title {
      &-content {
        font-size: 32rem;
      }
      &--additional {
        width: 8%;
      }
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    &__variants-list {
      max-width: 50%;
      margin-left: 25%;
    }
  }
}
</style>
