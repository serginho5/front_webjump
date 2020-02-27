import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import { Container, Content } from './styles/components';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Container>
      <Content>
        <Sidebar />
        <Main />
      </Content>
    </Container>
  </>
);

export default App;
