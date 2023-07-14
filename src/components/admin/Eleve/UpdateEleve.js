import React, { useEffect } from "react";
import { Link  , useParams} from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";
import { Route, useNavigate } from "react-router";
import * as Bs from "react-icons/bs"
import Random from "../../../assets/admin/Random";
import { FiliereList } from "../../../assets/frontend/Filiere"; 
import "../../../assets/admin/Dropdown.css"
const UpdateEleve = () => {
    const navigate = useNavigate()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [code, setCode] = useState('')
    const [filiere,setFiliere] = useState('')
    const [niveau, setNiveau] = useState('')
    const [error_list, setError_list] = useState([])
    const [isOpen, setIsopen] = useState(false)
    const [isOpen1, setIsopen1] = useState(false)
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    const NiveauList = [
        {name : 1 , id : 1} ,
        {name : 2 , id : 2} ,
    {name : 3 , id : 3} 
]


    const Dropdown = () => {
        return (
            <>
                <div
                    className={isOpen ? "dropdown2 active " : "dropdown2"}
                    onClick={() => setIsopen(!isOpen)} >
                    <div className="dropdown2__text">
                        {!filiere ? "Select Filiere" : filiere}
                    </div>
                    {isOpen ? FiliereList.map(item => {
                            return (
                                <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setFiliere(item.name)} }> {item.name}</div>
                            )
                    }) : null
                    }
                </div>
            </>
        )
    }
    const Dropdown2 = () => {
        return (
            <>
                <div
                    className={isOpen1 ? "dropdown2 active " : "dropdown2"}
                    onClick={() => setIsopen1(!isOpen1)} >
                    <div className="dropdown2__text">
                        {!niveau ? "Select Niveau" : niveau}
                    </div>
                    {isOpen1 ? NiveauList.map(item => {
                            return (
                                <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setNiveau(item.name)} }> {item.name}</div>
                            )
                    }) : null
                    }
                </div>
            </>
        )
    }
    useEffect(()=>{

        axios.get(`/api/edit_eleve/${id}`).then(res => {
            if(res.data.status === 200 ){
                setNom(res.data.eleve.nom)
                setPrenom(res.data.eleve.prenom)
                setCode(res.data.eleve.code)
                setFiliere(res.data.eleve.filiere)
                setNiveau(res.data.eleve.niveau)
            }
            else if( res.data.status === 422 ){
                swal("Error" , res.data.message , "error")
                navigate("/admin/view_respo")
            }
            setLoading(false)
        })
    },[id])
  
    const SubmitEleve = (e) => {
        e.preventDefault()
      const  data = {
           "nom" : nom,
           "prenom" : prenom,
           "code" : code,
           "filiere" : filiere,
           "niveau" : niveau
       }

                axios.put(`/api/update_eleve/${id}`, data).then(res => {
                    if (res.data.status === 200) {
                        swal("Success",res.data.message,"success")
                        navigate("/admin/eleves")
                    }
                    else if (res.data.status === 400) {
                        setError_list(res.data.errors)
                    }
                })
            } 
        

            if (loading) {
                return (
                    <h4>Eleve infos loading...</h4>
                )
            }
            else{
    return (
        <div className="container-fluid px-4">
            <div className="">
            <div className="card-header "  >
            <h1 className="m-1 p-2"> Update Eleve</h1>
            <Link to="/admin/eleves" className="btn  btn-small float-end"><Bs.BsReverseBackspaceReverse style={{ fill: "#008080" }} size={25} /></Link>
            </div>
            <div className="card-body">
            <form onSubmit={SubmitEleve}>
            <div className="form-group m-3">
                            <label>Code</label>
                            <input type="text" name="name" onChange={e => setCode(e.target.value)} value={code} className="form-control" />
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.code}</span>

                        </div>
                    <div className="form-group m-3">
                            <label>Nom</label>
                            <input type="text" name="name" onChange={e => setNom(e.target.value)} value={nom} className="form-control" />
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.nom}</span>

                        </div>
                        <div className="form-group m-3">
                            <label>Presnom</label>
                            <input type="text" name="slug" onChange={e => setPrenom(e.target.value)} className="form-control" value={prenom} />
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.prenom}</span>

                        </div>
                        <Dropdown/>
                        <span className="text-danger fw-light d-flex justify-content-start">{error_list.niveau}</span>
                        <Dropdown2/>
                        <span className="text-danger fw-light d-flex justify-content-start">{error_list.filiere}</span>
                <button type="submit" className="btn1  p-2 float-end" style={{"width" : "180px"}}  value="Send" >Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}
}
export default UpdateEleve