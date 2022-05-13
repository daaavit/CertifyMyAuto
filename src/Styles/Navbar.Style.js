import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  height: 10vh;
  width: 70vw;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 3%;
  
  
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    display: flex;
    height: auto;
    width: 95vw;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 3%;
  }
`;
export const Universal = styled.div`
  display: ${(props) => props.Display};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadious};

  animation: Universal 2s ease 0s 1 normal forwards;
  @keyframes Universal {
    0% {
      opacity: 0;
      transform: scale(0);
    }
  
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 750px) {
    display: flex;
    font-size: 1em;
    height: auto;
    width: 95vw;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black; 
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  border-right:  ${(props) => props.borderRight};
  padding-right: ${(props) => props.paddingRight};
  cursor: pointer;

 :hover {
  font-size: 1.5em;

 }

`;


export const Logo = styled.img`
    display: flex;
    cursor: pointer;


`;