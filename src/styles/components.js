import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

`;

export const Content = styled.div`
@media (min-width: 780px){
    width: 1024px!important;
    display: flex;
}

@media screen and (max-width: 767px){
  width: 100%;
}
`;
