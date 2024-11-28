import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="product" element={<ProductDetail />} />
						<Route path="cart" element={<Cart />} />
						<Route path="checkout" element={<Checkout />} />
					</Route>
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
