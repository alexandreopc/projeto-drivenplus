import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Container, Form, Input, LinkTo } from "./../../formsComponents"

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}auth/sign-up`, {
        email: formData.email,
        name: formData.name,
        cpf: formData.cpf,
        password: formData.password,
      })
      .then((res) => {
        navigate("/")
      })
      .catch((e) => {
        alert("Falha ao cadastrar")
        console.log(e)
      })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="CPF"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
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

        <Button type="submit">CADASTRAR</Button>
      </Form>

      <LinkTo to="/">Já possuí uma conta? Entre</LinkTo>
    </Container>
  )
}
