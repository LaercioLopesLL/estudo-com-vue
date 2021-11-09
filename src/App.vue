<template>
	<div id="app" class="flex flex-col min-h-screen">
		<Header />
		<div class="container mx-auto flex-1">
			<h1 class="text-3xl">{{ $route.name }}</h1>
			<router-view />
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from "./components/Header.vue";
export default {
	name: "App",
	components: { Header, Footer },
};
</script>

<style></style>
