import React from "react";
import { MainWrapper, FormWrapper } from "./Styles/Certified.Styles";
import Navbar from "../components/Navbar";

const Certified = () => {
  return (
    <>
      <MainWrapper>
        <Navbar />
        <FormWrapper>
          <iframe
            src="https://airtable.com/embed/shrVNQZ3Bc6MsurLh?backgroundColor=blue"
            width="100%"
            // height="100%"
            style={{ background: '#E6E7ED' }}
          ></iframe>
        </FormWrapper>
      </MainWrapper>
    </>
  );
};

export default Certified;
