
import { useState } from 'react';
import { Link } from 'react-router-dom';

function RecuperarSenha() {
  const [mensagem, setMensagem] = useState('');

  function handleRecuperacao(event) {
    event.preventDefault();

    const email = event.target.email.value;

    if (!email) {
      setMensagem('Informe seu e-mail para continuar.');
      return;
    }

    setMensagem(
      'Solicitação recebida! Se o e-mail estiver cadastrado, você receberá as instruções para recuperar seu acesso.'
    );

    event.target.reset();
  }

  return (
    <main className="pagina-formulario">
      <section className="cartao-formulario">
        <div className="cabecalho-formulario">
          <span className="icone-logo">🔐</span>
          <h1>Recuperar senha</h1>
          <p>Recupere seu acesso ao Cidade Sustentável.</p>
        </div>

        <h2>Esqueceu sua senha?</h2>

        <p className="descricao-formulario">
          Informe seu e-mail para solicitar a recuperação
          do acesso à sua conta.
        </p>

        <form onSubmit={handleRecuperacao}>
          <label htmlFor="email-recuperacao">
            E-mail cadastrado
          </label>

          <input
            type="email"
            id="email-recuperacao"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />

          <button type="submit" className="botao-login">
            Solicitar recuperação
          </button>
        </form>

        {mensagem && (
          <p className="mensagem-cadastro sucesso">
            {mensagem}
          </p>
        )}

        <div className="link-cadastro">
          <Link to="/">Voltar para o login</Link>
        </div>
      </section>
    </main>
  );
}

export default RecuperarSenha;
