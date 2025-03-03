import { Button, Col, Input, Row,Container,Form } from "reactstrap";
import { userSchemaValidation } from "../Validations/UserValidations";
//import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const{
    register,
    handleSubmit,
    formState:{errors},
    }=useForm({resolver:yupResolver(userSchemaValidation),});
    // Handle form submission
    const onSubmit = (data) => {
     console.log("Form Data", data); // You can handle the form submission here
    
    }
  return (
    <div>
   <h1>Register</h1>
    <Container>

    <Form className="div=form" onSubmit={handleSubmit(onSubmit)}>

<Row>

        <Col md={3}>          
        Name <br></br>
        <input type="text"
        name="name"
        
         {...register("name")}></input>
         <p className="error">{errors.name?.message}</p>
          
        </Col>

      </Row>

      <Row>

        <Col md={3}>        
         Email <br></br>
         <input type="text" name="email" 
         {...register("email")}></input>
         <p className="error">{errors.email?.message}</p>
         
   </Col>

      </Row>

      <Row>

        <Col md={3}>
         password <br></br>
         <input type="number" name="password" 
         {...register("password")}></input>
         <p className="error">{
         errors.password?.message}</p>
        </Col>

      </Row>
       <Row>
        <Col md={3}>
          Confirm your password <br></br>
          <input type="number" name="confirmPassword"
          {...register("confirmPassword")}></input>
          <p className="error">{errors.confirmPassword?.message}</p>
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
