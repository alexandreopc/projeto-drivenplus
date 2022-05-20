import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../../../contexts/UserContext";

export default function Home() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (Object.values(user).length === 0) {
			navigate("/");
		}
	});

	return (
		<>
			<div className="teste">ioi</div>
		</>
	);
}
