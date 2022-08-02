import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: #E6E7ED;

    @media(max-width: 750px){
        display: flex;
        width: 99vw;
    }

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
    justify-content: space-evenly;
    align-items: center;
    height: 80%;
    width: 90%;
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 50px;

 

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
    width: 50%;

    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;
    border-radius: 30px;

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