import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{
		ignores: ["dist/**", "build/**", "node_modules/**"],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/essential"],
	prettier,
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: {
			perfectionist,
		},
		rules: {
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/sort-type-constituents": "error",
			"perfectionist/sort-imports": [
				"error",
				{
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-objects": [
				"error",
				{
					order: "asc",
					partitionByComment: true,
					type: "natural",
				},
			],
		},
	},
	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
		rules: {
			"vue/attributes-order": [
				"error",
				{
					alphabetical: true,
					order: [
						"DEFINITION",
						"LIST_RENDERING",
						"CONDITIONALS",
						"RENDER_MODIFIERS",
						"GLOBAL",
						"UNIQUE",
						"TWO_WAY_BINDING",
						"OTHER_DIRECTIVES",
						"OTHER_ATTR",
						"EVENTS",
						"CONTENT",
					],
				},
			],
			"vue/define-emits-declaration": ["error", "type-literal"],
			"vue/define-macros-order": [
				"error",
				{
					defineExposeLast: true,
					order: ["defineOptions", "defineProps", "defineEmits", "defineSlots", "defineModel"],
				},
			],

			"vue/define-props-declaration": ["error", "type-based"],
		},
	},
];
