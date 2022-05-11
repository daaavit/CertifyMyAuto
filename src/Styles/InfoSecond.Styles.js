import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
    align-content: center;
    justify-content: center;
    align-items: center;
    `

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    // background: red;
    height: 90vh;
    width: 90vw;

`

export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    align-contet: center;
    height: 10%;
    width: 90%;

`

export const TextWithPicWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    height: 70%; 
    width: 90%;
    // background: green;

`

export const PicArea = styled.div`
    display: flex;
    height: 80%;
    width: 30%;
    // background: yellow;

`

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    align-content: center;
    height: 80%;
    width: 80%;
    // background: yellow;

`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    height: 10%;
    width: 70%;

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
    height: 80%;
    width: 15%;
    border-radius:  50px;
    cursor: pointer;

      :hover {
        width: 18%;
        background: black;
        font-size: 1.8em;
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
`

export const TextForIcons = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 1.2em;
    height: 50%;
    width: 95%;

`

export const RedSpan = styled.span`
    color: red;
    margin-left: 1%;
    margin-right: 1%;
`