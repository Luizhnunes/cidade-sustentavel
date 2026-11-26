
import { Link } from 'react-router-dom';

function Logoff() {
  return (
    <main className="pagina-formulario">
      <section className="cartao-formulario">

        <div className="cabecalho-formulario">
          <span className="icone-logo">🌱</span>
          <h1>Cidade Sustentável</h1>
        </div>

        <div className="mensagem-logoff">
          <h2>Deseja sair do aplicativo?</h2>

          <p>
            Agradecemos sua participação na construção
            de uma cidade mais sustentável.
          </p>

          <Link to="/" className="botao-padrao">
            Confirmar saída
          </Link>

          <Link to="/home" className="link-voltar">
            Voltar ao aplicativo
          </Link>
        </div>

      </section>
    </main>
  );
}

export default Logoff;
