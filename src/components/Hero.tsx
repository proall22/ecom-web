const Hero = () => {
	return (
		<div className="bg-[#6A0DAD] relative overflow-hidden ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20 bg-cover bg-center h-screen object-cover object-center">
				<div className="flex flex-col items-center md:flex-row md:justify-between">
					{/* Mobile Layout */}
					<div className="flex flex-col items-center text-center md:hidden">
						<h1 className="text-6xl font-bold text-white tracking-tight mb-4">
							Gebeya
						</h1>
						<h2 className="text-4xl font-bold text-white tracking-tight mb-8">
							SHOP
						</h2>

						<div className="flex justify-center gap-4 mb-8">
							<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
								<img
									src="images/man.png"
									alt="Fashion"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
								<img
									src="images/tshirt.png"
									alt="T-shirt"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						<button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
							Explore Now
						</button>
					</div>

					{/* Desktop Layout */}
					<div className="hidden md:flex md:justify-between w-full">
						{/* Left section */}
						<div className="flex flex-col ml-8">
							<div className="mb-48">
								<h1 className="text-8xl font-bold text-white tracking-tight ml-12">
									Gebeya
								</h1>
							</div>
							<div className="flex items-center gap-8">
								<div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white ml-16">
									<img
										src="/images/sneaker.png"
										alt="Shoes"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>

						{/* Center section */}
						<div className="flex flex-col items-center">
							<div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white mb-8">
								<img
									src="/images/man.png"
									alt="Fashion"
									className="w-full h-full object-cover"
								/>
							</div>
							<button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors mt-20">
								Explore Now
							</button>
						</div>

						{/* Right section */}
						<div className="flex flex-col mt-12 max-w-md">
							<p className="text-xl text-white/90 mb-8 md:mb-16 animate-slide-left px-2 lg:px-0 break-words">
								Discover a world of convenience with our user-friendly platform,
								curated collections, and exceptional customer service
							</p>

							<div className="flex flex-col items-start gap-8 md:gap-12 justify-center flex-grow">
								<h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight animate-slide-up mb-3 md:mb-7">
									SHOP
								</h2>
								<div className="w-40 md:w-48 h-40 md:h-48 rounded-full overflow-hidden border-4 border-white animate-slide-right">
									<img
										src="images/tshirt.png"
										alt="T-shirt"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
