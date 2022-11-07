<template>
  <div v-if="isShowExpandNav" class="nav-expand">
    <div class="container">
      <div class="content-wrapper">
        <ul class="main-nav">
          <li
            v-for="(item, index) in data?.links"
            class="nav-item"
            :style="{
              animation: `slideInTopShort 0.75s ease-in-out ${
                index * 100
              }ms forwards`,
            }"
          >
            <a href="#" class="link">{{ item.title }}</a>
          </li>
        </ul>
        <div class="nav-extra">
          <div v-if="data?.type === NAV_MENU_TYPES.promoTicket && data.match">
            <NavMatchPromo :data="data.match" />
          </div>
          <div v-if="data?.type === NAV_MENU_TYPES.promoVideo && data.video">
            <NavVideoPromo :data="data.video" />
          </div>
          <div
            v-if="data?.type === NAV_MENU_TYPES.hospitality && data.hospitality"
          >
            <NavHospitalityPromo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed } from "vue";

import { NAV_MENU_TYPES } from "../../utils/constants";

import type { NavSubMenuType } from "../../types/navMenu";
import NavMatchPromo from "../Nav/NavMatchPromo.vue";
import NavVideoPromo from "../Nav/NavVideoPromo.vue";
import NavHospitalityPromo from "@/components/Nav/NavHospitalityPromo.vue";

const props = defineProps<{
  data?: NavSubMenuType;
  isActive: boolean;
}>();

const isShowExpandNav = computed(() => {
  if (props.data) return Boolean(props.data.type) && props.isActive;

  return false;
});
</script>

<style scoped>
.nav-expand {
  position: absolute;
  background: var(--main-blue-c);
  top: 100%;
  left: 0;
  width: 100vw;
}

.content-wrapper {
  display: flex;
}

.main-nav {
  padding: 94px 0;
  margin-left: calc((1 / 12) * 100%);
  flex: 1;
}

.nav-item {
  position: relative;
  opacity: 0;
  margin-bottom: 20px;
}

.link {
  color: var(--main-white-c);
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
}
</style>
