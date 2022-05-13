import React from "react";
import "../components/Navbar";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import BookOnlineOne from "../assets/BookOnlineOne.png";
import Booking1 from "../assets/booking1.png";
import Booking2 from "../assets/booking2.png";
import Booking3 from "../assets/booking3.png";
import {
  MainWrapper,
  PicWithTextWrapper,
  MainText,
  OfferWithPicSec,
  MainPicArea,
  CardsArea,
  CardsWrapper,
  PicsForCards,
  TextForCards,
  BoxForPrices,
  PricesForCard,
  Button,
} from "../Pages/Styles/BookOnline.Styles";

const BookOnline = () => {
  return (
    <MainWrapper>
      <Navbar />
      <PicWithTextWrapper>
        <MainText>
        <Typewriter
            onInit={(typewriter, ) => {
              typewriter
                .typeString(`You can choose one of our services! All prices are fixed and there's
                no hidden fees. We dont work as other companies do. It doesnt matter
                if you are planning to buy an economy Vehicle or that the exotic
                vehicle price stays the same. We never ask you more because you can
                afford more`)
                .pauseFor(1000)
                .start();
            }}
          />
        </MainText>
        <OfferWithPicSec>
          <MainPicArea>
            <img src={BookOnlineOne} width="100%" />
          </MainPicArea>
          <CardsArea>
            <CardsWrapper>
              <PicsForCards>
                <img src={Booking1} width="100%" />
              </PicsForCards>
              <BoxForPrices>
                <TextForCards>Pre-Purchase</TextForCards>
                <PricesForCard>2 hr - $250</PricesForCard>
                <Button>Book Now</Button>
              </BoxForPrices>
            </CardsWrapper>
            <CardsWrapper>
              <PicsForCards>
                <img src={Booking2} width="100%" />
              </PicsForCards>
              <BoxForPrices>
                <TextForCards>Pre-Sale</TextForCards>
                <PricesForCard>2 hr - $250</PricesForCard>
                <Button>Book Now</Button>
              </BoxForPrices>
            </CardsWrapper>
            <CardsWrapper>
              <PicsForCards>
                <img src={Booking3} width="100%" />
              </PicsForCards>
              <BoxForPrices>
                <TextForCards>Diagnostic Services</TextForCards>
                <PricesForCard>1 hr - $55</PricesForCard>
                <Button>Book Now</Button>
              </BoxForPrices>
            </CardsWrapper>
          </CardsArea>
        </OfferWithPicSec>
      </PicWithTextWrapper>
    </MainWrapper>
  );
};

export default BookOnline;
