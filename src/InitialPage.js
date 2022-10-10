import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Movie from "./Movie"

export default function InitialPage(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)

        promise.then((ans) => {
            console.log(ans.data)
            setMovies(ans.data)
        }).catch((ans) => {
            console.log(ans.response.status)
        })

    }, [])

    return (
        <Container>
            <h1>Selecione o filme</h1>
            <MoviesContainer>
                {movies.map((movie) => <Movie idFilme={movie.id} img={movie.posterURL} title={movie.title} />)}
            </MoviesContainer>
        </Container>
    )
}


const Container = styled.div`
    h1 {
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #293845;
    }
`

const MoviesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`