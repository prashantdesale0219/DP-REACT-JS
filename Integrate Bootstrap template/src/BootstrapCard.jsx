import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const BootstrapCard = () => {
  return (
    <div >
    <Container>
    <Row >
        <Col sm={5} md={5} lg={6}>
        <h1 style={{textAlign:"left"}}>Hi I'm John Deo</h1>
        <p style={{textAlign:"left"}}> I'm a web developer</p><br />
        <p style={{textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corporis ipsa, quae, accusamus praesentium amet nobis autem et dolorem sunt animi doloremque. Repellat sapiente ea rem laborum accusamus molestias quis!</p><br /><br /><br />
        <Button variant="primary" style={{float:"left"}}>I AM AVAILABLE</Button>
        <br /><br />
        <div style={{float:"left",fontSize:"20px"}}>
        <i className="bi bi-instagram"></i>&nbsp;&nbsp;&nbsp;
        <i className="bi bi-facebook"></i>&nbsp;&nbsp;&nbsp;
        <i className="bi bi-twitter"></i>&nbsp;&nbsp;&nbsp;
        <i class="bi bi-github"></i>
        </div>


        
        </Col>


        <Col sm={5} md={5} lg={6}>
        <img src="https://pngimg.com/d/thinking_man_PNG11613.png" alt=""  style={{float:"right"}}/></Col>
      </Row>
      
    </Container>
    </div>
  )
}

export default BootstrapCard
