import React, { useState } from "react";
import "../../../assets/admin/Dropdown.css"
import { Link, useNavigate } from "react-router-dom";
import * as Ai from "react-icons/ai"
import * as Bs from "react-icons/bs"
import axios from "axios";

const IndexNotesInsert = () => {
    const navigate = useNavigate()
    const [filiere, setFiliere] = useState('AP')
    const [niveau, setNiveau] = useState('1')
    const [module, setModule] = useState(1)
    const [element, setElement] = useState(1)
    const [isOpen, setIsopen] = useState(false)
    const [isOpen1, setIsopen1] = useState(false)
    const [isOpen2, setIsopen2] = useState(false)
    const [isOpen3, setIsopen3] = useState(false)
    const [moduleDes , setModuleDes] = useState()
    const [elementDes , setElementDes] = useState()

    const [moduleList , setModuleList] = useState([])
    const [elementList , setElementList] = useState([])

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
    const getModule = () => {
      
        if(filiere && niveau){
            axios.get(`/api/getModules/${filiere}/${niveau}`).then(res => {
         if (res.data.status === 200) {
             setModuleList(res.data.module)
         }
     })} 
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
                            <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setFiliere(item.name) ;  getModule() }}> {item.name}</div>
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
                            <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setNiveau(item.name); getModule() }}> {item.name}</div>
                        )
                    }) : null
                    }
                </div>
            </>
        )
    }
    const getElemnt = (id ) => {
        axios.get(`/api/getElements/${id}`).then(res => {
            if (res.data.status === 200) {
                setElementList(res.data.element)

            }
        })
    }
    const Dropdown3 = () => {
        return (
            <>
                <div
                    className={isOpen2 ? "dropdown2 active " : "dropdown2"}
                    onClick={() => setIsopen2(!isOpen2)} >
                    <div className="dropdown2__text">
                        {!moduleDes ? "Select Module" : moduleDes}
                    </div>
                    {isOpen2 ? moduleList.map(item => {
                        return (
                            <div className="dropdown2__item" key={item.id} value={item.designation} onClick={() => { setModule(item.id) ; getElemnt(item.id); setModuleDes(item.designation)} }> {item.designation}</div>
                        )
                    }) : null
                    }
                </div>
            </>
        )
    }

    const Dropdown4 = () => {
        return (
            <>
                <div
                    className={isOpen3 ? "dropdown2 active " : "dropdown2"}
                    onClick={() => setIsopen3(!isOpen3)} >
                    <div className="dropdown2__text">
                        {!elementDes ? "Select Element" : elementDes}
                    </div>
                    {isOpen3 ? elementList.map(item => {
                        return (
                            <div className="dropdown2__item" key={item.id} value={item.designation} onClick={() => { setElement(item.id) ; setElementDes(item.designation) }}> {item.designation}</div>
                        )
                    }) : null
                    }
                </div>
            </>
        )
    }
    return (
        <>
            <div className="bg-light " >
            <div className="fs-1 text-center my-3 p-2" style={{"color": "#008080"}}>Voir/Inserer Notes</div>
                <div className="row d-flex  justify-content-center" >
                    <div className="col-md-3"></div>
                    <div className="col-md-6 col-lg-4 mx-5 p-3 " >
                    <form className="mx-5" style={{"borderLeft": "solid 2px #008080" , "box-shadow":" 7px 5px 10px #008080" }}>
                        <div className="m-4">
                        <span className="text-muted">   Selectionnez la filiere :</span>
                        <Dropdown />
                            </div>
                            <div className="m-4">
                           <span className="text-muted"> Selectionnez la Niveau :</span>
                        <Dropdown2/>
                            </div>
                            <div className="m-4">
                            <span className="text-muted">  Selectionnez la Module : </span>
                        <Dropdown3/>
                            </div>
                            <div className="m-4">
                            <span className="text-muted">  Selectionnez la Element : </span>
                        <Dropdown4/>
                            </div>
                        <Link to={"/admin/notes_element/"+ element} className="btn m-3  " title="Voir"> <Ai.AiOutlineEye style={{ fill: "green" }} size={45} /></Link>
                        <Link to={"/admin/insert_notes/" + filiere + "/" + niveau + "/" + module + "/"+element} className="btn m-3 " title="Inserer"> <Ai.AiOutlineFileAdd style={{ fill: "#008080" }} size={40} /></Link>
                        <Link to={"/admin/update_notes/"+ element} className="btn m-3" title="Modifier"> <Bs.BsPencilSquare style={{ fill: "red" }} size={45} /></Link>

                        </form>
                    </div>
                    <div className="col-md-3"></div>

                </div>
            </div>
        </>
    )
}
export default IndexNotesInsert