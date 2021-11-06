<template>
	<div>
		<header class="bg-indigo-600 flex justify-between text-white">
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
				<div class="inline-block">{{ userName }}</div>
			</div>
		</header>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState(["userName", "userAge"]),
		nomeIdade() {
			return `Meu nome é ${this.userName} e tenho ${this.userAge} anos.`;
		},
	},
};
</script>

<style></style>
