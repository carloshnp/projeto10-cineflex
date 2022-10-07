import { Link } from "react-router-dom"
import axios from "axios";
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Day from "./Day";

export default function SessionPage() {
    const { sessionId } = useParams()
    const [days, setDays] = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessionId}/showtimes`
        const promise = axios.get(URL)

        promise.then((ans) => {
            setDays(ans.data.days)
        }).catch((err) =>{
            console.log(err.response.data)
        })
    }, [])

    return (
        <Container>
            <Title>
                <h1>Selecione o horário</h1>
            </Title>
            {days.map((day) => <Day weekday={day.weekday} date={day.date} showtimes={day.showtimes} />)}
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.div`
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #293845;
`