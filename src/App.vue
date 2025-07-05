<template>
	<div>
		<span>Ola</span>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";

import baseService from "@/services/base-service.ts";

console.log(import.meta.env.VITE_SERVER_URL);

onBeforeMount(async () => {
	const response = baseService.post("/register");

	console.log(response);
});
</script>
