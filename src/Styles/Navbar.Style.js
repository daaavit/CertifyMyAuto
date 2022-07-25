import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  max-width: 980px;
  background-color: #E6E7ED;
  align-items: center;
  justify-content: center;
  margin: 3%;
  
  
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    display: flex;
    height: auto;
    width: 100vw;
    background-color: #E6E7ED;
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
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
  border-right:  ${(props) => props.borderRight};
  padding-right: ${(props) => props.paddingRight};
  cursor: pointer;
  height: 50px;
  width: 120px;
  // border: 1px solid lightgreen;
  border: 0.5px #d1d9e6 solid;
  border-radius: 20px;
  // box-shadow:  -5px -5px 10px #FFFFFF,   5px 5px 10px  #9C9C9C !important;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
 :hover {
  font-size: 1.2em;
  border: none;
  box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
 }

 @media (max-width: 750px) {
  display: flex;
  margin: 1%;

}

`;


export const Logo = styled.img`
    display: flex;
    cursor: pointer;
    border-radius: 100px;
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;


`;