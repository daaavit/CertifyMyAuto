import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #E6E7ED;
    align-content: center;
    // justify-content: space-evenly;
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
      justify-content: space-evenly;
      align-items: center;
      height: 70%;
      width: 90%;
    //   max-width: 980px;
    //   max-height: 750px;

      margin-top: 3%;

      box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
      border-radius: 50px;
      border: none;

      @media (max-width: 750px) {
        display: flex;
        height: 90%;
        width: 90%;
        
      }


`
export const Heading = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3em;
      font-weight: bold;
      height: 10%;
      width: 90%;
      
      @media(max-width: 750px) {
          display: flex;
          font-size: 1.2em;
      }

`

export const TextArea = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    justify-content: center;
    height: 20%;
    width: 90%;

    

    @media(max-width: 750px) {
        display: flex;
        font-size: 0.7em;
        border-bottom: none;
    }

`

export const PicArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 50%;

    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 50px;
    border: none;

    margin-top: 1%;
   

    animation: PicArea 5s ease 0s infinite normal forwards;

    @keyframes PicArea {
        0% {
            animation-timing-function: ease-out;
            transform: scale(1);
            transform-origin: center center;
        }
    
        10% {
            animation-timing-function: ease-in;
            transform: scale(0.91);
        }
    
        17% {
            animation-timing-function: ease-out;
            transform: scale(0.98);
        }
    
        33% {
            animation-timing-function: ease-in;
            transform: scale(0.87);
        }
    
        45% {
            animation-timing-function: ease-out;
            transform: scale(1);
        }
    }

    @media(max-width: 750px) {
        display: flex;
        height: 30%;
        width: 100%;
        box-shadow: none !important;


        
    }

`

export const SecondSmallTextArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    height: 10%;
    width: 90%;
    @media(max-width: 750px) {
        display: flex;
        height: 5%;
        font-size: 0.8em;
    }

`

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 90%;



`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5em;
    color: black;
    height: 80%;
    width: 15%;
    cursor: pointer;
    
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;
    border-radius: 50px;



    :hover {
        
        box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
        border-radius: 50px;
        border: none;
       
        font-size: 2em;
    }
    @media(max-width: 750px) {
        display: flex;
        width: 50%;
        height: 80%;
        font-size: 1.2em;

        :hover {
            font-size: 1.5em;
        }

    }

    `
