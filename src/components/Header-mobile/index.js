import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Buscar from '../../assets/search.png';
import { Mobile, MobileHamburg, MobileLogo, MobileBusca } from './styles';



const HeaderMobile = () => (
  <>
    <Mobile>
      <MobileHamburg>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link to="/"><li>PÁGINA PRINCIPAL</li></ Link>
            <Link to="/camisetas"><li>CAMISETAS</li></ Link>
            <Link to="/calcas"><li>CALÇAS</li></ Link>
            <Link to="/sapatos"><li>SAPATOS</li></ Link>
            <Link to="/"><li>CONTATOS</li></ Link>
          </ul>
        </div>
      </MobileHamburg>
      <MobileLogo>
        <a href="#"><img src={Logo} alt="logo" /></a>
      </MobileLogo>
      <MobileBusca>
        <button type="button" data-toggle="modal" data-target="#buscar"><img src={Buscar} alt="buscar" /></button>
      </MobileBusca>

      <div className="modal fade" id="buscar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Campo Busca</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Digite aqui o que busca!" style={{ border: '0' }} />
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-danger">Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </Mobile>
  </>
);

export default HeaderMobile;
