import { NavLogin } from "../../components/nav/Nav"

export default function Home(){
    return (
        <>
            <NavLogin range={2} links ={["", "#", "/about"]}
                     onclick={handleClick} 
                     li={["Adicionar" ,"Home", "Sobre nós"]} />
        </>
    )
}