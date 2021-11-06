<template>
	<div>
		<h1>{{ product }}</h1>
		<button @click="$router.go(-1)">Back</button>
	</div>
</template>

<script>
export default {
	computed: {
		product() {
			return this.$route.params.product.toUpperCase();
		},
	},
};
</script>

<style></style>
