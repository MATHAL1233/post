import logo from "../Images/logo-t.png";
import { Button,Form,Container, Row, Col, Input } from "reactstrap"; //import the Reactstrap
import { Link } from "react-router-dom";
const Login = () => {
  return (

    <div>

      <Container>
      <img src={logo}/>
      <Form>

        <Row>

          <Col md={3}>
            Username <br></br>
            <Input type="text"></Input>

          </Col>

        </Row>    

       <Row>

          <Col md={3}> 
              Password<br></br>     
              <Input type="number"></Input>

          </Col>

        </Row>

        <Row>

          <Col md={3}> 
          <br></br>       
          <Button>login</Button>
     </Col>

        </Row>

        <Row>

          <Col md={3}>

          </Col>

        </Row>

        </Form>

      </Container>  
      
      <p className="smalltext">
      No Account? <Link to="/register">Sign Up now.</Link>
      </p>

    </div>
  );
};

export default Login;
