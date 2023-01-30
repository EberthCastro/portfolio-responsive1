import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NBar from './components/NBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
    return (
        <div>
            <NBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}
