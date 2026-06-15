export type Product = {
	id: number;
	name: string;
	price: number;
	image: string;
	description: string;
	category: string;
};

export const products: Product[] = [
	{
		id: 1,
		name: "Sony WH-1000XM5",
		price: 398,
		image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
		description: "Industry-leading noise cancelling wireless headphones with premium sound quality.",
		category: "Audio"
	},
	{
		id: 2,
		name: "Apple Watch Ultra 2",
		price: 799,
		image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
		description: "Rugged and capable smartwatch built for extreme adventures.",
		category: "Wearables"
	},
	{
		id: 3,
		name: "MacBook Air M3",
		price: 1299,
		image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
		description: "Supercharged by the M3 chip. Thin, light, and powerful.",
		category: "Laptops"
	},
	{
		id: 4,
		name: "DJI Mini 4 Pro Drone",
		price: 759,
		image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
		description: "Under 249g with 4K HDR video and omnidirectional obstacle sensing.",
		category: "Drones"
	},
	{
		id: 5,
		name: "Sony ZV-1 Camera",
		price: 698,
		image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
		description: "Compact vlogging camera with excellent video quality.",
		category: "Cameras"
	},
	{
		id: 6,
		name: "Bose QuietComfort Earbuds",
		price: 279,
		image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
		description: "Premium noise cancelling earbuds for immersive audio.",
		category: "Audio"
	}
];

export const categories = [...new Set(products.map(p => p.category))];