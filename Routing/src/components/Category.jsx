import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"

export default function Category(){
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])
    const [spritesImg, setSpritesImg] = useState([])
    const {slug} = useParams()
    // Kan koble deg opp med URL, med å skrive det sammen i krøllparantesen som du skrev i path
    console.log("Denne kommer fra Category", apiEndpoint)

    
    const getSingleData = async()=>{
    const response =await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug)
    const data = await response.json()
    setApiData(data)

    }

    console.log("Denne kommer fra Categories", apiData, apiEndpoint)

    // console.log("Key values:", Object.keys(apiData?.sprites))

    console.log(apiData)

    useEffect(()=>{
        getSingleData()
        // setSpritesImg(Object.keys(apiData?.sprites))
    },[slug])

    console.log("mine bilder",spritesImg)

    return(
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                <img src={apiData?.sprites?.front_default} alt={apiData?.name} />
            </section>
        </main>

    )
}