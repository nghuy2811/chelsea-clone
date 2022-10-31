import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavMorePopupStore = defineStore("navMorePopup", () => {
  const isShow = ref(false);
  function togglePopup() {
    isShow.value = !isShow.value;
  }

  return { isShow, togglePopup };
});
