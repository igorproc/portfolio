<template>
  <div class="app-footer">
    <CommonLogo />
  </div>
</template>

<style lang="scss">
.app-footer {
  padding: 16rem 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media #{map-get($display-rules, 'md')} {
    padding: 40rem 80rem;
  }
}
</style>
