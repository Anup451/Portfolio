import React from 'react'
import  Navbar  from './Navbar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button} from 'react-bootstrap';
import projectdata from "../Assets/Projects.json";
function Projects() {
  return (
    <>
    <Navbar></Navbar>
    {/* <div>Projectssdgfsfg</div> */}

    <div className="container">
    <Row xs={1} md={3} className="g-4" style={{ alignItems:"center",justifyContent:"center", marginTop:"100px"}}>
      {projectdata.map((project) => (
        <Col key={project.id}>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            {/* <Image src="https://user-images.githubusercontent.com/22856752/226000675-0b6fbc9b-2c45-4c8a-ac84-f6188b2cebcb.png" alt={`project ${project.id}`} fluid /> */}
            {console.log(project.image)}
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <a className="nav-link2" style={{color:"black"}} href="#">Resume</a>
            </Card.Body>
            {/* <Button style={{width:"100px !important;"}}> Link </Button> */}
           
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
  )
}

export default Projects