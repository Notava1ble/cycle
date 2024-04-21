import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/works";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/cycle" element={<Home />} />
				<Route path="/cycle/works" element={<Works />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
