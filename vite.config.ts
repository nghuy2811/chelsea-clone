import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/styles/_reset.scss";
        @import "./src/assets/styles/_variables.scss";
        @import "./src/assets/styles/_fonts.scss";
        @import "./src/assets/styles/_breakpoints.scss";
      `,
      },
    },
  },
});
