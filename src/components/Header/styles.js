import styled from 'styled-components';

export const Container = styled.div`

@media (min-width: 780px){
    width: 1024px!important;
    display: flex;
    justify-content: flex-end;
    height: 30px;
}

@media (max-width: 779px){
  display: flex;
  justify-content: center;
  width: 100%;
  }
`;

export const Topbar = styled.div`
    display: flex;
    justify-content: center;
    background: #231f20;
    align-items: center;

a {
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 10px;
}

p {
    color: #fff;
    display: flex;
    align-items: center;
    margin: 0;
}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 120px;

  @media (max-width: 779px){
    display: none;
  }
`;

export const ContentLogo = styled.div`

`;

export const ContentBusca = styled.div`
  margin-right: 10px;
`;

export const Main = styled.div`
@media (min-width: 780px){
    width: 1024px!important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: 1px solid #afaaaa;
  }

  button {
  width: 115px;
  height: 40px;
  padding: 0 20px;
  margin-left: 3px;
  background: #ed1c24;
  color: #fff;
  border: 0;
  font-size: 17px;
  font-weight: bold;
  border-radius: 3px;

  &:hover{
    background: #000;
  }
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  background: #ff1520;

  @media (max-width: 779px){
    display: none;
  }
`;

export const MenuContent = styled.div`

ul {
    display: flex;
    margin: 0;
}

li {
    list-style: none;
    padding: 10px 33px;

}

a {
  color: #fff;
  font-weight: 600;
}

a:hover {
    background: #000;
    color: #b4b0b0;
    text-decoration: none;
    /* border-bottom: 5px solid #000; */
}

@media (min-width: 1200px){
    width: 1024px!important;
    display: flex;
    align-items: center;
}
`;
