import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h1 {
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
  }
`

const Plano = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 290px;
  height: 180px;
  padding: 0 15px;
  margin-bottom: 10px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;

  img {
    /* width: 300px; */
    height: 90px;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }
`

export { Container, Plano }
