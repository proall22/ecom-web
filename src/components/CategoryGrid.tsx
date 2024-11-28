const categories = [
	{
		id: 1,
		name: "Shoes",
		image: "/images/shoes.png",
		text: "See all collections",
	},
	{
		id: 2,
		name: "Bags",
		image: "/images/bagS.png",
		text: "See all collections",
	},
	{
		id: 3,
		name: "Jackets",
		image: "/images/jacket.png",
		text: "See all collections",
	},
	{
		id: 4,
		name: "Lingerie",
		image: "/images/lingerie.png",
		text: "See all collections",
	},
	{
		id: 5,
		name: "Belts",
		image: "/images/belt.png",
		text: "See all collections",
	},
	{
		id: 6,
		name: "Street wear",
		image: "/images/street-wear.png",
		text: "See all collections",
	},
	{
		id: 7,
		name: "Sunglasses",
		image: "/images/glass.png",
		text: "See all collections",
	},
	{
		id: 8,
		name: "Sun wear",
		image: "/images/sun-wear.png",
		text: "See all collections",
	},
	{
		id: 9,
		name: "Hats",
		image: "/images/hat.png",
		text: "See all collections",
	},
	{
		id: 10,
		name: "Slippers",
		image: "/images/slippers.png",
		text: "See all collections",
	},
	{
		id: 11,
		name: "Wigs",
		image: "/images/wiggs.png",
		text: "See all collections",
	},
	{
		id: 12,
		name: "Cosmetics",
		image: "/images/cosmetics.png",
		text: "See all collections",
	},
];

const CategoryGrid = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
				{categories.map((category) => (
					<div
						key={category.id}
						className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
					>
						<div className="w-12 h-12 mb-2">
							<img
								src={category.image}
								alt={category.name}
								className="w-full h-full object-contain"
							/>
						</div>
						<h3 className="font-medium mb-1">{category.name}</h3>
						<p className="text-sm text-gray-500">{category.text}</p>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-8">
				<button className="bg-purple-600 text-white px-8 py-2 rounded-full hover:bg-purple-700 transition-colors">
					See more ⟶
				</button>
			</div>
		</section>
	);
};

export default CategoryGrid;
