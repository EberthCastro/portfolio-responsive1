import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NBar from './components/NBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import FetchApi from './components/FetchApi'
import Create from './components/Create'
import ShowProject from './components/ShowProject'
import RoutesPortf from './routes/RoutesPortf'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <RoutesPortf />
        </BrowserRouter>
    )
}
