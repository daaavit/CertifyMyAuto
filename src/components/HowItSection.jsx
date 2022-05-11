import React from "react";
import { BsArrow90DegRight, BsArrow90DegDown } from "react-icons/bs";
import {
  MainWrapper,
  Section,
  Heading,
  UniDivWrapper,
  NumbersWithText,
  ArrowBox,
  TextArea,
  Numbers,
  ButtonArea,
  Button,
} from "../Styles/HowItWorks.Styles";

const HowItWorks = () => {
  return (
    <MainWrapper>
      <Section>
        <Heading>How It Works!</Heading>
        <UniDivWrapper>
          <NumbersWithText>
            <Numbers>1</Numbers>
            <TextArea>
              <h2>Book An Inspection</h2>
              <p>Order Pre-Purchase inspeciton through the site or by phone </p>
            </TextArea>
          </NumbersWithText>
          <ArrowBox>
            <BsArrow90DegRight
              size={75}
              style={{ transform: "rotate(90deg)" }}
            />
          </ArrowBox>
        </UniDivWrapper>
        <UniDivWrapper>
          <ArrowBox>
            <BsArrow90DegDown size={75} />
          </ArrowBox>
          <NumbersWithText>
            <Numbers>2</Numbers>
            <TextArea>
              <h2>Book An Inspection</h2>
              <p>Our tech will contact the seller for inspection availabilty</p>
            </TextArea>
          </NumbersWithText>
        </UniDivWrapper>
        <UniDivWrapper>
          <NumbersWithText>
            <Numbers>3</Numbers>
            <TextArea>
              <h2>Book An Inspection</h2>
              <p>
                Tech will begin moving towards sellers locations as inspection
                schedualed
              </p>
            </TextArea>
          </NumbersWithText>
          <ArrowBox>
            <BsArrow90DegRight
              size={75}
              style={{ transform: "rotate(90deg)" }}
            />
          </ArrowBox>
        </UniDivWrapper>
        <UniDivWrapper>
          <ArrowBox>
            <BsArrow90DegDown size={75} />
          </ArrowBox>
          <NumbersWithText>
            <Numbers>4</Numbers>
            <TextArea>
              <h2>Book An Inspection</h2>
              <p>
                You will get your user friendly pre-purchase inspection results
              </p>
            </TextArea>
          </NumbersWithText>
        </UniDivWrapper>
        <UniDivWrapper>
          <NumbersWithText>
            <Numbers>5</Numbers>
            <TextArea>
              <h2>Book An Inspection</h2>
              <p>Order Pre-Purchase inspeciton through the site or by phone </p>
            </TextArea>
          </NumbersWithText>
          <ButtonArea>
              <Button>Call Now ></Button>
          </ButtonArea>
        </UniDivWrapper>
      </Section>
    </MainWrapper>
  );
};

export default HowItWorks;
