import "../../assets/frontend/login.css"
import Pic from "../../assets/frontend/pic/ensat.jpg"
import * as Fa from "react-icons/fa"
import * as Ai from "react-icons/ai"
import * as Ri from "react-icons/ri"
import { useState } from "react"
import axios from "axios"
import {  useNavigate } from "react-router-dom"

const LoginFront = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [error_list, setError_list] = useState([])
    const [invalid, setInvalid] = useState('')
    const navigate = useNavigate()
    const submitLogin = (e) => {
        e.preventDefault();
        const data = {
            login: login,
            password: password
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("/api/login", data).then(res => {
                if (res.data.status === 200 || res.data.status === 201) {
                    localStorage.setItem("auth_token", res.data.token)
                    localStorage.setItem("auth_login", res.data.login)
                    localStorage.setItem("role", res.data.role)
                    if (res.data.status === 200) {
                       navigate("/")
                    }
                    else {
                        navigate('/'+ res.data.role +'/verifyAccount')
                    }
                }
                else if (res.data.status === 401) {
                    setError_list(res.data.validation_errors)
                }
                else if (res.data.status === 403) {
                    setInvalid(res.data.message)
                    setError_list('/')
                }
            })
        })
    }
    return (
        <main>

            <div className="login-block container my-5">
                <h1 style={{ "color": "#f4623a" }} className="my-5">Connectez-vous à votre compte</h1>

                <div className="row">
                    <div className="col-md-6 ">
                        <img src={Pic} alt="Scanfcode" className=" rounded img-fluid" />
                    </div>

                    <div className="col-md-6">
                        <div style={{ "color": "red" }}>{invalid}</div>
                        <form style={{ "marginTop": "100px" }} onSubmit={submitLogin}>
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.login}</span>

                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><Ai.AiOutlineUser fill="grey" /></span>
                                    <input type="text" className="form-control" placeholder="Login.." value={login} onChange={e => { setLogin(e.target.value); setInvalid(''); setError_list('') }} />
                                </div>
                            </div>
                            <hr className="hr-xs" />
                            <span className="text-danger fw-light d-flex justify-content-start">{error_list.password}</span>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><Ri.RiLockPasswordLine fill="grey" /></span>
                                    <input type="password" className="form-control" placeholder="Password.." value={password} onChange={e => { setPassword(e.target.value); setError_list(''); setInvalid('') }} />
                                </div>
                            </div>
                            <hr className="hr-xs" />

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
                </div>

            </div>
        </main>
    )
}
export default LoginFront