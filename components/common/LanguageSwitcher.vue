<template>
  <ui-menu v-model:open="isOpen" class="app-language-switcher language-switcher">
    <template #activator>
      <button
        aria-label="Click here for change language"
        class="language-switcher__action"
        @click="isOpen = !isOpen"
      >
        <span class="language-switcher__action-label">
          {{ locale }}
        </span>
      </button>
    </template>

    <div class="language-switcher__menu language-switcher-menu">
      <button
        v-for="availableLocale in locales"
        :key="availableLocale.code"
        :aria-label="getAriaText(availableLocale.code)"
        class="language-switcher-menu__item"
        @click="changeLocale(availableLocale.code)"
      >
        <span class="language-switcher-menu__item-label">
          {{ availableLocale.code }}
        </span>
      </button>
    </div>
  </ui-menu>
</template>

<script setup lang="ts">
const router = useRouter()
const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)

const changeLocale = async (selectedLocaleCode: string) => {
  await setLocale(selectedLocaleCode)
  isOpen.value = false
}

const getAriaText = (code: string) => {
  return `Click to switch on ${code} locale`
}
</script>

<style lang="scss">
.app-language-switcher {
  .language-switcher__action {
    &-label {
      font-weight: bold;
      color: map-get($theme-palette, 'primary');
    }
  }

  .language-switcher__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .language-switcher-menu__item {
      padding: 8rem 32rem;

      .language-switcher-menu__item-label {
        font-weight: bold;
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    .language-switcher__action {
      padding: 8rem 16rem;

      &-label {
        font-size: 20rem;
      }
    }

    .language-switcher__menu {
      .language-switcher__action {
        padding: 12rem 8rem;

        .language-switcher__action {
          font-weight: bold;
          font-size: 18rem;
        }
      }
    }
  }
}
</style>
