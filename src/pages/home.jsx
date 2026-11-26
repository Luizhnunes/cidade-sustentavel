
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Botao from '../components/Botao';

function Home() {
  return (
    <div className="pagina-home">
      <Navbar />

      <main className="conteudo-home">

        {/* Apresentação principal */}
        <section className="apresentacao-home">
          <div className="selo-home">
            🌱 Juntos por uma cidade melhor
          </div>

          <h1>Cidade Sustentável</h1>

          <h2>Cuide da cidade. Transforme o futuro.</h2>

          <p>
            Sua participação faz a diferença! Ajude a identificar
            problemas urbanos, incentive a sustentabilidade e
            contribua para construir uma cidade mais limpa,
            organizada e consciente.
          </p>

          <div className="acoes-apresentacao">
            <Botao to="/relatar-problema">
              📢 Relatar um problema
            </Botao>

            <Botao to="/cadastro">
              Faça parte dessa iniciativa
            </Botao>
          </div>

          <div className="destaque-relato">
            <span>🏙️</span>
            <div>
              <strong>Encontrou um problema na sua cidade?</strong>
              <p>
                Registre uma ocorrência com foto, localização
                e descrição para ajudar a melhorar os espaços públicos.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="secao-home">
          <div className="titulo-secao-home">
            <span>🌍 Nosso propósito</span>
            <h2>Uma cidade melhor começa com pequenas atitudes</h2>
            <p>
              A preservação do meio ambiente e o cuidado com os
              espaços públicos dependem da participação de todos.
            </p>
          </div>

          <div className="grade-informacoes">
            <article className="card-informacao card-home">
              <div className="icone-card-home">🌱</div>
              <h3>Sustentabilidade</h3>
              <p>
                Adote hábitos conscientes, reduza o desperdício
                e contribua para preservar os recursos naturais.
              </p>
            </article>

            <article className="card-informacao card-home">
              <div className="icone-card-home">♻️</div>
              <h3>Coleta seletiva</h3>
              <p>
                Separe os resíduos corretamente e incentive
                a reciclagem para diminuir o impacto ambiental.
              </p>
            </article>

            <article className="card-informacao card-home">
              <div className="icone-card-home">🏙️</div>
              <h3>Limpeza urbana</h3>
              <p>
                Ajude a conservar ruas, praças e espaços públicos,
                evitando o descarte irregular de resíduos.
              </p>
            </article>
          </div>
        </section>

        {/* Problemas que podem ser relatados */}
        <section className="secao-relatos-home">
          <div className="titulo-secao-home">
            <span>📍 Sua participação importa</span>
            <h2>O que você pode relatar?</h2>
            <p>
              Identificou algum problema na sua região?
              Escolha uma categoria e envie seu relato.
            </p>
          </div>

          <div className="grade-problemas-home">
            <article className="card-problema-home">
              <span>🗑️</span>
              <h3>Acúmulo de lixo</h3>
              <p>
                Lixo acumulado em ruas, calçadas, terrenos
                e espaços públicos.
              </p>
            </article>

            <article className="card-problema-home">
              <span>🚧</span>
              <h3>Buracos nas vias</h3>
              <p>
                Problemas em ruas e calçadas que prejudicam
                a circulação de pessoas e veículos.
              </p>
            </article>

            <article className="card-problema-home">
              <span>💡</span>
              <h3>Iluminação pública</h3>
              <p>
                Lâmpadas apagadas ou problemas na iluminação
                de ruas e espaços públicos.
              </p>
            </article>

            <article className="card-problema-home">
              <span>📌</span>
              <h3>Outros problemas</h3>
              <p>
                Outros problemas urbanos que precisam
                de atenção e acompanhamento.
              </p>
            </article>
          </div>

          <div className="chamada-relato-home">
            <div>
              <h3>Seja parte da solução!</h3>
              <p>
                Envie fotos, localização e descrição do problema.
                Sua colaboração ajuda a dar visibilidade às
                necessidades da comunidade.
              </p>
            </div>

            <Botao to="/relatar-problema">
              Fazer um relato agora →
            </Botao>
          </div>
        </section>

        {/* Dicas de sustentabilidade */}
        <section className="secao-home">
          <div className="titulo-secao-home">
            <span>💚 Atitudes que fazem a diferença</span>
            <h2>Como você pode ajudar?</h2>
            <p>
              Pequenas mudanças na rotina podem contribuir
              para uma cidade mais sustentável.
            </p>
          </div>

          <div className="grade-informacoes">
            <article className="card-informacao card-home">
              <div className="icone-card-home">♻️</div>
              <h3>Separe os resíduos</h3>
              <p>
                Separe papel, plástico, vidro e metal.
                Sempre que possível, procure os pontos
                de coleta seletiva da sua região.
              </p>
            </article>

            <article className="card-informacao card-home">
              <div className="icone-card-home">💧</div>
              <h3>Economize água</h3>
              <p>
                Evite desperdícios, feche torneiras
                e utilize a água de maneira consciente.
              </p>
            </article>

            <article className="card-informacao card-home">
              <div className="icone-card-home">⚡</div>
              <h3>Economize energia</h3>
              <p>
                Apague as luzes ao sair dos ambientes
                e evite deixar aparelhos ligados sem necessidade.
              </p>
            </article>
          </div>
        </section>

        {/* Participação da comunidade */}
        <section className="mensagem-home">
          <div className="icone-comunidade-home">🤝</div>

          <h2>A transformação começa com você!</h2>

          <p>
            Uma cidade mais limpa, segura e sustentável
            é construída com a colaboração de todos.
            Participe, compartilhe boas práticas e ajude
            a cuidar do lugar onde vivemos.
          </p>

          <Botao to="/relatar-problema">
            📢 Relatar um problema
          </Botao>

          <div className="acesso-prefeitura-home">
            <p>Área de acompanhamento</p>
            <Botao to="/dashboard">
              Acessar dashboard da prefeitura
            </Botao>
          </div>

          <div className="sair-home">
            <Botao to="/logoff">
              Sair do aplicativo
            </Botao>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Home;
