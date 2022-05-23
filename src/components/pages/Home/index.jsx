import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import UserContext from "../../../contexts/UserContext"
import { Button, Container, Footer, Header, Link } from "./style"
import userLogo from "./../../../assets/images/fa-solid_user-circle.svg"

export default function Home() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [plano, setPlano] = useState([])
  const [perks, setPerks] = useState([])

  useEffect(() => {
    if (Object.values(user).length === 0) {
      navigate("/")
      return
    }
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}subscriptions/memberships/${user.id}`,
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
      .catch((e) => console.log(e))
  }, [])

  function cancelarPlano() {
    axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}subscriptions`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        alert("Plano cancelado")
        navigate("/subscriptions")
      })
      .catch((e) => console.log(e))
  }

  return (
    <Container>
      <Header>
        <img src={plano.image} alt="logo" />
        <img src={userLogo} alt="user menu" />
      </Header>
      <h1>Olá, {user.name}</h1>
      {perks.map((perk, index) => {
        return (
          <Link key={perk.id}>
            <a href={perk.link} target="_blank">
              <p>{perk.title}</p>
            </a>
          </Link>
        )
      })}
      <Footer>
        <Button onClick={() => navigate("/subscriptions")}>Mudar plano</Button>
        <Button isRed={true} onClick={() => cancelarPlano()}>
          Cancelar plano
        </Button>
      </Footer>
    </Container>
  )
}
