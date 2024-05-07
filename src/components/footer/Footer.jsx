import React from 'react'
import "../header/header.css"

import { IoCopy } from "react-icons/io5";
import { IoDice } from "react-icons/io5";
import { IoFlashSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation()

    return (
        <footer className="header_2">
            <nav className="nav">
                <Link to='/games'
                    className={location.pathname == "/games" ? "nav_links active" : "nav_links"}>
                    <IoDice />
                    Игры
                </Link>
                <Link
                    to='/courses'
                    className={location.pathname == "/courses" ? "nav_links active" : "nav_links"}>
                    <IoCopy />
                    Курсы
                </Link>
                <Link
                    to='/rate'
                    className={location.pathname == "/rate" ? "nav_links active" : "nav_links"}>
                    <IoFlashSharp />
                    Рейтинг
                </Link>
                <Link
                    to='/profile'
                    className={location.pathname == "/profile" ? "nav_links active" : "nav_links"}>
                    <IoPerson />
                    Профиль
                </Link>
            </nav>
        </footer>
    )
}

export default Footer