import styled from 'styled-components';

export const Main = styled.div`
  margin: 15px 0;

  a {
    color: #ff1520;
    text-decoration: none;
  }

  @media screen and (max-width: 767px){
      margin-left: 30px;
      margin-right: 30px;
    }
`;

export const Container = styled.div`
    border: 1px solid #cdc5c5;
    width: 270px;
    padding: 15px;

    @media screen and (max-width: 767px){
     width: 100%;
    }
`;

export const Content = styled.div`

h1 {
    font-size: 25px;
    font-weight: 600;
    color: #ff1520;
}

h2 {
    color: #5f928b;
    font-size: 20px;
    font-weight: 600;
}

ul {
    margin-left: 20px;
}

li {
    line-height: 30px;
}

a {
    color: #3f3d3d;
}
`;

export const Colors = styled.div`

h2 {
    color: #5f928b;
    font-size: 20px;
    font-weight: 600;
}
`;

export const Colorbox = styled.div`
    display: flex;
    margin-bottom: 30px;

.left {
    width: 50px;
    height: 23px;
    background: #cc0d1f;
    margin-right: 5px;
}

.center {
    width: 50px;
    height: 23px;
    background: #f36324;
    margin-right: 5px;
}

.rigth {
    width: 50px;
    height: 23px;
    background: #28a3aa;
}
`;
