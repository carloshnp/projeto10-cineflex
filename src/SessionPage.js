import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Day from "./Day";
import FooterBar from "./FooterBar";

export default function SessionPage() {
  const { state } = useLocation()
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState([]);
  const [days, setDays] = useState([]);
  console.log(state)

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
    const promise = axios.get(URL);

    promise
      .then((ans) => {
        setSessions(ans.data)
        setDays(ans.data.days);
        console.log(ans.data.days);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <SessionsContainer>
        <Title>
          <h1>Selecione o horário</h1>
        </Title>
        {days.map((day) => (
          <Day
            weekday={day.weekday}
            date={day.date}
            showtimes={day.showtimes}
            idSessao={day.id}
          />
        ))}
      </SessionsContainer>
      <FooterBar title={sessions.title} posterURL={sessions.posterURL} />
    </>
  );
}

const SessionsContainer = styled.div`
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
