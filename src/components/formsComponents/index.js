import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	img {
		width: 300px;
		height: 50px;
	}
`;

const Input = styled.input`
	width: 300px;
	height: 50px;
	margin-top: 15px;
	background: #ffffff;
	border-radius: 8px;
	border: none;
	padding: 0 15px;
	font-size: 14px;
	line-height: 16px;

	::placeholder {
		color: #7e7e7e;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 25px;

	width: 300px;
	height: 50px;
	background: #ff4791;
	border-radius: 8px;
	border: none;
`;

const LinkTo = styled(Link)`
	font-size: 14px;
	line-height: 16px;
	margin-top: 25px;
	text-decoration: none;
	text-decoration-line: underline;

	color: #ffffff;
`;

export { Button, Container, Form, Input, LinkTo };
