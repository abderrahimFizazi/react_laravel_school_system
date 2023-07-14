import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Bs from "react-icons/bs"
import swal from "sweetalert";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const NoteView = () => {
    const { element } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [elementM, setElementM] = useState([])
    const [moduleInfo, setModuleInfo] = useState([])
    const [elementInfo, setElementInfo] = useState([])
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
                <td className="text-center">{item.note} </td>

            </tr>
        )
    })

    const status = localStorage.getItem('role') === 'admin' ? 'admin' : 'respo'


    if (loading) {
        return (
            <div>Notes list loading...</div>
        )
    }
    else {
        return (
            <>
                <div className="row my-5">
                    <div className="col-lg-3 col-md-6" >
                        <div className="sideBar sticky-md-top p-5 ">
                            <Link to={"/"+status+"/notes"} className="btn  btn-small float-end"><Bs.BsReverseBackspaceReverse style={{ fill: "#008080" }} size={25} /></Link> <br />
                            {note[0]  ?   <><div className="fs-4 my-3 d-flex mx-5 text-success "> Les Notes de: </div><div className="fs-5 d-flex mx-5"> Filiere: {note[0].element_module.module.filiere} </div><div className=" fs-5  d-flex mx-5"> Niveau: {note[0].element_module.module.niveau} </div><div className=" fs-5 d-flex mx-5"> Module: {note[0].element_module.module.designation}</div><div className="fs-5 d-flex mx-5"> Element: {note[0].element_module.designation}</div><div className="fs-5 d-flex mx-5"> Pois: {note[0].element_module.poids}</div><div className="fs-5 d-flex mx-5"> VH: {note[0].element_module.vh}h</div></> : null }
                            <ReactHTMLTableToExcel
                                id="walo"
                                className="btn btn-success float-end my-5"
                                table="my_table"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="Download as XLS" />

                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 my-3" >
                    <Link to={"/respo/update_notes/"+ element} className="btn btn-secondary my-2 float-end" title="Modifier">modfier</Link>
                        <table className="table table-bordered table-hover" id="my_table">
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
                    </div>
                </div>
            </>

        )
    }

}
export default NoteView