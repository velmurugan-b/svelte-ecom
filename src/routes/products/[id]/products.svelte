<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products, categories, type Product } from '$lib/data/products';
	
	let searchTerm = $state('');
	let selectedCategory = $state<string | null>(null);

	let filteredProducts = $derived.by(() => {
		return products.filter(product => {
			const matchesSearch = 
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase());
			
			const matchesCategory = !selectedCategory || product.category === selectedCategory;
			
			return matchesSearch && matchesCategory;
		});
	});
</script>

<div class="max-w-7xl mx-auto px-6 py-12">
	<h1 class="text-4xl font-bold mb-8">Shop All Products</h1>

	<!-- Search -->
	<input
		type="text"
		bind:value={searchTerm}
		placeholder="Search products..."
		class="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg mb-8"
	/>

	<!-- Categories -->
	<div class="flex flex-wrap gap-3 mb-10">
		<button
			on:click={() => selectedCategory = null}
			class={`px-6 py-3 rounded-2xl font-medium transition-all ${
				selectedCategory === null ? 'bg-indigo-600 text-white' : 'bg-white border hover:bg-gray-50'
			}`}>
			All
		</button>
		{#each categories as category}
			<button
				on:click={() => selectedCategory = category}
				class={`px-6 py-3 rounded-2xl font-medium transition-all ${
					selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-white border hover:bg-gray-50'
				}`}>
				{category}
			</button>
		{/each}
	</div>

	<p class="text-gray-500 mb-6">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</p>

	{#if filteredProducts.length === 0}
		<div class="text-center py-20">
			<p class="text-2xl text-gray-400">No products found</p>
			<button on:click={() => { searchTerm = ''; selectedCategory = null; }} class="mt-6 text-indigo-600 underline">
				Clear Filters
			</button>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each filteredProducts as product}
				<ProductCard {product} />
			{/each}
		</div>
	{/if}
</div>