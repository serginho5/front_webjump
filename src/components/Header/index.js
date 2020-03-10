import React from 'react';
import { Link } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import { Container, Topbar, Content, ContentBusca, ContentLogo, Main, Form, Menu, MenuContent } from './styles';
import Logo from '../../assets/logo.png';
import HeaderMobile from '../Header-mobile/';

const Header = () => (
  <>
    <Topbar>
      <Container>
        <a href="#">Acesse sua Conta</a>
        <p>ou</p>
        <a href="#">Cadastre-se</a>
      </Container>
    </ Topbar>
    <Content>
      <Main>
        <ContentLogo>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </ContentLogo>
        <ContentBusca>
          <Form>
            <input type="text" />
            <button type='submit'>BUSCAR</button>
          </Form>
        </ContentBusca>
      </ Main>
    </Content>
    <Menu>
      <MenuContent>
        <ul>
          <Link to="/"><li>PÁGINA INICIAL</li></ Link>
          <Link to="/camisetas"><li>CAMISETAS</li></ Link>
          <Link to="/calcas"><li>CALÇAS</li></ Link>
          <Link to="/sapatos"><li>SAPATOS</li></ Link>
          <Link to="/resultados"><li>CONTATOS</li></ Link>
        </ul>
      </MenuContent>
    </Menu>
    <HeaderMobile />
  </>
);

export default Header;
