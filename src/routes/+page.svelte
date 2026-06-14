<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';
	import { ShoppingBag, Shield, Truck, Headphones } from 'lucide-svelte';

	const featured = products.slice(0, 4);
</script>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white pt-24 pb-20">
	<div class="max-w-7xl mx-auto px-6 text-center">
		<div class="max-w-3xl mx-auto">
			<h1 class="text-6xl md:text-7xl font-bold leading-tight mb-6">
				Tech That<br><span class="text-yellow-300">Inspires</span>
			</h1>
			<p class="text-xl md:text-2xl text-indigo-100 mb-10">
				Premium gadgets, unbeatable prices. Shop the future today.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/products" 
				   class="bg-white text-indigo-700 hover:bg-yellow-300 hover:text-indigo-800 px-10 py-4 rounded-2xl font-semibold text-lg transition-all">
					Shop Now
				</a>
				<a href="#featured" 
				   class="border-2 border-white hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg transition-all">
					Explore Collection
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Trust Bar -->
<div class="bg-white py-6 border-b">
	<div class="max-w-7xl mx-auto px-6">
		<div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-600">
			<div class="flex items-center gap-3">
				<Truck class="w-6 h-6" />
				<span class="font-medium">Free Shipping on Orders ₹5000+</span>
			</div>
			<div class="flex items-center gap-3">
				<Shield class="w-6 h-6" />
				<span class="font-medium">2-Year Warranty</span>
			</div>
			<div class="flex items-center gap-3">
				<Headphones class="w-6 h-6" />
				<span class="font-medium">24/7 Support</span>
			</div>
		</div>
	</div>
</div>

<!-- Featured Products -->
<section id="featured" class="max-w-7xl mx-auto px-6 py-20">
	<div class="flex justify-between items-end mb-12">
		<div>
			<h2 class="text-5xl font-bold mb-3">Featured Products</h2>
			<p class="text-gray-600 text-xl">Handpicked premium tech</p>
		</div>
		<a href="/products" class="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2">
			View All <span>→</span>
		</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
		{#each featured as product}
			<ProductCard {product} />
		{/each}
	</div>
</section>

<!-- Why Choose Us -->
<section class="bg-gray-50 py-20">
	<div class="max-w-7xl mx-auto px-6">
		<h2 class="text-4xl font-bold text-center mb-16">Why Shop With NovaStore?</h2>
		
		<div class="grid md:grid-cols-3 gap-10">
			<div class="text-center">
				<div class="mx-auto w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mb-6">
					<Truck class="w-10 h-10 text-indigo-600" />
				</div>
				<h3 class="text-2xl font-semibold mb-3">Lightning Fast Delivery</h3>
				<p class="text-gray-600">Ships same day from our local warehouses</p>
			</div>
			
			<div class="text-center">
				<div class="mx-auto w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mb-6">
					<Shield class="w-10 h-10 text-indigo-600" />
				</div>
				<h3 class="text-2xl font-semibold mb-3">Secure Shopping</h3>
				<p class="text-gray-600">256-bit SSL encryption &amp; 30-day returns</p>
			</div>
			
			<div class="text-center">
				<div class="mx-auto w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mb-6">
					<Headphones class="w-10 h-10 text-indigo-600" />
				</div>
				<h3 class="text-2xl font-semibold mb-3">Expert Support</h3>
				<p class="text-gray-600">Real humans ready to help you</p>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
	<div class="max-w-4xl mx-auto text-center px-6">
		<h2 class="text-5xl font-bold mb-6">Ready to Upgrade Your Tech?</h2>
		<p class="text-2xl mb-10 text-indigo-100">Join thousands of happy customers</p>
		<a href="/products" 
		   class="inline-block bg-white text-indigo-700 hover:bg-yellow-300 hover:text-indigo-800 px-12 py-5 rounded-3xl font-bold text-xl transition-all">
			Start Shopping Now
		</a>
	</div>
</section>