import React, { useState } from "react";

const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#portfolio"
    },
    {
        title: "contact",
        url: "#contact"
    }
]

const Header = () => {
    const [ isActive, setIsActive ] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <header id="header" role="banner">
            <div className="header_inner">
                <h1 className="header_logo">
                    <a href="/">portfolio<em>vite</em></a>
                </h1>
                <nav 
                    className={`header_nav ${isActive ? "active" : ""}`} 
                    role="navigation" 
                    aria-label="메인 메뉴"
                >
                    <ul className="menu">
                        {headerNav.map((nav, key) => (
                            <li className="menu__list" key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="btn-box" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded="false" 
                    role="button" 
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span>{isActive ? "햄" : "버거"}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;