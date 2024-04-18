const Video = () => {
	return (
		<div className="w-[80%] mx-auto my-14" id="info">
			<h1 className="font-poppins text-3xl font-extrabold ml-10">
				Recycling is important
			</h1>
			<p className="font-roboto text-lg text-gray-500 my-5 w-[60%] ml-10">
				Recycling is vital for protecting our environment and conserving
				resources. It reduces landfill waste, minimizes pollution, saves energy,
				and fosters a sustainable economy. Join us in making eco-friendly
				choices for a better world today and for future generations.
			</p>
			<div className="flex justify-center items-center mt-20 mb-10">
				<iframe
					className="w-[85%] h-auto aspect-video"
					width="560"
					src="https://www.youtube.com/embed/UdF3SvktiNU?si=_rdVLwIXo1hx_jK-&amp;controls=0"
					title="Video"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			</div>
			<hr />
		</div>
	);
};
export default Video;
