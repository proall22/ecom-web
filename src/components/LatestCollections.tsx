import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
	{
		id: 1,
		name: "French Kiss Bag",
		brand: "ALDO",
		price: 500,
		category: "Women",
		rating: "2k+ rating",
		image: "images/bag.png",
		inStock: true,
	},
	{
		id: 2,
		name: "Burberry shine",
		brand: "FENDI",
		price: 150,
		category: "Kids",
		rating: "1k+ rating",
		image: "images/shoe.png",
		inStock: true,
	},
	{
		id: 3,
		name: "Alvero Gown",
		brand: "DIVINE",
		price: 300,
		category: "Women",
		rating: "5k+ rating",
		image: "images/dress.png",
		inStock: true,
	},
];

const LatestCollections = () => {
	const { addToCart } = useCart();
	const navigate = useNavigate();

	const handleAddToCart = (product: (typeof products)[0]) => {
		addToCart({
			id: product.id,
			name: product.name,
			brand: product.brand,
			price: product.price,
			image: product.image,
		});
		navigate("/cart");
	};

	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
			<div className="flex justify-between items-center mb-6 md:mb-8">
				<h2 className="text-2xl md:text-3xl font-bold">Latest Collections</h2>
				<div className="flex gap-2">
					<button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
						‹
					</button>
					<button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
						›
					</button>
				</div>
			</div>

			<div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
				{products.map((product) => (
					<div
						key={product.id}
						className="flex-shrink-0 w-[280px] md:w-auto bg-gray-50 rounded-lg p-4 h-[450px] md:h-[500px] flex flex-col"
					>
						<div className="relative h-[250px] md:h-[300px]">
							<div className="w-full h-full bg-white rounded-lg overflow-hidden">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<button className="absolute top-4 left-4">
								<Heart className="w-6 h-6 text-gray-600" />
							</button>
							{product.inStock && (
								<span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
									In Stock
								</span>
							)}
						</div>
						<div className="flex-1 flex flex-col justify-between mt-4">
							<div>
								<div className="flex items-center gap-2 mb-2">
									<span className="px-3 py-1 bg-white rounded-full text-sm">
										{product.category}
									</span>
									<div className="flex items-center text-sm text-gray-600">
										<span className="text-yellow-400 mr-1">★</span>
										{product.rating}
									</div>
								</div>
								<h3 className="text-lg font-semibold line-clamp-1">
									{product.name}
								</h3>
								<p className="text-gray-600 text-sm">{product.brand}</p>
							</div>
							<div className="flex justify-between items-center mt-4">
								<span className="text-xl font-bold">${product.price}</span>
								<button
									onClick={() => handleAddToCart(product)}
									className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
								>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex overflow-x-auto gap-3 md:gap-4 mt-8 md:mt-12 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
				<button className="flex-shrink-0 px-6 md:px-8 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
					Men
				</button>
				<button className="flex-shrink-0 px-6 md:px-8 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
					Women
				</button>
				<button className="flex-shrink-0 px-6 md:px-8 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
					Kids
				</button>
				<button className="flex-shrink-0 px-6 md:px-8 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
					Perfumes
				</button>
				<button className="flex-shrink-0 px-6 md:px-8 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
					Sport
				</button>
				<button className="flex-shrink-0 px-6 md:px-8 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
					Jewelry
				</button>
			</div>
		</section>
	);
};

export default LatestCollections;
