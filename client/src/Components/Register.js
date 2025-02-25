import { Button, Col, Input, Row,Container,Form } from "reactstrap";

const Register = () => {
  return (
    <div>
   <h1>Register</h1>
    <Container>

    <Form>

      <Row>

        <Col md={3}>

        </Col>

      </Row>    

<Row>

        <Col md={3}>          
        Enter your name <br></br>
        <Input type="text"></Input>
          
        </Col>

      </Row>

      <Row>

        <Col md={3}>        
         Enter your email <br></br>
         <Input type="text"></Input>
         
   </Col>

      </Row>

      <Row>

        <Col md={3}>
         Enter your password <br></br>
         <Input type="number"></Input>
        </Col>

      </Row>
       <Row>
        <Col md={3}>
          Confirm your password <br></br>
          <Input type="number"></Input>
        </Col>
       </Row>
       <Row>
        <Col md={3}>
          <br></br>
          <Button>Register</Button>
        </Col>
       </Row>
      </Form>

    </Container>  

  </div>
  );
};

export default Register;
