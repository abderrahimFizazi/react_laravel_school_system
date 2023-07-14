import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Ai from "react-icons/ai"
import moment from "moment";
import "../../../assets/admin/Dropdown.css"
import { useNavigate } from "react-router-dom";

const Eleve = () => {
    const [elevelist, setElevelist] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const [filiere, setFiliere] = useState('AP')
    const [niveau, setNiveau] = useState('1')
    const [isOpen, setIsopen] = useState(false)
    const [isOpen1, setIsopen1] = useState(false)
    const [searchEleve, setSearchEleve] = useState('')
    const [title, setTitle] = useState('')
    const [error, SetError] = useState('')
    const [display, setDisplay] = useState(false)
    const [displaySearch, setDisplaySearch] = useState(false)
    //temp variables 
    const [elv,setElv] = useState('')
    const [niv , setNiv] = useState('')
    const [fil,setFil] = useState('')
    const NiveauList = [
        { name: 1, id: 1 },
        { name: 2, id: 2 },
        { name: 3, id: 3 },
        { name: "All", id: 4 }
    ]
    const FiliereList = [
        {
            name: "AP",
            id: "1",
        },
        {
            name: "GINF",
            id: "2"
        },
        {
            name: "GIL",
            id: "3",
        },
        {
            name: "GSEA",
            id: "4"
        },
        {
            name: "G3EI",
            id: "5",
        },
        {
            name: "All",
            id: "6"
        },

    ]
    const SubmitEleve = (e) => {
        e.preventDefault()
        SetError("")
        setFil(filiere)
        setNiv(niveau)
        setDisplaySearch(false)
        setDisplay(false)
        if (filiere == 'AP' && niveau == '3') {
            setDisplay(false)
            setDisplaySearch(false)
            SetError("Class Doesnt exist*")
        }
        else {
            axios.get(`/api/eleves/${filiere}/${niveau}`).then(res => {
                if (res.data.status === 200) {
                    if (res.data.eleve.length) {
                        setElevelist(res.data.eleve)
                        SetError("")
                        setDisplay(true)
                    }
                    else {
                        setDisplay(false)
                        SetError("Class Vide*")
                    }

                }
            }
            )
        }
    }
    const submitSearch = (e) => {
        e.preventDefault()
        SetError("")
        setDisplay(false)
        setDisplaySearch(false)
        setElv(searchEleve)
        if (searchEleve === '') {
            SetError("Svp Saisir le nom/prenom ou Code*")
        }
        else if (searchEleve.length < 4) {
            SetError("Svp veillez saisir plus de 3 caracteres*")

        }
        else {
            setDisplaySearch(false)
            axios.get(`/api/search/${searchEleve}`).then(res => {
                if (res.data.status === 200) {
                    if (res.data.eleve.length) {
                        setElevelist(res.data.eleve)
                        SetError("")
                        setDisplay(false)
                        setDisplaySearch(true)

                    }
                    else {
                        setDisplay(false)
                        SetError("il n'y a pas de tels étudiants avec les informations que vous avez saisies*" )
                 }

                }
            }
            )
        }
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
                            <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setFiliere(item.name) }}> {item.name}</div>
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
                            <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setNiveau(item.name) }}> {item.name}</div>
                        )
                    }) : null
                    }
                </div>
            </>
        )
    }
    var table_html_all_eleve
    if (loading) {
        return (
            <h4>Eleve list loading...</h4>
        )
    }
    else {
        table_html_all_eleve = elevelist.reverse().map(item => {
            return (
                <tr key={item.id}>
                    <td className="text-center">{item.nom} </td>
                    <td className="text-center">{item.prenom} </td>
                    <td className="text-center">{item.code} </td>
                    <td className="text-center">{item.filiere} </td>
                    <td className="text-center">{item.niveau} </td>
                    <td className="text-center"><Link to={`/admin/update_eleve/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                    <td className="text-center"><Link to="#" onClick={e => DeleteEleve(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                </tr>
            )
        })
        const DeleteEleve = (e, id) => {
            e.preventDefault()
            const thisClicked = e.currentTarget
            swal(" You really want to delete this post", {
                buttons: {
                    cancel: true,
                    DeleteEleve: true,
                },
            }).then(DeleteEleve => {
                if (DeleteEleve) {
                    thisClicked.innerText = "Deleting..."
                    axios.delete(`/api/destroy_eleve/${id}`).then(res => {
                        if (res.data.status === 200) {
                            thisClicked.closest("tr").remove()
                        }
                        else if (res.data.status === 404) {
                            thisClicked.innerText = "Deleting..."
                        }
                    })
                }
            });
        }
    }
    
    const dataSearch = displaySearch ? <>
        <div>
            <h3 className="my-3" style={{"color" : "lightgrey"}}>Résultats de la recherche de :<span style={{"color": "orange"}}> "{elv}"</span></h3>
        </div>
        <table className="table table-bordered  table-hover">
            <thead>
                <tr>
                    <th>Nom </th>
                    <th>Prenom </th>
                    <th>Code</th>
                    <th> Filiere </th>
                    <th>Niveau </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {table_html_all_eleve}
            </tbody>
        </table>
    </> : null
    const dataEleve = display ? <>
        <div className="row">
            <div className="col-md-3 mx-3">
                <h3 style={{"color":"lightgrey"}}>Filiere : <span style={{"color":"orange"}}>"{fil}"</span></h3>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-3">
                <h3 style={{"color":"lightgrey"}}>Niveau : <span  style={{"color":"orange"}} >"{niv}" </span></h3>
            </div>
        </div>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Nom </th>
                    <th>Prenom </th>
                    <th>Code</th>
                    <th> Filiere </th>
                    <th>Niveau </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {table_html_all_eleve}
            </tbody>
        </table>
    </> : null
    return (
        <div className="">
            <div className="row">
                <div className="col-lg-4 col-md-6" >
                    <div className="sideBar sticky-md-top p-5">
                        <h5 className="m-4">Search for student : </h5>

                        <form className="my-2" onSubmit={submitSearch}>
                            <input type='text' className="form-control" value={searchEleve} onChange={e => setSearchEleve(e.target.value)} placeholder="Enter nom/prenom or code" />
                            <input type='submit' className="btn btn-success my-3" value="Search for student" />
                        </form>
                        <hr />
                        <h5 className="m-2">Search for class : </h5>
                        <form className="form-inline" onSubmit={SubmitEleve}>
                            <div className=" form-group">
                                <Dropdown />
                            </div>
                            <div className=" form-group">
                                <Dropdown2 />
                            </div>
                            <div className="form-group">
                                <input type='submit' className=" btn btn-success my-3" value="Search for class" />
                            </div>
                        </form>
                        <hr />

                        <h5 className="m-4" >Add Eleve : </h5>
                        <Link to="/admin/add_eleve" className="btn btn-success  mx-5" >Add Eleve</Link>
                    </div>
                </div>
                <div className="col-lg-8  col-md-6">
                    <h2 className="text-danger fw-light d-flex justify-content-center  ">{error}</h2>
                    {dataEleve}
                    {dataSearch}
                </div>


            </div>
        </div>


    )
}
export default Eleve;