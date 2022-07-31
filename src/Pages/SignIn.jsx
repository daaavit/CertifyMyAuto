import React from "react";
import {
  MainWrapper,
  SignInBox,
  Heading,
  InputArea,
  InputBox,
  IconBox,
  UniInputBox,
  PassOptions,
  RemeberMe
} from "./Styles/Signin.Styles";
import Navbar from "../components/Navbar";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri"


const SignIn = () => {
  return (
    <MainWrapper>
      <Navbar />
      <SignInBox>
        <Heading>Sign In</Heading>
        <InputArea>
          <InputBox>
            <IconBox><MdEmail size={20}/></IconBox>
            <UniInputBox placeholder="example@yahoo.com"></UniInputBox>
          </InputBox>
          <InputBox>
            <IconBox><RiLockPasswordFill size={20}/></IconBox>
            <UniInputBox placeholder='Password' type='password'></UniInputBox>
          </InputBox>
        </InputArea>
        <PassOptions><RemeberMe>s</RemeberMe></PassOptions>
      </SignInBox>
    </MainWrapper>
  );
};

export default SignIn;
