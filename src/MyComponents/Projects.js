import React from 'react'
import  Navbar  from './Navbar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Projects() {
  return (
    <>
    <Navbar></Navbar>
    {/* <div>Projectssdgfsfg</div> */}

    <div className="container">
    <Row xs={1} md={3} className="g-4" style={{ alignItems:"center",justifyContent:"center", marginTop:"100px"}}>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>WRYD</Card.Title>
              <Card.Text>
                3D location Tracking application
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
  )
}

export default Projects