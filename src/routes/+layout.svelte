<script lang="ts">
	import '../app.css';
	import { ShoppingCart, User, Menu, X, ChevronDown, Heart, Mail, MapPin, Phone, ArrowUpRight, House, LayoutGrid, Tag, Sparkles, ShoppingBag } from 'lucide-svelte';
	import { cartStore } from '$lib/stores/cart';
	import { onMount } from 'svelte';
	import { products, categories } from '$lib/data/products';
	import { page } from '$app/stores';

	let mobileMenuOpen = false;
	let showCategories = false;

	$: currentPath = $page.url.pathname;
	$: hasCategoryFilter = $page.url.searchParams.has('category');

	const footerLinks = {
		shop: ['All Products', 'New Arrivals', 'Best Sellers', 'Deals & Offers', 'Gift Cards'],
		support: ['Help Center', 'Track Order', 'Returns & Exchanges', 'Shipping Info', 'Contact Us'],
		company: ['About Us', 'Careers', 'Press Kit', 'Blog', 'Sustainability']
	};

	onMount(() => {
		const saved = localStorage.getItem('cart');
		if (saved) {
			try {
				cartStore.set(JSON.parse(saved));
			} catch (e) {}
		}
	});
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Advanced Header -->
	<header class="bg-white border-b sticky top-0 z-50 shadow-sm">
		<div class="max-w-7xl mx-auto px-6">
			<div class="flex justify-between items-center h-20">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-3 group">
					<!-- Modern creative logo icon -->
					<div class="relative w-10 h-10">
						<div class="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
						<div class="absolute inset-0 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
						<div class="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
							<svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="9" cy="21" r="1" />
								<circle cx="20" cy="21" r="1" />
								<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
								<polyline points="12 10 15 13 18 10" />
							</svg>
						</div>
					</div>
					<div class="flex flex-col">
						<span class="text-2xl font-black tracking-tight text-gray-900 leading-none">Swift</span>
						<span class="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase leading-none mt-0.5">Cart</span>
					</div>
				</a>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center gap-10 text-sm font-bold tracking-wide">
					<a href="/" class="flex items-center gap-2 transition-colors {currentPath === '/' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-indigo-600'}">
						<House size={18} />
						Home
					</a>
					
					<!-- Categories Dropdown -->
					<div class="relative group">
						<button 
							on:click={() => showCategories = !showCategories}
							class="flex items-center gap-2 font-bold transition-colors {hasCategoryFilter ? 'text-indigo-600' : 'hover:text-indigo-600'}">
							<LayoutGrid size={18} />
							Categories
							<ChevronDown size={16} class="group-hover:rotate-180 transition-transform" />
						</button>
						
						{#if showCategories}
							<div class="absolute top-12 left-0 bg-white shadow-xl rounded-2xl py-6 px-8 w-64 z-50 border">
								<div class="grid grid-cols-1 gap-4">
									{#each categories as category}
										<a 
											href={`/products?category=${category}`}
											on:click={() => showCategories = false}
											class="flex items-center gap-2 hover:text-indigo-600 transition-colors py-1">
											<div class="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
											{category}
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>

					<a href="/deals" class="flex items-center gap-2 transition-colors {currentPath === '/deals' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-indigo-600'}">
						<Tag size={18} />
						Deals
					</a>
					<a href="/products" class="flex items-center gap-2 transition-colors {currentPath === '/products' && !hasCategoryFilter ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-indigo-600'}">
						<Sparkles size={18} />
						New Arrivals
					</a>
				</nav>

				<!-- Right Side -->
				<div class="flex items-center gap-6">
					<!-- Search -->
					<div class="hidden md:block relative w-72">
						<input
							type="text"
							placeholder="Search premium tech..."
							class="w-full bg-gray-100 border border-gray-200 rounded-full py-3 pl-12 pr-5 text-sm focus:outline-none focus:border-indigo-500 transition-all"
						/>
						<div class="absolute left-4 top-3.5 text-gray-400">🔍</div>
					</div>

					<!-- Cart -->
					<a href="/cart" class="relative flex items-center gap-2 hover:text-indigo-600 transition-all group">
						<ShoppingCart size={24} class="group-hover:scale-110 transition-transform" />
						{#if $cartStore.length > 0}
							<span class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
								{$cartStore.length}
							</span>
						{/if}
					</a>

					<!-- Account -->
					<button class="hidden md:flex items-center gap-2 hover:text-indigo-600 transition-all">
						<User size={24} />
					</button>

					<!-- Mobile Menu Button -->
					<button 
						on:click={() => mobileMenuOpen = !mobileMenuOpen}
						class="md:hidden p-2"
					>
						{#if mobileMenuOpen}
							<X size={26} />
						{:else}
							<Menu size={26} />
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t bg-white">
				<div class="px-6 py-8 flex flex-col gap-6 text-lg font-medium">
					<a href="/" on:click={() => mobileMenuOpen = false} class="flex items-center gap-3 transition-colors {currentPath === '/' ? 'text-indigo-600 font-extrabold border-l-4 border-indigo-600 pl-2' : 'hover:text-indigo-600'}">
						<House size={20} class="text-indigo-500" />
						Home
					</a>
					<a href="/products" on:click={() => mobileMenuOpen = false} class="flex items-center gap-3 transition-colors {currentPath === '/products' ? 'text-indigo-600 font-extrabold border-l-4 border-indigo-600 pl-2' : 'hover:text-indigo-600'}">
						<ShoppingBag size={20} class="text-indigo-500" />
						Shop
					</a>
					
					<div class="flex items-center gap-3 font-medium text-gray-600">
						<LayoutGrid size={20} class="text-indigo-500" />
						Categories
					</div>
					<div class="pl-9 flex flex-col gap-4 text-base">
						{#each categories as category}
							<a href={`/products?category=${category}`} on:click={() => mobileMenuOpen = false} class="flex items-center gap-2 hover:text-indigo-600 transition-colors">
								<div class="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></div>
								{category}
							</a>
						{/each}
					</div>
					
					<a href="/deals" on:click={() => mobileMenuOpen = false} class="flex items-center gap-3 transition-colors {currentPath === '/deals' ? 'text-indigo-600 font-extrabold border-l-4 border-indigo-600 pl-2' : 'hover:text-indigo-600'}">
						<Tag size={20} class="text-indigo-500" />
						Deals
					</a>
				</div>
			</div>
		{/if}
	</header>

	<slot />

	<!-- ===== CREATIVE FOOTER matching hero banner ===== -->
	<footer class="relative bg-gradient-to-br from-[#0a0e27] via-[#14183e] to-[#1a1040] overflow-hidden">
		<!-- Decorative grid overlay matching hero -->
		<div class="absolute inset-0 opacity-[0.03]" 
			 style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
		
		<!-- Glowing orbs (subtle, like hero) -->
		<div class="absolute top-40 -left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px]"></div>
		<div class="absolute bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px]"></div>

		<!-- Top divider line with gradient -->
		<div class="relative h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>

		<div class="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
			<!-- Main footer grid -->
			<div class="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/10">
				<!-- Brand Column -->
				<div class="col-span-2 md:col-span-4 space-y-6">
					<a href="/" class="flex items-center gap-3 group">
						<!-- Modern creative logo icon (matching header) -->
						<div class="relative w-10 h-10">
							<div class="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
							<div class="absolute inset-0 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
							<div class="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
								<svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="9" cy="21" r="1" />
									<circle cx="20" cy="21" r="1" />
									<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
									<polyline points="12 10 15 13 18 10" />
								</svg>
							</div>
						</div>
						<div class="flex flex-col">
							<span class="text-2xl font-black tracking-tight text-white leading-none">Swift</span>
							<span class="text-xs font-bold tracking-[0.2em] text-yellow-300 uppercase leading-none mt-0.5">Cart</span>
						</div>
					</a>
					<p class="text-indigo-200/60 text-sm leading-relaxed max-w-xs">
						Your premium destination for cutting-edge tech. We curate the finest gadgets and gear to elevate your digital life.
					</p>
					
					<!-- Newsletter signup -->
					<div class="space-y-3">
						<p class="text-sm font-medium text-white/80">Stay in the loop</p>
						<div class="flex gap-2">
							<input 
								type="email" 
								placeholder="Enter your email"
								class="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-indigo-300/40 focus:outline-none focus:border-yellow-300/50 transition-colors"
							/>
							<button class="bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-900 rounded-xl px-4 py-3 font-semibold text-sm hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 shrink-0">
								Subscribe
							</button>
						</div>
					</div>

					<!-- Social icons -->
					<div class="flex items-center gap-3">
						{#each ['𝕏', '𝓕', '𝓘', '𝓨'] as icon, i}
							<div class="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/60 text-sm hover:bg-yellow-300 hover:text-gray-900 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
								{icon}
							</div>
						{/each}
					</div>
				</div>

				<!-- Links Column 1: Shop -->
				<div class="col-span-1 md:col-span-2 md:col-start-6 space-y-5">
					<h4 class="text-sm font-bold text-white/90 uppercase tracking-widest">Shop</h4>
					<ul class="space-y-3.5">
						{#each footerLinks.shop as link}
							<li>
								<a href="/products" class="text-indigo-200/60 hover:text-yellow-300 text-sm transition-colors duration-200 inline-flex items-center gap-1 group">
									{link}
									<ArrowUpRight size={12} class="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Links Column 2: Support -->
				<div class="col-span-1 md:col-span-2 space-y-5">
					<h4 class="text-sm font-bold text-white/90 uppercase tracking-widest">Support</h4>
					<ul class="space-y-3.5">
						{#each footerLinks.support as link}
							<li>
								<span class="text-indigo-200/60 hover:text-yellow-300 text-sm transition-colors duration-200 inline-flex items-center gap-1 group cursor-pointer">
									{link}
									<ArrowUpRight size={12} class="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
								</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Links Column 3: Company -->
				<div class="col-span-2 md:col-span-2 space-y-5">
					<h4 class="text-sm font-bold text-white/90 uppercase tracking-widest">Company</h4>
					<ul class="space-y-3.5">
						{#each footerLinks.company as link}
							<li>
								<span class="text-indigo-200/60 hover:text-yellow-300 text-sm transition-colors duration-200 inline-flex items-center gap-1 group cursor-pointer">
									{link}
									<ArrowUpRight size={12} class="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
								</span>
							</li>
						{/each}
					</ul>

					<!-- Contact info -->
					<div class="pt-2 space-y-3">
						<div class="flex items-center gap-2.5 text-indigo-200/50 text-xs">
							<MapPin size={14} class="text-emerald-400 shrink-0" />
							<span>Bangalore, India</span>
						</div>
						<div class="flex items-center gap-2.5 text-indigo-200/50 text-xs">
							<Mail size={14} class="text-emerald-400 shrink-0" />
							<span>hello@swiftcart.com</span>
						</div>
						<div class="flex items-center gap-2.5 text-indigo-200/50 text-xs">
							<Phone size={14} class="text-emerald-400 shrink-0" />
							<span>+91 1800-SWIFT</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom copyright bar -->
			<div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-indigo-200/40 text-xs">
					© 2024 SwiftCart. All rights reserved.
				</p>
				<div class="flex items-center gap-6 text-indigo-200/40 text-xs">
					<span class="hover:text-yellow-300 transition-colors cursor-pointer">Privacy Policy</span>
					<span class="hover:text-yellow-300 transition-colors cursor-pointer">Terms of Service</span>
					<span class="hover:text-yellow-300 transition-colors cursor-pointer">Cookie Settings</span>
				</div>
				<div class="flex items-center gap-2 text-indigo-200/30 text-xs">
					<Heart size={12} class="text-rose-400" />
					<span>Made with care</span>
				</div>
			</div>
		</div>
	</footer>
</div>