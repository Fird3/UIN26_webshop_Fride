import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function CategoryLayout(){

      const {slug} = useParams()
      const [apiData, setApiData] = useState([])
      const [apiEndpoint, setApiEndpoint] = useState()

      const defaultApiUrl = 'https://pokeapi.co/api/v2/'

  const getData = async()=>{
    // await må være med overalt hvor det er API
    const response = await fetch (defaultApiUrl)
    const data = await response.json()
    const {type, pokemon, item} = data
    
    setApiData({type, pokemon, item})
    
  }

  console.log("Sjekk", apiData)
  console.log("Denne kommer fra Layout", apiEndpoint)

  useEffect(()=>{
    getData()
  },[slug])


    return(
        <>
        <nav className="main-nav">
          {/* object.keys er for å finne nøkkelen til objectet. Her bruekr vi det til å ha object om til array */}
          {Object.keys(apiData)?.map((item) => <Link key={item+'-saj'} to={item} onClick={()=>setApiEndpoint(defaultApiUrl + item)}>{item}</Link>)}
            {/* xt har null betydning, bare to tilfeldige bokstaver for å gi en unik id */}
            {/* spøsmålstegn betyr map ut hvis du finst, hvis det ikke finnes å du ikke har spørsmålstegn får du error */}
            {/*apiData?.map((item)=> <Link key={item.name+'-xt'} to={item.name} onClick={()=> setApiEndpoint(item.url)}>{item.name}</Link>)*/}
        </nav>
        <Outlet context={{apiEndpoint, defaultApiUrl}}/>
        </>
    )
}