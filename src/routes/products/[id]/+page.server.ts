import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { products } from '$lib/data/products';

export const load: PageServerLoad = async ({ params }) => {
	const id = parseInt(params.id);
	const product = products.find(p => p.id === id);

	if (!product) {
		throw error(404, 'Product not found');
	}

	return { product };
};