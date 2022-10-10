import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Day({ weekday, date, showtimes }) {
  console.log(weekday);

  function ShowtimeButton(showtime) {
    const { name, id } = showtime
    const idSessao = id

    return (
        <Link to={`/assentos/${idSessao}`}>
            <Button>{name}</Button>
        </Link>
    )
  }

  return (
    <Container>
      <h1>
        {weekday} - {date}
      </h1>
      <SessionContainer>
        {showtimes.map((showtime) => (
          ShowtimeButton(showtime)
        ))}
      </SessionContainer>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    height: 42px;
    font-size: 20px;
    margin-left: 24px;
  }
`;

const SessionContainer = styled.div`
  margin-left: 24px;
`;

const Button = styled.button`
  width: 82px;
  height: 43px;
  margin-bottom: 23px;
  margin-right: 9px;
  background-color: #e8833a;
  border: 0px;
  border-radius: 3px;
  font-size: 18px;
  color: #FFFFFF;
`;
