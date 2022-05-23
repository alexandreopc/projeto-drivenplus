import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

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
const PopUp = styled.div`
  display: ${(props) => (props.modal ? "flex" : "none")};
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.7);
`
const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 248px;
  height: 210px;
  padding: 33px 22px;

  background: #ffffff;
  border-radius: 12px;
  border: none;

  span {
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #000000;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`
const ButtonC = styled.button`
  width: 95px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
  border: none;
`
const ButtonD = styled.button`
  width: 95px;
  height: 52px;
  background: #cecece;
  border-radius: 8px;
  border: none;
`

export {
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
}
