import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	pluginVue.configs["flat/essential"],
	prettier,
	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{
		rules: {
			"vue/define-macros-order": [
				"error",
				{
					order: ["defineOptions", "defineProps", "defineEmits", "defineSlots", "defineModel"],
					defineExposeLast: true,
				},
			],
			"vue/define-emits-declaration": ["error", "type-literal"],
			"vue/define-props-declaration": ["error", "type-based"],
		},
	},
]);
