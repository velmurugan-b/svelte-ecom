import { writable } from 'svelte/store';

export type Toast = {
	id: number;
	message: string;
	type: 'success' | 'error';
};

export const toastStore = writable<Toast[]>([]);

export const addToast = (message: string, type: 'success' | 'error' = 'success') => {
	const id = Date.now();
	toastStore.update(toasts => [...toasts, { id, message, type }]);

	// Auto remove after 3 seconds
	setTimeout(() => {
		toastStore.update(toasts => toasts.filter(t => t.id !== id));
	}, 3000);
};