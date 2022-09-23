import React from "react";
import { Link } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import {
  MainWrapper,
  InfoWrapper,
  Heading,
  TextWithPicWrapper,
  PicArea,
  TextArea,
  ButtonArea,
  Button,
  UniDiv,
  IconWithText,
  TextForIcons,
  RedSpan,
} from "../Styles/Info.Style";
import DiagPic from "../assets/diagnostic.png";
const Info = () => {
  return (
    <InfoWrapper>
      <Heading>The Most Trustworthy Pre-Purchase Inspection</Heading>
      <TextWithPicWrapper>
        <PicArea>
          <img src={DiagPic} width="100%"  alt='diag pic'/>
        </PicArea>
        <TextArea>
          <UniDiv height="15%" width="90%">
            <IconWithText>
              <BsCheck2Circle size={30} />
            </IconWithText>
            <TextForIcons>500+ Point car inpsection</TextForIcons>
          </UniDiv>
          <UniDiv height="15%" width="90%">
            <IconWithText>
              <BsCheck2Circle size={30} />
            </IconWithText>
            <TextForIcons>Speak to technican anytime!</TextForIcons>
          </UniDiv>
          <UniDiv height="15%" width="90%">
            <IconWithText>
              <BsCheck2Circle size={30} />
            </IconWithText>
            <TextForIcons>30+ Real world unedited pictures</TextForIcons>
          </UniDiv>
          <UniDiv height="15%" width="90%">
            <IconWithText>
              <BsCheck2Circle size={30} />
            </IconWithText>
            <TextForIcons>User friendly inpspection reports</TextForIcons>
          </UniDiv>
          <UniDiv height="15%" width="90%">
            <IconWithText>
              <BsCheck2Circle size={30} />
            </IconWithText>
            <TextForIcons>
              Fix price<RedSpan>NO HIDDEN FEES</RedSpan>
            </TextForIcons>
          </UniDiv>
        </TextArea>
      </TextWithPicWrapper>
      <ButtonArea>
        <Button>
          <Link style={{ textDecoration: "none", color: "black" }} to="BookOnline">
            Let's Go
          </Link>
        </Button>
      </ButtonArea>
    </InfoWrapper>
  );
};

export default Info;
