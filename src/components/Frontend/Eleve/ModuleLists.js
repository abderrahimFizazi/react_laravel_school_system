import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ModuleLists = () => {
    const {filiere , niveau} = useParams()
    const [module , setModule] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`/api/getModules/${filiere}/${niveau}`).then(res => {
            if (res.data.status === 200){
                setModule(res.data.module)
                setLoading(false)

    }})

    }, [])

    var table_html_all_eleve = module.reverse().map(item => {
        const l = item.element.length
    return (
        <tr key={item.id}   >
            <td className="text-center">{item.designation} </td>
            <td>
            {item.element.map( element => {return(
          <tr key={element.id} rowSpan={l}>
                    <td>
                    {element.designation}
                    </td>
                </tr>
            )}
            )
            }
            </td>
        </tr>
    )})
 
    if (loading) {
        return (
            <div>Module list loading...</div>
        )
    }
    else{
        return(
            <>
            <div className="container " style={{"marginTop": "100px"}}>
                      { module.length ?<>
                        <h2 style={{ "color": "#f4623a" }} className="my-5">Liste des modules pour votre filiere {filiere}  Niveau {niveau}</h2>
                      <table className="table table-bordered table-hover" id="my_table">
                            <thead>
                                <tr>
                                    <th>Module </th>
                                    <th>Element module</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table_html_all_eleve}
                            </tbody>
                        </table> 
                        </>  : <h3>la du module de votre niveau sera bientôt disponible! Merci d'être patient </h3>}
                       

                </div>
            </>
        )
    }

}
export default ModuleLists