import loginImage from "../Images/loginImage.jpg";
import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector,useDispatch } from "react-redux";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { useDebugValue, useState } from "react";
import { addUser,deleteUser } from "../Features/UserSlice";
const UpdateUser = () => {
  const userList = useSelector((state)=> state.users.value);
  const [name,setname]=useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });

  // Handle form submission

  const onSubmit = (data) => {
    try {
      const userData ={
        name: data.name,
        email: data.email,
        password:data.password,
      };
      dispatch(addUser(userData));
      console.log("Form Data", data);
      alert("Validation all good.");
    } catch (error){
      console.log("Error.");
    }
  
  };
  const handleDelete = (email) => {
    dispatch(deleteUser(email));
    alert("User deleted.")
  };

  return (
    <Container>
      <h1>Updateuser</h1>
      <Form onSubmit={handleSubmit(onSubmit)}></Form>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input type="text" name="name" {...register("name",{onChange: (e) => setname(e.target.value),
            })}></input>
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input type="email" name="email" {...register("email",{onChange: (e) => setemail(e.target.value),
            })}></input>
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password",{onChange: (e) => setpassword(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword",{onChange: (e) => setconfirmPassword(e.target.value),
            })}
            ></input>
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Update User</Button>
          </Col>
        </Row>
      </Form>
      </Container>

  );
      
};

export default UpdateUser;
