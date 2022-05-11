import React from "react";
import { IoMdLogIn } from "react-icons/io";
import logotop from '../assets/logodone.png'
import { NavbarWrapper, Universal, Logo, Text } from "../Styles/Navbar.Style";




const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <Universal Display="flex" width="20%" justifyContent='center'>
         <Logo src={logotop}/>
        </Universal>
        <Universal
          Display="flex"
          height="30%"
          justifyContent="space-between"
          backgroundColor="#e8e6e6"
          width="70%"
          alignItems="center"
          borderRadious="30px"
          padding="1%"
          margin="1%"
        >
          <Text paddingRight="2%" borderRight="1px solid black">
            HOME
          </Text>
          <Text paddingRight="2%" borderRight="1px solid black">
            Book Online
          </Text>
          <Text paddingRight="2%" borderRight="1px solid black">
            Services
          </Text>
          <Text paddingRight="2%" borderRight="1px solid black">
            Recently Certified
          </Text>
          <Text >FAQ</Text>
        </Universal>
        <Universal Display="flex" backgroundColor="" width="20%" justifyContent='center'>
          <Text>
            <IoMdLogIn size="30px" />
            Log in
          </Text>
        </Universal>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
