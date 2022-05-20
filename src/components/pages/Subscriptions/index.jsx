import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../../../contexts/UserContext";

export default function Subscriptions() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const [planos, setPlanos] = useState([]);

	useEffect(() => {
		console.log("oi", planos);
		if (Object.values(user).length === 0 || user.membership) {
			navigate("/home");
			return;
		}

		axios
			.get(`${process.env.REACT_APP_API_BASE_URL}subscriptions/memberships`, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			})
			.then((res) => {
				console.log(res);
				setPlanos(res.data);
			})
			.catch((e) => console.log(e));
	});

	return <div className="teste">oi</div>;
}
