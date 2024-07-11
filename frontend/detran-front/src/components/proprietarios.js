import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Proprietarios = () => {
  const [motoristas, setMotoristas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMotoristas = async () => {
      try {
        const response = await axios.get('http://localhost:4040/motoristas/');
        setMotoristas(response.data);
      } catch (error) {
        console.error('Erro ao buscar motoristas:', error);
      }
    };

    fetchMotoristas();
  }, []);

  const handleVerMultas = (cpf) => {
    navigate(`/multas/${cpf}`);
  };

  return (
    <div>
      <h1>Bem vindo ao detran</h1>
      <h2>Proprietários</h2>
      <button>Criar</button>
      <table>
        <thead>
          <tr>
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
              <td>{motorista.nome}</td>
              <td>{motorista.cpf}</td>
              <td>{motorista.categoriaCnh}</td>
              <td>{motorista.vencimentoCnh}</td>
              <td>{motorista.veiculos}</td>
              <td>
                <button onClick={() => handleVerMultas(motorista.cpf)}>Ver Multas</button>
              </td>
              <td><button>Editar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Proprietarios;
