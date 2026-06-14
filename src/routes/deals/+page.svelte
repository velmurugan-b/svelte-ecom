<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';

	// Show discounted products (you can mark some as deals later)
	const deals = products.slice(2, 8);
</script>

<div class="max-w-7xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<h1 class="text-5xl font-bold mb-4">🔥 Hot Deals</h1>
		<p class="text-xl text-gray-600">Limited time offers - Save big today</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
		{#each deals as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>