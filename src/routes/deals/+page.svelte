<script lang="ts">
	import { addToCart } from '$lib/stores/cart';
	import { products } from '$lib/data/products';

	// Create deals with discounted prices
	const deals = products.slice(2, 8).map(p => ({
		...p,
		originalPrice: p.price,
		price: Math.round(p.price * 0.8) // 20% discount
	}));
</script>

<div class="max-w-7xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<h1 class="text-5xl font-bold mb-4">🔥 Hot Deals</h1>
		<p class="text-xl text-gray-600">Limited time offers - Save big today</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
		{#each deals as product}
			<div class="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all border h-full">
				<a href={`/products/${product.id}`} class="block">
					<div class="relative">
						<img 
							src={product.image} 
							alt={product.name} 
							class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
						/>
						<div class="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow">
							<div class="text-xs line-through opacity-80">₹{product.originalPrice}</div>
							<div class="text-lg">₹{product.price}</div>
						</div>
						<div class="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm shadow">
							SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
						</div>
					</div>
					
					<div class="p-6">
						<h3 class="font-semibold text-xl mb-2 line-clamp-2">{product.name}</h3>
						<p class="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
						<div class="flex items-center gap-3">
							<span class="text-2xl font-bold text-red-600">₹{product.price}</span>
							<span class="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
						</div>
					</div>
				</a>

				<!-- Add to Cart Button - Outside the link -->
				<div class="px-6 pb-6">
					<button
						on:click|stopPropagation={() => addToCart(product)}
						class="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold transition">
						Add to Cart - Save ₹{product.originalPrice - product.price}
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>
