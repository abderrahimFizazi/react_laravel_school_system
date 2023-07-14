// App.js
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Routes, Route, Link ,BrowserRouter} from "react-router-dom";
import Dashboard from "./components/admin/Dahboard";
import axios from 'axios'
import Navbar from "./layouts/admin/Masterlayout";
import Adminprivateroute from "./Adminprivateroute";
import { Navigate } from "react-router";
import ViewRespo from "./components/admin/Respo/ViewRespo";
import AddRespo from "./components/admin/Respo/AddRespo";
import UpdateRespo from "./components/admin/Respo/UpdateRespo";
import ViewModules from "./components/admin/Module/ViewModules";
import AddModule from "./components/admin/Module/AddModule";
import UpdateModule from "./components/admin/Module/UpdateModule";
import AddEleve from "./components/admin/Eleve/AddEleve";
import Eleve from "./components/admin/Eleve/Eleve";
import UpdateEleve from "./components/admin/Eleve/UpdateEleve";
import IndexNotesInsert from "./components/admin/Note/IndexNotesInsert";
import InsertNotes from "./components/admin/Note/InsertNotes";
import NoteView from "./components/admin/Note/NoteVue";
import UpdateNotes from "./components/admin/Note/UpdateNotes";
import IndexElement from "./components/admin/Element/IndexElement";
import MasterLayout from "./layouts/frontend/MasterLayout";
import Home from "./components/Frontend/Home";
import LoginFront from "./components/Frontend/Login";
import ElevePrivateroute from "./Eleveprivateroute";
import Profile from "./components/Frontend/Eleve/Profile";
import Verified from "./components/Frontend/Eleve/Verified";
import EditProfile from "./components/Frontend/Eleve/EditProfile";
import EleveNote from "./components/Frontend/Eleve/EleveNotes";
import About from "./components/Frontend/About/About";
import AboutUs from "./components/Frontend/About/Aboutus";
import ModuleLists from "./components/Frontend/Eleve/ModuleLists";
import Respoprivateroute from "./Respoprivateroute";
import AddNotes from "./components/Frontend/Prof/AddNotes";
import SendMail from "./components/services/SendMail";

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post["Accept"] = "application/json"
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("auth_token")
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})


function App() {
    const userState = localStorage.getItem("role")
    var auth = ''
    
    if( userState === "Admin"){
        auth = "/admin"
    }
    if(userState  === "eleve"){
        auth = '/eleve'
    }
    if(userState === "respo"){
        auth = "/respo"
    }
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Adminprivateroute/>} >
    
        <Route path="" element={<Dashboard />} />
        <Route path="view_respo" element={<ViewRespo/>}/>
        <Route path="add_respo" element={<AddRespo/>}/>
        <Route path="update_respo/:id" element={<UpdateRespo/>}/>

        <Route path="view_modules" element={<ViewModules />} />
        <Route path="add_module" element={<AddModule />} />
        <Route path="update_module/:id" element={<UpdateModule/>}/>

        <Route path="add_eleve" element={<AddEleve/>}/>
            <Route  path="eleves" element={<Eleve/>}/>
            <Route path="update_eleve/:id" element={<UpdateEleve/>}/>

            <Route  path="notes" element={<IndexNotesInsert/>}/>
            <Route path="insert_notes/:filiere/:niveau/:module/:element"  element={<InsertNotes/>}/>


            <Route path="elements" element={<IndexElement/>} />
        </Route>
        <Route path="" element={<MasterLayout/>} >
            <Route path="" element={<Home/>} />
            <Route path="login" element={auth ? <Navigate replace to={auth}  />  : <LoginFront/>} />
            <Route path="aboutus" element={<AboutUs/>}/>

            </Route>
            <Route path="eleve" element={<ElevePrivateroute/>} >
            <Route path="verifyAccount" element={<Verified/>}/>
                <Route path="profile" element={<Profile/>} />
                <Route path="edit_profile" element={<EditProfile/>} />
                <Route path="notes" element={<EleveNote/>} />
                <Route path="modules_list/:filiere/:niveau" element={<ModuleLists/>}/>
                <Route path="verifyAccount" element={<Verified/>}/>
                <Route path="change_password" element={<Verified/>}/>
                <Route path="sendmail" element={<SendMail/>}/>
                </Route>

            <Route path="respo" element={<Respoprivateroute/>} >
            <Route path="profile" element={<Profile/>} />
            <Route path="verifyAccount" element={<Verified/>}/>
            <Route path="change_password" element={<Verified/>}/>
            <Route path="edit_profile" element={<EditProfile/>} />
            <Route path="notes" element={<AddNotes/>} />
            <Route path="insert_notes/:filiere/:niveau/:module/:element"  element={<InsertNotes/>}/>
            <Route path="notes_element/:element"  element={<NoteView/>}/>
            <Route path="update_notes/:element"  element={<UpdateNotes/>}/>
            <Route path="sendmail" element={<SendMail/>}/>
                </Route>
    
      </Routes>
      </BrowserRouter>
  );
}

export default App;