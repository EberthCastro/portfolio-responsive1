import React from 'react'
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/js.png'
import projImg2 from '../assets/img/reactjs.png'
import projImg3 from '../assets/img/laravel.jfif'

export default function Projects() {
  const projects = [
    {
      title: "Code Develop",
      description: "Solid Principles",
      imgUrl: projImg3,
    },
    {
      title: "Code Develop",
      description: "Solid Principles",
      imgUrl: projImg2,
    },
    {
      title: "Code Develop",
      description: "Solid Principles",
      imgUrl: projImg3,
    },
    {
      title: "Code Develop",
      description: "Solid Principles",
      imgUrl: projImg3,
    },
    {
      title: "Code Develop",
      description: "Solid Principles",
      imgUrl: projImg2,
    },
    {
      title: "Code Develop",
      description: "Solid Principles",
      imgUrl: projImg3,
    },
  ]

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>All the projects that I made and I collaborate.</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard 
                          key={index}
                          {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}
