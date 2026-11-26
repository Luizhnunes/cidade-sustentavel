
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import RecuperarSenha from './pages/recuperarsenha.jsx';
import Home from './pages/home.jsx';
import Logoff from './pages/logoff.jsx';
import RelatarProblema from './pages/RelatarProblema.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  const [relatos, setRelatos] = useState(() => {
    try {
      const dadosSalvos = localStorage.getItem('relatosCidadeSustentavel');
      return dadosSalvos ? JSON.parse(dadosSalvos) : [];
    } catch (erro) {
      console.error('Erro ao carregar os relatos:', erro);
      return [];
    }
  });

  // Salva os relatos sempre que houver alguma alteração.
  useEffect(() => {
    try {
      localStorage.setItem(
        'relatosCidadeSustentavel',
        JSON.stringify(relatos)
      );
    } catch (erro) {
      console.error('Erro ao salvar os relatos:', erro);
      alert(
        'Não foi possível salvar os dados. Verifique o espaço disponível no navegador.'
      );
    }
  }, [relatos]);

  function adicionarRelato(novoRelato) {
    setRelatos((anteriores) => [
      ...anteriores,
      novoRelato
    ]);
  }

  function responderRelato(id, resposta) {
    setRelatos((anteriores) =>
      anteriores.map((relato) =>
        relato.id === id
          ? {
              ...relato,
              resposta,
              status: 'Respondido'
            }
          : relato
      )
    );
  }

  function atualizarStatus(id, novoStatus) {
    setRelatos((anteriores) =>
      anteriores.map((relato) =>
        relato.id === id
          ? {
              ...relato,
              status: novoStatus
            }
          : relato
      )
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      <Route
        path="/recuperar-senha"
        element={<RecuperarSenha />}
      />

      <Route path="/home" element={<Home />} />
      <Route path="/logoff" element={<Logoff />} />

      <Route
        path="/relatar-problema"
        element={
          <RelatarProblema
            onEnviarRelato={adicionarRelato}
          />
        }
      />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            relatos={relatos}
            onResponder={responderRelato}
            onAtualizarStatus={atualizarStatus}
          />
        }
      />
    </Routes>
  );
}

export default App;
