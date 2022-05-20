import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import UserContext from "../../../contexts/UserContext"

import { Button, Container, Espaco, Form, Infos, Input } from "./style"

export default function Subscription() {
  const navigate = useNavigate()
  const params = useParams()
  const { user } = useContext(UserContext)
  const [formData, setFormData] = useState({
    nome: "",
    numCartao: "",
    codSeg: "",
    validade: "",
  })
  const [plano, setPlano] = useState([])
  const [perks, setPerks] = useState([])

  useEffect(() => {
    if (Object.values(user).length === 0 || user.membership) {
      navigate("/home")
      return
    }

    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}subscriptions/memberships/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setPlano(res.data)
        setPerks(res.data.perks)
      })
  }, [])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}subscriptions`,
        {
          membershipId: params,
          cardName: formData.nome,
          cardNumber: formData.numCartao,
          securityNumber: formData.codSeg,
          expirationDate: formData.validade,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
  }

  return (
    <Container>
      <img src={plano.image} alt="logo do plano"></img>
      <h1>{plano.name}</h1>

      <Infos>
        <h2>Benefícios: </h2>
        {perks.map((perk, index) => {
          return (
            <div key={perk.id}>
              <p>
                {index + 1}. {perk.title}
              </p>
            </div>
          )
        })}

        <h2>Preço: </h2>
        <p>R$ {plano.price} cobrados mensalmente</p>
      </Infos>
      <Espaco />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome impresso no cartão"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          placeholder="Digitos do cartão"
          name="numCartao"
          value={formData.numCartao}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          placeholder="Código de segurança"
          name="codSeg"
          value={formData.codSeg}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          placeholder="Validade"
          name="validade"
          value={formData.validade}
          onChange={handleChange}
          required
        />

        <Button type="submit">ASSINAR</Button>
      </Form>
    </Container>
  )
}
