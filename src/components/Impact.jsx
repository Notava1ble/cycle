const Impact = () => {
	return (
		<div
			className="w-[90%] mx-auto bg-g px-36 py-28 text-white inner-shadow mb-10"
			id="works"
		>
			<h1 className="font-poppins text-5xl font-extrabold">Our Impact</h1>
			<p className="font-roboto text-xl text-gray-100 my-5">
				Recycling is vital for protecting our environment and conserving
				resources. It reduces landfill waste, minimizes pollution, saves energy,
				and fosters a sustainable economy. Join us in making eco-friendly
				choices for a better world today and for future generations.
			</p>
			<div className="flex justify-center items-center">
				<button className="p-10 py-6 bg-gray-600 rounded-full font-poppins text-2xl font-semibold cart-shadow">
					Check It Out
				</button>
			</div>
			<div className="mt-16 flex gap-6 w-full">
				<div className="bg-gray-400 w-[65%] aspect-video" />
				<div className="flex flex-col gap-4">
					<div className="bg-gray-400 w-64 h-36 aspect-video" />
					<div className="bg-gray-400 w-64 h-36 aspect-video" />
				</div>
			</div>
		</div>
	);
};
export default Impact;
