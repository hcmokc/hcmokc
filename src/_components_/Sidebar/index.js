import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './index.css';
import { Link } from "react-router-dom";
import { itemSidebar } from "./itemSidebar";
import { IconContext } from "react-icons";

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="sidebar">
                <Link to="#" className="menu-sidebar">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <a className="logo-club" href="https://rmit-kendo-club.github.io/hcmoks/" target="_blank">Ho Chi Minh Open Kendo Championships</a>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="menu-sidebar-items" onClick={showSidebar}>
                    <li className="sidebar-toggle">
                        <Link to="#" className="menu-sidebar">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {itemSidebar.map((item, index) => {
                        return (
                            <li key={index} className={item.cname}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    )
}