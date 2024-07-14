import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proprietarios from "./components/proprietarios";
import MultasDetalhes from "./components/multasDetalhes";
import VeiculosDetalhes from "./components/VeiculosDetalhes";
import CriarVeiculo from "./components/CriarVeiculos";
import EditarMotorista from "./components/EditarMotorista";
import CriarMotorista from "./components/CriarMotorista";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Proprietarios />} />
        <Route
          path="/multas/motorista/:motoristaId"
          element={<MultasDetalhes />}
        />
        <Route
          path="/veiculos/motorista/:motoristaId"
          element={<VeiculosDetalhes />}
        />
        <Route
          path="/veiculos/motorista/:motoristaId/criar"
          element={<CriarVeiculo />}
        />{" "}
        <Route
          path="/motoristas/editar/:motoristaId"
          element={<EditarMotorista />}
        />{" "}
        <Route path="/motoristas/criar" element={<CriarMotorista />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
