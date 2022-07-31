import React from "react";
import { IoMdLogIn } from "react-icons/io";
import logotop from "../assets/logodone.png";
import { NavbarWrapper, Universal, Logo, Text } from "../Styles/Navbar.Style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <Universal Display="flex" width="20%" justifyContent="center">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <Logo src={logotop} />
          </Link>
        </Universal>
        <Universal
          Display="flex"
          height="100%"
          justifyContent="space-between"
          backgroundColor="#E6E7ED"
          width="100%"
          alignItems="center"
          borderRadious="30px"
          padding="1%"
          margin="1%"
        >
          <Text>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </Text>
          <Text>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/bookonline"
            >
              Book Online
            </Link>
          </Text>
          <Text>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Services"
            >
              Services
            </Link>
          </Text>
          <Text>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/certified"
            >
              Certified
            </Link>
          </Text>
          <Text>
            {" "}
            <Link style={{ textDecoration: "none", color: "black" }} to="/Faq">
              FAQ
            </Link>
          </Text>
        </Universal>
        <Universal
          Display="flex"
          backgroundColor=""
          width="20%"
          justifyContent="center"
        >
          <Text>
            <IoMdLogIn size="30px" />
            <Link style={{ textDecoration: "none", color: "black" }} to="/SignIn">
              Sign In
            </Link>
          </Text>
        </Universal>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
