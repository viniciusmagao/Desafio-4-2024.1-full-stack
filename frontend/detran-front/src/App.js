import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proprietarios from './components/proprietarios';
import MultasDetalhes from './components/multasDetalhes';
import VeiculosDetalhes from './components/VeiculosDetalhes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Proprietarios />} />
        <Route path="/multas/motorista/:motoristaId" element={<MultasDetalhes />} />
        <Route path="/veiculos/motorista/:motoristaId" element={<VeiculosDetalhes />} />
        {/* <Route path="/veiculos/criar" element={<CriarVeiculo />} /> Adicione a rota para criar veículo */}
        {/* <Route path="/veiculos/editar/:id" element={<EditarVeiculo />} /> Adicione a rota para editar veículo */}
      </Routes>
    </Router>
  );
}

export default App;
