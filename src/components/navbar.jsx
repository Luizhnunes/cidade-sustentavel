
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const localizacao = useLocation();

  function fecharMenu() {
    setMenuAberto(false);
  }

  const links = [
    { caminho: '/home', texto: 'Início' },
    { caminho: '/relatar-problema', texto: 'Relatar problema' },
    { caminho: '/dashboard', texto: 'Prefeitura' },
    { caminho: '/logoff', texto: 'Sair' }
  ];

  return (
    <nav className="navbar">
      <Link
        to="/home"
        className="navbar-logo"
        onClick={fecharMenu}
      >
        🌱 Cidade Sustentável
      </Link>

      <button
        className="botao-menu"
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir ou fechar menu"
        aria-expanded={menuAberto}
      >
        {menuAberto ? '✕' : '☰'}
      </button>

      <div className={`navbar-links ${menuAberto ? 'menu-aberto' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.caminho}
            to={link.caminho}
            onClick={fecharMenu}
            className={
              localizacao.pathname === link.caminho
                ? 'link-ativo'
                : ''
            }
          >
            {link.texto}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
