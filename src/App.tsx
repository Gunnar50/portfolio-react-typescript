import { Route, Routes } from "react-router-dom";
import Cursor from "./components/Cursor";
import HomePage from "./pages/home";
import "./styles/App.scss";

function App() {
	return (
		<>
			<Cursor />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
