import React, { useEffect, useState } from "react";
import "../../../assets/admin/Dropdown.css"
import { Link, useNavigate } from "react-router-dom";
import * as Ai from "react-icons/ai"
import * as Bs from "react-icons/bs"
import axios from "axios";

const AddNotes = () => {

    const navigate = useNavigate()
    const [niveau, setNiveau] = useState('1')
    const [module, setModule] = useState(1)
    const [element, setElement] = useState(1)
    const [isOpen1, setIsopen1] = useState(false)
    const [isOpen2, setIsopen2] = useState(false)
    const [isOpen3, setIsopen3] = useState(false)
    const [moduleDes , setModuleDes] = useState()
    const [elementDes , setElementDes] = useState()
    const [filiere , setFiliere] = useState('')
    const [moduleList , setModuleList] = useState([])
    const [elementList , setElementList] = useState([])
    const [ loading , setLoading ] = useState(true)
    useEffect(() => {
        axios.get(`/api/profilerespo`).then(res => {
            if (res.data.status === 200) {
                setFiliere(res.data.Respo.filiere)
            }
            setLoading(false)
        })
    }, [])
    const NiveauList = [
        { name: 1, id: 1 },
        { name: 2, id: 2 },
        { name: 3, id: 3 },
    ]
    const getModule = () => {
      
       if(filiere && niveau){
           axios.get(`/api/getModules/${filiere}/${niveau}`).then(res => {
        if (res.data.status === 200) {
            setModuleList(res.data.module)
        }
    })} 
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
    if(loading){
        return(
            <>Loading...
            </>
        )
    }
    else{
        return (
            <>
                <div  style={{"margin" :"100px"}} >
                <h3 style={{ "color": "#f4623a" }} className="text-center " >Veilluez choisir le niveau, le module et l'element du module </h3>
                    <div className="row d-flex  justify-content-center" >
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-lg-4 mx-5 p-3 " >
                        <form className="mx-5" style={{"borderLeft": "solid 5px #f4623a"  }}>
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
                            <Link to={"/respo/notes_element/"+ element} className="btn m-3  " title="Voir"> <Ai.AiOutlineEye style={{ fill: "green" }} size={45} /></Link>
                            <Link to={"/respo/insert_notes/" + filiere + "/" + niveau + "/" + module + "/"+element} className="btn m-3 " title="Inserer"> <Ai.AiOutlineFileAdd style={{ fill: "#008080" }} size={40} /></Link>
                            <Link to={"/respo/update_notes/"+ element} className="btn m-3" title="Modifier"> <Bs.BsPencilSquare style={{ fill: "red" }} size={45} /></Link>
    
                            </form>
                        </div>
                        <div className="col-md-3"></div>
    
                    </div>
                </div>
            </>
        )
    }
}
export default AddNotes