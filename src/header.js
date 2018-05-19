import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './resources/16_small-min.jpeg';

class Header extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/gallery'>Gallery</Link></li>
                        </ul>
                    </nav>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title"><span className="noPhones">Welcome to </span><span className="title">Aventura Legacy</span></h1>
                </header>
            </div>
        );
    }
}

export default Header;
