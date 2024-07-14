import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./CriarVeiculo.css";

const CriarVeiculo = () => {
  const { motoristaId } = useParams();
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4040/veiculos/motorista/${motoristaId}`,
        {
          motoristaId: parseInt(motoristaId),
          placa,
          marca,
          modelo,
          ano: parseInt(ano),
          cor,
        }
      );
      if (response.status === 201) {
        navigate(`/veiculos/motorista/${motoristaId}`);
      }
    } catch (error) {
      console.error("Erro ao criar veículo:", error);
    }
  };

  return (
    <div className="criar-veiculo">
      <h1>Veículo do Motorista ID: {motoristaId}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Placa:</label>
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Marca:</label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Modelo:</label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ano:</label>
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cor:</label>
          <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CriarVeiculo;
