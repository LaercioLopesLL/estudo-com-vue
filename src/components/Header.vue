<template>
	<div class="bg-indigo-600">
		<header class="container mx-auto flex justify-between text-white">
			<h1 class="p-2"><router-link to="/">Brand</router-link></h1>
			<div>
				<nav class="inline-block">
					<ul>
						<li class="inline-block p-2">
							<router-link to="/">Home</router-link>
						</li>
						<li class="inline-block p-2">
							<router-link to="/services">Services</router-link>
						</li>
						<li class="inline-block p-2">
							<router-link to="/contact">Contact</router-link>
						</li>
						<li class="inline-block p-2">
							<router-link to="/products">Products</router-link>
						</li>
					</ul>
				</nav>
				<div class="inline-block p-2">{{ userName }}</div>
			</div>
		</header>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState(["userName", "userAge"]),
	},
};
</script>

<style></style>
