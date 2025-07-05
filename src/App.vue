<template>
	<div>
		<span>Ola</span>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";

console.log(import.meta.env.VITE_SERVER_URL);

onBeforeMount(async () => {
	const response = await fetch(import.meta.env.VITE_SERVER_URL + "/register", {
		method: "POST",
	});

	console.log(response);
});
</script>
