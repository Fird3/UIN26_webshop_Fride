import { useEffect, useState } from "react"
import { useParams, Link, useOutletContext } from "react-router-dom"

export default function CategoryCard({name, url}){
    const {setApiEndpoint} = useOutletContext()
    // krøllparantes siden det er tomt object 
    const [apiData, setApiData] = useState({})

    const {slug} = useParams()

    // async hver gang du henter noe fra ett annet sted så det for tid til å loade
    // også await
    const getData = async()=>{
        const response = await fetch(url)
        const data = await response.json()

        setApiData(data)

       
    }
    console.log("Kommer fra categoryCard", slug)

    useEffect(() =>{
        getData()
    }, [])
    // tom [] så den bare bygges på når det blir lagt til, ikke noe mer
    return(
        <article>
            <h3>{name}</h3>
            <p>{apiData?.id}</p>
            {slug === "type" ? <img src={`../type_img/${apiData.name}.png`} /> :
            <img src={apiData?.sprites?.front_default} alt={apiData?.name} />}
            <ul>
                {apiData?.stats?.map((item) => <li key={apiData?.name + item?.stat?.name}>{item?.stat?.name}: {item?.base_stat}</li>)}
            </ul>
            <Link to={apiData?.name} onClick={()=>setApiEndpoint(url)}>Les mer om {apiData?.name}</Link>
        </article>
    )
}