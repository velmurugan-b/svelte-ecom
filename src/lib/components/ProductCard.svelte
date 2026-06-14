<script lang="ts">
	import { addToCart } from '$lib/stores/cart';
	import { addToast } from '$lib/stores/toast';

	export let product: any;
</script>

<div class="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all border h-full">
	<a href={`/products/${product.id}`} class="block">
		<div class="relative">
			<img 
				src={product.image} 
				alt={product.name} 
				class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
			/>
			<div class="absolute top-4 right-4 bg-white px-4 py-1 rounded-full font-bold text-indigo-600 shadow">
				₹{product.price}
			</div>
		</div>
		
		<div class="p-6">
			<h3 class="font-semibold text-xl mb-2 line-clamp-2">{product.name}</h3>
			<p class="text-gray-600 text-sm mb-6 line-clamp-3">{product.description}</p>
		</div>
	</a>

	<!-- Add to Cart Button - Outside the link -->
	<div class="px-6 pb-6">
		<button
			on:click|stopPropagation={() => addToCart(product)}
			class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold transition">
			Add to Cart
		</button>
	</div>
</div>