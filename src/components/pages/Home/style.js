import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  margin-top: 95px;

  width: 100%;
  height: 100%;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 50px;

    color: #ffffff;
  }
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
  img {
    height: 50px;
    margin-bottom: 12px;
  }
`
const Link = styled.div`
  display: flex;
  width: 299px;
  height: 52px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;

  background: #ff4791;
  border-radius: 8px;
  border: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  color: #ffffff;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 32px 38px 0;
`
const Button = styled.button`
  width: 299px;
  height: 52px;
  margin-top: 10px;

  background: ${(props) => (props.isRed ? "red" : "#ff4791;")};
  border-radius: 8px;
  border: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`
const Footer = styled.footer`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  bottom: 0px;
  width: 100%;
  margin-bottom: 10px;
`

export { Button, Container, Footer, Header, Link }
