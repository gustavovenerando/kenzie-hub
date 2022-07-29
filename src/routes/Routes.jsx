import { Switch, Route } from "react-router";
import Login from "../pages/Login/Login.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import { useEffect, useState } from "react";

function Routes() {
	// const [currentUserData, setCurrentUserData] = useState({});
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("@KHub:token"));

		if (token) {
			return setAuthenticated(true);
		}
	}, [authenticated]);

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Login
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<Route exact path="/signup">
					<Signup authenticated={authenticated} />
				</Route>
				<Route exact path="/dashboard">
					<Dashboard
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
			</Switch>
		</div>
	);
}

export default Routes;
