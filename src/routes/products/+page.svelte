<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import ProductCard from '../../lib/components/ProductCard.svelte';
	import { products, categories } from '../../lib/data/products';

	let searchTerm = '';

	// Reactively get category from URL
	$: selectedCategory = $page.url.searchParams.get('category') ?? '';

	// Reactive filtered products
	$: filteredProducts = products.filter(p => {
		const matchesSearch = 
			p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			p.description.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesCategory = !selectedCategory || p.category === selectedCategory;

		return matchesSearch && matchesCategory;
	});

	function setCategory(category: string) {
		if (category) {
			goto(`/products?category=${category}`);
		} else {
			goto('/products');
		}
	}
</script>

<div class="max-w-7xl mx-auto px-6 py-12">
	<h1 class="text-4xl font-bold mb-8">
		{#if selectedCategory}
			{selectedCategory} Products
		{:else}
			All Products
		{/if}
	</h1>

	<!-- Search Bar -->
	<input
		type="text"
		bind:value={searchTerm}
		placeholder="Search products..."
		class="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg mb-8"
	/>

	<!-- Category Filters -->
	<div class="flex flex-wrap gap-3 mb-10">
		<button
			on:click={() => setCategory('')}
			class={`px-6 py-3 rounded-2xl font-medium transition-all ${
				!selectedCategory ? 'bg-indigo-600 text-white shadow' : 'bg-white border hover:bg-gray-50'
			}`}>
			All
		</button>
		
		{#each categories as category}
			<button
				on:click={() => setCategory(category)}
				class={`px-6 py-3 rounded-2xl font-medium transition-all ${
					selectedCategory === category ? 'bg-indigo-600 text-white shadow' : 'bg-white border hover:bg-gray-50'
				}`}>
				{category}
			</button>
		{/each}
	</div>

	<p class="text-gray-500 mb-6">
		{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
	</p>

	{#if filteredProducts.length === 0}
		<div class="text-center py-20">
			<p class="text-2xl text-gray-400">No products found</p>
			<button 
				on:click={() => {
					searchTerm = '';
					setCategory('');
				}}
				class="mt-6 text-indigo-600 underline">
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