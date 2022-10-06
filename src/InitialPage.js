import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Movie from "./Movie"

export default function InitialPage(params) {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState('')

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)

        promise.then((ans) => {
            console.log(ans.data)
            setMovies(ans.data)
        })
    }, [])

    function selectMovie(key) {
        return
    }

    return (
        <Container>
            <h1>Selecione o filme</h1>
            <MoviesContainer>
                {movies.map((movie) => <Movie key={movie.id} img={movie.posterURL} title={movie.title} setMovie={setMovie} selectMovie={selectMovie} />)}
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