import styled from "styled-components"

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #ffffff;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    
    `

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80vw;
    // background: lightBlue;
    align-items: center;
    justify-content: space-evenly;

`

export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    height: 10%;
    width: 80%;
    // background: green;
    font-size: 4em;

    `
export const UniDivWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 20%;
    width: 80%;
    background: ${(props) => props.background};

`

export const NumbersWithText = styled.div`
    display: flex;
    border: 4px solid black;
    border-radius: 100px;
    height: 80%;
    width: 50%;
    margin: 3%;
    // background: red;

` 
export const ArrowBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 50%;
    background: white;

`

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;

`

export const Numbers = styled.div`
    display: flex;
    justify-content: center;
    align-items: centre;
    font-size: 7em;
    font-weight: bold;
    height: 90%;
    width: 30%;
    // background: green;

`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    height: 80%;
    width: 50%;

`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    font-size: 1.9em;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    color: white;
    height: 80%;
    width: 40%;
    background: red;

    :hover {
        font-size: 2em;
        height: 90%;
        width: 50%;
        background: black;
        cursor: pointer;
    }

`