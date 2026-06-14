<script lang="ts">
	import '../app.css';
	import { ShoppingCart, User } from 'lucide-svelte';
	import { cartStore } from '$lib/stores/cart';
	import { onMount } from 'svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { toastStore } from '$lib/stores/toast';

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
	<nav class="bg-white border-b sticky top-0 z-50 shadow-sm">
		<div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
			<a href="/" class="text-3xl font-bold text-indigo-600">NovaStore</a>
			
			<div class="flex items-center gap-8">
				<a href="/products" class="hover:text-indigo-600 font-medium">Shop</a>
			</div>

			<div class="flex items-center gap-6">
				<a href="/cart" class="relative hover:text-indigo-600 transition flex items-center gap-2">
					<ShoppingCart size={26} />
					{#if $cartStore.length > 0}
						<span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
							{$cartStore.length}
						</span>
					{/if}
				</a>
				<User size={26} class="text-gray-700" />
			</div>
		</div>
	</nav>

	<slot />

	<!-- Toast Container -->
	{#each $toastStore as toast (toast.id)}
		<Toast message={toast.message} type={toast.type} />
	{/each}
</div>