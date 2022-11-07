<script setup lang="ts">
import { computed, ref } from "vue";
import { useNavMorePopupStore } from "@/stores/popupStores";

import HeaderNavExpand from "./HeaderNavExpand.vue";

import { navMenuItems } from "@/utils/staticData";

const currentHoveringIndex = ref<undefined | number>(undefined);
const navMorePopupStore = useNavMorePopupStore();

const isOpenMore = computed(() => {
  return navMorePopupStore.isShow;
});

const handleClickMore = () => navMorePopupStore.togglePopup();
</script>

<template>
  <div class="wrapper">
    <div>
      <img src="/images/ChelseaBadge.webp" alt="Chelsea Badge" class="badge" />
    </div>
    <ul class="main-nav">
      <li
        v-for="(navItem, index) in navMenuItems"
        @mouseover="currentHoveringIndex = index"
        @mouseleave="currentHoveringIndex = undefined"
      >
        <div class="nav-item">
          <a href="#">{{ navItem.title }}</a>
        </div>
        <HeaderNavExpand
          :data="navItem.subMenu"
          :is-active="currentHoveringIndex === index"
        />
      </li>
    </ul>
    <div class="nav-more" @click="handleClickMore">
      <button class="btn-more" :class="{ isOpen: isOpenMore }">
        <div class="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="btn-label">More</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 120px;
  margin-top: -1px;
  display: flex;

  @include media-down(desktop) {
    margin-top: 0px;
    height: 88px;
    justify-content: space-between;
    align-items: center;
  }
}

.badge {
  width: 115px;
  height: 115px;

  @include media-down(desktop) {
    width: 70px;
    height: 70px;
  }
}

.main-nav {
  flex: 1;
  margin-right: 44px;
  margin-left: auto;
  display: flex;
  justify-content: end;

  @include media-down(desktop) {
    display: none;
  }
}

.nav-item {
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 5px;
    background: var(--main-blue-c);
    display: block;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover::after {
    opacity: 1;
  }
}

.main-nav li a {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 22px;
  font-size: 18px;
  line-height: 60px;
  font-weight: 700;
  color: var(--main-blue-c);
  text-transform: uppercase;
}

.nav-more {
  display: flex;
  justify-content: center;

  @include media-up(desktop) {
    height: 120px;
    width: 120px;
    background: var(--main-blue-c);
  }
}

.btn-more {
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  color: var(--main-white-c);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}

.hamburger-icon {
  height: 18px;
  width: 20px;
  position: relative;
}

.hamburger-icon span {
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--main-white-c);
  left: 0;
  opacity: 1;
  transition: all linear 0.2s;

  @include media-down(desktop) {
    background: var(--main-blue-c);
  }
}

.hamburger-icon span:nth-child(1) {
  top: 0;
}

.hamburger-icon span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-icon span:nth-child(3) {
  bottom: 0;
}

.btn-more.isOpen .hamburger-icon span:nth-child(1) {
  transform: rotate(45deg);
  transform-origin: left center;
  top: -1px;
  width: 130%;
}

.btn-more.isOpen .hamburger-icon span:nth-child(2) {
  opacity: 0;
}

.btn-more.isOpen .hamburger-icon span:nth-child(3) {
  transform: rotate(-45deg);
  transform-origin: left center;
  bottom: -1px;
  width: 130%;
}

.btn-label {
  margin-top: 7px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  @include media-down(desktop) {
    display: none;
  }
}
</style>
