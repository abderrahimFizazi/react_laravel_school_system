import axios from "axios";
import * as ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Bs from "react-icons/bs"
import swal from "sweetalert"

const InsertNotes = () => {
    const { filiere, niveau , element , module} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [elevesList, setEleveslist] = useState([])
    const [moduleInfo , setModuleInfo] = useState([])
    const [elementInfo , setElementInfo] = useState([])
    useEffect(() => {
        axios.get(`/api/eleves/${filiere}/${niveau}`).then(res => {
            if (res.data.status === 200) {
                setEleveslist(res.data.eleve)
            }
        }
        )
        axios.get(`/api/edit_module/${module}`).then(res => {
            if (res.data.status === 200) {
                setModuleInfo(res.data.module)
            }
        })
        axios.get(`/api/edit_element/${element}`).then(res => {
            if (res.data.status === 200) {
                setElementInfo(res.data.element)
                setLoading(false)

            }
        })
    }, [])
    var table_html_all_eleve = elevesList.reverse().map(item => {
        let index = 0;
        for (index = 0; index < item.note.length; index++) {
            if(item.note[index].element_module_id == elementInfo.id) {break;}
        }
        if(index === item.note.length ) {
            return (
                <tr key={item.id} >
                    <td className="text-center">{item.nom} </td>
                    <td className="text-center">{item.prenom} </td>
                    <td className="text-center">{item.code} </td>
                    <td className="text-center" > <input type='number' placeholder="Insert.."  min="0" max="20" 
                    value={item.note}
                    onChange={(e) => {
                      item.note = e.target.value;
                      setEleveslist([...elevesList]);
                    }} /> </td>
                </tr>
            )
        }
    })
    const status = localStorage.getItem('role') === 'admin' ? 'admin' : 'respo'
    const submitNote = (e) => {
        e.preventDefault()
            const data = elevesList.map((item) =>  ({ eleve_id : item.id , note : item.note , element_module_id : element }))
                data.map(item => {
                    axios.post("/api/store_note" , item).then(res => {
                        if(res.data.status === 200){
                        }
                    })
                
            }
                  )
                  navigate("/"+status+"/notes_element/"+ element)
                  swal("Success", "Notes added successfully ", "success")
    
    }

    if (loading) {
        return (
            <div>Eleves list loading...</div>
        )
    }
    else {
        return (
            <>
            <div className="row my-5">
                <div className="col-lg-3 col-md-6" >

                    <div className="sideBar sticky-md-top p-5 ">

                    <Link to={"/"+status+"/notes"} className="btn  btn-small float-end"><Bs.BsReverseBackspaceReverse style={{ fill: "#008080" }} size={25} /></Link> <br/>
                           <div className="fs-4 my-3 d-flex mx-5 " style={{"color" : "orange"}}> Insertion des notes </div>
                           <div className="fs-5 d-flex mx-5"> Filiere : {filiere}</div>
                           <div className=" fs-5  d-flex mx-5"> Niveau : {niveau}</div>
                           <div className=" fs-5 d-flex mx-5"> Module : {moduleInfo.designation}</div>
                           <div className="fs-5 d-flex mx-5"> Element : {elementInfo.designation}</div>
                           <div className="fs-5 d-flex mx-5"> Pois : {elementInfo.poids}</div>
                           <div className="fs-5 d-flex mx-5"> VH : {elementInfo.vh}h</div>
                        </div>
                </div>
                <div className="col-lg-8 col-md-6 my-3" >
                <Link to={"/respo/update_notes/"+ element} className="btn btn-secondary my-2 float-end" title="Modifier"> Modifier</Link>
              <form onSubmit={submitNote}>
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
                        {table_html_all_eleve }
                    </tbody>
                </table>
                <input type='submit' className="btn btn-success float-end"/>
                </form> 
                <div className="text-success my-5">Si le tableau est vide, cela signfie que vous avez saisi toutes les notes (ou bien il n'y a pas d'eleves disponibles pour cette classe pour le moment)</div>
                </div>
                </div>
            </>

        )
    }

}
export default InsertNotes