import React from "react";
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
  TextForIcons,
  RedSpan,
} from "../Styles/InfoSecond.Styles.js";
import DiagPic from "../assets/diagSecond.png";
import Typewriter from "typewriter-effect";

const InfoSecond = () => {
  return (
    <MainWrapper>
      <InfoWrapper>
        <Heading>
          <Typewriter
            onInit={(typewriter, ) => {
              typewriter
                .typeString("The Most Hated Company By Dishonest Sellers")
                .pauseFor(1000)
                .start();
            }}
          />
        </Heading>
        <TextWithPicWrapper>
          <PicArea>
            <img src={DiagPic} width='100%' />
          </PicArea>
          <TextArea>
            <UniDiv height="15%" width="90%">
              <TextForIcons>
                <RedSpan>Why?</RedSpan> Becouse we dig too far for Odometre
                <RedSpan>FRAUD</RedSpan>
              </TextForIcons>
            </UniDiv>
            <UniDiv height="15%" width="90%">
              <TextForIcons>
                <RedSpan>Why?</RedSpan> Becouse we look too far find any
                previously hidden <RedSpan>ACCIDENTS</RedSpan>
              </TextForIcons>
            </UniDiv>
            <UniDiv height="15%" width="90%">
              <TextForIcons>
                <RedSpan>Why?</RedSpan> Heard about title-washing? We make it
                <RedSpan>DIRTY</RedSpan> again!
              </TextForIcons>
            </UniDiv>
            <UniDiv height="15%" width="90%">
              <TextForIcons>
                <RedSpan>Why?</RedSpan> Because quick auto detail doesn't{" "}
                <RedSpan>trick</RedSpan>our eyes
              </TextForIcons>
            </UniDiv>
            <UniDiv height="15%" width="90%">
              <TextForIcons>
                <RedSpan>Why?</RedSpan> Because we love math! Condition +
                History = <RedSpan>PRICE</RedSpan>
              </TextForIcons>
            </UniDiv>
          </TextArea>
        </TextWithPicWrapper>
        <ButtonArea>
          <Button>Book Now </Button>
        </ButtonArea>
      </InfoWrapper>
    </MainWrapper>
  );
};

export default InfoSecond;
