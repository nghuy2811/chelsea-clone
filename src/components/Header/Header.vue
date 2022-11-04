<template>
  <header>
    <Container :child-class="$style.navSmall">
      <div :class="$style.wrapper">
        <HeaderSideBanner />
        <HeaderNav />
      </div>
    </Container>
  </header>
  <NavMorePopup />
</template>

<script setup lang="ts">
import Container from "../Container/Container.vue";
import HeaderSideBanner from "./HeaderSideBanner.vue";
import HeaderNav from "./HeaderNav.vue";
import NavMorePopup from "../Popup/NavMorePopup.vue";
</script>

<style lang="scss" module>
header {
  position: relative;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 4px;
  background: var(--secondary-dark-blue-c);

  @include media-down(desktop) {
    display: none;
  }
}

.navSmall {
  @include media-down(desktop) {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
.wrapper {
  @include media-up(desktop) {
    padding-left: 20px;
    padding-top: 4px;
  }
}
</style>
