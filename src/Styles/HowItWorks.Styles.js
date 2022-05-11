import styled from "styled-components"

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #ffffff;
    align-content: center;
    justify-content: center;
    align-items: center;
    @media(max-width: 750px) {
        display: flex;
    }
    
    
    `

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80vw;
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
    border: 4px solid black;
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
    }
    

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
    align-items: centre;
    font-size: 7em;
    font-weight: bold;
    height: 90%;
    width: 30%;
    // background: green;
    @media(max-width: 750px) {
        display: flex;
        font-size: 3em;
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