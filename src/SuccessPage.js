import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage() {
  const location = useLocation();

  const {
    name,
    cpf,
    seats: { numbers },
    sessionInfo: { time, title, date },
  } = location.state;

  return (
    <Container>
      <Title>Pedido feito com sucesso!</Title>
      <InfoContainer>
        <h1>Filme e sessão</h1>
        <p>{title}</p>
        <p>
          {date} {time}
        </p>
      </InfoContainer>

      <InfoContainer>
        <h1>Ingressos</h1>
        {numbers.map((num) => (
          <p>Assento {num}</p>
        ))}
      </InfoContainer>

      <InfoContainer>
        <h1>Comprador</h1>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </InfoContainer>

      <Link to={`/`}>
        <Button>Voltar para Home</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #247A6B;
`;

const InfoContainer = styled.div`
  margin: 0 0 30px 24px;
  text-align: left;
  align-self: flex-start;
  letter-spacing: 0.04em;
  color: #293845;
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
  }
`;

const Button = styled.button`
  height: 42px;
  width: 225px;
  margin-top: 50px;
  background-color: #E8833A;
  border: none;
  border-radius: 3px;
  align-self: center;
  justify-self: center;
  font-weight: 400;
  font-size: 18px;
  color: #FFFFFF;
`;
