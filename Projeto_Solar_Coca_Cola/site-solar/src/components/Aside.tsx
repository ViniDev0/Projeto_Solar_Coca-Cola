import React from 'react';
import './Aside.css';

const Aside: React.FC = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <div className="logo-elemento">
          <img className="logo-solar" src="./imgs/SOLAR-LOGO.png" alt="Logo Solar" />
          <img className="line" src="./imgs/Line 7.png" alt="Linha decorativa" />
        </div>
      </header>
      <nav className="botao-cima">
        <button onClick={() => window.location.href='./dashboard.html'}>
          <span>DASHBOARD</span>
        </button>
        <button onClick={() => window.location.href='./clientes.html'}>
          <span>CLIENTES</span>
        </button>
        <button onClick={() => window.location.href='./produtos.html'}>
          <span>PRODUTOS</span>
        </button>
        <button onClick={() => window.location.href='./promocoes.html'}>
          <span>PROMOÇÕES</span>
        </button>
        <button onClick={() => window.location.href='./relatorio.html'}>
          <span>GERAR RELATÓRIO</span>
        </button>
      </nav>
      <div className="nav-baixa">
        <nav className="botao-fundo">
          <button onClick={() => window.location.href='./perfil.html'}>
            <span>MEU PERFIL</span>
          </button>
          <button onClick={() => window.location.href='./logout.html'}>
            <span>SAIR</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
