import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
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
          <a href="#"><li>PÁGINA INICIAL</li></a>
          <a href="#"><li>CAMISETAS</li></a>
          <a href="#"><li>CALÇAS</li></a>
          <a href="#"><li>SAPATOS</li></a>
          <a href="#"><li>CONTATOS</li></a>
        </ul>
      </MenuContent>
    </Menu>
    <HeaderMobile />
  </>
);

export default Header;
