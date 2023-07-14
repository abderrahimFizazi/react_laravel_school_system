import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const EleveNote = () => {
    const [loading, setLoading] = useState(true)
    const [eleve, setEleve] = useState()

    const [note, setNote] = useState([])
    useEffect(() => {
        axios.get("/api/profileeleve").then(res => {
            if (res.data.status === 200){
                setEleve(res.data.eleve)
                axios.get(`/api/getNotesEleve`).then(res => {
                    if (res.data.status === 200) {
                        setNote(res.data.note)
                    }
                    setLoading(false)
                })

    }})

    }, [])

    var table_html_all_eleve = note.reverse().map(item => {

        return (
            <tr key={item.id} >
                <td className="text-center">{item.element_module.module.designation} </td>
                <td className="text-center">{item.element_module.designation} </td>
                <td className="text-center">{item.note} </td>

            </tr>
        )
    })



    if (loading) {
        return (
            <div>Notes list loading...</div>
        )
    }
    else {
        return (
            <>
                <div className="container " style={{"marginTop": "100px"}}>
                <h2 style={{ "color": "#f4623a" }} className="my-5">Liste des Notes pour l'annee 2021/2022</h2>
                <Link to={"/eleve/modules_list/"+eleve.filiere + "/"+eleve.niveau} className="float-end">Consulter vos modules pour cette annee</Link>
                      { note.length ?<>
                      <table className="table table-bordered table-hover" id="my_table">
                            <thead>
                                <tr>
                                    <th>Module </th>
                                    <th>Element de module </th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table_html_all_eleve}
                            </tbody>
                        </table> 
                        <div className="float-end p-3 m-3 btn-success">Moyenne : 0</div>
                        </>  : <h3>les notes seront bientôt disponibles! Merci d'être patient </h3>}
                       

                </div>
            </>

        )
    }
}
export default EleveNote