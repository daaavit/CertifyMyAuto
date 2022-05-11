import styled from "styled-components";

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: 70vh;
    width: 70vw;

    @media(max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: 70vh;
    width: 98vw;
    }

`

export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 90%;

    @media(max-width: 750px){
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9em;
        height: 10%
        width: 100%;
    }

`

export const TextWithPicWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    height: 70%; 
    width: 70%;

    @media(max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    height: 70%; 
    width: 90%;
            }
    

`

export const PicArea = styled.div`
    display: flex;
    height: 80%;
    width: 45%;
   

    @media(max-width: 750px) {
    display: flex;
    height: 50%;
    width: 50%;
        }

`

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    height: 80%;
    width: 45%;

    @media(max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    height: 80%;
    width: 100%;
                }

`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    height: 10%;
    width: 70%;

    @media(max-width: 750px) {
       align-items: center;
    
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5em;
    border: none;
    color: white;
    background: red;
    height: 100%;
    width: 20%;
    border-radius:  50px;
    cursor: pointer;

    :hover {
        background: black;
        font-size: 2em;
    }
    @media(max-width: 750px) {
        display: flex;
        width: 50%;
        height: 80%;
        font-size: 1.2em;

        :hover {
            background: black;
            font-size: 1.5em;
        }

    }


`


export const UniDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.height};
    width: ${(props) => props.width};

`

export const IconWithText = styled.div`
    display: flex;
    height: 50%;
    width: 20%;
    animation: IconWithText 2s ease 1s 1 normal forwards;
    
    @keyframes IconWithText {
        0% {
            transform: scale(2);
        }
    
        100% {
            transform: scale(1);
        }
    }
`

export const TextForIcons = styled.div`
    display: flex;
    height: 50%;
    width: 70%;

    :hover{
        

    }

`

export const RedSpan = styled.span`
    color: red;
    margin-left: 1%;
`