import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface Product {
	id: number;
	name: string;
	brand: string;
	price: number;
	image: string;
	category: string;
	rating: string;
	inStock: boolean;
}

const SimilarItems = () => {
	const { addToCart } = useCart();

	const similarProducts: Product[] = [
		{
			id: 3,
			name: "Butlin Blue",
			brand: "FENDI",
			price: 120,
			category: "Kids",
			rating: "2k+ rating",
			image: "images/blueShoe.png",
			inStock: true,
		},
		{
			id: 4,
			name: "Pink cherry",
			brand: "FENDI",
			price: 180,
			category: "Kids",
			rating: "2k+ rating",
			image: "images/pinkShoe1.png",
			inStock: true,
		},
	];

	return (
		<div className="bg-white rounded-lg p-6 mt-6">
			<h2 className="text-xl font-semibold mb-6">Similar items you may like</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{similarProducts.map((product) => (
					<div key={product.id} className="bg-gray-50 rounded-lg p-4">
						<div className="relative">
							<div className="aspect-square rounded-lg overflow-hidden bg-white">
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
						<div className="mt-4">
							<div className="flex items-center gap-2 mb-2">
								<span className="px-3 py-1 bg-white rounded-full text-sm">
									{product.category}
								</span>
								<div className="flex items-center text-sm text-gray-600">
									<span className="text-yellow-400 mr-1">★</span>
									{product.rating}
								</div>
							</div>
							<h3 className="font-semibold">{product.name}</h3>
							<p className="text-gray-600 text-sm">{product.brand}</p>
							<div className="flex justify-between items-center mt-4">
								<span className="font-bold">${product.price}</span>
								<button
									onClick={() => addToCart(product)}
									className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
								>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SimilarItems;
