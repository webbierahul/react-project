import React from 'react';
import './Styles.css';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">DocBuilder</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API</a></li>
                        <button class="btn btn-danger navbar-btn"><span className="glyphicon glyphicon-log-in"></span> Login</button>

                    </ul>

                </div>
            </nav>
        </div>
    );

}

export default Header;