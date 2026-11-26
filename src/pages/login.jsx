
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState('');

  function handleLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    if (!email || !senha) {
      setMensagem('Preencha todos os campos para continuar.');
      return;
    }

    setMensagem('Acesso realizado com sucesso!');

    navigate('/home');
  }

  return (
    <main className="pagina-login">
      <section className="cartao-login">

        <div className="cabecalho-login">
          <span className="icone-logo">🌱</span>
          <h1>Cidade Sustentável</h1>
          <p>Cuide da cidade. Transforme o futuro.</p>
        </div>

        <div className="formulario-login">
          <h2>Acessar minha conta</h2>
          <p>Informe seus dados para continuar.</p>

          <form onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              required
            />

            <div className="link-recuperacao">
              <Link to="/recuperar-senha">
                Esqueci minha senha
              </Link>
            </div>

            <button type="submit" className="botao-login">
              Entrar
            </button>
          </form>

          {mensagem && (
            <p className="mensagem-cadastro sucesso">
              {mensagem}
            </p>
          )}

          <div className="link-cadastro">
            <span>Não possui uma conta?</span>
            <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </div>

        <footer className="rodape-login">
          Projeto acadêmico de sustentabilidade
        </footer>

      </section>
    </main>
  );
}

export default Login;
