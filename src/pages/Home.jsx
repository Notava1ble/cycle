import Cart from "../components/Cart";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Video from "../components/video";

const Home = () => {
	return (
		<div className="w-full">
			<Hero />
			<Cart />
			<Video />
			<Impact />
		</div>
	);
};
export default Home;
