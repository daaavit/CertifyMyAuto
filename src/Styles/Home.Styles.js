import styled from 'styled-components'


export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
        
      }
`

