<script lang="ts" setup>
import { useNavMorePopupStore } from "../../stores/popupStores";

import NavOverlay from "../Nav/NavOverlay.vue";

const navMorePopupStore = useNavMorePopupStore();

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (navMorePopupStore.isShow && event.code === "Escape") {
    navMorePopupStore.togglePopup();
  }
});
</script>

<template>
  <div
    tabindex="0"
    class="overlay"
    :class="{ isActive: navMorePopupStore.isShow }"
  >
    <div class="close-box" @click="navMorePopupStore.togglePopup">
      <div class="close-icon">
        <span></span>
        <span></span>
      </div>
    </div>
    <NavOverlay />
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  background: var(--main-blue-c);
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.7);
  transition: all 0.1s ease-in-out;
  overflow: auto;

  &.isActive {
    display: block;
    opacity: 1;
    visibility: visible;
    background-image: url("/images/overlay_nav.png");
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1);
  }
}

.close-box {
  width: 72px;
  height: 72px;
  position: absolute;
  top: 0;
  right: 0;
  background: var(--secondary-light-blue-c);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.close-icon {
  width: 23px;
  height: 23px;
  position: relative;

  span {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    background: var(--main-white-c);
    transform-origin: center;
  }

  & span:nth-child(1) {
    transform: rotate(45deg);
  }

  & span:nth-child(2) {
    transform: rotate(-45deg);
  }
}
</style>
