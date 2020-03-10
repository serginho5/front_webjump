import React from 'react';
import { Main, Container, Content, Colors, Colorbox } from './styles';

const Sidebar = () => (
  <Main>
    <p>Página principal > <a href="#"></a></p>
    <Container>
      <Content>
        <h1>FILTRE POR</h1>
        <h2>CATEGORIAS</h2>
        <ul>
          <a href="#"><li>Roupas</li></a>
          <a href="#"><li>Sapatos</li></a>
          <a href="#"><li>Acessórios</li></a>
        </ul>
      </Content>
      <Colors>
        <h2>CORES</h2>
        <Colorbox>
          <a href="#"><div className="left"></div></a>
          <a href="#"><div className="center"></div></a>
          <a href="#"><div className="rigth"></div></a>
        </Colorbox>
      </Colors>
      <Content>
        <h2>TIPO</h2>
        <ul>
          <a href="#"><li>Corridas</li></a>
          <a href="#"><li>Caminhada</li></a>
          <a href="#"><li>Casual</li></a>
          <a href="#"><li>Social</li></a>
        </ul>
      </Content>
    </Container>
  </ Main>
);

export default Sidebar;
