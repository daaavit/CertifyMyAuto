import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DiagPic from "../assets/ServicesDiagPic.png";
import PreSalePic from "../assets/PreSaleInspection.png";
import PrePurchasePic from "../assets/BookOnlineOne.png";
import {
  MainWrapper,
  PicWithTextWrapper,
  Heading,
  TextArea,
  PicArea,
  SecondSmallTextArea,
  ButtonArea,
  Button,
} from "./Styles/Services.Styles";

const Services = () => {
  return (
    <>
      <MainWrapper>
        <Navbar />
        <PicWithTextWrapper>
          <Heading>Full Diagnostic Service</Heading>
          <TextArea>
            A Car Diagnostic Test Is a Digital Analysis of Your Car’s Various
            Computer Systems And Components. We Only Use OE Tools For Each Brand
            Doesnt Matter if its American, European, Aian Or Korean Vehicle. Our
            Service Includes Full Dealer Level Diagnose, Calibrate, New Part
            Registry, Coding and Software Updates Car Diagnostic Tests Help You
            Detect Errors Before They Become Catastrophic, Saving You Money In
            The Long Run. Furthermore, Catching Errors Before They Become More
            Serious Could Potentially Save Your Life Or The Lives Of Others.
          </TextArea>
          <PicArea>
            <img src={DiagPic} height="100%" width="40%"/>
          </PicArea>
          <SecondSmallTextArea>
            Only Available At Our Brooklyn Mobile Location
          </SecondSmallTextArea>
          <ButtonArea>
            <Button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookOnline"
              >
                Book
              </Link>
            </Button>
          </ButtonArea>
        </PicWithTextWrapper>
      </MainWrapper>
      <MainWrapper>
        <PicWithTextWrapper>
          <Heading>Pre-Sale Inspection</Heading>
          <TextArea>
            Benefits of Using Our Pre-Sale Inspection: Sometimes Experienced
            Buyers Using All Kinds Of Tactics To Lower Selling Price For
            Example: If Car Have DTC For Misfire Buyers Gonna Made Up All
            Different Stories Have Bad It Is. It's Simple You Can Book Or Call
            To Order Pre-Sale Inspection With That Way You Always Have A Strong
            Proof That Car Doesn't Need Any Major Repairs. In Next Case It's
            Will Be A Smart Decision To Do Our Pre-Sale Inspection Before
            Vehicle Warranty Expires With Small Investment You Can Save Lot Of
            Money In Future Repairs
          </TextArea>
          <PicArea>
            <img src={PreSalePic} height="100%" width="40%" />
          </PicArea>
          <SecondSmallTextArea>
            Only Available Within 100 Mile Radius From Brooklyn
          </SecondSmallTextArea>
          <ButtonArea>
            <Button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookOnline"
              >
                Book
              </Link>
            </Button>
          </ButtonArea>
        </PicWithTextWrapper>
      </MainWrapper>
      <MainWrapper>
        <PicWithTextWrapper>
          <Heading>Pre-Purchase Inspection</Heading>
          <TextArea>
            After Booking Online or Calling Us 500+ Point Pre-Purchase
            Inspection Will Be Preformed At Your, Dealers Or Privet Sellers
            Location. Currently, We Do Pre-Purchase Inspections within 100 Mile
            Radius From Brooklyn
          </TextArea>
          <PicArea>
            <img src={PrePurchasePic} height="100%" width="40%" />
          </PicArea>
          <SecondSmallTextArea>
            Only Available Within 100 Mile Radius From Brooklyn
          </SecondSmallTextArea>
          <ButtonArea>
            <Button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookOnline"
              >
                Book
              </Link>
            </Button>
          </ButtonArea>
        </PicWithTextWrapper>
      </MainWrapper>
    </>
  );
};

export default Services;
