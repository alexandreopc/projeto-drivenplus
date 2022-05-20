import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../contexts/UserContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Subscriptions from "./pages/Subscriptions";
import Home from "./pages/Home";

export default function App() {
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/sign-up" element={<SignUp />}></Route>
					<Route path="/subscriptions" element={<Subscriptions />}></Route>
					<Route path="/home" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}
