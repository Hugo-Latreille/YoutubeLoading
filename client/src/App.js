import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Feed from "./components/Feed";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState({});

	useEffect(() => {
		const getUser = async () => {
			setIsLoading(true);
			try {
				const result = await axios.get("http://localhost:8800/api/user/1");
				setUser(result.data);
				setIsLoading(false);
				console.log("ça marche !!!!");
			} catch (err) {
				setIsLoading(false);
				console.log("ça marche pas !!!!!");
			}
		};
		getUser();
	}, []);

	return (
		<div className="container">
			<Sidebar isLoading={isLoading} />
			<div className="home">
				<Topbar isLoading={isLoading} user={user} />
				<Feed />
			</div>
			<span>{user.username}</span>
		</div>
	);
}

export default App;
