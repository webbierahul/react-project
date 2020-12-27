import React from 'react';
import './Styles.css';


const SideNav = () => {
    return (

        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>DocBuilder</h3>
                <strong>Doc</strong>
            </div>

            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i className="glyphicon glyphicon-home"></i>
                            Home
                        </a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-briefcase"></i>
                            About
                        </a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i className="glyphicon glyphicon-duplicate"></i>
                            Pages
                        </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-link"></i>
                            Portfolio
                        </a>
                </li>
                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-paperclip"></i>
                            FAQ
                        </a>
                </li>
                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-send"></i>
                            Contact
                        </a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a></li>
                <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
            </ul>
        </nav>

    );
}

export default SideNav;