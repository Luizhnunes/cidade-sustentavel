
import { useState } from 'react';
import MapaRelatos from '../components/MapaRelatos';

function Dashboard({ relatos, onResponder, onAtualizarStatus }) {
  const [respostas, setRespostas] = useState({});
  const [filtro, setFiltro] = useState('Todos');
  const [busca, setBusca] = useState('');

  const pendentes = relatos.filter(
    (relato) => relato.status === 'Pendente'
  ).length;

  const emAndamento = relatos.filter(
    (relato) => relato.status === 'Em andamento'
  ).length;

  const concluidos = relatos.filter(
    (relato) => relato.status === 'Concluído'
  ).length;

  const relatosFiltrados = relatos.filter((relato) => {
    const correspondeStatus =
      filtro === 'Todos' || relato.status === filtro;

    const termo = busca.toLowerCase();

    const correspondeBusca =
      relato.categoria.toLowerCase().includes(termo) ||
      relato.localizacao.toLowerCase().includes(termo) ||
      relato.descricao.toLowerCase().includes(termo);

    return correspondeStatus && correspondeBusca;
  });

  function enviarResposta(event, id) {
    event.preventDefault();

    const resposta = respostas[id]?.trim();

    if (!resposta) return;

    onResponder(id, resposta);

    setRespostas((anterior) => ({
      ...anterior,
      [id]: ''
    }));
  }

  return (
    <main className="pagina-dashboard">
      <section className="conteudo-dashboard">

        <header className="cabecalho-dashboard">
          <h1>Dashboard da Prefeitura</h1>
          <p>
            Acompanhe os problemas relatados pelos moradores
            e atualize o andamento das solicitações.
          </p>
        </header>

        <section className="resumo-dashboard">

          <div className="indicador-dashboard">
            <span>📋</span>
            <h3>Total de relatos</h3>
            <p>{relatos.length}</p>
          </div>

          <div className="indicador-dashboard">
            <span>⏳</span>
            <h3>Pendentes</h3>
            <p>{pendentes}</p>
          </div>

          <div className="indicador-dashboard">
            <span>🔧</span>
            <h3>Em andamento</h3>
            <p>{emAndamento}</p>
          </div>

          <div className="indicador-dashboard">
            <span>✅</span>
            <h3>Concluídos</h3>
            <p>{concluidos}</p>
          </div>

        </section>

        {/* Mapa dos relatos */}
        <MapaRelatos relatos={relatos} />

        <section className="filtros-dashboard">
          <h2>Gerenciar relatos</h2>

          <label htmlFor="busca-relatos">
            Buscar por categoria, localização ou descrição
          </label>

          <input
            type="text"
            id="busca-relatos"
            placeholder="Digite o que deseja procurar..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <label htmlFor="filtro-status">
            Filtrar por status
          </label>

          <select
            id="filtro-status"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="Todos">Todos os relatos</option>
            <option value="Pendente">Pendentes</option>
            <option value="Respondido">Respondidos</option>
            <option value="Em análise">Em análise</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluídos</option>
          </select>
        </section>

        <section className="lista-relatos">
          <h2>
            Relatos recebidos ({relatosFiltrados.length})
          </h2>

          {relatosFiltrados.length === 0 ? (
            <p className="sem-relatos">
              Nenhum relato encontrado com esses filtros.
            </p>
          ) : (

            relatosFiltrados.map((relato) => (

              <article className="card-relato" key={relato.id}>

                <div className="topo-relato">
                  <h3>{relato.categoria}</h3>

                  <span
                    className={`status-relato status-${relato.status
                      .toLowerCase()
                      .replaceAll(' ', '-')}`}
                  >
                    {relato.status}
                  </span>
                </div>

                <p>
                  <strong>Localização:</strong>{' '}
                  {relato.localizacao}
                </p>

                {relato.coordenadas && (
                  <p>
                    <strong>Coordenadas:</strong>{' '}
                    {relato.coordenadas.latitude.toFixed(6)},{' '}
                    {relato.coordenadas.longitude.toFixed(6)}
                  </p>
                )}

                <p>
                  <strong>Descrição:</strong>{' '}
                  {relato.descricao}
                </p>

                {relato.fotoUrl && (
                  <img
                    src={relato.fotoUrl}
                    alt="Foto do problema relatado"
                    className="foto-relato"
                  />
                )}

                <p>
                  <strong>Arquivo enviado:</strong>{' '}
                  {relato.fotoNome}
                </p>

                <div className="atualizar-status">
                  <label htmlFor={`status-${relato.id}`}>
                    Atualizar situação do problema
                  </label>

                  <select
                    id={`status-${relato.id}`}
                    value={relato.status}
                    onChange={(e) =>
                      onAtualizarStatus(
                        relato.id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pendente">Pendente</option>
                    <option value="Respondido">Respondido</option>
                    <option value="Em análise">Em análise</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Concluído">Concluído</option>
                  </select>
                </div>

                {relato.resposta && (
                  <div className="resposta-relato">
                    <strong>Resposta da prefeitura:</strong>
                    <p>{relato.resposta}</p>
                  </div>
                )}

                <form
                  className="form-resposta"
                  onSubmit={(event) =>
                    enviarResposta(event, relato.id)
                  }
                >
                  <label htmlFor={`resposta-${relato.id}`}>
                    Responder ao morador
                  </label>

                  <textarea
                    id={`resposta-${relato.id}`}
                    rows="3"
                    placeholder="Digite uma resposta..."
                    value={respostas[relato.id] || ''}
                    onChange={(e) =>
                      setRespostas((anterior) => ({
                        ...anterior,
                        [relato.id]: e.target.value
                      }))
                    }
                    required
                  />

                  <button
                    type="submit"
                    className="botao-login"
                  >
                    Enviar resposta
                  </button>
                </form>

              </article>

            ))
          )}
        </section>

      </section>
    </main>
  );
}

export default Dashboard;
