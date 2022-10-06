import styled from "styled-components"

export default function Movie({img, title, selectMovie, key}) {
    return (
        <Container>
            <img onClick={selectMovie(key)} src={img} alt={title} />
        </Container>
    )
}

const Container = styled.div`
    width: 145px;
    height: 209px;
    margin-bottom: 11px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 193px;
    }
`