<template>
  <header class="app-header">
    <CommonLogo />

    <div class="app-header__actions">
      <CommonLanguageSwitcher class="app-header__actions-language-switcher" />
      <button class="app-header__actions-navigation">
        <ui-icon name="common/menu" :size="22" color="" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.app-header {
  padding: 16rem 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__actions {
    display: flex;
    align-items: center;
    gap: 8rem;

    .app-header__actions-navigation {
      .ui-icon {
        color: map-get($theme-palette, 'primary');
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    padding: 40rem 80rem;

    .app-header__actions-navigation {
      display: none;
    }
  }
}
</style>
