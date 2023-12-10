import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cursor from "./components/Cursor";
import HomePage from "./pages/home";
import "./styles/App.scss";

function App() {
	return (
		<>
			<ToastContainer />
			<Cursor />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
