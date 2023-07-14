import axios from "axios";
import { useEffect, useState } from "react";
import * as Ai from "react-icons/ai"
import * as Bi from "react-icons/bi"
import * as Bs from "react-icons/bs"
import * as Fc from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const EditProfile = () => {
    const [phone, setPhone] = useState('')
    const [adrresse, setAdrresse] = useState('')
    const [date_nais, setDate_nais] = useState('')
    const [about, setAbout] = useState('')
    const [loading, setLoading] = useState(true)
    const [image , setImage] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/api/profile${localStorage.getItem('role')}`).then(res => {
            if (res.data.status === 200) {
                if(res.data.eleve){
                    setAbout(res.data.eleve.about)
                    setAdrresse(res.data.eleve.adresse)
                    setDate_nais(res.data.eleve.date_nais)
                    setPhone(res.data.eleve.phone)
                    setImage(res.data.eleve.image)
                    setLoading(false)
                }
                if(res.data.Respo){
                    setAbout(res.data.Respo.about)
                    setAdrresse(res.data.Respo.adresse)
                    setDate_nais(res.data.Respo.date_nais)
                    setPhone(res.data.Respo.phone)
                    setImage(res.data.Respo.image)
                    setLoading(false)
                }

                
            }
        })
    }, [])
    const SubmitUpdate = (e) => {
        e.preventDefault()
        const data = {
            'phone' : phone,
            'adresse' : adrresse,
            'about' : about,
            'date_nais' : date_nais
        }
        axios.put(`/api/change_info_${localStorage.getItem('role')}` , data).then(res => {
            if(res.data.status === 200){
                swal("Success", "Modifications bien enregistrees" , "success")
                navigate("/eleve/profile")
            }
        })
    }
    if(loading){
        return(
            <div>Eleve infos loading...</div>
        )
    }
    else{
    return (
        <>
            <div className="login-block container my-5">
                <h1 style={{ "color": "#f4623a" }} className="my-5">Modifications de votre informations personnelles</h1>
                <div className="row">
                    <div className="col-md-6 my-5">
                    <img src={`http://localhost:8000/${image}`} alt="..." width= "400px"/>
                    </div>

                    <div className="col-md-6">
                        <form style={{ "marginTop": "50px" }} onSubmit={SubmitUpdate}>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><Ai.AiOutlinePhone fill="grey" /></span>
                                    <input type="text" className="form-control" placeholder="Phone.." value={phone} onChange={e => { setPhone(e.target.value) }} />
                                </div>
                            </div>
                            <hr className="hr-xs" />
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><Bi.BiLocationPlus fill="grey" /></span>
                                    <input type="text" className="form-control" placeholder="Adrersse.." value={adrresse} onChange={e => { setAdrresse(e.target.value)}} />
                                </div>
                            </div>

                            <hr className="hr-xs" />
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><Bs.BsFillCalendarDateFill fill="grey" /></span>
                                    <input type="date" className="form-control" placeholder="Date de naissance.." value={date_nais} onChange={e => { setDate_nais(e.target.value) }} />
                                </div>
                            </div>
                                <hr className="hr-xs" />
                                <div className="form-group ">
                                    <div className="input-group">
                                        <span className="input-group-addon"><Fc.FcAbout fill="grey" /></span>
                                        <textarea className="form-control" placeholder="À propos de moi.." onChange={e => { setAbout(e.target.value) }} rows="10" defaultValue={about}></textarea>
                                    </div>
                                </div>
                                <hr className="hr-xs" />
                            <input className="btn btn-warning btn-lg my-4" type="submit" style={{ "backgroundColor": "#f4623a", "color": "white" }} value="Submit" />

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
    }
}
export default EditProfile