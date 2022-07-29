import GlobalStyle from "./styles/global";
import Routes from "./routes/Routes.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<GlobalStyle />
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				toastStyle={{ backgroundColor: "#212529" }}
			/>
			<Routes />
		</>
	);
}
export default App;
