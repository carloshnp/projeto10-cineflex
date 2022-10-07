import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Movie({ img, title, sessionId }) {
    return (
        <Container>
            <Link to={`/session-page/${sessionId}`}>
                <img src={img} alt={title} />
            </Link>
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