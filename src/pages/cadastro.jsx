
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');

  function handleCadastro(event) {
    event.preventDefault();

    const formulario = event.target;
    const senha = formulario.senha.value;
    const confirmarSenha = formulario.confirmarSenha.value;

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem. Verifique e tente novamente.');
      setTipoMensagem('erro');
      return;
    }

    setMensagem('Cadastro realizado com sucesso! (Demonstração)');
    setTipoMensagem('sucesso');
    formulario.reset();
  }

  return (
    <main className="pagina-formulario">
      <section className="cartao-formulario">
        <div className="cabecalho-formulario">
          <span className="icone-logo">🌱</span>
          <h1>Cidade Sustentável</h1>
          <p>Faça parte da transformação!</p>
        </div>

        <div className="conteudo-formulario">
          <h2>Criar uma conta</h2>
          <p className="descricao-formulario">
            Preencha os campos abaixo para se cadastrar.
          </p>

          <form onSubmit={handleCadastro}>
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              required
            />

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
              placeholder="Crie uma senha"
              minLength="6"
              required
            />

            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Digite a senha novamente"
              minLength="6"
              required
            />

            <button type="submit" className="botao-login">
              Cadastrar
            </button>
          </form>

          {mensagem && (
            <p className={`mensagem-cadastro ${tipoMensagem}`}>
              {mensagem}
            </p>
          )}

          <div className="link-cadastro">
            <span>Já possui uma conta?</span>
            <Link to="/">Faça login</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cadastro;
