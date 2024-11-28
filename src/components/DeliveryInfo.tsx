import { Truck, RotateCcw } from "lucide-react";

const DeliveryInfo = () => {
	return (
		<div className="bg-white rounded-lg p-6">
			<h2 className="text-xl font-bold mb-6">Delivery & Returns</h2>

			<div className="mb-6">
				<h3 className="font-semibold mb-3">Location</h3>
				<select className="w-full p-3 border rounded-lg mb-3">
					<option>Select location</option>
				</select>
				<select className="w-full p-3 border rounded-lg">
					<option>Select sub-location</option>
				</select>
			</div>

			<div className="mb-6">
				<div className="flex items-start gap-3">
					<Truck className="w-5 h-5 mt-1" />
					<div>
						<h3 className="font-semibold mb-2">Delivery</h3>
						<p className="text-gray-600 text-sm mb-2">
							Estimated delivery time is 1-12 business days
						</p>
						<p className="text-gray-600 text-sm mb-2">
							<strong>For Same-Day-Delivery:</strong> Please place your order
							before 12pm
						</p>
						<p className="text-gray-600 text-sm mb-2">
							<strong>Next-Day-Delivery:</strong> Orders placed after 12pm will
							be delivered the next day.
						</p>
						<p className="text-gray-600 text-sm">
							<strong>Note:</strong> Availability may vary by location
						</p>
					</div>
				</div>
			</div>

			<div>
				<div className="flex items-start gap-3">
					<RotateCcw className="w-5 h-5 mt-1" />
					<div>
						<h3 className="font-semibold mb-2">Return policy</h3>
						<p className="text-gray-600 text-sm mb-2">
							Guaranteed 7-day return policy
						</p>
						<p className="text-gray-600 text-sm">
							For details about return shipping options, please visit our{" "}
							<a href="/contact" className="text-purple-600 hover:underline">
								Contact page
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryInfo;
