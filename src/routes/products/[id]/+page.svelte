<script lang="ts">
	import { addToCart } from '$lib/stores/cart';
	import type { PageData } from './$types';

	// Using classic SvelteKit page data export (most compatible)
	export let data: PageData;
	const { product } = data;
</script>

<div class="max-w-7xl mx-auto px-6 py-12">
	<div class="grid md:grid-cols-2 gap-12">
		<!-- Product Image -->
		<div class="rounded-3xl overflow-hidden shadow-xl">
			<img src={product.image} alt={product.name} class="w-full" />
		</div>

		<!-- Product Details -->
		<div class="flex flex-col">
			<h1 class="text-4xl font-bold mb-4">{product.name}</h1>
			<p class="text-5xl font-bold text-indigo-600 mb-6">₹{product.price}</p>
			
			<p class="text-lg text-gray-600 mb-10 leading-relaxed">
				{product.description}
			</p>

			<div class="flex gap-4 mt-auto">
				<button
					on:click={() => addToCart(product)}
					class="flex-1 bg-gray-900 hover:bg-black text-white py-5 rounded-2xl font-semibold text-lg transition">
					Add to Cart
				</button>
				
				<button
					on:click={() => window.location.href = '/cart'}
					class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-semibold text-lg transition">
					Buy Now
				</button>
			</div>
		</div>
	</div>
</div>