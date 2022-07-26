import React from "react";
import Navbar from "../components/Navbar";
import {
  FaqWrapper,
  QuestionBox,
  QuestionWrapper,
  Heading,
  AskedQuestionsBox,
  ActualQuestions,
  IconForQuestion,
} from "./Styles/Faq.Styles";
import { BsPlusLg } from "react-icons/bs";

const Faq = () => {
  return (
    <FaqWrapper>
      <Navbar />
      <QuestionBox>
        <Heading>Frequently asked questions</Heading>
        <QuestionWrapper>
          <AskedQuestionsBox>
            <ActualQuestions>Can I speak to inspector?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>What is yor cancellation policy</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>Do you peform emmision testing?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>Do you lift vehicle during inspection?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>Do you offer vehicle state safety inspection + sticker?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>Im in rush how fast can you do inspection?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>If vehicle pass CertifyMyAutos inspection do i have to make purchase decision based on your reports?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>I want to use your service outside your working area</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>What happens if seller refuse inspector to test drive a vehicle?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>When i receive inspectio reports?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>When i receive inspectio reports?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>What is your working radius?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
          <AskedQuestionsBox>
            <ActualQuestions>Will you share inspection reports with seller?</ActualQuestions>
            <IconForQuestion>
              <BsPlusLg size={30} />
            </IconForQuestion>
          </AskedQuestionsBox>
        </QuestionWrapper>
      </QuestionBox>
    </FaqWrapper>
  );
};

export default Faq;
