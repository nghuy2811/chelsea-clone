<template>
  <div :class="[$style['container-wrapper'], childClass]">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  childClass: String || undefined,
});
</script>

<style lang="scss" module>
.container-wrapper {
  padding-left: 32px;
  padding-right: 32px;

  @include media-up(tablet) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @include media-up(desktop) {
    padding-left: 82px;
    padding-right: 82px;
  }
}
</style>
