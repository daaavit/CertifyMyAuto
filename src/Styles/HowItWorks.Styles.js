import styled from "styled-components"

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #E6E7ED;
    align-content: center;
    justify-content: center;
    align-items: center;
    @media(max-width: 750px) {
        display: flex;
        width: 100%;
    }
    
    
    `

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80vw;
    max-width: 1200px;
    // background: lightBlue;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 750px) {
        display: flex;
        width: 95%;
    }

`


export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    height: 10%;
    width: 80%;
    // background: green;
    font-size: 4em;

    @media(max-width: 750px) {
        display: flex;
        font-size: 2em;
        width: 90%;
    }

    `
export const UniDivWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 20%;
    width: 80%;
    background: ${(props) => props.background};
    @media(max-width: 750px) {
        display: flex;
        
    }


`

export const NumbersWithText = styled.div`
    display: flex;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;
    border-radius: 100px;
    height: 80%;
    width: 50%;
    margin: 3%;
    // background: red;

    @media(max-width: 750px) {
        display: flex;
        height: 95%;
        flex-direction: column;
        align-items: center;
        border: none;
        box-shadow: none;
    }
    

` 
export const ArrowBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 30%;
    

`

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;

    @media(max-width: 750px) {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        font-size: 1em;
    }
    

`

export const Numbers = styled.div`
    display: flex;
    justify-content: center;
   
    border-radius: 15px;
    align-items: centre;
    font-size: 7em;
    font-weight: bold;
    height: 90%;
    width: 30%;
    // background: green;
    @media(max-width: 750px) {
        display: flex;
        width: 50%;
        border-radius: 100px;
        font-size: 3em;
        box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
        border: 0.5px #d1d9e6 solid;
    }


`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    height: 80%;
    width: 50%;
    @media(max-width: 750px) {
        display: flex;
        height: 60%;
        width: 80%;
    }


`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    font-size: 1.9em;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    color: black;
    height: 80%;
    width: 40%;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;

    background: #E6E7ED;

    :hover {
        font-size: 2em;
        height: 90%;
        width: 50%;
        cursor: pointer;
        box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
        border: no


        @media(max-width: 750px) {
            display: flex;
            height: 80%;
            width: 100%;
            font-size: 1.5em;
        }
    }

    @media(max-width: 750px) {
        display: flex;
        height: 60%;
        width: 100%;
        font-size: 1.3em;
    }

`