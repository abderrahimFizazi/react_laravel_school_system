import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from "react-icons/bi"
export const SidebarData = [{
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title: "Respo filieres",
    path: "/view_respo",
    icon: <BsIcons.BsFillFilePersonFill />,
    cName: 'nav-text'
},
{
    title: "Eleves",
    path: "/eleves",
    icon: <BsIcons.BsPeopleFill />,
    cName: 'nav-text'
},
{
    title: "Modules",
    path: "/view_modules",
    icon: <BsIcons.BsFillBookFill />,
    cName: 'nav-text'
},
{
    title: "Element Module",
    path: "/elements",
    icon: <BsIcons.BsBookHalf />,
    cName: 'nav-text'
},
{
    title: "Notes",
    path: "/notes",
    icon: <AiIcons.AiOutlineNumber />,
    cName: 'nav-text'
},

]