<template>
  <div class="video-wrapper">
    <div class="thumbnail-wrapper">
      <img
        :src="props.data?.url"
        :alt="props.data?.alt"
        class="video-thumbnail"
      />
    </div>
    <div class="btn-wrapper">
      <Button class="video-btn" :action="() => {}">
        <div class="btn-label">
          {{ props.data?.desc }}
        </div>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";

const props = defineProps<{
  data:
    | {
        url: string;
        alt: string;
        desc: string;
      }
    | undefined;
}>();
</script>

<style lang="scss" scoped>
.video-wrapper {
  position: relative;
  animation: fadeIamge 0.7s linear;

  @include media-up(tablet) {
    width: 432px;
  }
}

.thumbnail-wrapper {
  height: 380px;
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-wrapper {
  width: 100%;
  height: 56px;
}

.video-btn {
  width: 100%;
  height: 100%;
}

.btn-label {
  text-transform: uppercase;
}
</style>
