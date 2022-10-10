import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import NavBar from "./NavBar"
import InitialPage from "./InitialPage"
import SessionPage from "./SessionPage"
import SeatPage from "./SeatPage"
import SuccessPage from "./SuccessPage"

export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <NavBar />
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/sessoes/:idFilme" element={<SessionPage />} />
                <Route path="/assentos/:idSessao" element={<SeatPage />} />
                <Route path="/sucesso" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    )
}