import { useParams } from "react-router-dom"

export default function Category(){
    // Kan koble deg opp med URL, med å skrive det sammen i krøllparantesen som du skrev i path
    const {slug} = useParams()
    return(
        <h1>{slug}</h1>

    )
}