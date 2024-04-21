import WorkData from "../data/worksData";

const Content = () => {
	return (
		<div className="w-full p-6  grid grid-cols-3 gap-6">
			{WorkData.map((item) => (
				<div
					key={item.id}
					className="bg-green-500 text-white p-6 rounded-xl overflow-hidden transition-all hover:scale-105 cart-shadow"
				>
					<img
						src={item.img}
						alt={item.title}
						className="w-full border aspect-video"
					/>
					<div>
						<h1 className="font-poppins text-2xl font-bold mt-6 mb-2">
							{item.title}
						</h1>
						<p className=" ">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};
export default Content;
