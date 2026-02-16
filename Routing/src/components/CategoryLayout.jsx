import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function CategoryLayout(){
      const [apiData, setApiData] = useState([])
      const [apiEndpoint, setApiEndpoint] = useState()

  const getData = async()=>{
    // await må være med overalt hvor det er API
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
    const data = await response.json()
    setApiData(data.results)
    
  }

  console.log(apiData)
  console.log(apiEndpoint)

  useEffect(()=>{
    getData()
  },[])


    return(
        <>
        <nav className="main-nav">
            {/* xt har null betydning, bare to tilfeldige bokstaver for å gi en unik id */}
            {/* spøsmålstegn betyr map ut hvis du finst, hvis det ikke finnes å du ikke har spørsmålstegn får du error */}
            {apiData?.map((item)=> <Link key={item.name+'-xt'} to={item.name} onClick={()=> setApiEndpoint(item.url)}>{item.name}</Link>)}
        </nav>
        <Outlet />
        </>
    )
}