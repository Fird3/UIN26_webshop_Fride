import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"

export default function Characters(){

    const [apiData, setApiData] = useState([])

    const defaultApiUrl = 'https://rickandmortyapi.com/api/character'

    const getAllCharacters = async()=>{
        try{
        const response = await fetch(defaultApiUrl)
        const data = await response.json()
        setApiData(data.results)
        console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllCharacters()
    }, [])
    console.log("apidata", apiData)
    
    return(
        <main>
          <h1>Characters</h1>
            <section>
            {apiData?.map((char) => <CharacterCard key={char.id} char={char}></CharacterCard>)}
            </section>
          
        </main>

    )
}