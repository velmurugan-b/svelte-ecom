<script lang="ts">
	import '../app.css';
	import { ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-svelte';
	import { cartStore } from '$lib/stores/cart';
	import { onMount } from 'svelte';
	import { products, categories } from '$lib/data/products';

	let mobileMenuOpen = false;
	let showCategories = false;

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
				<a href="/" class="flex items-center gap-3">
					<div class="w-9 h-9 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center">
						<span class="text-white font-bold text-2xl">N</span>
					</div>
					<span class="text-3xl font-bold tracking-tight text-gray-900">NovaStore</span>
				</a>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center gap-10 text-sm font-medium">
					<a href="/" class="hover:text-indigo-600 transition-colors">Home</a>
					
					<!-- Categories Dropdown -->
					<div class="relative group">
						<button 
							on:click={() => showCategories = !showCategories}
							class="flex items-center gap-1 hover:text-indigo-600 transition-colors">
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
											class="hover:text-indigo-600 transition-colors py-1">
											{category}
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>

					<a href="/deals" class="hover:text-indigo-600 transition-colors">Deals</a>
					<a href="#" class="hover:text-indigo-600 transition-colors">New Arrivals</a>
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
					<a href="/" on:click={() => mobileMenuOpen = false}>Home</a>
					<a href="/products" on:click={() => mobileMenuOpen = false}>Shop</a>
					
					<div class="font-medium">Categories</div>
					<div class="pl-4 flex flex-col gap-4 text-base">
						{#each categories as category}
							<a href={`/products?category=${category}`} on:click={() => mobileMenuOpen = false}>
								{category}
							</a>
						{/each}
					</div>
					
					<a href="/deals" on:click={() => mobileMenuOpen = false}>Deals</a>
				</div>
			</div>
		{/if}
	</header>

	<slot />
</div>