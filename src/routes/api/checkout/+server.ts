import { json } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request }) {
	try {
		const { cart } = await request.json();

		if (!cart || cart.length === 0) {
			return json({ error: 'Cart is empty' }, { status: 400 });
		}

		const lineItems = cart.map((item: any) => ({
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.name,
					images: [item.image],
				},
				unit_amount: Math.round(item.price * 100),
			},
			quantity: item.quantity,
		}));

		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			payment_method_types: ['card'],
			line_items: lineItems,
			success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${request.headers.get('origin')}/cart`,
		});

		return json({ sessionId: session.id });
	} catch (err: any) {
		console.error(err);
		return json({ error: err.message }, { status: 400 });
	}
}