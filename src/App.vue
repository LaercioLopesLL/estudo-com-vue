<template>
	<div id="app">
		<Header />
		<div class="container mx-auto">
			<h1 class="text-3xl">{{ $route.name }}</h1>
			<router-view />
		</div>
	</div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
	name: "App",
	components: { Header },
};
</script>

<style></style>
