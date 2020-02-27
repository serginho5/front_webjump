import styled from 'styled-components';



export const Mobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    @media (min-width: 780px){
      display: none;
    }
`;

export const MobileHamburg = styled.div`

`;

export const MobileLogo = styled.div`

`;

export const MobileBusca = styled.div`

button {
  border: 0px;
  outline: 0;
  background: transparent;
}

img {
  width: 35px;
}

`;
