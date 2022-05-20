import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h1 {
    margin-bottom: 13px;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
  }
  h2 {
    margin: 12px 0 10px;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
  p {
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
  img {
    height: 90px;
    margin-bottom: 12px;
  }
`

const Input = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 8px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  padding: 0 15px;
  font-size: 14px;
  line-height: 16px;

  ::placeholder {
    color: #7e7e7e;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4px;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  width: 300px;
  height: 50px;
  background: #ff4791;
  border-radius: 8px;
  border: none;
`
const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`
const Espaco = styled.div`
  width: 100%;
  height: 34px;
`

export { Button, Container, Espaco, Form, Infos, Input }
