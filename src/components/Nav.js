import React from 'react';
import classes  from '../styles/Nav.module.css';
import logo from '../assets/images/logo-bg.png';
import Accounts from './Accounts';
const Nav = () => {
    return (
        <div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <a href="index.html" className={classes.brand}>
                            <img src={logo} alt="Quiz app" />
                            <h3>Quiz</h3>
                        </a>
                    </li>
                </ul>
                <Accounts></Accounts>
            </nav>
        </div>
    );
};

export default Nav;