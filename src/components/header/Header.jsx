import React from 'react'
import "./header.css"
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation()
    return (
        <header className="header_1">
            <div className="logotype">
                <img width="40px" src="/images/LogoPraxis.png" alt="Praxis" />
                <p>PRAXIS</p>
            </div>
            <nav className="nav">
                <Link to='/games' className={location.pathname == "/games" ? "nav_links active" : "nav_links"}>Игры</Link>
                <Link to='/courses' className={location.pathname == "/courses" ? "nav_links active" : "nav_links"}>Курсы</Link>
                <Link to='/rate' className={location.pathname == "/rate" ? "nav_links active" : "nav_links"}>Рейтинг</Link>
                <Link to='/profile' className={location.pathname == "/profile" ? "nav_links active" : "nav_links"}>Профиль</Link>
            </nav>
        </header>
    )
}

export default Header