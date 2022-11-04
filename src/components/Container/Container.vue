<template>
  <div :class="$style['container-wrapper']">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
.container-wrapper {
  padding-left: 32px;
  padding-right: 32px;

  @include media-up(tablet) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @include media-down(desktop) {
    padding-left: 82px;
    padding-right: 82px;
  }
}
</style>
