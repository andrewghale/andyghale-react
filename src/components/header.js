import React from 'react';
import Nav from 'components/nav';
import logo from 'assets/img/logo.svg';

const Header = () => (
    <header className="site-header">
    <div className="logo-holder">
        <img className="home-logo" src={logo} alt="logo"/>
    </div>
    <Nav />
    </header>
)

export default Header;