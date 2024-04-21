import { Link } from "react-router-dom";

const Impact = () => {
	return (
		<div
			className="w-[90%] mx-auto bg-g lg:px-36 lg:py-28 md:px-20 md:py-16 sm:px-16 sm:py-10 px-12 py-10 text-white inner-shadow mb-10"
			id="works"
		>
			<h1 className="font-poppins text-5xl font-extrabold">Our Impact</h1>
			<p className="font-roboto text-xl text-gray-100 my-5">
				Our school has been actively promoting sustainability through recycling
				programs, awareness campaigns, and collaborative efforts. Together,
				we're making a positive impact on the environment and fostering a
				greener future.
			</p>
			<div className="flex justify-center items-center">
				<Link to="/cycle/works">
					<button className="text-xl p-8 py-5 mt-2 lg:p-10 lg:py-6 bg-gray-600 rounded-full font-poppins lg:text-2xl font-semibold cart-shadow">
						Check It Out
					</button>
				</Link>
			</div>
			<div className="mt-16 hidden lg:flex gap-6 w-full">
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
