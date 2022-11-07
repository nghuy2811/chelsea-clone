import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import alias from "@rollup/plugin-alias";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(projectRootDir, "src"),
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/styles/_reset.scss";
        @import "./src/assets/styles/_variables.scss";
        @import "./src/assets/styles/_fonts.scss";
        @import "./src/assets/styles/_breakpoints.scss";
        @import "./src/assets/styles/_animation.scss";
      `,
      },
    },
  },
});
