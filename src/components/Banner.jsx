import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import  Header  from '../assets/img/particles.gif' 
import Spline from '@splinetool/react-spline';
import ThreeScene from './ThreeScene'
import NBar from './NBar'

function Banner() {
  const [ loopNum, setLoopNum ] = useState(0)
  const [ isDeleting, setIsDeleting ] = useState(false)
  const toRotate = [ 'Full Stack Web Developer']
  const [ text, setText ] = useState('')
  const [ delta, setDelta ] = useState(300 - Math.random() * 100)
  const period = 1000

  useEffect (() => {
    let ticker = setInterval(() => {
      tick()
    },delta)
    return () => { clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(50)
    }
  }

  return (
    <>
    <NBar/>
    <section className='banner' id='home'>
      <Container className='contenedor'>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={6}>
            {/* <span className='tagline'>Welcome to my Portfolio</span> */}
            <h1><span className='wrap'>Full Stack Web Developer</span></h1>
            <p>Tecnologías trabajadas: Javascript, React Js y Ts, Php, Laravel, Mysql</p>
            <button onClick={() => console.log('connect')}>Let's connect<BsArrowRightCircleFill size={25}/></button>
          </Col>
          
          <Col xs={12} md={6} xl={6}>
               {/* <ThreeScene/>               */} 
                     <Spline scene="https://prod.spline.design/dSKWSB9Y4zGZIxw9/scene.splinecode" />             
               
          </Col>
        </Row>

      </Container>

    </section>
    </>
  )
}

export default Banner
