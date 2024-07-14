import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarMotorista.css";

const EditarMotorista = () => {
  const { motoristaId } = useParams();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [categoriaCnh, setCategoriaCnh] = useState("");
  const [vencimentoCnh, setVencimentoCnh] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMotorista = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/motoristas/${motoristaId}`
        );
        const motorista = response.data;
        setNome(motorista.nome);
        setCpf(motorista.cpf);
        setCategoriaCnh(motorista.categoriaCnh);
        setVencimentoCnh(motorista.vencimentoCnh.split("T")[0]);
      } catch (error) {
        console.error("Erro ao buscar motorista:", error);
      }
    };

    fetchMotorista();
  }, [motoristaId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4040/motoristas/${motoristaId}`,
        {
          nome,
          cpf,
          categoriaCnh,
          vencimentoCnh,
        }
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao atualizar motorista:", error);
    }
  };

  return (
    <div className="editar-motorista">
      <h1>Editar Motorista</h1>
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
        <button type="submit" className="atualizar">
          Atualizar
        </button>
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

export default EditarMotorista;
