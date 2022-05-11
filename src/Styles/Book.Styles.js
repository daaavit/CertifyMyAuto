import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 98vw;
  


`

export const BookingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 80%;

    @media(max-width: 750px) {
        display: flex;
        height: 95%;
        width: 100%;
    }


`

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;
    width: 80%;

    @media(max-width: 750px) {
        display: flex;
        width: 100%;
    }


`

export const BookArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    width: 80%;

    @media(max-width: 750px) {
        display: flex;
        width: 100%;
        font-size: 0.9em;
    }


`

export const PicWithText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 30%;

    

`

export const BookingCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    justify-content: space-evenly;
    align-items: center;
    height: 90%;
    width: 30%;

  :hover{
      border: 2px solid black;
  }

  @media(max-width: 750px) {
    display: flex;
    width: 100%;
    font-size: 0.9em;
}

  


`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    height: 20%;
    width: 70%;
    font-weight: bold; 
    font-size: 1.2em;


    @media(max-width: 750px) {
        display: flex;
        width: 100%;
        font-size: 0.9em;
    }

    

`
export const Text = styled.div`
    display: flex;
    height: 50%;
    width: 80%;
    font-size: 0.8em;
    @media(max-width: 750px) {
        display: flex;
        width: 100%;
        font-size: 0.7em;
    }

`

export const PicArea = styled.div`
    display: flex;
    justify-content: center;
    height: 30%;
    width: 90%;

    @media(max-width: 750px) {
        display: flex;
        height: 20%;
        width: 95%;
    
    }

`

export const BookingTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.3em;
    font-weight: bold;
    height: 10%;
    width: 90%;
    border-bottom: 1px solid lightgray;
`   

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 90%;

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    color: white;
    height: 50%;
    width: 70%;
    background: red;

    :hover {
        font-size: 1.8em;
        font-weight: bold;
        height: 60%;
        width: 80%;
        background: #31C8CF;
        cursor: pointer;
    

    }

    @media(max-width: 750px){
        display: flex;
        font-size: 1.3em
        height: 60%;
        width: 100%;

    }



`


export const Pricing = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
    height: 20%;
    width: 80%;

    @media(max-width: 750px){
        display: flex;
        font-size: 1.3em

    }

`