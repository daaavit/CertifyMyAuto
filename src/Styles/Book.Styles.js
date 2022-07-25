import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: #E6E7ED;
  
    @media(max-width: 750px) {
        height: 150vh;
    }



`

export const BookingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 80%;
 
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 50px;

    @media(max-width: 750px) {
        display: flex;
        height: 95%;
        width: 95%;
    }


`

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;
    width: 80%;

    @media(max-width: 750px) {
        display: flex;
        width: 100%;
    }


`

export const BookArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    width: 80%;
    


    @media(max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        font-size: 0.9em;
    }


`

export const PicWithText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 30%;

    

`

export const BookingCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    justify-content: space-evenly;
    align-items: center;
    height: 90%;
    width: 30%;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;
    border-radius: 20px;

  :hover{
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    border-radius: 20px;
  }

  @media(max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 25%;
    font-size: 0.9em;
    margin-top: 5%;
}

  


`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    height: 20%;
    width: 70%;
    font-weight: bold; 
    font-size: 1.2em;


    @media(max-width: 750px) {
        display: flex;
        width: 100%;
        font-size: 0.9em;
    }

    

`
export const Text = styled.div`
    display: flex;
    height: 50%;
    width: 80%;
    font-size: 0.8em;
    @media(max-width: 750px) {
        display: flex;
        width: 100%;
        font-size: 0.7em;
    }

`

export const PicArea = styled.div`
    display: flex;
    justify-content: center;
    height: 30%;
    width: 90%;

    @media(max-width: 750px) {
        display: flex;
        height: 20%;
        width: 30%;
    
    }

`

export const BookingTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.3em;
    font-weight: bold;
    height: 10%;
    width: 90%;
    border-bottom: 1px solid lightgray;

    @media(max-width: 750px){
        display: flex;
        font-size: 1em
    }
`   

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 90%;


`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    color: black;
    height: 50%;
    width: 70%;

    background: #E6E7ED;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    border: 0.5px #d1d9e6 solid;

    :hover {
        font-size: 1.8em;
        font-weight: bold;
        height: 50%;
        cursor: pointer;
        box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
        font-size: 1.3em;
        border: none;

    }

    @media(max-width: 750px){
        display: flex;
        font-size: 1.3em
        height: 50%;
        width: 50%;

    }



`


export const Pricing = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
    height: 20%;
    width: 80%;

    @media(max-width: 750px){
        display: flex;
        font-size: 1em;
        height: 10%;


    }

`