import styled from "styled-components"

export default function NavBar() {
    return (
        <NavBarContainer>
            <p>CINEFLEX</p>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 67px;
    font-size: 34px;
    background-color: #C3CFD9;
    color: #E8833A;
`