import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[#6A0DAD] text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex flex-col md:flex-row justify-between">
					{/* Logo */}
					<div className="mb-8 md:mb-0 flex items-center justify-around md:justify-start gap-4">
						<img className="w-12 h-12" src="/images/Glogo.png" alt="Logo" />
						<img className="w-12 h-12" src="/images/GeLogo.png" alt="Logo" />
					</div>

					{/* Navigation */}
					<div className="grid grid-cols-3 gap-8 md:gap-16">
						<div>
							<h3 className="font-semibold mb-4">About</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="hover:text-gray-300">
										About Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										News & Blog
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Location
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Products</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="hover:text-gray-300">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Store
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Features
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Discover</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="hover:text-gray-300">
										Contact Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Customers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Affiliates
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Social Links */}
				<div className="flex gap-4 mt-12">
					<a href="#" className="hover:text-gray-300">
						<Instagram size={24} />
					</a>
					<a href="#" className="hover:text-gray-300">
						<Facebook size={24} />
					</a>
					<a href="#" className="hover:text-gray-300">
						<Twitter size={24} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
