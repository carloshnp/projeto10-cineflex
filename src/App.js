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
                <Route path="/session-page/:sessionId" element={<SessionPage />} />
                <Route path="/seat-page" element={<SeatPage />} />
                <Route path="/success-page" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    )
}