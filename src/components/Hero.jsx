import Navbar from "./Navbar";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
	return (
		<div className="w-full relative">
			<Navbar />
			<div className="p-16 flex flex-col justify-center items-center">
				<button className="mt-20 px-4 py-2 border-2 border-black shadow-lg shadow-gray-400/50 rounded-full">
					<div className="w-fit">
						Our school has done various projects to help the world.{" "}
						<span className="text-blue-600">
							Read More <BsArrowRight className="inline ml-1" />
						</span>
					</div>
				</button>
				<div className="flex flex-col w-[50%] mx-auto mt-10 justify-center items-center">
					<h1 className="font-poppins font-extrabold uppercase text-5xl text-center">
						RECYCLE FOR THE GOOD OF OUR EARTH
					</h1>
					<p className="mt-5">
						Recycling will protect the world we live in. Join so you can too.
					</p>
				</div>
			</div>
			<hr />
		</div>
	);
};
export default Hero;
