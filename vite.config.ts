/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Set the environment to jsdom
    globals: true, // Enable Vitest's global test API like `describe`, `it`, etc.
    setupFiles: "./src/tests/setupTests.ts", // Path to setup file for test environment
  },
});
