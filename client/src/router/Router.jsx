import {createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import Home from "../pages/home/Home.jsx"
import ErrorPage from "../pages/error/ErrorPage.jsx";
import { Login } from "../pages/login/Login.jsx";

const router = createBrowserRouter ([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage />
        },
        {
            path: "/login",
            element: <Login title="Login"
                            rangeNav={2}
                            links={["/register", "/about"]}
                            li={["Cadastre-se", "Sobre Nós"]}
                            rangeIn={2}
                            type={["text", "password"]}
                            place={["Nome", "Senha"]}                             
                            esq="Esqueceu a senha?"
                            esqLink="/recover"/>,
            errorElement: <ErrorPage />
        },
        {
            path: "/register",
            element: <Login title="Cadastre-se"
                            rangeNav={2}
                            links={["/login", "/about"]}
                            li={["Login", "Sobre Nós"]}
                            rangeIn={3}
                            type={["text", "text", "password"]}
                            place={["Email", "Nome", "Senha"]} 
                            esq="Já tem uma conta?"
                            esqLink="/login"/>,
            errorElement: <ErrorPage />
        },

    ]
)

export default router