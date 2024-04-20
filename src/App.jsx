import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/cycle" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
