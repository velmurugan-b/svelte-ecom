<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';
	import { ShoppingBag, Shield, Truck, Headphones, Star, ArrowRight, Zap, Sparkles } from 'lucide-svelte';

	const featured = products.slice(0, 4);
	const heroProducts = products.slice(0, 3);
</script>

<!-- ===== CREATIVE HERO BANNER ===== -->
<section class="relative min-h-[90vh] bg-gradient-to-br from-[#0a0e27] via-[#14183e] to-[#1a1040] overflow-hidden">
	<!-- Decorative background grid pattern -->
	<div class="absolute inset-0 opacity-[0.03]" 
		 style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
	
	<!-- Decorative glowing orbs -->
	<div class="absolute top-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse"></div>
	<div class="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style="animation-delay: 2s;"></div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[150px]"></div>

	<!-- Large decorative "ECOMSTORE" watermark -->
	<div class="absolute right-0 top-1/2 -translate-y-1/2 text-[280px] md:text-[400px] font-black text-white/5 select-none leading-none tracking-tighter hidden md:block">
		ECOM
	</div>

	<div class="relative max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-20">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- ===== LEFT CONTENT ===== -->
			<div class="space-y-8 md:space-y-10 z-10">
				<!-- Floating badge -->
				<div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 text-sm text-white/90 shadow-lg animate-[fadeIn_0.6s_ease-out]">
					<Sparkles size={16} class="text-yellow-300" />
					<span>New Collection 2024</span>
					<div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
				</div>

				<!-- Main headline -->
				<h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight animate-[fadeIn_0.8s_ease-out]">
					<span class="text-white">Sound.</span><br>
					<span class="text-white">Vision.</span><br>
					<span class="bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
						Velocity.
					</span>
				</h1>

				<!-- Description -->
				<p class="text-lg md:text-xl text-indigo-200/80 max-w-lg leading-relaxed animate-[fadeIn_1s_ease-out]">
					Premium tech that pushes boundaries. From noise-cancelling audio to next-gen wearables — experience innovation that matters.
				</p>

				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 animate-[fadeIn_1.2s_ease-out]">
					<a href="/products"
					   class="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/40 active:scale-95 overflow-hidden">
						<span class="relative z-10 flex items-center gap-2">
							Shop Now
							<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
						</span>
						<div class="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</a>
					<a href="#featured"
					   class="inline-flex items-center justify-center gap-2 border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:shadow-lg group">
						Explore Collection
						<Zap size={18} class="group-hover:rotate-12 transition-transform" />
					</a>
				</div>

				<!-- Trust badges row -->
				<div class="flex flex-wrap gap-6 md:gap-8 text-sm animate-[fadeIn_1.4s_ease-out]">
					<div class="flex items-center gap-2 text-indigo-200/70">
						<Truck size={16} class="text-emerald-400" />
						<span>Free Shipping ₹5000+</span>
					</div>
					<div class="flex items-center gap-2 text-indigo-200/70">
						<Shield size={16} class="text-emerald-400" />
						<span>2-Year Warranty</span>
					</div>
					<div class="flex items-center gap-2 text-indigo-200/70">
						<Star size={16} class="text-yellow-300" />
						<span>4.9★ Rating</span>
					</div>
				</div>
			</div>

			<!-- ===== RIGHT VISUAL ===== -->
			<div class="relative h-[400px] md:h-[550px] hidden md:block">
				<!-- Main floating product -->
				<div class="absolute top-4 right-8 w-[280px] lg:w-[340px] animate-[float_6s_ease-in-out_infinite]">
					<div class="relative group cursor-pointer">
						<div class="absolute -inset-4 bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-indigo-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
						<div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 overflow-hidden shadow-2xl">
							<img 
								src={heroProducts[0].image} 
								alt={heroProducts[0].name}
								class="w-full h-[200px] lg:h-[240px] object-cover rounded-2xl"
							/>
							<div class="mt-4 flex items-center justify-between">
								<div>
									<p class="text-white/90 font-semibold text-sm">{heroProducts[0].name}</p>
									<p class="text-yellow-300 font-bold text-lg">${heroProducts[0].price}</p>
								</div>
								<div class="bg-white/20 backdrop-blur-sm rounded-full p-2.5 hover:bg-white/30 transition-colors cursor-pointer">
									<ShoppingBag size={18} class="text-white" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Secondary floating product (behind, offset) -->
				<div class="absolute top-32 left-0 w-[200px] lg:w-[240px] animate-[float_8s_ease-in-out_infinite_reverse] opacity-70">
					<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl rotate-[-8deg]">
						<img 
							src={heroProducts[1].image} 
							alt={heroProducts[1].name}
							class="w-full h-[120px] lg:h-[150px] object-cover rounded-xl"
						/>
						<div class="mt-2 flex justify-between items-center">
							<span class="text-white/80 text-xs font-medium truncate">{heroProducts[1].name}</span>
							<span class="text-yellow-300 text-sm font-bold ml-2">${heroProducts[1].price}</span>
						</div>
					</div>
				</div>

				<!-- Third product thumbnail -->
				<div class="absolute bottom-16 right-2 w-[160px] lg:w-[190px] animate-[float_7s_ease-in-out_infinite] opacity-60" style="animation-delay: 1s;">
					<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl rotate-[6deg]">
						<img 
							src={heroProducts[2].image} 
							alt={heroProducts[2].name}
							class="w-full h-[100px] lg:h-[120px] object-cover rounded-xl"
						/>
						<div class="mt-2 flex justify-between items-center">
							<span class="text-white/80 text-xs font-medium truncate">{heroProducts[2].name}</span>
							<span class="text-yellow-300 text-xs font-bold ml-2">${heroProducts[2].price}</span>
						</div>
					</div>
				</div>

				<!-- Floating price badge -->
				<div class="absolute top-8 left-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl px-4 py-3 shadow-2xl animate-[float_5s_ease-in-out_infinite] z-20" style="animation-delay: 0.5s;">
					<p class="text-white text-xs font-medium">Starting from</p>
					<p class="text-white text-2xl font-black">$279</p>
				</div>

				<!-- Floating rating badge -->
				<div class="absolute bottom-8 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl animate-[float_6s_ease-in-out_infinite] z-20" style="animation-delay: 2s;">
					<div class="flex items-center gap-1.5 mb-1">
						{#each Array(5) as _, i}
							<Star size={12} class="text-yellow-300 fill-yellow-300" />
						{/each}
					</div>
					<p class="text-white/80 text-xs">Trusted by 10K+ shoppers</p>
				</div>

				<!-- Decorative circles -->
				<div class="absolute bottom-20 right-16 w-4 h-4 rounded-full bg-violet-400/40 animate-ping" style="animation-delay: 3s;"></div>
				<div class="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-yellow-300/30 animate-ping" style="animation-delay: 1.5s;"></div>
			</div>
		</div>
	</div>

	<!-- Bottom gradient fade -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
</section>

<!-- ===== ENHANCED TRUST BAR ===== -->
<div class="relative bg-white py-8 border-b -mt-1 z-10">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
			<div class="flex items-center gap-3 md:justify-center md:border-r border-gray-100 last:border-r-0">
				<div class="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
					<Truck size={22} class="text-emerald-600" />
				</div>
				<div>
					<p class="font-bold text-gray-900 text-sm">Free Delivery</p>
					<p class="text-gray-500 text-xs">On orders ₹5000+</p>
				</div>
			</div>
			<div class="flex items-center gap-3 md:justify-center md:border-r border-gray-100">
				<div class="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
					<Shield size={22} class="text-indigo-600" />
				</div>
				<div>
					<p class="font-bold text-gray-900 text-sm">Secure Payment</p>
					<p class="text-gray-500 text-xs">256-bit SSL encrypted</p>
				</div>
			</div>
			<div class="flex items-center gap-3 md:justify-center md:border-r border-gray-100">
				<div class="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
					<Headphones size={22} class="text-amber-600" />
				</div>
				<div>
					<p class="font-bold text-gray-900 text-sm">24/7 Support</p>
					<p class="text-gray-500 text-xs">Real humans, real fast</p>
				</div>
			</div>
			<div class="flex items-center gap-3 md:justify-center">
				<div class="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0">
					<Star size={22} class="text-rose-500" />
				</div>
				<div>
					<p class="font-bold text-gray-900 text-sm">4.9★ Rating</p>
					<p class="text-gray-500 text-xs">10,000+ happy customers</p>
				</div>
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
		<h2 class="text-4xl font-bold text-center mb-16">Why Shop With EcomStore?</h2>
		
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