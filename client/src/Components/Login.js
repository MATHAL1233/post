import logo from "../Images/logo-t.png";
import { Button,Form,Container, Row, Col, Input } from "reactstrap"; //import the Reactstrap
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "../Validations/UserValidations";
const Login = () => {
  const {register, handleSubmit,
  formState: {errors}}=useForm({resolver:yupResolver(userSchemaValidation),});
  const onSubmit = (data) => {
  console.log("Form Data", data);
  }
  return (

    <div>

      <Container>
      <img src={logo}/>
      <Form className="div=form" onSubmit={handleSubmit(onSubmit)}>

        <Row>

          <Col md={3}>
            Username <br></br>
            <Input type="text"
            name="name"
            {...register("username")}></Input>
            <p className="error">{errors.username?.message}</p>

          </Col>

        </Row>    

       <Row>

          <Col md={3}> 
              Password<br></br>     
              <input type="number" name="password" 
               {...register("password")}></input>
         <p className="error">{errors.password?.message}</p>

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
