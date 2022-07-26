import styled from 'styled-components'

export const FaqWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100vw;
    background-color: #E6E7ED;
    align-content: center;
    // justify-content: center;
    align-items: center;


@media (max-width: 750px) {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    
  }
    }

`

export const QuestionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto%;
    width: 90%;
    max-width: 1200px;
    margin-bottom: 5%;

    @media (max-width: 750px) {
        display: flex;
        width: 100%;
        
      }



`
export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 90%;

    @media (max-width: 750px) {
        display: flex;
        font-size: 1.3em;             
      }

`

export const AskedQuestionsBox = styled.div`
    display: flex;
    height: 15vh;
    max-height: 100px;
    width: 100%;
    border-bottom: 0.5px #d1d9e6 solid;

`

export const IconForQuestion = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 15vh;
    max-height: 100px;
    width: 50%;
    margin-right: 3%;
`

export const ActualQuestions = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.3em;
    font-weight: bold;
    height: 90%;
    width: 50%;
    margin-left: 3%;

    @media (max-width: 750px) {
        display: flex;
        font-size: 0.8em;             
      }

`

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width: 80%;
  
   box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
   border: 0.5px #d1d9e6 solid;
   border-radius: 20px;




`
