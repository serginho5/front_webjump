import React from 'react';
import { Container, Header, HeaderTop, HeaderMain, HeaderIcon, HeaderFilter, MainCard, Card, CardImg } from './styles';
import Grid from '../../assets/grid_2.png';
import List from '../../assets/grid.png';
import Foto from '../../assets/shoes-4.jpg';

const Main = () => (
  <Container>
    <Header>
      <HeaderTop>
        <h1>Sapatos</h1>
      </HeaderTop>
      <HeaderMain>
        <HeaderIcon>
          <img src={Grid} alt="" />
          <img src={List} alt="" />
        </HeaderIcon>
        <HeaderFilter>
          <p>ORDENADO POR</p>
          <select name="select">
            <option value="valor1" selected>Preço</option>
            <option value="valor2" >Valor 2</option>
            <option value="valor3">Valor 3</option>
            <option value="valor4">Valor 4</option>
            <option value="valor5">Valor 5</option>
            <option value="valor6">Valor 6</option>
          </select>
        </HeaderFilter>
      </HeaderMain>
    </Header>
    <MainCard>
      <ul>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
        <li>
          <Card>
            <CardImg>
              <img src={Foto} alt="" />
            </CardImg>
            <h1>SAPATO SOCIAL DELUXE ROXO</h1>
            <h3>R$299,00</h3>
            <button>COMPRAR</button>
          </Card>
        </li>
      </ul>
    </MainCard>
  </Container>

);

export default Main;
