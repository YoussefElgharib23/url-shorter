import React, { Component } from 'react'
import './sass/Navbar.scss'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={'navbar-nav'} id={'main-navbar'}>
                <div className="container">
                    <a href="" className={'navbar__brand'}>URL Shorter</a>
                    <ul className={'nav-items'}>
                        <li className={'nav-item'}>
                            <a href="" className={'nav__link'}>Home</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href="" className={'nav__link'}>Login</a>
                        </li>
                        <li className={'nav-item'}>
                            <a href="" className={'nav__link'}>Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}