import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	Search,
	ShoppingBag,
	ChevronDown,
	Menu,
	X,
	ChevronUp,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isAuthOpen, setIsAuthOpen] = useState(false);
	const [isMoreOpen, setIsMoreOpen] = useState(false);
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);
	const { cartCount } = useCart();
	const navigate = useNavigate();

	const authRef = useRef<HTMLDivElement>(null);
	const moreRef = useRef<HTMLDivElement>(null);
	const languageRef = useRef<HTMLDivElement>(null);

	const moreItems = [
		"Perfumes",
		"Jewelries",
		"Gym wears",
		"Vintage wears",
		"Sport wear",
		"Pyjamas",
		"Slippers",
	];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (authRef.current && !authRef.current.contains(event.target as Node)) {
				setIsAuthOpen(false);
			}
			if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
				setIsMoreOpen(false);
			}
			if (
				languageRef.current &&
				!languageRef.current.contains(event.target as Node)
			) {
				setIsLanguageOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleNavigate = (path: string) => {
		setIsMenuOpen(false);
		navigate(path);
	};

	return (
		<header className="sticky top-0 z-50 bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16">
					{/* Mobile menu button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>

					{/* Left Section: Logo and Register/Sign In */}
					<div className="flex items-center space-x-6">
						{/* Logo */}
						<Link to="/" className="text-2xl font-bold">
							<img src="/images/logo.png" className="w-8 h-8" />
						</Link>

						{/* Auth Menu */}
						<div className="relative hidden md:block" ref={authRef}>
							<button
								className="flex items-center text-gray-700 hover:text-gray-900"
								onClick={() => setIsAuthOpen(!isAuthOpen)}
							>
								<span className="mr-1">Register/Sign In</span>
								{isAuthOpen ? (
									<ChevronUp className="h-4 w-4" />
								) : (
									<ChevronDown className="h-4 w-4" />
								)}
							</button>
							{isAuthOpen && (
								<div className="absolute left-0 w-48 py-2 mt-1 bg-white rounded-md shadow-lg border border-gray-100">
									<Link
										to="/register"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
										onClick={() => setIsAuthOpen(false)}
									>
										Register
									</Link>
									<Link
										to="/signin"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
										onClick={() => setIsAuthOpen(false)}
									>
										Sign In
									</Link>
								</div>
							)}
						</div>
					</div>

					{/* Center: Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link to="/" className="text-gray-700 hover:text-gray-900">
							Home
						</Link>
						<Link to="/men" className="text-gray-700 hover:text-gray-900">
							Men
						</Link>
						<Link to="/women" className="text-gray-700 hover:text-gray-900">
							Women
						</Link>
						<Link to="/kids" className="text-gray-700 hover:text-gray-900">
							Kids
						</Link>
						<Link
							to="/accessories"
							className="text-gray-700 hover:text-gray-900"
						>
							Accessories
						</Link>
						<div className="relative" ref={moreRef}>
							<button
								className="flex items-center text-gray-700 hover:text-gray-900"
								onClick={() => setIsMoreOpen(!isMoreOpen)}
							>
								<span className="mr-1">More</span>
								{isMoreOpen ? (
									<ChevronUp className="h-4 w-4" />
								) : (
									<ChevronDown className="h-4 w-4" />
								)}
							</button>
							{isMoreOpen && (
								<div className="absolute left-0 w-48 py-2 mt-1 bg-white rounded-md shadow-lg border border-gray-100">
									{moreItems.map((item) => (
										<Link
											key={item}
											to={`/${item.toLowerCase().replace(" ", "-")}`}
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
											onClick={() => setIsMoreOpen(false)}
										>
											{item}
										</Link>
									))}
								</div>
							)}
						</div>
					</nav>

					{/* Right section */}
					<div className="flex items-center space-x-6">
						{/* Search */}
						<div className="hidden md:flex items-center">
							<div className="relative flex items-center">
								<div className="absolute left-3">
									<Search className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type="text"
									placeholder="    Search"
									className="w-64 pl-10 pr-12 py-2 bg-gray-100 rounded-l-full focus:outline-none"
								/>
								<button className="px-4 py-2 bg-purple-600 text-white rounded-r-full hover:bg-purple-700 transition-colors">
									<Search className="h-5 w-5" />
								</button>
							</div>
						</div>

						{/* Search - Mobile */}
						<button className="md:hidden">
							<Search className="h-6 w-6 text-gray-700" />
						</button>

						{/* Language/Currency */}
						<div className="relative hidden md:block" ref={languageRef}>
							<button
								className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
								onClick={() => setIsLanguageOpen(!isLanguageOpen)}
							>
								<img
									src="https://flagcdn.com/w20/gb.png"
									alt="EN"
									className="w-5 h-4"
								/>
								<span>EN/Currency</span>
								{isLanguageOpen ? (
									<ChevronUp className="h-4 w-4" />
								) : (
									<ChevronDown className="h-4 w-4" />
								)}
							</button>
							{isLanguageOpen && (
								<div className="absolute right-0 w-48 py-2 mt-1 bg-white rounded-md shadow-lg border border-gray-100">
									<button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50">
										English (USD)
									</button>
									<button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50">
										Français (EUR)
									</button>
									<button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50">
										Español (EUR)
									</button>
								</div>
							)}
						</div>

						{/* Cart */}
						<Link
							to="/cart"
							className="relative flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full"
						>
							<ShoppingBag className="h-5 w-5 text-white" />
							{cartCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
									{cartCount}
								</span>
							)}
						</Link>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-gray-200">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<button
								onClick={() => handleNavigate("/")}
								className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Home
							</button>
							<button
								onClick={() => handleNavigate("/men")}
								className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Men
							</button>
							<button
								onClick={() => handleNavigate("/women")}
								className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Women
							</button>
							<button
								onClick={() => handleNavigate("/kids")}
								className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Kids
							</button>
							<button
								onClick={() => handleNavigate("/accessories")}
								className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Accessories
							</button>
							{moreItems.map((item) => (
								<button
									key={item}
									onClick={() =>
										handleNavigate(`/${item.toLowerCase().replace(" ", "-")}`)
									}
									className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									{item}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
