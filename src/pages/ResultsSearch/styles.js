import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-left: 20px;
    margin-top: 48px;
    flex: 1;
    flex-direction: column;

    @media screen and (max-width: 767px){
      margin-left: 30px;
      margin-right: 30px;
    }
`;

export const Header = styled.div`
width: 100%;
`;

export const HeaderFilter = styled.div`
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 13px;
    }

    select {
    width: 150px;
    height: 30px;
    margin-left: 10px;
    }
`;

export const HeaderIcon = styled.div`
    display: flex;
    align-items: center;
img {
    width: 25px;
    margin-right: 5px;
}
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #b7bab4;
  border-bottom: 1px solid #b7bab4;
  height: 45px;
`;

export const HeaderTop = styled.div`

h1 {
  font-size: 30px;
  color: #ff1520;
}
`;

export const Card = styled.div`
  width: 170px;
  position: relative;
  height: 293px;

  h1 {
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
  }

  h3 {
    font-size: 18px;
    font-weight: 800;
    color: #ff1520;
    text-align: center;
    margin: 10px 0;
  }

  button {
    background: #28a3aa;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    height: 34px;
    border: 0;
    position: absolute;
    bottom: 0;
}
`;

export const CardImg = styled.div`
   border: 1px solid #b7bab4;
   img {
     width: 168px;
   }
`;

export const MainCard = styled.div`

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

li {
    list-style: none;
    margin-top: 30px;
}

@media screen and (max-width: 767px){
  ul {
    justify-content: space-around;
}
}
`;


