<script lang="ts">
	import { cartStore, removeFromCart, updateQuantity } from '$lib/stores/cart';
	import { loadStripe } from '@stripe/stripe-js';

	let stripePromise = loadStripe(import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY);

	const checkout = async () => {
		const response = await fetch('/api/checkout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ cart: $cartStore })
		});

		const result = await response.json();

		if (result.error) {
			alert(result.error);
			return;
		}

		const stripe = await stripePromise;
		if (stripe) {
			stripe.redirectToCheckout({ sessionId: result.sessionId });
		}
	};
</script>

<div class="max-w-4xl mx-auto px-6 py-12">
	<h1 class="text-4xl font-bold mb-10">Your Cart</h1>

	{#if $cartStore.length === 0}
		<div class="text-center py-20">
			<p class="text-2xl text-gray-400">Your cart is empty</p>
			<a href="/products" class="mt-6 inline-block text-indigo-600 underline">Browse Products →</a>
		</div>
	{:else}
		<div class="space-y-6 mb-12">
			{#each $cartStore as item (item.id)}
				<div class="flex gap-6 bg-white p-6 rounded-3xl">
					<img src={item.image} class="w-28 h-28 object-cover rounded-2xl" alt={item.name} />
					<div class="flex-1">
						<h3 class="font-semibold text-lg">{item.name}</h3>
						<p class="text-2xl font-bold text-indigo-600">${item.price}</p>
						
						<div class="flex items-center gap-4 mt-4">
							<button on:click={() => updateQuantity(item.id, item.quantity - 1)} class="w-9 h-9 border rounded-lg hover:bg-gray-100">-</button>
							<span class="font-medium w-8 text-center text-lg">{item.quantity}</span>
							<button on:click={() => updateQuantity(item.id, item.quantity + 1)} class="w-9 h-9 border rounded-lg hover:bg-gray-100">+</button>
							<button on:click={() => removeFromCart(item.id)} class="ml-auto text-red-500 hover:text-red-600">Remove</button>
						</div>
					</div>
					<div class="text-right font-bold text-xl self-center">
						${(item.price * item.quantity).toFixed(2)}
					</div>
				</div>
			{/each}
		</div>

		<div class="flex justify-between items-center text-3xl font-bold border-t pt-10">
			<span>Total</span>
			<span>${$cartStore.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
		</div>

		<button 
			on:click={checkout}
			class="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-3xl text-xl font-semibold transition">
			Proceed to Checkout
		</button>
	{/if}
</div>