<template>
  <Container>
    <div :class="$style.wrapper">
      <div v-if="isOpeningPopup" :class="$style.nav">
        <div :class="$style.mainNavList" @mouseleave="isHoveringItem = false">
          <ul :class="$style.mainList">
            <li
              v-for="(item, index) in navMoreItems"
              :class="$style.mainNavItem"
              @mouseover="selectHoveringIndex(index)"
              :style="{
                animation: `slideInTop 1s ease-in-out ${
                  index * 100
                }ms forwards`,
              }"
            >
              <RouterLink
                to="#"
                :class="[
                  $style.orangeSlashHover,
                  index === hoveringIndex ? $style.isActive : '',
                ]"
              >
                {{ item.title }}
              </RouterLink>
            </li>
          </ul>
          <ul
            :class="[$style.childList]"
            v-if="hoveringIndex !== undefined"
            @mouseover="isHoveringItem = true"
            @mouseleave="isHoveringItem = false"
          >
            <li
              :class="$style.childItem"
              v-for="item in navMoreItems[hoveringIndex].children"
            >
              <RouterLink to="#">
                {{ item }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div :class="$style['usefull-links']">
          Useful links
          <ul>
            <li>
              <RouterLink to="#">FAQs</RouterLink>
            </li>
            <li>
              <RouterLink to="#">Contact Us</RouterLink>
            </li>
            <li>
              <RouterLink to="#">The 5th Stand App</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import Container from "../Container/Container.vue";

const props = defineProps({
  isOpeningPopup: Boolean,
});

const hoveringIndex = ref<undefined | number>(undefined);
const isHoveringItem = ref(false);
const navMoreItems = [
  {
    title: "About the club",
    children: [
      "About The Club",
      "General Information",
      "Club Partners",
      "Safeguarding",
      "Careers",
      "Contact Us",
    ],
  },
  {
    title: "Our history",
    children: [
      "Our History",
      "The Story Of Chelsea",
      "Women's Team History",
      "Stadium History",
      "Key Former Players",
      "Former Managers",
    ],
  },
  {
    title: "Community",
    children: [
      "Community",
      "Chelsea Foundation",
      "No To Hate",
      "Social Media Policy",
    ],
  },
  {
    title: "Fans",
    children: [
      "Fans",
      "The 5th Stand App",
      "Official Supporters Clubs",
      "Junior Blues",
      "Fans' Forum",
      "Accessible Fans' Forum",
      "Chelsea Pitch Owners",
      "The Shed",
    ],
  },
  {
    title: "Stamford Bridge",
    children: [
      "Stamford Bridge",
      "Getting To Stamford Bridge",
      "Matchday Experience",
      "Stadium Tours & Museum",
      "Stadium Megastore",
      "Quiet Area / Prayer Room",
      "Lost Property",
    ],
  },
  {
    title: "Our venues",
    children: [
      "Our Venues",
      "Frankie's Sports Bar & Grill",
      "Meetings & Events at Club Chelsea",
      "Millennium & Copthorne Hotels",
      "Under The Bridge",
    ],
  },
];

const selectHoveringIndex = (index: number) => {
  isHoveringItem.value = true;
  hoveringIndex.value = index;
};

watch([isHoveringItem], () => {
  if (isHoveringItem.value === false) {
    hoveringIndex.value = undefined;
  }
});

watch(
  () => props.isOpeningPopup,
  () => {
    if (props.isOpeningPopup === false) {
      hoveringIndex.value = undefined;
    }
  }
);
</script>

<style lang="scss" module>
.wrapper {
  padding-top: 130px;
  padding-left: 110px;
}

.nav {
  padding-top: 32px;
  min-height: 70vh;
  width: 56.8%;
}

.mainNavList {
  display: flex;
}

.mainList {
  width: 50%;
}

.mainNavItem {
  opacity: 0;
  position: relative;
  padding-bottom: 20px;

  a {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: 0.86px;
    text-transform: capitalize;
    color: var(--main-white-c);
  }
}

.orangeSlashHover {
  position: relative;

  &.isActive::before {
    content: "";
    position: absolute;
    animation: slideInLeft 0.2s linear forwards;
    background-color: var(--main-orange-c);
    height: 2px;
    top: 50%;
    width: 16px;
    transform: translateY(-50%);
  }
}

.childList {
  padding-left: 27px;
  border-left: 1px solid rgba(246, 247, 248, 0.3);
  height: 100%;
}

.childItem {
  margin-bottom: 20px;

  &:first-child {
    margin-top: 18px;
    margin-bottom: 28px;
  }

  a {
    color: var(--main-white-c);
    font-size: 16px;
    line-height: 32px;
  }
}

.usefull-links {
  margin-top: 38px;
  font-size: 14px;
  line-height: 36px;
  font-weight: 300;

  li {
    a {
      font-size: 16px;
      line-height: 36px;
      font-weight: 500;
      color: var(--main-white-c);
    }
  }
}
</style>
