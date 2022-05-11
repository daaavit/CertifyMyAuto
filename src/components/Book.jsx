import React from "react";
import peace from "../assets/peace.svg";
import save from "../assets/save.svg";
import shield from "../assets/shield.svg";
import BookingOne from "../assets/booking1.png";
import BookingTwo from "../assets/booking2.png";
import BookingThree from "../assets/booking3.png";

import {
  MainWrapper,
  BookingWrapper,
  InfoArea,
  BookArea,
  PicWithText,
  BookingCard,
  Title,
  Text,
  PicArea,
  BookingTitle,
  ButtonArea,
  Pricing,
  Button,
} from "../Styles/Book.Styles";

const Book = () => {
  return (
    <MainWrapper>
      <BookingWrapper>
        <InfoArea>
          <PicWithText>
            <img src={peace} height="30%" alt="info pics" width="50%" />
            <Title>Peace of mind</Title>
            <Text>
              Buying a car is an exciting experience, but it can also be
              stressful. Buying vehicle with our service gives you valuable
              peace of mind.
            </Text>
          </PicWithText>
          <PicWithText>
            <img src={save} height="30%" alt="info pics" width="50%" />
            <Title>Invest Small Win Big</Title>
            <Text>
              Our Service confirms your total cost of owning the car during the
              years when it is in effect because you won't have to worry about
              unexpected repairs.
            </Text>
          </PicWithText>
          <PicWithText>
            <img src={shield} height="30%" alt="info pics" width="50%" />
            <Title>Incorruptible</Title>
            <Text>
              We are a consumer-oriented company rather than businesses.
            </Text>
          </PicWithText>
        </InfoArea>
        <BookArea>
          <BookingCard>
            <PicArea>
              <img src={BookingOne} alt="booking pics" width="80%" />
            </PicArea>
            <BookingTitle>Pre-Purchase Inspection</BookingTitle>
            <Pricing>2 hr - $250</Pricing>
            <ButtonArea>
              <Button>Book Now ></Button>
            </ButtonArea>
          </BookingCard>
          <BookingCard>
            <PicArea>
              <img src={BookingTwo} alt="booking pics" width="80%" />
            </PicArea>
            <BookingTitle>Pre-Sale Inspection</BookingTitle>
            <Pricing>2 hr - $250</Pricing>
            <ButtonArea>
              <Button>Book Now ></Button>
            </ButtonArea>
          </BookingCard>
          <BookingCard>
            <PicArea>
              <img src={BookingThree} alt="booking pics" width="80%" />
            </PicArea>
            <BookingTitle>Diagnostic Services</BookingTitle>
            <Pricing>2 hr - $55</Pricing>
            <ButtonArea>
              <Button>Book Now ></Button>
            </ButtonArea>
          </BookingCard>
        </BookArea>
      </BookingWrapper>
    </MainWrapper>
  );
};

export default Book;
