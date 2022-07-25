import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #E6E7ED;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media(max-width: 750px){ 


    }


    `

    

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    // background: red;
    height: 90vh;
    width: 90vw;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;
    border-radius: 20px;
  
    @media(max-width: 750px){ 
        width: 95%;


    }

`

export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    align-contet: center;
    height: 10%;
    width: 90%;
    @media(max-width: 750px){
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8em;
        font-weight: bold;
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
    width: 90%;
    // background: green;
    @media(max-width: 750px){
        display: flex;
        flex-direction: column;
    }

`

export const PicArea = styled.div`
    display: flex;
    height: 80%;
    width: 30%;
    // background: yellow;
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 20px;  
    
    @media(max-width: 750px){
        display: flex;
        height: 30%;
        width: 40%;
    }

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
    @media(max-width: 750px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
    }

`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    height: 10%;
    width: 70%;

    @media(max-width:750px){
        display: flex;
        align-items: center;
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5em;
    color: black;
    
    background: #E6E7ED;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;

    height: 80%;
    width: 15%;
    border-radius:  50px;
    cursor: pointer;

      :hover {
        width: 18%;
         box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
        font-size: 1.6em;
        border: none;
    }

    @media(max-width:750px){
        display: flex;
        height: 60%;
        width: 50%;
        font-size: 1em;

        :hover {
            width: 60%;
            font-size: 1.4em;
    }

`

export const UniDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.height};
    width: ${(props) => props.width};

    @media(max-width: 750px){
        display: flex;
        width: 100%;
        font-size: 0.8em;
        align-items: center;
        justify-content: center;
    }


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
    @media(max-width: 750px){
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 1em;
    }

`

export const RedSpan = styled.span`
    color: red;
    margin-left: 1%;
    margin-right: 1%;

`