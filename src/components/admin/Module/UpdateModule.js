import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";
import { Route, useNavigate } from "react-router";
import * as Bs from "react-icons/bs"
import "../../../assets/admin/Dropdown.css"
import { FiliereList } from "../../../assets/frontend/Filiere"; 
import { Niveau } from "../../../assets/frontend/Niveau";
import { useParams } from "react-router-dom";
const UpdateModule = () => {

    const {id} = useParams()

    useEffect(()=>{

        axios.get(`/api/edit_module/${id}`).then(res => {
            if(res.data.status === 200 ){
                setCode(res.data.module.code)
                setDesignation(res.data.module.designation)
                if(res.data.module.niveau )
                setNiveau(res.data.module.semestre)
                setFiliere(res.data.module.filiere)
            }
            else if( res.data.status === 422 ){
                swal("Error" , res.data.message , "error")
                navigate("/admin/view_filiere")
            }
            setLoading(false)
        })
    },[id])

    const navigate = useNavigate()
    const [code,setCode] = useState('')
    const [designation, setDesignation] = useState('')
    const [niveau, setNiveau] = useState('')
    const [loading,setLoading] = useState('')
    const [filiere,setFiliere] = useState('')
    const [error_list, setError_list] = useState([])
    const [isOpen, setIsopen] = useState(false)
    const [isOpen1, setIsopen1] = useState(false)

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
                    {isOpen1 ? Niveau.map(item => {
                            return (
                                <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setNiveau(item.name)} }> {item.name}</div>
                            )
                    }) : null
                    }
                </div>
            </>
        )
    }
    const SubmitModule = (e) => {
        e.preventDefault()
        const data = {
            "designation" : designation,
            "code" : code,
            "niveau": niveau,
            "filiere":filiere
        }
   
        axios.put(`/api/update_module/${id}`, data).then(res => {
            if(res.data.status === 200 ){
                swal("Success",res.data.message,"success")
                navigate("/admin/view_modules")
            }
            else if(res.data.status === 400){
                setError_list(res.data.errors)
            }
        })
    }


    return (
        <div className="container-fluid px-4">
            <div className="">
            <div className="card-header "  >
            <h1 className="m-1 p-2"> Update Module</h1>
            <Link to="/admin/view_modules" className="btn  btn-small float-end"><Bs.BsReverseBackspaceReverse style={{ fill: "#008080" }} size={25} /></Link>
            </div>
            <div className="card-body">
            <form onSubmit={SubmitModule}>
                    <div className="form-group m-3">
                            <label>Code</label>
                            <input type="text" name="name" onChange={e => setCode(e.target.value)} value={code} className="form-control" />
                            <span style={{ color: "red" }}>{error_list.nom}</span>
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.code}</span>

                        </div>
                        <div className="form-group m-3">
                            <label>Designation</label>
                            <input type="text" name="slug" onChange={e => setDesignation(e.target.value)} className="form-control" value={designation} />
                            <span style={{ color: "red" }}>{error_list.prenom}</span>
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.designation}</span>

                        </div>
                        <Dropdown/>
                        <span className="text-danger fw-light d-flex justify-content-start">{error_list.filiere}</span>
                        <Dropdown2/>
                        <span className="text-danger fw-light d-flex justify-content-start">{error_list.niveau}</span>
                <button type="submit" className="btn1  p-2 float-end" style={{"width" : "180px"}}  value="Send" >Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}
export default UpdateModule