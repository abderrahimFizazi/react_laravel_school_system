import "../../../assets/frontend/login.css"
import Pic from "../../../assets/frontend/pic/ensat4.jpg"
import * as Fa from "react-icons/fa"
import * as Ai from "react-icons/ai"
import * as Ri from "react-icons/ri"
import { useEffect, useState } from "react"
import axios from "axios"
import {  useNavigate } from "react-router-dom"

const Verified = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordc, setNewPasswordc] = useState('')
    const [error_list, setError_list] = useState([])
    const [invalid, setInvalid] = useState('')
    const navigate = useNavigate()
    const [matchError , setMatchError] = useState('')
    const [isVerified , setIsVerified] = useState(false)
    const [loading ,setLoading ] =  useState(0)
    useEffect(() => {
        axios.get(`/api/isVerify`).then(res => {
            if (res.data.status === 200) {
                setIsVerified(res.data.verified)
            }
            setLoading(false)
        })
    }, [])
    const submitChange = (e) => {
        e.preventDefault();
        if(newPassword === newPasswordc){
            const data = {
                'oldPassword' : password,
                'newPassword' : newPassword
            }
            axios.put("/api/change_pass", data).then(res => {
                if (res.data.status === 200) {
                  const role =  localStorage.getItem("role")
                        if (role=== 'admin') {
                            navigate('/admin')
                        }
                        if (role=== 'eleve') {
                            navigate('/eleve')
                        }
                        if (role=== 'respo') {
                            navigate('/respo')
                        }
                }
                else if (res.data.status === 400) {
                    setError_list(res.data.errors)
                }
                else if (res.data.status === 403 || res.data.status === 401 ) {
                    setInvalid(res.data.message)
                    setError_list('/')
                }

            })
        }
        else{
            setMatchError("Passwords are not matching!")
        }

    }
    if(loading){
        return(
            <div>
                Loading info...
            </div>
        )
    }
    else{
        return (
            <main>
    
                <div className="login-block container my-5">
                   {isVerified ?
                   <h1 style={{ "color": "#f4623a" }} className="my-5"> Veuillez choisir une mot de passe forte</h1>
                   : <h1 style={{ "color": "#f4623a" }} className="my-5">Veuillez changer votre mot de passe</h1>}
    
                    <div className="row">
    
                        <div className="col-md-6">
                            <div style={{ "color": "red" }}>{invalid}</div>
                                <form style={{ "marginTop": "100px" }} onSubmit={submitChange}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><Ri.RiLockPasswordLine fill="grey" /></span>
                                            <input type="password" className="form-control" placeholder="Current Password.." value={password} onChange={e => { setPassword(e.target.value); setError_list(''); setInvalid('') }} />
    
                                        </div>
                                    </div>
                                    <hr className="hr-xs" />
                                    <span className="text-danger fw-light d-flex justify-content-start">{error_list.oldPassword}</span>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><Ri.RiLockPasswordLine fill="grey" /></span>
                                            <input type="password" className="form-control" placeholder="New Password.." value={newPassword} onChange={e => { setNewPassword(e.target.value); setError_list(''); setInvalid('') }} />
                                        </div>
                                    </div>
                                    <hr className="hr-xs" />
                                    <span className="text-danger fw-light d-flex justify-content-start">{error_list.newPassword}</span><br/>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><Ri.RiLockPasswordLine fill="grey" /></span>
                                            <input type="password" className="form-control" placeholder="Confirmed New Password.." value={newPasswordc} onChange={e => { setNewPasswordc(e.target.value); setError_list(''); setInvalid('') }} />
                                        </div>
                                    </div>
                                    <hr className="hr-xs" />
                                    <span className="text-danger fw-light d-flex justify-content-start">{error_list.newPassword}</span>
                                    <span className="text-danger fw-light d-flex justify-content-start">{matchError}</span><br/>
    
                                    <input className="btn btn-warning btn-lg my-4" type="submit" style={{ "backgroundColor": "#f4623a", "color": "white" }} value="Submit" />
    
                                </form>
                            <div className="login-footer">
                                <h6>Suivez-nous sur</h6>
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><Fa.FaFacebook /></a></li>
                                    <li><a className="twitter" href="#"><Ai.AiFillInstagram /></a></li>
                                    <li><a className="linkedin" href="#"><Ai.AiFillLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <img src={Pic} alt="Scanfcode" className=" rounded img-fluid" />
                        </div>
                    </div>
    
                </div>
            </main>
        )
    }
 
}
export default Verified