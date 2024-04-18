import Logo from "../assets/Logo.svg";

const navData = [
	{
		text: "mission",
		to: "#mission",
		id: 1,
	},
	{
		text: "info",
		to: "#info",
		id: 2,
	},
	{
		text: "works",
		to: "#works",
		id: 3,
	},
	{
		text: "other",
		to: "#other",
		id: 4,
	},
];

const Navbar = () => {
	return (
		<div className="w-full h-12 shadow flex items-center p-4">
			<div className="flex justify-center items-center">
				<img src={Logo} alt="logo" className="size-8" />
				<p className="pl-4 font-roboto font-semibold text-gray-700">Recycle</p>
			</div>
			<div className="flex justify-center items-center gap-24 w-fit mx-auto absolute left-[50%] translate-x-[-50%] ">
				{navData.map((item) => (
					<a
						href={item.to}
						key={item.id}
						className="capitalize text-slate-500 hover:text-gray-900 transition-all font-semibold"
					>
						{item.text}
					</a>
				))}
			</div>
		</div>
	);
};
export default Navbar;
