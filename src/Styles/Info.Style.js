import styled from "styled-components";

export const InfoWrapper = styled.div`
    display: flex;
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 50px;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: 100vh;
    width: 70vw;
    max-width: 980px;
    max-height: 850px;
    margin-top: 3%;

    @media(max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: 55vh;
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
    border-radius: 20px;
    // box-shadow:  -5px -5px 10px #FFFFFF,   5px 5px 10px  #9C9C9C !important;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;

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
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 20px;   

    @media(max-width: 750px) {
    display: flex;
    height: 50%;
    width: 50%;
    margin-top: 3%;
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
    align-items: center;
    height: 10%;
    width: 70%;

    @media(max-width: 750px) {
        margin-top: 4%;
       align-items: center;
    
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2em;
    border: none;
    color: black;
    background: #E6E7ED;
    // box-shadow:  -5px -5px 10px #FFFFFF,   5px 5px 10px  #9C9C9C !important;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;
    height: 50%;
    width: 15%;
    border-radius:  50px;
    cursor: pointer;
    margin-top: 1%;

    :hover {
        box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
        font-size: 1.3em;
        border: none;
    }
    @media(max-width: 750px) {
        display: flex;
        width: 50%;
        height: 80%;
        font-size: 1.2em;

    

    }


`


export const UniDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: ${(props) => props.height};
    width: ${(props) => props.width};

`

export const IconWithText = styled.div`
    display: flex;
    height: 100%;
    width: 15%;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;
    animation: IconWithText 2s ease 1s 1 normal forwards;
    
    @keyframes IconWithText {
        0% {
            transform: scale(2);
        }
    
        100% {
            transform: scale(1);
        }
    }

    @media(max-width: 750px) {
        width: 8%;
 
     }
`

export const TextForIcons = styled.div`
    display: flex;
    height: 50%;
    width: 70%;

    :hover{
        

    }

    @media(max-width: 750px) {
       font-size: 0.9em;

    }

`

export const RedSpan = styled.span`
    color: green;
    margin-left: 1%;
`