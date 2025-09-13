import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/crypto-fundamental-dashboard/", // <-- смени с името на твоето GitHub repo
});