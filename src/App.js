import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import { Container, Content } from './styles/components';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Container>
      <Content>
        <Sidebar />
        <Routes />
      </Content>
    </Container>
    <Footer />
  </BrowserRouter>
);

export default App;
