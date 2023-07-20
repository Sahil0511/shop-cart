import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import "../index.css";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping cart</Link>
          </Navbar.Brand>

          <Navbar.Text className="search">
            <FormControl
              style={{ width: 400 }}
              placeholder="Search Product"
              className="m-auto"
            ></FormControl>
          </Navbar.Text>

          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="success" text="white">
                  {10}
                </Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Hello World</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
