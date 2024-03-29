import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";
import { Route, useNavigate } from "react-router";
import * as Bs from "react-icons/bs"
import Random from "../../../assets/admin/Random";
import emailjs from '@emailjs/browser';
import { FiliereList } from "../../../assets/frontend/Filiere"; 
import "../../../assets/admin/Dropdown.css"
const AddEleve = () => {
    const navigate = useNavigate()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [user_id, setUser_id] = useState('')
    const [code, setCode] = useState('')
    const [login, setLogin] = useState('')
    const [filiere,setFiliere] = useState('')
    const [image, setImage] = useState([])
    const [niveau, setNiveau] = useState('')
    const [error_list, setError_list] = useState([])
    const [email, setEmail] = useState('')
    const [sexe, setSexe] = useState('')

    const [password, setPassword] = useState('')
    const [isOpen, setIsopen] = useState(false)
    const [isOpen1, setIsopen1] = useState(false)
    const [isOpen2, setIsopen2] = useState(false)

    useEffect(() => {
        axios.get("/api/getLastId").then(res => {
            if (res.data.status === 200) {
                setUser_id(res.data.user_id['id'])

            }
        })
    }, [])
    const NiveauList = [
        {name : 1 , id : 1} ,
        {name : 2 , id : 2} ,
    {name : 3 , id : 3} 
]
const SexeList = [
    {name : "femme" , id : 1} ,
    {name : "homme" , id : 2} ,
]
    const handleImage = (e) => {
        setImage({ image: e.target.files[0] })
        setPassword(Random)

    }
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
    const Dropdown3 = () => {
        return (
            <>
                <div
                    className={isOpen2 ? "dropdown2 active " : "dropdown2"}
                    onClick={() => setIsopen2(!isOpen2)} >
                    <div className="dropdown2__text">
                        {!sexe ? "Select Sexe " : sexe}
                    </div>
                    {isOpen2 ? SexeList.map(item => {
                            return (
                                <div className="dropdown2__item" key={item.id} value={item.sexe} onClick={() => { setSexe(item.name)} }> {item.name}</div>
                            )
                    }) : null
                    }
                </div>
            </>
        )
    }
    const SubmitRespo = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("image", image.image)
        data.append("nom", nom)
        data.append("prenom", prenom)
        data.append("user_id", user_id)
        data.append("login", login)
        data.append("niveau", niveau)
        data.append("filiere", filiere)
        data.append("code", code)
        data.append("sex", sexe)

        const dataUser = {
            "login" : login,
            "email" : email,
            "password" : password,
            "role" : 0
        }
        axios.post("/api/register" ,dataUser).then(res1 => {
            if (res1.data.status === 200){
                axios.post("/api/store_eleve", data).then(res => {
                    if (res.data.status === 200) {

                        emailjs.sendForm('service_wusyzdo', 'template_sexuqy9', e.target, 'hFVxbWiMX6RCjK4zS')
                        .then((result) => {
                            console.log(result)
                            navigate("/admin/eleves")
                            swal("Success", res.data.message, "success")
                            setError_list('/')

                        }, (error) => {
                            console.log(error.text);
                            swal("Success", "Eleve added succesfully", "success")
                            setError_list('/')
                            navigate("/admin/eleves")

                        });
                        
                    }
                    else if (res.data.status === 400) {
                        setError_list(res.data.errors)
                    }
                })
            } 
            else if (res1.data.status === 400) {
                setError_list(res1.data.errors)
            }
        } 
        )
    }


    return (
        <div className="container-fluid px-4">
            <div className="">
            <div className="card-header "  >
            <h1 className="m-1 p-2"> Add Eleve</h1>
            <Link to="/admin/eleves" className="btn  btn-small float-end"><Bs.BsReverseBackspaceReverse style={{ fill: "#008080" }} size={25} /></Link>
            </div>
            <div className="card-body">
            <form onSubmit={SubmitRespo}>
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
                        <Dropdown3/>
                        <div className="form-group m-3">
                            <label>Login</label>
                            <input type="text" className="form-control" onChange={e => setLogin(e.target.value)} value={login} name="login"/>
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.login}</span>

                        </div>
                        <div className="form-group m-3">
                            <label>Email</label>
                            <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} value={email} name="email"/>
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.email}</span>

                        </div>
                        <Dropdown/>
                        <Dropdown2/>
                        <span className="text-danger fw-light d-flex justify-content-start">{error_list.filiere}</span>

                        <div className="form-group m-3">
                            <label>Image</label>
                            <input type="file" className="form-control" onChange={handleImage} name="image"/>
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.image}</span>

                        </div>
                <span className="text-muted m-3">En creant un etudiant on cree aussi un utilisateur avec le login saisi est une mot de passe qui va etre 
                 envoyee automatiquement par un email !!!
                </span>
                <input type="hidden" className="form-control" value={password} name="password"/>

                <button type="submit" className="btn1  p-2 float-end" style={{"width" : "180px"}}  value="Send" >Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}
export default AddEleve