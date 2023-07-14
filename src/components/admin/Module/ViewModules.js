import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Ai from "react-icons/ai"
import "../../../assets/frontend/table.css"
const ViewModules = () => {
    const [moduleList, setModuleList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("/api/index_module").then(res => {
            if (res.data.status === 200) {
                setModuleList(res.data.module)
                setLoading(false)
            }
        })
    }, [])
    var table_html_app
    var table_html_g3ei
    var table_html_ginf
    var table_html_gsea
    var table_html_gstr
    var table_html_all
    var table_html_gil

    var app_s1, app_s2, app_s3, app_s3, app_s4,app_all
    var gil_s1,gil_s2,gil_s3,gil_s4,gil_s5,gil_s6,gil_all
    var ginf_s1, ginf_s2, ginf_s3, ginf_s4, ginf_s5, ginf_s6,ginf_all
    var gstr_s1, gstr_s2, gstr_s3, gstr_s4, gstr_s5, gstr_6,gstr_all
    var gsea_s1, gsea_s2, gsea_s3, gsea_s4, gsea_s5, gsea_6,gsea_all
    var g3ei_s1, g3ei_s2, g3ei_s3, g3ei_s4, g3ei_s5, g3ei_s6,g3ei_all



    if (loading) {
        return (
            <h4> Module list loading...</h4>
        )
    }
    else {
        gil_all = moduleList.reverse().map(item => {
            if ( item.filiere == "GIL") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gil_s1 = moduleList.reverse().map(item => {
            if ( item.semestre == "S1" && item.filiere == "GIL") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gil_s2 = moduleList.reverse().map(item => {
            if ( item.semestre == "S2" && item.filiere == "GIL") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gil_s3 = moduleList.reverse().map(item => {
            if ( item.semestre == "S3" && item.filiere == "GIL") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gil_s4 = moduleList.reverse().map(item => {
            if ( item.semestre == "S4" && item.filiere == "GIL") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gil_s5 = moduleList.reverse().map(item => {
            if ( item.semestre == "S5" && item.filiere == "GIL") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gil_s6 = moduleList.reverse().map(item => {
            if ( item.semestre == "S6" && item.filiere == "GIL") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        app_all = moduleList.reverse().map(item => {
            if ( item.filiere == "AP") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        app_s1 = moduleList.reverse().map(item => {
            if (item.semestre == "S1" && item.filiere == "AP") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        app_s2 = moduleList.reverse().map(item => {
            if (item.semestre == "S2" && item.filiere == "AP") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        app_s3 = moduleList.reverse().map(item => {
            if (item.semestre === "S3" && item.filiere === "AP") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        app_s4 = moduleList.reverse().map(item => {
            if (item.semestre === "S4" && item.filiere === "AP") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        g3ei_all = moduleList.reverse().map(item => {
            if ( item.filiere === "G3EI") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        g3ei_s1 = moduleList.reverse().map(item => {
            if (item.semestre === "S1" && item.filiere === "G3EI") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        g3ei_s2 = moduleList.reverse().map(item => {
            if (item.semestre === "S2" && item.filiere === "G3EI") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        g3ei_s3 = moduleList.reverse().map(item => {
            if (item.semestre === "S3" && item.filiere === "G3EI") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        g3ei_s4 = moduleList.reverse().map(item => {
            if (item.semestre === "S4" && item.filiere === "G3EI") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        g3ei_s5 = moduleList.reverse().map(item => {
            if (item.semestre === "S5" && item.filiere === "G3EI") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        g3ei_s6 = moduleList.reverse().map(item => {
            if (item.semestre === "S6" && item.filiere === "G3EI") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })

        ginf_all = moduleList.reverse().map(item => {
            if (item.filiere === "GINF") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        ginf_s1 = moduleList.reverse().map(item => {
            if (item.semestre === "S1" && item.filiere === "GINF") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        ginf_s2 = moduleList.reverse().map(item => {
            if (item.semestre === "S2" && item.filiere === "GINF") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        ginf_s3 = moduleList.reverse().map(item => {
            if (item.semestre === "S3" && item.filiere === "GINF") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        ginf_s4 = moduleList.reverse().map(item => {
            if (item.semestre === "S4" && item.filiere === "GINF") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        ginf_s5 = moduleList.reverse().map(item => {
            if (item.semestre === "S5" && item.filiere === "GINF") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        ginf_s6 = moduleList.reverse().map(item => {
            if (item.semestre === "S6" && item.filiere === "GINF") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gstr_all = moduleList.reverse().map(item => {
            if (item.filiere === "GSTR") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gstr_s1 = moduleList.reverse().map(item => {
            if (item.semestre === "S1" && item.filiere === "GSTR") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gstr_s2 = moduleList.reverse().map(item => {
            if (item.semestre === "S2" && item.filiere === "GSTR") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gstr_s3 = moduleList.reverse().map(item => {
            if (item.semestre === "S3" && item.filiere === "GSTR") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gstr_s4 = moduleList.reverse().map(item => {
            if (item.semestre === "S4" && item.filiere === "GSTR") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gstr_s5 = moduleList.reverse().map(item => {
            if (item.semestre === "S5" && item.filiere === "GSTR") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gstr_6 = moduleList.reverse().map(item => {
            if (item.semestre === "S6" && item.filiere === "GSTR") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gsea_all = moduleList.reverse().map(item => {
            if ( item.filiere === "GSEA") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gsea_s1 = moduleList.reverse().map(item => {
            if (item.semestre === "S1" && item.filiere === "GSEA") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gsea_s2 = moduleList.reverse().map(item => {
            if (item.semestre === "S2" && item.filiere === "GSEA") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gsea_s3 = moduleList.reverse().map(item => {
            if (item.semestre === "S3" && item.filiere === "GSEA") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gsea_s4 = moduleList.reverse().map(item => {
            if (item.semestre === "S4" && item.filiere === "GSEA") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gsea_s5 = moduleList.reverse().map(item => {
            if (item.semestre === "S5" && item.filiere === "GSEA") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        gsea_6 = moduleList.reverse().map(item => {
            if (item.semestre === "S6" && item.filiere === "GSEA") {
                return (
                    <tr key={item.id}>
                        <td className="text-center">{item.code} </td>
                        <td className="text-center">{item.designation} </td>
                        <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                        <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                    </tr>
                )
            }
        })
        table_html_all = moduleList.reverse().map(item => {
            return (
                <tr key={item.id}>
                    <td className="text-center">{item.code} </td>
                    <td className="text-center">{item.designation} </td>
                    <td className="text-center">{item.niveau} </td>
                    <td className="text-center">{item.filiere} </td>
                    <td className="text-center">{item.semestre} </td>
                    <td className="text-center"><Link to={`/admin/update_module/${item.id}`}><Ai.AiOutlineEdit style={{ fill: "green" }} size={25} /></Link></td>
                    <td className="text-center"><Link to="#" onClick={e => deleteModule(e, item.id)} style={{ "textDecoration": "none", "color": "red" }}><Ai.AiFillDelete style={{ fill: "red" }} size={25} /> </Link></td>
                </tr>
            )
        }
        )

        table_html_app = <div className="d-flex align-items-start my-3">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-app_all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app_all" type="button" role="tab" aria-controls="v-pills-app_all" aria-selected="true">All</button>
                <button className="nav-link " id="v-pills-app1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app1" type="button" role="tab" aria-controls="v-pills-app1" aria-selected="true">S1</button>
                <button className="nav-link" id="v-pills-app2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app2" type="button" role="tab" aria-controls="v-pills-app2" aria-selected="false">S2</button>
                <button className="nav-link" id="v-pills-app3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app3 " type="button" role="tab" aria-controls="v-pills-app3" aria-selected="false">S3</button>
                <button className="nav-link" id="v-pills-app4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app4" type="button" role="tab" aria-controls="v-pills-app4" aria-selected="false">S4</button>

            </div>
            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-app_all" role="tabpanel" aria-labelledby="v-pills-app_all-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {app_all}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade show " id="v-pills-app1" role="tabpanel" aria-labelledby="v-pills-app1-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {app_s1}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-app2" role="tabpanel" aria-labelledby="v-pills-app2-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {app_s2}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-app3" role="tabpanel" aria-labelledby="v-pills-app3-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {app_s3}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-app4" role="tabpanel" aria-labelledby="v-pills-app4-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {app_s4}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        var all = <table className="table table-bordered  table-hover my-4 ">
            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Niveau </th>
                    <th> Filiere </th>
                    <th> Semestre </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {table_html_all}
            </tbody>
        </table>

        table_html_g3ei = <div className="d-flex align-items-start my-3">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-g3ei_all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-g3ei_all" type="button" role="tab" aria-controls="v-pills-g3ei_all" aria-selected="true">All</button>
                <button className="nav-link " id="v-pills-g3eis1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-g3eis1" type="button" role="tab" aria-controls="v-pills-g3eis1" aria-selected="true">S1</button>
                <button className="nav-link" id="v-pills-g3eis2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-g3eis2" type="button" role="tab" aria-controls="v-pills-g3eis2" aria-selected="false">S2</button>
                <button className="nav-link" id="v-pills-g3eis3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-g3eis3" type="button" role="tab" aria-controls="v-pills-g3eis13" aria-selected="false">S3</button>
                <button className="nav-link" id="v-pills-g3eis4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-g3eis4" type="button" role="tab" aria-controls="v-pills-g3eis4" aria-selected="false">S4</button>
                <button className="nav-link" id="v-pills-g3eis5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-g3eis5" type="button" role="tab" aria-controls="v-pills-g3eis5" aria-selected="false">S5</button>
                <button className="nav-link" id="v-pills-g3eis6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-g3eis6" type="button" role="tab" aria-controls="v-pills-g3eis6" aria-selected="false">S6</button>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                
            <div className="tab-pane fade show active" id="v-pills-g3ei_all" role="tabpanel" aria-labelledby="v-pills-g3ei_all-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {g3ei_all}
                        </tbody>
                    </table>
                </div>

                <div className="tab-pane fade show " id="v-pills-g3eis1" role="tabpanel" aria-labelledby="v-pills-g3eis1-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {g3ei_s1}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-g3eis2" role="tabpanel" aria-labelledby="v-pills-g3eis2-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {g3ei_s2}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-g3eis3" role="tabpanel" aria-labelledby="v-pills-g3eis1-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {g3ei_s3}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-g3eis4" role="tabpanel" aria-labelledby="v-pills-g3eis4-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {g3ei_s4}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-g3eis5" role="tabpanel" aria-labelledby="v-pills-g3eis5-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {g3ei_s5}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-g3eis6" role="tabpanel" aria-labelledby="v-pills-g3eis6-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {g3ei_s6}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

table_html_gil = <div className="d-flex align-items-start my-3">
<div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
<button className="nav-link active" id="v-pills-gil_all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gil_all" type="button" role="tab" aria-controls="v-pills-gil_all" aria-selected="true">All</button>
    <button className="nav-link " id="v-pills-gil_s1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gil_s1" type="button" role="tab" aria-controls="v-pills-gil_s1" aria-selected="true">S1</button>
    <button className="nav-link" id="v-pills-gil_s2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gil_s2" type="button" role="tab" aria-controls="v-pills-gil_s2" aria-selected="false">S2</button>
    <button className="nav-link" id="v-pills-gil_s3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gil_s3" type="button" role="tab" aria-controls="v-pills-gil_s3" aria-selected="false">S3</button>
    <button className="nav-link" id="v-pills-gil_s4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gil_s4" type="button" role="tab" aria-controls="v-pills-gil_s4" aria-selected="false">S4</button>
    <button className="nav-link" id="v-pills-gil_s5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gil_s5" type="button" role="tab" aria-controls="v-pills-gil_s5" aria-selected="false">S5</button>
    <button className="nav-link" id="v-pills-gil_s6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gil_s6" type="button" role="tab" aria-controls="v-pills-gil_s6" aria-selected="false">S6</button>
</div>

<div className="tab-content" id="v-pills-tabContent">
    
<div className="tab-pane fade show active" id="v-pills-gil_all" role="tabpanel" aria-labelledby="v-pills-gil_all-tab">
        <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {gil_all}
            </tbody>
        </table>
    </div>

    <div className="tab-pane fade show " id="v-pills-gil_s1" role="tabpanel" aria-labelledby="v-pills-gil_s1-tab">
        <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {gil_s2}
            </tbody>
        </table>
    </div>
    <div className="tab-pane fade" id="v-pills-gil_s2" role="tabpanel" aria-labelledby="v-pills-gil_s2-tab">
        <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {gil_s3}
            </tbody>
        </table>
    </div>
    <div className="tab-pane fade" id="v-pills-gil_s3" role="tabpanel" aria-labelledby="v-pills-gil_s3-tab">
        <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {gil_s3}
            </tbody>
        </table>
    </div>
    <div className="tab-pane fade" id="v-pills-gil_s4" role="tabpanel" aria-labelledby="v-pills-gil_s4-tab">
        <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {gil_s4}
            </tbody>
        </table>
    </div>
    <div className="tab-pane fade" id="v-pills-gil_s5" role="tabpanel" aria-labelledby="v-pills-gil_s5-tab">
        <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {gil_s5}
            </tbody>
        </table>
    </div>
    <div className="tab-pane fade" id="v-pills-gil_s6" role="tabpanel" aria-labelledby="v-pills-gil_s6-tab">
        <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

            <thead>
                <tr>
                    <th>Code </th>
                    <th> Designation </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {gil_s6}
            </tbody>
        </table>
    </div>
</div>
</div>

        table_html_ginf = <div className="d-flex align-items-start my-3">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-ginf_all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ginf_all" type="button" role="tab" aria-controls="v-pills-ginf_all" aria-selected="true">All</button>
                <button className="nav-link " id="v-pills-ginfs1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ginfs1" type="button" role="tab" aria-controls="v-pills-ginfs1" aria-selected="true">S1</button>
                <button className="nav-link" id="v-pills-ginfs2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ginfs2" type="button" role="tab" aria-controls="v-pills-ginfs2" aria-selected="false">S2</button>
                <button className="nav-link" id="v-pills-ginfs3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ginfs3" type="button" role="tab" aria-controls="v-pills-ginfs3" aria-selected="false">S3</button>
                <button className="nav-link" id="v-pills-ginfs4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ginfs4" type="button" role="tab" aria-controls="v-pills-ginfs4" aria-selected="false">S4</button>
                <button className="nav-link" id="v-pills-ginfs5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ginfs5" type="button" role="tab" aria-controls="v-pills-ginfs5" aria-selected="false">S5</button>
                <button className="nav-link" id="v-pills-ginfs6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ginfs6" type="button" role="tab" aria-controls="v-pills-ginfs6" aria-selected="false">S6</button>

            </div>
            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-ginf_all" role="tabpanel" aria-labelledby="v-pills-ginf_all-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>
                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ginf_all}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade show " id="v-pills-ginfs1" role="tabpanel" aria-labelledby="v-pills-ginfs1-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>
                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ginf_s1}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-ginfs2" role="tabpanel" aria-labelledby="v-pills-ginfs2-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>
                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ginf_s2}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-ginfs3" role="tabpanel" aria-labelledby="v-pills-ginfs3-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ginf_s3}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-ginfs4" role="tabpanel" aria-labelledby="v-pills-ginfs4-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ginf_s4}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-ginfs5" role="tabpanel" aria-labelledby="v-pills-ginfs5-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ginf_s5}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-ginfs6" role="tabpanel" aria-labelledby="v-pills-ginfs6-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ginf_s6}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        table_html_gsea = <div className="d-flex align-items-start my-3">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-gsea_all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gsea_all" type="button" role="tab" aria-controls="v-pills-gsea_all" aria-selected="true">All</button>
                <button className="nav-link " id="v-pills-gseas1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gseas1" type="button" role="tab" aria-controls="v-pills-gseas1" aria-selected="true">S1</button>
                <button className="nav-link" id="v-pills-gseas2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gseas2" type="button" role="tab" aria-controls="v-pills-gseas2" aria-selected="false">S2</button>
                <button className="nav-link" id="v-pills-gseas3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gseas3" type="button" role="tab" aria-controls="v-pills-gseas3" aria-selected="false">S3</button>
                <button className="nav-link" id="v-pills-gseas4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gseas4" type="button" role="tab" aria-controls="v-pills-gseas4" aria-selected="false">S4</button>
                <button className="nav-link" id="v-pills-gseas5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gseas5" type="button" role="tab" aria-controls="v-pills-gseas5" aria-selected="false">S5</button>
                <button className="nav-link" id="v-pills-gseas6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gseas6" type="button" role="tab" aria-controls="v-pills-gseas6" aria-selected="false">S6</button>

            </div>

            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-gsea_all" role="tabpanel" aria-labelledby="v-pills-gsea_all-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsea_all}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade show " id="v-pills-gseas1" role="tabpanel" aria-labelledby="v-pills-gseas1-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsea_s1}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gseas2" role="tabpanel" aria-labelledby="v-pills-gseas2-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsea_s2}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gseas3" role="tabpanel" aria-labelledby="v-pills-gseas3-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsea_s3}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gseas4" role="tabpanel" aria-labelledby="v-pills-gseas4-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsea_s4}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gseas5" role="tabpanel" aria-labelledby="v-pills-gseas5-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsea_s5}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gseas6" role="tabpanel" aria-labelledby="v-pills-gseas6-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsea_6}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        table_html_gstr = <div className="d-flex align-items-start my-3">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-gstr_all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gstr_all" type="button" role="tab" aria-controls="v-pills-gstr_all" aria-selected="true">All</button>
                <button className="nav-link " id="v-pills-gstr1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gstr1" type="button" role="tab" aria-controls="v-pills-gstr1" aria-selected="true">S1</button>
                <button className="nav-link" id="v-pills-gstr2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gstr2" type="button" role="tab" aria-controls="v-pills-gstr2" aria-selected="false">S2</button>
                <button className="nav-link" id="v-pills-gstr3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gstr3" type="button" role="tab" aria-controls="v-pills-gstr3" aria-selected="false">S3</button>
                <button className="nav-link" id="v-pills-gstr4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gstr4" type="button" role="tab" aria-controls="v-pills-gstr4" aria-selected="false">S4</button>
                <button className="nav-link" id="v-pills-gstr5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gstr5" type="button" role="tab" aria-controls="v-pills-gstr5" aria-selected="false">S5</button>
                <button className="nav-link" id="v-pills-gstr6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gstr6" type="button" role="tab" aria-controls="v-pills-gstr6" aria-selected="false">S6</button>

            </div>
            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-gstr_all" role="tabpanel" aria-labelledby="v-pills-gstr_all-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstr_all}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade show " id="v-pills-gstr1" role="tabpanel" aria-labelledby="v-pills-gstr1-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstr_s1}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gstr2" role="tabpanel" aria-labelledby="v-pills-gstr2-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstr_s2}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gstr3" role="tabpanel" aria-labelledby="v-pills-gstr3-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstr_s3}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gstr4" role="tabpanel" aria-labelledby="v-pills-gstr4-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstr_s4}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gstr5" role="tabpanel" aria-labelledby="v-pills-gstr5-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstr_s5}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-gstr6" role="tabpanel" aria-labelledby="v-pills-gstr6-tab">
                    <table className="table table-bordered  table-hover " style={{ "width": "200%", "margin": "20px" }}>

                        <thead>
                            <tr>
                                <th>Code </th>
                                <th> Designation </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstr_6}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        const deleteModule = (e, id) => {
            e.preventDefault()
            const thisClicked = e.currentTarget
            swal(" You really want to delete this module", {
                buttons: {
                    cancel: true,
                    deleteModule: true,
                },
            }).then(deleteModule => {
                if (deleteModule) {
                    thisClicked.innerText = "Deleting..."
                    axios.delete(`/api/destroy_module/${id}`).then(res => {
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
    return (
        <div className="container px-2">
            <div className=" mt-4">
                <div className="card-header">
                    <h4>
                        <Link to="/admin/add_module" className="btn btn-secondary btn-small float-end" >Add Module</Link>
                        <div> Modules list</div>

                    </h4>
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs mx-5 nav-fill" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">ALL</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link " id="App-tab" data-bs-toggle="tab" data-bs-target="#App" type="button" role="tab" aria-controls="App" aria-selected="true">AP</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="GINF-tab" data-bs-toggle="tab" data-bs-target="#GINF" type="button" role="tab" aria-controls="GINF" aria-selected="false">GINF</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="GSEA-tab" data-bs-toggle="tab" data-bs-target="#GSEA" type="button" role="tab" aria-controls="GSEA" aria-selected="false">GSEA</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="GSTR-tab" data-bs-toggle="tab" data-bs-target="#GSTR" type="button" role="tab" aria-controls="GSTR" aria-selected="false">GSTR</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="G3EI-tab" data-bs-toggle="tab" data-bs-target="#G3EI" type="button" role="tab" aria-controls="G3EI" aria-selected="false">G3EI</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="GIL-tab" data-bs-toggle="tab" data-bs-target="#GIL" type="button" role="tab" aria-controls="GIL" aria-selected="false">GIL</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">{all}</div>
                        <div className="tab-pane fade show " id="App" role="tabpanel" aria-labelledby="App-tab">{table_html_app}</div>
                        <div className="tab-pane fade" id="GINF" role="tabpanel" aria-labelledby="GINF-tab">{table_html_ginf}</div>
                        <div className="tab-pane fade" id="GSEA" role="tabpanel" aria-labelledby="GSEA-tab">{table_html_gsea}</div>
                        <div className="tab-pane fade" id="GSTR" role="tabpanel" aria-labelledby="GSTR-tab">{table_html_gstr}</div>
                        <div className="tab-pane fade" id="G3EI" role="tabpanel" aria-labelledby="G3EI-tab">{table_html_g3ei}</div>
                        <div className="tab-pane fade" id="GIL" role="tabpanel" aria-labelledby="GIL-tab">{table_html_gil}</div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default ViewModules;