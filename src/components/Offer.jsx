import React from "react";
import DollarSign from "../assets/dollarsign.svg";
import Hours from "../assets/24hour.svg";
import Clock from "../assets/clock.svg";
import CheckMark from "../assets/checkmark.svg";
import HandShake from "../assets/handshake.svg";
import BestValue from "../assets/bestvalue.svg";
import {MdPhone} from 'react-icons/md'
import {GrMapLocation} from 'react-icons/gr'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

import {
  MainWrapper,
  IconWithTextWrapper,
  IconsArea,
  ContactArea,
  UniIconBox,
  Title,
  IconArea,
  UniIcons,
} from "../Styles/Offer.Styles";

const Offer = () => {
  return (
    <MainWrapper>
      <IconWithTextWrapper>
        <IconsArea>
          <UniIconBox>
            <Title>Place Oreder Anytime</Title>
            <IconArea>
              <img src={Hours} alt="info icon" />
            </IconArea>
          </UniIconBox>
          <UniIconBox>
            <Title>Save Money</Title>
            <IconArea>
              <img src={DollarSign} alt="info icon" />
            </IconArea>
          </UniIconBox>
          <UniIconBox>
            <Title>Save Time</Title>
            <IconArea>
              <img src={Clock} alt="info icon" />
            </IconArea>
          </UniIconBox>
          <UniIconBox>
            <Title>Get It Done Easly</Title>
            <IconArea>
              <img src={CheckMark} alt="info icon" />
            </IconArea>
          </UniIconBox>
          <UniIconBox>
            <Title>Deal With Pros</Title>
            <IconArea>
              <img src={HandShake} alt="info icon" />
            </IconArea>
          </UniIconBox>
          <UniIconBox>
            <Title>Consumer-Oriented</Title>
            <IconArea>
              <img src={BestValue} alt="info icon" />
            </IconArea>
          </UniIconBox>
        </IconsArea>
        <ContactArea>
          <UniIcons onClick={(e) => window.open('https://voice.google.com/u/0/about')}><MdPhone size={50}/></UniIcons>
          <UniIcons onClick={(e) => window.open('https://www.google.com/maps')}><GrMapLocation size={50}/></UniIcons>
          <UniIcons onClick={(e) => window.open('https://www.youtube.com/')}><AiOutlineYoutube size={50}/></UniIcons>
          <UniIcons onClick={(e) => window.open('https://www.instagram.com/')}><BsInstagram size={50}/></UniIcons>
          <UniIcons onClick={(e) => window.open('https://facebook.com/')}><FaFacebookF size={50}/></UniIcons>
        </ContactArea>
      </IconWithTextWrapper>
    </MainWrapper>
  );
};

export default Offer;
