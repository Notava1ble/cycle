import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const WorkHeader = () => {
	return (
		<div className="w-full relative">
			<Link
				to="/cycle"
				className="flex justify-center items-center p-4 cursor-pointer"
			>
				<img src={Logo} alt="logo" className="size-8" />
				<p className="pl-2 font-roboto font-semibold text-gray-700">Recycle</p>
			</Link>
			<div className="p-16 flex flex-col justify-center items-center">
				<div className="flex flex-col sm:w-[70%] md:w-[60%] mx-auto mt-10 justify-center items-center">
					<h1 className="font-poppins font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
						HELP US ON MAKING THE WORLD A BETTER PLACE{" "}
					</h1>
					<p className="mt-5 text-center">
						Recycling will protect the world we live in. Join so you can too.
					</p>
				</div>
			</div>
			<hr />
		</div>
	);
};
export default WorkHeader;
