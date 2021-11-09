<template>
	<div>
		<div class="grid grid-cols-3 gap-6">
			<div
				class="bg-blue-100 p-4 rounded-md"
				v-for="product in products"
				:key="product.name"
			>
				<h3 class="text-2xl mb-2 uppercase">{{ product.name }}</h3>
				<img
					class="rounded"
					:src="product.imagem"
					:alt="product.name"
				/>
				<p class="">{{ product.preco }}</p>
				<button
					class="bg-blue-600 p-2 rounded text-white font-semibold"
				>
					Comprar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			products: [
				{
					name: "TV 52 polegadas",
					preco: 5400.0,
					imagem: "https://a-static.mlcdn.com.br/618x463/smart-tv-50-crystal-4k-samsung-50au7700-wi-fi-bluetooth-hdr-alexa-built-in-3-hdmi-1-usb/magazineluiza/193441200/d5d03c49e9e9f5e24f15516131a87d63.jpg",
				},
				{
					name: "Smartphone",
					preco: 2099.99,
					imagem: "https://s2.glbimg.com/-LXX14ANsvSIZkzhSpdjlSyGlPc=/0x0:1600x1600/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/I/t/7sKjYnReCY4hf3zBB45w/nitrophone1.jpg",
				},
			],
		};
	},
};
</script>

<style></style>
