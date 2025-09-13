import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/funda/", // <-- смени с името на твоето GitHub repo
});