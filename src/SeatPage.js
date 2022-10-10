import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Seat from "./Seat";
import FooterBar from "./FooterBar";

export default function SeatPage() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);
  const [seatNumber, setSeatNumber] = useState([]);
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [sessionInfo, setSessionInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(URL);

    promise
      .then((ans) => {
        console.log(ans.data);
        setSeats(ans.data.seats);
        setSessionInfo({
          title: ans.data.movie.title,
          posterURL: ans.data.movie.posterURL,
          time: ans.data.name,
          day: ans.data.day.weekday,
          date: ans.data.day.date,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  function selectSeat(id, name) {
    if (!selected.includes(id)) {
      const newSelected = [...selected, id];
      setSelected(newSelected);

      const seatSelected = [...seatNumber, name];
      setSeatNumber(seatSelected);
    } else {
      const index = selected.indexOf(id);
      const removeSeat = [...selected];
      removeSeat.splice(index, 1);
      setSelected(removeSeat);

      const removeNumber = [...seatNumber];
      removeNumber.splice(index, 1);
      setSeatNumber(removeNumber);
    }
  }

  function reserveSeats(e) {
    e.preventDefault();

    if (selected.length === 0) {
      alert("Selecione seus assentos!");
      return;
    } else {
      const url =
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
      const body = {
        ids: selected,
        name: name,
        cpf: CPF,
      };

      const request = axios.post(url, body);

      request
        .then((ans) => {
          navigate("/sucesso", {
            state: {
              name: name,
              cpf: CPF,
              sessionInfo: sessionInfo,
              seats: { ids: selected, numbers: seatNumber },
            },
          });
          console.log(ans.data);
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Container>
      <Title>Selecione o(s) assento(s)</Title>
      <SeatsContainer>
        {seats.map((seat) => (
          <Seat
            id={seat.id}
            name={seat.name}
            isAvailable={seat.isAvailable}
            selectSeat={selectSeat}
            selected={selected}
          />
        ))}
      </SeatsContainer>
      <TagsContainer>
        <div>
          <TagsButton
            selected={selected}
            bgcolor={"#1AAE9E"}
            bordercolor={"#0E7D71"}
          ></TagsButton>
          <p>Selecionado</p>
        </div>
        <div>
          <TagsButton
            selected={selected}
            bgcolor={"#C3CFD9"}
            bordercolor={"#7B8B99"}
          ></TagsButton>
          <p>Disponível</p>
        </div>
        <div>
          <TagsButton
            selected={selected}
            bgcolor={"#FBE192"}
            bordercolor={"#F7C52B"}
          ></TagsButton>
          <p>Indisponível</p>
        </div>
      </TagsContainer>

      <Form onSubmit={reserveSeats}>
        <label htmlFor="Name">Nome:</label>
        <input
          type="text"
          id="Name"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="CPF">CPF:</label>
        <input
          type="text"
          id="CPF"
          placeholder="Digite seu CPF..."
          value={CPF}
          onChange={(e) => setCPF(e.target.value)}
          minLength="11"
          required
        />

        <button type="submit">Reservar assento(s)</button>
      </Form>

      <FooterBar
        title={sessionInfo.title}
        posterURL={sessionInfo.posterURL}
        day={sessionInfo.day}
        time={sessionInfo.time}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #293845;
`;

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 42px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TagsButton = styled.div`
  height: 26px;
  width: 26px;
  margin: 9px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 12px;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-align: center;
`;

const Form = styled.form`
  margin-bottom: 140px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;

  label {
    color: #293845;
  }

  input {
    height: 51px;
    padding: 0 18px;
    margin-bottom: 7px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 400;
  }

  button {
    height: 42px;
    width: 225px;
    margin-top: 50px;
    color: #FFFFFF;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    align-self: center;
    font-size: 18px;
    font-weight: 400;
  }
`;
