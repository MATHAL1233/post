import {Navbar,Nav,NavItem,NavLink,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <>
    <Navbar className="Header">
      <Nav>
        <NavItem>
        <img src={logo} className="logoImage" />
        </NavItem>
        <NavItem>
          <Link active href="#">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <NavLink href="#">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Logout</NavLink>
        </NavItem>
      
      </Nav>
    </Navbar>
     
    </>


  );
};

export default Header;
