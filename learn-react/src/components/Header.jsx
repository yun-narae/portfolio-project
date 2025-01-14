import React from "react";

const Header = () => {
  return (
        <header id="header" role="banner">
            <div className="header_inner">
                <h1 className="header_logo">
                    <a href="/">portfolio<em>vite</em></a>
                </h1>
                <nav className="header_nav" role="navigation" aria-label="메인 메뉴">
                    <ul className="menu">
                        <li className="menu__list"><a href="#intro">intro</a></li> 
                        <li className="menu__list"><a href="#skill">skill</a></li>
                        <li className="menu__list"><a href="#site">site</a></li>
                        <li className="menu__list"><a href="#port">portfolio</a></li>
                        <li className="menu__list"><a href="#contact">contact</a></li>
                    </ul>
                </nav>
                <div 
                    className="btn-box" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded="false" 
                    role="button" 
                    tabIndex="0"
                >
                    <span>햄</span>
                </div>
            </div>
        </header>
    );
};

export default Header;