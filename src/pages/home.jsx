
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Botao from '../components/Botao';

function Home() {
  return (
    <div className="pagina-home">
      <Navbar />

      <main className="conteudo-home">

        {/* Apresentação do projeto */}
        <section className="apresentacao-home">
          <h1>Cidade Sustentável</h1>

          <h2>Cuide da cidade. Transforme o futuro.</h2>

          <p>
            A sustentabilidade começa com pequenas atitudes.
            Juntos, podemos construir uma cidade mais limpa,
            organizada e consciente.
          </p>

          <Botao to="/cadastro">
            Faça parte dessa iniciativa
          </Botao>
        </section>

        {/* Iniciativas */}
        <section className="secao-informacoes">
          <h2>Conheça nossas iniciativas</h2>

          <div className="grade-informacoes">

            <article className="card-informacao">
              <h3>🌱 Sustentabilidade</h3>
              <p>
                Adote práticas conscientes e contribua para
                a preservação do meio ambiente.
              </p>
            </article>

            <article className="card-informacao">
              <h3>♻️ Coleta seletiva</h3>
              <p>
                Separe corretamente os resíduos e incentive
                a reciclagem na sua comunidade.
              </p>
            </article>

            <article className="card-informacao">
              <h3>🏙️ Limpeza urbana</h3>
              <p>
                Ajude a manter ruas, praças e espaços públicos
                limpos e bem conservados.
              </p>
            </article>

          </div>
        </section>

        {/* Como ajudar */}
        <section className="secao-informacoes">
          <h2>Como você pode ajudar?</h2>

          <div className="grade-informacoes">

            <article className="card-informacao">
              <h3>♻️ Recicle</h3>
              <p>
                Separe papel, plástico, vidro e metal
                para facilitar o processo de reciclagem.
              </p>
            </article>

            <article className="card-informacao">
              <h3>🌳 Preserve</h3>
              <p>
                Cuide das árvores, praças e áreas verdes
                da sua cidade.
              </p>
            </article>

            <article className="card-informacao">
              <h3>🤝 Participe</h3>
              <p>
                Incentive seus vizinhos e participe de
                campanhas de conscientização ambiental.
              </p>
            </article>

          </div>
        </section>

        {/* Área de participação */}
        <section className="mensagem-home">
          <h2>Faça parte dessa transformação!</h2>

          <p>
            A participação da comunidade é fundamental
            para construir uma cidade melhor.
          </p>

          <p>
            Encontrou algum problema na sua cidade?
            Envie um relato para ajudar a melhorar
            os espaços públicos.
          </p>

          <Botao to="/relatar-problema">
            Relatar um problema
          </Botao>

          <Botao to="/dashboard">
            Acessar dashboard da prefeitura
          </Botao>

          <Botao to="/logoff">
            Sair do aplicativo
          </Botao>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Home;
