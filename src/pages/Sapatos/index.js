import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import api from '../../services/api';
import { Container, Header, HeaderTop, HeaderMain, HeaderIcon, HeaderFilter, MainCard, Card, CardImg } from './styles';
import Grid from '../../assets/grid_2.png';
import List from '../../assets/grid.png';

const Sapatos = () => {
  const [sapatos, setSapatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/sapato');
      setSapatos(response.data);
      setLoading(false);
    }
    loadItems();
  }, []
  )

  return (
    < Container >
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
          {loading ? <Loading /> : sapatos.map(sapato => (
            < li key={sapato.id}>
              <Card>
                <CardImg>
                  <img src={sapato.image} alt="" />
                </CardImg>
                <h1>{sapato.name}</h1>
                <h3>R${sapato.price}</h3>
                <button>COMPRAR</button>
              </Card>
            </li>
          ))}
        </ul>
      </MainCard>
    </Container >
  )
}

export default Sapatos;
