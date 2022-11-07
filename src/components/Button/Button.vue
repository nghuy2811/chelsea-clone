<script lang="ts" setup>
const props = defineProps<{
  action: () => void;
  hasPadding?: boolean;
  containerClassName?: string;
}>();
</script>

<template>
  <div
    class="button-wrapper"
    :class="[$attrs.class, { 'button-padding': props.hasPadding }]"
  >
    <button class="btn" @click="props.action"><slot /></button>
  </div>
</template>

<style lang="scss" scoped>
.button-wrapper {
  position: relative;
}

.button-padding {
  padding: 0 20px;
}

.btn {
  padding: 0;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-light-blue-c);
  opacity: 1;
  transition: background-color 0.7s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-white-c);
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: rgba(0, 51, 255, 0.4);
  }
}
</style>
