import React from "react";

const SummerCollection = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
			<div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
				<div className="max-w-md relative z-10">
					<h2 className="text-2xl font-semibold text-purple-600 mb-4">
						Our Curated Summer Collection
					</h2>
					<p className="text-purple-600/80 mb-6">
						Explore our curated summer collection featuring trending styles,
						vibrant colors and lightweight fabrics perfect for long days and
						nights.
					</p>
					<button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
						Explore Now
					</button>
				</div>
				<div className="absolute right-0 top-0 h-full w-1/2">
					<img
						src="images/explore.png"
						alt="Summer Collection"
						className="h-full w-full object-cover rounded-r-2xl"
					/>
				</div>
				{/* Decorative dots */}
				<div className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full"></div>
				<div className="absolute bottom-4 right-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
				<div className="absolute top-1/2 left-1/3 w-3 h-3 bg-purple-300 rounded-full"></div>
				<div className="absolute top-1/4 right-1/3 w-3 h-3 bg-purple-500 rounded-full"></div>
				<div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-yellow-300 rounded-full"></div>
			</div>
		</section>
	);
};

export default SummerCollection;
