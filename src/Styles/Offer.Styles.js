import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 98vw;

`

export const IconWithTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: center;
    height: 90%;
    width: 90%;

    @media(max-width: 750px){
        display: flex;
        width: 95%;
    }

`

export const IconsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid lightgray;
    justify-content: space-evenly;
    align-items: center;
    height: 80%;
    width: 90%;

 

`
export const ContactArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20%;
    width: 90%;

`

export const UniIconBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 30%;

`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7em;
    font-weight: bold;
    color: black;
    height: 30%;
    width: 90%;

    @media(max-width: 750px){
        display: flex;
        width: 90%;
        font-size: 0.8em;
    }

`

export const IconArea = styled.div`
    display: flex;
    justify-content: center;
    height: 70%;
    width: 90%;

    @media(max-width: 750px){
        display: flex;
        height: 40%;
        width: 90%;
    }
    


`

export const UniIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 15%;
    cursor: alias;


`