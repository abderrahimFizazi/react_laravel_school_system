import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import swal from "sweetalert"
import "../../assets/admin/Dropdown.css"
const SendMail = () => {
    const [isOpen , setIsopen] = useState(false)
    const [isOpen2 , setIsopen2] = useState(false)
    const [type , setType] = useState('')
    const [mailList , setMailList ] = useState([])
    const [body , setBody] = useState('')
    const [sujet , setSujet] = useState('abdo')
    const [mail , setMail ] =useState('')
    const [ eleve , setEleve] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate  = useNavigate()
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
    const typeList = [
        { id : 1,
        name  :"Prof"
        },
        {
            id : 2,
            name : "Etudiant"
        }
    ]

    const getMails = (id) => {
      if(id === "Etudiant"){
        axios.get(`/api/index_eleve`).then(res => {
            setMailList(res.data.eleve)

 })
      }
      else if(id === "Prof"){
        axios.get(`/api/index_respo`).then(res => {
            setMailList(res.data.respo)

 })
      }
     }

    const Dropdown = () => {
        return (
            <>
                <div
                    className={isOpen ? "dropdown2 active " : "dropdown2"}
                    onClick={() => setIsopen(!isOpen)} >
                    <div className="dropdown2__text">
                        {!type ? "Select Type destination" : type}
                    </div>
                    {isOpen ? typeList.map(item => {
                        if(type != item.name){
                            return (
                                <div className="dropdown2__item" key={item.id} value={item.name} onClick={() => { setType(item.name) ; getMails(item.name) ; }}> {item.name}</div>
                            )
                        }

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
                    className={isOpen2 ? "dropdown2 active " : "dropdown2"}
                    onClick={() => setIsopen2(!isOpen2)} >
                    <div className="dropdown2__text">
                        {!mail ? "Select Mail" : mail}
                    </div>
                    {isOpen2 ? mailList.map(item => {
                            return (
                                <div className="dropdown2__item" key={item.id} value={item.user.email} onClick={() => { setMail(item.user.email)}}> {item.user.email}</div>
                            )


                    }) : null
                    }
                </div>
            </>
        )
    }
    const submitMail = (e) => {
        e.preventDefault()
        const data = {
            username : eleve.nom + " " + eleve.prenom,
            myEmail : eleve.email,
            body : body,
            subject  : sujet,
            dest : mail
        }
        axios.post("/api/sendMail" , data).then(res => {
            if(res.data.status ===  200){
                swal("Success", res.data.message , "success")
                navigate('/')
            }



        })
    }
    if(loading){
        return(
            <>Loading...</>
        )
    }
    else{
        return(
            <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Pour envoyer des emails </h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5"></p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
      
                        <form onSubmit={submitMail}>
                        <div className="form-floating mb-3">
                               <Dropdown/>
                            </div>
                            <div className="form-floating mb-3">
                               <Dropdown2/>
                            </div>
    
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" placeholder="Sujet"  />
                                <label onChange={e => setSujet(e.target.value)}  value={sujet}>Sujet</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{"height": "15rem"}} data-sb-validations="required" onChange={e => setBody(e.target.value)} value={body} ></textarea>
                                <label htmlFor="message" >Message</label>
                            </div>
                            <div className="d-grid"><input className="btn btn-primary btn-xl " id="submitButton" type="submit"/></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        )
    }
  
}
export default SendMail