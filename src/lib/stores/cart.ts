import { writable } from 'svelte/store';
import { addToast } from '$lib/stores/toast';
export type CartItem = {
	id: number;
	name: string;
	price: number;
	image: string;
	description?: string;
	quantity: number;
};

export const cartStore = writable<CartItem[]>([]);

// Load cart from localStorage
const loadCart = () => {
	if (typeof localStorage !== 'undefined') {
		const saved = localStorage.getItem('cart');
		if (saved) {
			try {
				const parsed = JSON.parse(saved);
				cartStore.set(parsed);
			} catch (e) {
				console.error('Failed to parse cart from localStorage', e);
				localStorage.removeItem('cart');
			}
		}
	}
};

// Save cart to localStorage whenever it changes
cartStore.subscribe((cart) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('cart', JSON.stringify(cart));
	}
});

// Auto load when store is imported
loadCart();
export const addToCart = (product: any) => {
	cartStore.update((items) => {
		const existingIndex = items.findIndex((i) => i.id === product.id);

		if (existingIndex !== -1) {
			const updated = [...items];
			updated[existingIndex] = {
				...updated[existingIndex],
				quantity: updated[existingIndex].quantity + 1
			};
			return updated;
		} else {
			return [
				...items,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					image: product.image,
					description: product.description || '',
					quantity: 1
				}
			];
		}
	});

	addToast(`${product.name} added to cart ✓`, 'success');
};
export const removeFromCart = (id: number) => {
	cartStore.update((items) => items.filter((item) => item.id !== id));
};

export const updateQuantity = (id: number, quantity: number) => {
	if (quantity < 1) return;
	cartStore.update((items) =>
		items.map((item) => (item.id === id ? { ...item, quantity } : item))
	);
};

export const clearCart = () => {
	cartStore.set([]);
};