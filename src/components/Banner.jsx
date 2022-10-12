import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import  Header  from '../assets/img/header-img.svg' 

export default function Banner() {
  const [ loopNum, setLoopNum ] = useState(0)
  const [ isDeleting, setIsDeleting ] = useState(false)
  const toRotate = [ 'Eberth', 'Web Developer', 'Web Designer', 'UI/UX Designer']
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
    } else if (isDeleting && updatedText == '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(50)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I'm `}<span className='wrap'>{text}</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate error perspiciatis reprehenderit eaque porro cumque, 
              illum vitae exercitationem! Voluptates quod deserunt placeat tenetur.
              Accusamus sit voluptatem neque? Suscipit, dignissimos expedita!</p>
            <button onClick={() => console.log('connect')}>Let's connect<BsArrowRightCircleFill size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Header} alt='Header Img'></img>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
