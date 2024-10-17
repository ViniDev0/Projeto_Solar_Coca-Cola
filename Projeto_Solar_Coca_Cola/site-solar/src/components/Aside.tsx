import React from 'react';
import '../css/Aside.css';
import logoSolar from '../imagens/SOLAR-LOGO.png'; // Importando a imagem
import lineImage from '../imagens/Line 7.png'; // Importando a linha decorativa

const Aside: React.FC = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path; // Redireciona para a URL especificada
  };

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <div className="logo-elemento">
          <img className="logo-solar" src={logoSolar} alt="Logo Solar" />
          <img className="line" src={lineImage} alt="Linha decorativa" />
        </div>
      </header>
      <nav className="botao-cima">
        <button onClick={() => handleNavigation('./dashboard.html')}>
          <span>DASHBOARD</span>
        </button>
        <button onClick={() => handleNavigation('./clientes.html')}>
          <span>CLIENTES</span>
        </button>
        <button onClick={() => handleNavigation('./produtos.html')}>
          <span>PRODUTOS</span>
        </button>
        <button onClick={() => handleNavigation('./promocoes.html')}>
          <span>PROMOÇÕES</span>
        </button>
        <button onClick={() => handleNavigation('./relatorio.html')}>
          <span>GERAR RELATÓRIO</span>
        </button>
      </nav>
      <div className="nav-baixa">
        <nav className="botao-fundo">
          <button onClick={() => handleNavigation('./perfil.html')}>
            <span>MEU PERFIL</span>
          </button>
          <button onClick={() => handleNavigation('./logout.html')}>
            <span>SAIR</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
