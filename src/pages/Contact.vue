<template>
	<div>
		<form action="">
			<label for="name">Name</label>
			<input type="text" v-model="name" id="name" />
			<label for="age">Age</label>
			<input type="text" v-model="age" id="age" />
			<input @click.prevent="updateName" type="submit" name="name" />
			{{ name }}
		</form>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	data() {
		return {
			name: "",
			age: "",
		};
	},
	methods: {
		...mapMutations(["UPDATE_USER"]),
		updateName() {
			this.UPDATE_USER({
				userName: this.name,
				userAge: this.age,
			});
		},
	},
};
</script>

<style></style>
