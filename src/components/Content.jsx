import WorkData from "../data/worksData";

const Content = () => {
	return (
		<div className="w-full p-6 grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 gap-10">
			{WorkData.map((item) => (
				<div
					key={item.id}
					className="lg:h-[450px] md:h-[500px] h-[550px] bg-green-500 text-white rounded-xl overflow-hidden transition-all hover:scale-105 cart-shadow"
				>
					<div
						className="w-full h-full bg-cover bg-no-repeat bg-center innter-shadow"
						style={{ backgroundImage: `url(${item.img}) ` }}
					>
						<div className="flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-500 p-6 h-full">
							<div className="w-full sm:h-[30%] md:h-[40%]">
								<h1 className="font-poppins text-2xl font-bold mb-2 text-shadow">
									{item.title}
								</h1>
								<p className="text-shadow text-small">{item.description}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Content;
