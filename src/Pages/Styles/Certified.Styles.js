import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #E6E7ED;
    align-content: center;
    justify-content: flex-start
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start
        justify-content: space-evenly;
        align-content: center;
        
      }
`

export const FormWrapper = styled.div`
      display: flex;
      height: 80vh;
      width: 100vw;


`