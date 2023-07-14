import axios from "axios"
import React, { useEffect, useState } from "react"
import "../../../assets/frontend/eleve/profile.css"
const Profile = () => {
    const [eleve, setEleve] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`/api/profile${localStorage.getItem('role')}`).then(res => {
            if (res.data.status === 200) {
                if (res.data.eleve) {
                    setEleve(res.data.eleve)
                }
                if (res.data.Respo) {
                    setEleve(res.data.Respo)
                }
                setLoading(false)
            }
        })
    }, [])
    const status = localStorage.getItem('role') === 'eleve' ? 'Etudiant' : 'Responsable de filiere'
    if (loading) {
        return (
            <div>Eleve infos loading...</div>
        )
    }
    else {
        return (
            <>
                <section className="bg-light section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-4 mb-sm-5">
                                <div className="card card-style1 border-0">
                                    <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 mb-4 mb-lg-0">
                                                <img src={`http://localhost:8000/${eleve.image}`} alt="..." width="400px" className="rounded" />
                                            </div>
                                            <div className="col-lg-6 px-xl-10">
                                                <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                                    <h3 className="h2 text-white mb-0">{eleve.nom} {eleve.prenom}</h3>
                                                    <span className="text-primary">{status}</span>
                                                </div>
                                                <ul className="list-unstyled mb-1-9">
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Nom :</span> {eleve.nom}</li>
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Prenom :</span> {eleve.prenom}</li>
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> {eleve.user.email}</li>
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Filiere :</span> {eleve.filiere}</li>
                                                    {localStorage.getItem('role') === 'eleve' ? <>
                                                        <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Niveau :</span> {eleve.niveau}</li></> : null
                                                    }

                                                    {eleve.sex ? <li className="display-28 mb-2 mb-xl-3"><span className="display-26 text-secondary me-2 font-weight-600">Sexe:</span>{eleve.sex} </li> : null}
                                                    {eleve.phone ? <li className="display-28 mb-2 mb-xl-3"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span>{eleve.phone} </li> : null}
                                                    {eleve.adresse ? <li className="display-28 mb-2 mb-xl-3"><span className="display-26 text-secondary me-2 font-weight-600">Adresse:</span>{eleve.adresse} </li> : null}
                                                    {eleve.date_nais ? <li className="display-28 mb-2 mb-xl-3"><span className="display-26 text-secondary me-2 font-weight-600">Date de naisance:</span>{eleve.date_nais} </li> : null}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 mb-4 mb-sm-5">
                                {eleve.about ? <div>
                                    <span className="section-title text-primary mb-3 mb-sm-4">About Me</span>
                                    <p>{eleve.about}</p>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }


}
export default Profile