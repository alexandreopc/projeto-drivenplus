import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import UserContext from "../../../contexts/UserContext"

import {
  Button,
  ButtonC,
  ButtonD,
  Caixa,
  Container,
  Espaco,
  Form,
  Infos,
  Input,
  PopUp,
} from "./style"

export default function Subscription() {
  const navigate = useNavigate()
  const params = useParams()
  const { user, setUser } = useContext(UserContext)
  const [formData, setFormData] = useState({
    nome: "",
    numCartao: "",
    codSeg: "",
    validade: "",
  })
  const [plano, setPlano] = useState([])
  const [perks, setPerks] = useState([])
  const [modal, setModal] = useState(false)

  const [popUp, setPopUp] = useState(false)
  const x = localStorage.getItem("token")

  useEffect(() => {
    // if (user.membership) {
    //   navigate("/home")
    //   return
    // }

    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}subscriptions/memberships/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${x}`,
          },
        }
      )
      .then((res) => {
        setPlano(res.data)
        setPerks(res.data.perks)
      })
      .catch((e) => console.log(e))
  }, [])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}subscriptions`,
        {
          membershipId: parseInt(params.id),
          cardName: formData.nome,
          cardNumber: formData.numCartao,
          securityNumber: formData.codSeg,
          expirationDate: formData.validade,
        },
        {
          headers: {
            Authorization: `Bearer ${x}`,
          },
        }
      )
      .then((res) => {
        setUser({ ...user, id: params.id })
        navigate("/home")
      })
      .catch((e) => console.log("deu ruim", e))
  }

  return (
    <Container>
      <PopUp modal={modal}>
        <Caixa>
          <span>
            Tem certeza que deseja assinar o plano {plano.name} ({plano.price})?
          </span>
          <div>
            <ButtonD
              onClick={(e) => {
                e.preventDefault()
                setModal(false)
              }}>
              Não
            </ButtonD>
            <ButtonC onClick={handleSubmit}>SIM</ButtonC>
          </div>
        </Caixa>
      </PopUp>
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
      <Form>
        <Input
          type="text"
          placeholder="Nome impresso no cartão"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
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
          type="text"
          placeholder="Validade"
          name="validade"
          value={formData.validade}
          onChange={handleChange}
          required
        />

        <Button
          onClick={(e) => {
            e.preventDefault()
            setModal(true)
          }}>
          ASSINAR
        </Button>
      </Form>
    </Container>
  )
}
