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
		image: "https://picsum.photos/id/60/800/600",
		description: "Industry-leading noise cancelling wireless headphones with premium sound quality.",
		category: "Audio"
	},
	{
		id: 2,
		name: "Apple Watch Ultra 2",
		price: 799,
		image: "https://picsum.photos/id/201/800/600",
		description: "Rugged and capable smartwatch built for extreme adventures.",
		category: "Wearables"
	},
	{
		id: 3,
		name: "MacBook Air M3",
		price: 1299,
		image: "https://picsum.photos/id/180/800/600",
		description: "Supercharged by the M3 chip. Thin, light, and powerful.",
		category: "Laptops"
	},
	{
		id: 4,
		name: "DJI Mini 4 Pro Drone",
		price: 759,
		image: "https://picsum.photos/id/367/800/600",
		description: "Under 249g with 4K HDR video and omnidirectional obstacle sensing.",
		category: "Drones"
	},
	{
		id: 5,
		name: "Sony ZV-1 Camera",
		price: 698,
		image: "https://picsum.photos/id/133/800/600",
		description: "Compact vlogging camera with excellent video quality.",
		category: "Cameras"
	},
	{
		id: 6,
		name: "Bose QuietComfort Earbuds",
		price: 279,
		image: "https://picsum.photos/id/60/800/600",
		description: "Premium noise cancelling earbuds for immersive audio.",
		category: "Audio"
	}
];

export const categories = [...new Set(products.map(p => p.category))];
