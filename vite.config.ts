import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // `@` 경로 설정
    },
  },
  server: {
    port: 8080, // 원하는 포트 변경 가능
  },
});
