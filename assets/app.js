import { render } from 'react-dom'
import './bootstrap'
import React from 'react'
import './sass/app.scss'
import Home from "./home";

render (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Home />,
    document.getElementById('main-header')
)