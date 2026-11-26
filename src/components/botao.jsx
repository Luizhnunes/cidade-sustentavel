
import { Link } from 'react-router-dom';

function Botao({ children, to, onClick, type = 'button' }) {
  if (to) {
    return (
      <Link to={to} className="botao-padrao">
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className="botao-padrao"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Botao;
