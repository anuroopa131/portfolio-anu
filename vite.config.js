import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the build tool/dev server. This file just tells it
// "this is a React project" so it knows how to handle .jsx files
// and give you fast hot-reload while developing.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-anu/",
});
