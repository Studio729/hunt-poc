import { defineConfig } from "vite"
import { builderDevTools } from "@builder.io/dev-tools/vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), builderDevTools()],
})
