import axios from "axios";
import React from "react"
import { Link, useNavigate } from "react-router-dom"

const NavbarFront = () => {
    const navigate = useNavigate()
    const logOut = (e) => {
        e.preventDefault();
        axios.post("/api/logout").then(res => {
            if(res.data.status === 200){
                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_login")
                localStorage.removeItem("role")
            }
            navigate('/')
        })
    }
    const user = localStorage.getItem("auth_login")
    const role = localStorage.getItem("role")

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" style={{ "backgroundColor": "#f4623a" }}>
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">EnsatApp</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/aboutus">About</Link></li>
                     { user   ? 
                     
                     <>
                     <li className="nav-item"><Link className="nav-link" to={"/" +role+"/notes"}>Notes</Link></li>
                     <li className="nav-item"><Link className="nav-link" to={"/" +role+"/sendmail"}>  EnvoyerMail</Link></li>
                     <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to={"/"+role +"/profile"}>Profile</Link></li>
                                <li><Link className="dropdown-item" to={"/"+role+"/edit_profile"}>Edit Profile</Link></li>
                                <li><Link className="dropdown-item" to={"/"+role+"/change_password"}>Change password</Link></li>
                                <hr/>
                                <li><Link className="dropdown-item" to="#" onClick={logOut}>LogOut</Link></li>
                            </ul>
                        </li></> :
                        <li className="nav-item"><Link className="nav-link" to="login">Login</Link></li>
    }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavbarFront