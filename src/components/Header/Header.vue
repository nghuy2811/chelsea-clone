<template>
  <header>
    <div class="container">
      <div :class="$style.wrapper">
        <HeaderSideBanner />
        <HeaderNav />
      </div>
    </div>
  </header>
  <NavMorePopup />
</template>

<script setup lang="ts">
import HeaderSideBanner from "./HeaderSideBanner.vue";
import HeaderNav from "./HeaderNav.vue";
import NavMorePopup from "../Popup/NavMorePopup.vue";
</script>

<style module>
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
}
.wrapper {
  padding-left: 20px;
  padding-top: 4px;
}
</style>
