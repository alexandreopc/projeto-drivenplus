import axios from "axios"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import UserContext from "../../../contexts/UserContext"

import logo from "./../../../assets/images/Driven_white 1.png"
import { Button, Container, Form, Input, LinkTo } from "./../../formsComponents"

export default function Login() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  //criar estado para desabilitar (false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}auth/login`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        const { name, membership, token } = res.data
        if (!membership) {
          setUser({ name, membership, token })
          localStorage.setItem("token", token)
          navigate("/subscriptions")
          return
        }
        setUser({ id: membership.id, name, membership, token })
        localStorage.setItem("token", token)
        navigate("/home")
      })
      .catch((e) => console.log(e))
  }

  return (
    <Container>
      <img src={logo} alt="logo"></img>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          // inputDisabled={true}
          // disabled={true} //passar estado
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button type="submit">ENTRAR</Button>
      </Form>

      <LinkTo to="/sign-up">Não possuí uma conta? Cadastre-se</LinkTo>
    </Container>
  )
}
