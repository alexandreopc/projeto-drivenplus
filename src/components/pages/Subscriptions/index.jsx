import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import UserContext from "../../../contexts/UserContext"

import { Container, Plano } from "./style"

export default function Subscriptions() {
  const navigate = useNavigate()
  const params = useParams()
  const { user } = useContext(UserContext)
  const [planos, setPlanos] = useState([])

  console.log(params)
  useEffect(() => {
    if (Object.values(user).length === 0 || user.membership) {
      navigate("/home")
      return
    }

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}subscriptions/memberships`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res)
        setPlanos(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <Container>
      <h1>Escolha seu Plano</h1>
      {planos.map((plano) => {
        return (
          <Plano
            key={plano.id}
            onClick={() => navigate(`/subscriptions/${plano.id}`)}>
            <img src={plano.image} alt="logo do plano" />
            <p>R$ {plano.price}</p>
          </Plano>
        )
      })}
    </Container>
  )
}
