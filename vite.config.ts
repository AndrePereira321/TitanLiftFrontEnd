import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
	envDir: "env",
	server: {
		host: "localhost",
		port: 8080,
	},
	plugins: [vue()],
});
