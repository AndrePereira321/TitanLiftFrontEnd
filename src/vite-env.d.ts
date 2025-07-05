/// <reference types="vite/client" />

// noinspection JSUnusedGlobalSymbols
/* eslint-disable @typescript-eslint/no-empty-object-type */
interface ViteTypeOptions {
	// By adding this line, you can make the type of ImportMetaEnv strict
	// to disallow unknown keys.
	// strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
	readonly VITE_SERVER_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
