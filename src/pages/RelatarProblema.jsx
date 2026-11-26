
import { useState } from 'react';

function RelatarProblema({ onEnviarRelato }) {
  const [categoria, setCategoria] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [coordenadas, setCoordenadas] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [carregandoLocalizacao, setCarregandoLocalizacao] = useState(false);

  function obterLocalizacao() {
    if (!navigator.geolocation) {
      setMensagem('Seu navegador não oferece suporte à geolocalização.');
      return;
    }

    setCarregandoLocalizacao(true);
    setMensagem('');

    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const latitude = posicao.coords.latitude;
        const longitude = posicao.coords.longitude;

        setCoordenadas({ latitude, longitude });
        setLocalizacao(
          `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`
        );

        setMensagem('Localização obtida com sucesso!');
        setCarregandoLocalizacao(false);
      },
      () => {
        setMensagem(
          'Não foi possível obter sua localização. Verifique a permissão do navegador ou informe o endereço manualmente.'
        );
        setCarregandoLocalizacao(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000
      }
    );
  }

  function handleFoto(event) {
    const arquivo = event.target.files[0];

    if (!arquivo) {
      setFoto(null);
      return;
    }

    if (!arquivo.type.startsWith('image/')) {
      setMensagem('Selecione um arquivo de imagem válido.');
      setFoto(null);
      event.target.value = '';
      return;
    }

    if (arquivo.size > 2 * 1024 * 1024) {
      setMensagem('A imagem deve ter no máximo 2 MB.');
      setFoto(null);
      event.target.value = '';
      return;
    }

    setMensagem('');
    setFoto(arquivo);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!foto) {
      setMensagem('Selecione uma foto para continuar.');
      return;
    }

    if (!localizacao.trim()) {
      setMensagem('Informe um endereço ou obtenha sua localização.');
      return;
    }

    const leitor = new FileReader();

    leitor.onload = () => {
      const novoRelato = {
        id: Date.now(),
        categoria,
        localizacao,
        coordenadas,
        descricao,
        fotoNome: foto.name,
        fotoUrl: leitor.result,
        status: 'Pendente',
        resposta: ''
      };

      onEnviarRelato(novoRelato);

      setMensagem('Relato enviado e salvo com sucesso!');
      setCategoria('');
      setLocalizacao('');
      setCoordenadas(null);
      setDescricao('');
      setFoto(null);

      event.target.reset();
    };

    leitor.onerror = () => {
      setMensagem('Não foi possível carregar a imagem.');
    };

    leitor.readAsDataURL(foto);
  }

  return (
    <main className="pagina-formulario">
      <section className="cartao-formulario">
        <div className="cabecalho-formulario">
          <span className="icone-logo">🌱</span>
          <h1>Relatar um problema</h1>
          <p>Ajude a melhorar nossa cidade.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="categoria">Tipo de problema</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="Acúmulo de lixo">Acúmulo de lixo</option>
            <option value="Buracos nas ruas">Buracos nas ruas</option>
            <option value="Iluminação pública">Iluminação pública</option>
            <option value="Outros">Outros</option>
          </select>

          <label htmlFor="localizacao">Localização</label>
          <input
            type="text"
            id="localizacao"
            placeholder="Informe rua, bairro ou referência"
            value={localizacao}
            onChange={(e) => {
              setLocalizacao(e.target.value);
              setCoordenadas(null);
            }}
          />

          <button
            type="button"
            className="botao-login"
            onClick={obterLocalizacao}
            disabled={carregandoLocalizacao}
          >
            {carregandoLocalizacao
              ? 'Obtendo localização...'
              : '📍 Usar minha localização'}
          </button>

          {coordenadas && (
            <p className="descricao-formulario">
              Coordenadas obtidas: {coordenadas.latitude.toFixed(6)},{' '}
              {coordenadas.longitude.toFixed(6)}
            </p>
          )}

          <label htmlFor="foto">Foto do problema (máximo 2 MB)</label>
          <input
            type="file"
            id="foto"
            accept="image/*"
            onChange={handleFoto}
            required
          />

          <label htmlFor="descricao">Descrição do problema</label>
          <textarea
            id="descricao"
            rows="5"
            placeholder="Descreva o problema encontrado..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />

          <button type="submit" className="botao-login">
            Enviar relato
          </button>
        </form>

        {mensagem && (
          <p className="mensagem-cadastro">
            {mensagem}
          </p>
        )}
      </section>
    </main>
  );
}

export default RelatarProblema;
