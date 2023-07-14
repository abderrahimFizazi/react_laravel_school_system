import axios from "axios";
import * as ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Bs from "react-icons/bs"
import swal from "sweetalert"

const UpdateNotes = () => {
    const { element } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [elevesList, setEleveslist] = useState([])
    const [note, setNote] = useState([])
    useEffect(() => {
        axios.get(`/api/getNote/${element}`).then(res => {
            if (res.data.status === 200) {
                setNote(res.data.note)
            }
            setLoading(false)
        })
    }, [])
    var table_html_all_eleve = note.reverse().map(item => {
    
        return (
            <tr key={item.id} >
                <td className="text-center">{item.eleve.nom} </td>
                <td className="text-center">{item.eleve.prenom} </td>
                <td className="text-center">{item.eleve.code} </td>
                <td className="text-center" > <input type='number' placeholder="Insert.." min="0" max="20"
                    value={item.note}
                    onChange={(e) => {
                        item.note = e.target.value;
                        setEleveslist([...elevesList]);
                    }} /> </td>
            </tr>

        )
    })
    const status = localStorage.getItem('role') === 'admin' ? 'admin' : 'respo'

    const submitRes = (e) => {
        e.preventDefault()
        note.map(item => {
            axios.put(`/api/update_note/${item.id}` , item).then(res => {
                if(res.data.status === 200){
                }
            })
    })
    navigate("/" + status + "/notes_element/"+ note[0].element_module_id)
} 


    if (loading) {
        return (
            <div>Eleves list loading...</div>
        )
    }
    else {
        return (
            <>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6" >

                        <div className="sideBar sticky-md-top p-5 ">
                            <Link to={"/" + status+"/notes"} className="btn  btn-small float-end"><Bs.BsReverseBackspaceReverse style={{ fill: "#008080" }} size={25} /></Link> <br />
                            <div className="fs-4 my-3 d-flex mx-5 text-success " > Les Notes de :  </div>
                            <div className="fs-5 d-flex mx-5"> Filiere : {note[0].element_module.module.filiere} </div>
                            <div className=" fs-5  d-flex mx-5"> Niveau : {note[0].element_module.module.niveau} </div>
                            <div className=" fs-5 d-flex mx-5"> Module : {note[0].element_module.module.designation}</div>
                            <div className="fs-5 d-flex mx-5"> Element : {note[0].element_module.designation}</div>
                            <div className="fs-5 d-flex mx-5"> Pois : {note[0].element_module.poids}</div>
                            <div className="fs-5 d-flex mx-5"> VH : {note[0].element_module.vh}h</div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 my-3" >
                        <form onSubmit={submitRes}>

                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Nom </th>
                                        <th>Prenom </th>
                                        <th>Code</th>
                                        <th>Note</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {table_html_all_eleve}
                                </tbody>
                            </table>
                            <input type='submit' className="btn btn-success float-end" />
                        </form>
                        <div className="text-muted float-end m-2">vous ne pouvez pas soumettre à moins d'avoir saisi toutes les valeurs!</div>
                    </div>
                </div>
            </>

        )
    }

}
export default UpdateNotes