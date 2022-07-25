import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #E6E7ED;
    align-content: center;
    // justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
        
      }
`

export const PicWithTextWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 90vh;
      width: 80vw;

      @media (max-width: 750px) {
        display: flex;
        width: 97vw;
        
      }

`

export const MainText = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      font-weight: bold;
      height: 20%;
      width: 90%;

      @media(max-width: 750px){
        display: flex;
        font-size: 0.8em;
        height: 20%;
        width: 100%;

    }

`

export const OfferWithPicSec = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 90%;

    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 20px;
    

    @media(max-width: 750px){
        display: flex;
        height: 75%;
        width: 95%;
        

    }

`

export const MainPicArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 40%;
    
    animation: MainPicArea 3s ease 0s 1 normal forwards;
    @keyframes MainPicArea {
        0% {
            opacity: 0;
            transform: translateX(-250px);
        }
    
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media(max-width: 750px){
        display: none;

    }


`

export const CardsArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 95%;
    width: 60%;

    @media(max-width: 750px){
        display: flex;
        width: 100%;

    }


`

export const CardsWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30%;
      width: 95%;

      box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
      border: 0.5px #d1d9e6 solid;
      border-radius: 20px;

      :hover {
        box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
        border-radius: 20px;
        border: none;
    
        
    }


`

export const PicsForCards = styled.div`
    display: flex;
    height: 70%;
    width: 20%;

`

export const TextForCards = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.3em;
      font-weight: bold;
      height: 30%;
      width: 50%;
      border-bottom: 1px solid lightgray;
      
      @media(max-width: 750px){
        display: flex;
        width: 95%;
        font-size: 1.1em

    }


`
export const BoxForPrices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 95%;
    width: 70%;


`

export const PricesForCard = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1em;
      height: 30%;
      width: 50%;

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    font-weight: bold;
    border-radius: 50px;
    color: black;
    height: 30%;
    width: 30%;
    background: #E6E7ED;


 box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
 border: 0.5px #d1d9e6 solid;
 border-radius: 50px;




    animation: Button 3s ease 0s 1 normal forwards;

    @keyframes Button {
        0%,
        100% {
            transform: rotate(0deg);
            transform-origin: 50% 50%;
        }
    
        10% {
            transform: rotate(8deg);
        }
    
        20%,
        40%,
        60% {
            transform: rotate(-10deg);
        }
    
        30%,
        50%,
        70% {
            transform: rotate(10deg);
        }
    
        80% {
            transform: rotate(-8deg);
        }
    
        90% {
            transform: rotate(8deg);
        }
    }


    :hover {
        font-size: 1em;
        font-weight: bold;
        box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
        border-radius: 50px;
        border: none;
        cursor: pointer;
    }
    @media(max-width: 750px){
        display: flex;
        width: 50%;
        font-size: 0.8em;

   


    `