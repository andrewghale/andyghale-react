import React from 'react';
import Nav from 'components/nav';
import logo from 'assets/img/logo.svg';
import logoLight from 'assets/img/logo-light.svg';

const Header = ({ lightLogo }) => (
    <header className="site-header">
        <div className="logo-holder">
            <img className="home-logo" src={lightLogo === true ? logoLight : logo} alt="logo"/>
        </div>
        <Nav />
    </header>
)

export default Header;