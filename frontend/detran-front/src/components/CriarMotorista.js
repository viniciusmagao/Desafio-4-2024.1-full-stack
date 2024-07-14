import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CriarMotorista.css";

const CriarMotorista = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [categoriaCnh, setCategoriaCnh] = useState("");
  const [vencimentoCnh, setVencimentoCnh] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4040/motoristas", {
        nome,
        cpf,
        categoriaCnh,
        vencimentoCnh,
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao criar motorista:", error);
    }
  };

  return (
    <div className="criar-motorista">
      <h1>Criar Motorista</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoria CNH:</label>
          <input
            type="text"
            value={categoriaCnh}
            onChange={(e) => setCategoriaCnh(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vencimento CNH:</label>
          <input
            type="date"
            value={vencimentoCnh}
            onChange={(e) => setVencimentoCnh(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar</button>
        <button
          type="button"
          className="voltar-btn"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </form>
    </div>
  );
};

export default CriarMotorista;
