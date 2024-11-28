import React from "react";

const categories = [
	{
		id: 1,
		name: "Casual wear",
		image: "images/casual-wear.png",
		count: "Over 20 categories in stock",
	},
	{
		id: 2,
		name: "Vintage",
		image: "images/vintage.png",
		count: "Over 31 categories in stock",
	},
	{
		id: 3,
		name: "Beauty products",
		image: "images/beauty-product.png",
		count: "Over 24 categories in stock",
	},
	{
		id: 4,
		name: "Gym wears",
		image: "images/gym.png",
		count: "Over 62 categories in stock",
	},
];

const BrowseByCategory = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-2xl font-bold">Browse by category</h2>
				<div className="flex gap-2">
					<button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
						‹
					</button>
					<button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
						›
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				{categories.map((category) => (
					<div
						key={category.id}
						className="bg-gray-50 rounded-lg overflow-hidden h-[300px] flex flex-col"
					>
						<div className="h-[200px] w-full">
							<img
								src={category.image}
								alt={category.name}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="p-4 flex-1 flex flex-col justify-center">
							<h3 className="font-semibold mb-1 text-lg">{category.name}</h3>
							<p className="text-sm text-gray-600">{category.count}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BrowseByCategory;
