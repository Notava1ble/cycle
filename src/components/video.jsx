const Video = () => {
	return (
		<div className="md:w-[80%] w-[95%] mx-auto my-14" id="info">
			<h1 className="font-poppins text-3xl font-extrabold ml-10">
				Recycling is important
			</h1>
			<p className="font-roboto text-lg text-gray-500 my-5 w-[80%] ml-10">
				Recycling is vital for protecting our environment and conserving
				resources. It reduces landfill waste, minimizes pollution, saves energy,
				and fosters a sustainable economy. Join us in making eco-friendly
				choices for a better world today and for future generations.
			</p>
			<div className="flex justify-center items-center mt-10 mb-10">
				<iframe
					className="w-[90%] h-auto aspect-video"
					width="560"
					src="https://www.youtube.com/embed/phof40D2lzc?si=L0FsDwxKZG5O0wRG"
					title="Video"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<hr />
		</div>
	);
};
export default Video;
