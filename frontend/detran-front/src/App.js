import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proprietarios from './components/proprietarios';
import MultasDetalhes from './components/multasDetalhes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Proprietarios />} />
        <Route path="/multas/:cpf" element={<MultasDetalhes />} />
      </Routes>
    </Router>
  );
};

export default App;
