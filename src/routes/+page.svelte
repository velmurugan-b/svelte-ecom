<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';

	const featured = products.slice(0, 3);
</script>

<div class="max-w-7xl mx-auto px-6 py-20">
	<div class="text-center mb-16">
		<h1 class="text-6xl font-bold mb-6">Premium Tech Gear</h1>
		<p class="text-2xl text-gray-600">Quality products at great prices</p>
	</div>

	<div class="grid md:grid-cols-3 gap-8">
		{#each featured as product}
			<ProductCard {product} />
		{/each}
	</div>

	<div class="text-center mt-16">
		<a href="/products" class="inline-block bg-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-indigo-700">
			Shop All Products →
		</a>
	</div>
</div>