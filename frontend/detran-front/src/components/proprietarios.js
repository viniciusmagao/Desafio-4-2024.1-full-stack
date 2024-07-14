import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Proprietarios = () => {
  const [motoristas, setMotoristas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMotoristas = async () => {
      try {
        const response = await axios.get("http://localhost:4040/motoristas/");
        setMotoristas(response.data);
      } catch (error) {
        console.error("Erro ao buscar motoristas:", error);
      }
    };

    fetchMotoristas();
  }, []);

  const handleVerMultas = (id) => {
    navigate(`/multas/motorista/${id}`);
  };

  const handleVerVeiculos = (id) => {
    navigate(`/veiculos/motorista/${id}`);
  };

  const handleEditarMotorista = (id) => {
    navigate(`/motoristas/editar/${id}`);
  };

  const handleCriarMotorista = () => {
    navigate("/motoristas/criar");
  };

  return (
    <div>
      <h1>Bem vindo ao detran</h1>
      <h2>Proprietários</h2>
      <button onClick={handleCriarMotorista}>Criar</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Categoria CNH</th>
            <th>Vencimento CNH</th>
            <th>Veículos</th>
            <th>Multas</th>
            <th>Editar Motorista</th>
          </tr>
        </thead>
        <tbody>
          {motoristas.map((motorista, index) => (
            <tr key={index}>
              <td>{motorista.id}</td>
              <td>{motorista.nome}</td>
              <td>{motorista.cpf}</td>
              <td>{motorista.categoriaCnh}</td>
              <td>{motorista.vencimentoCnh}</td>
              <td>
                <button onClick={() => handleVerVeiculos(motorista.id)}>
                  Ver Veículos
                </button>
              </td>
              <td>
                <button onClick={() => handleVerMultas(motorista.id)}>
                  Ver Multas
                </button>
              </td>
              <td>
                <button onClick={() => handleEditarMotorista(motorista.id)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Proprietarios;
