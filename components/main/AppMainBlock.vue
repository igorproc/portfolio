<template>
  <section class="app-main-block">
    <div class="app-main-block__spacer" />
    <h1 class="app-main-block__title">
      {{ t('main.title') }}
    </h1>
    <div
      class="app-main-block__theme-changer"
    >
      <CommonThemeChanger />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss">
.app-main-block {
  height: 250rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__spacer {
    display: none;
  }

  &__title {
    width: 100%;
    text-align: center;
    color: map-get($theme-palette, 'primary');
    font-family: $display-font;
    font-weight: normal;
  }

  &__theme-changer {
    display: none;
  }

  @media #{map-get($display-rules, 'md')} {
    height: 450rem;

    &__spacer {
      display: block;
    }

    &__title {
      width: auto;
      font-size: 45rem;
    }

    &__theme-changer {
      display: block;
      writing-mode: vertical-lr;
      rotate: 180deg;
      align-self: flex-end;
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    height: 650rem;
  }
}
</style>
