import { Link } from "react-router-dom"
export default function Layout({children}){
    return(
        <>
        <nav>
            <Link to="/">Hjem</Link>
            <Link to="characters">Charaters</Link>
            <Link to="character">Character</Link>
        </nav>
        {children}
        </>
    )
}