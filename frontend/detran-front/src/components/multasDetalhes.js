import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './MultasDetalhes.css'; // Certifique-se de criar este arquivo CSS

const MultasDetalhes = () => {
  const { motoristaId } = useParams();
  const [multas, setMultas] = useState([]);
  const [veiculos, setVeiculos] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const response = await axios.get(`http://localhost:4040/multas/motorista/${motoristaId}`);
        setMultas(response.data);
        fetchVeiculos(response.data);
      } catch (error) {
        console.error('Erro ao buscar multas:', error);
      }
    };

    const fetchVeiculos = async (multas) => {
      const veiculoIds = [...new Set(multas.map(multa => multa.veiculoId))];
      const veiculosData = await Promise.all(
        veiculoIds.map(async (id) => {
          const response = await axios.get(`http://localhost:4040/veiculos/${id}`);
          return response.data;
        })
      );
      const veiculosMap = veiculosData.reduce((acc, veiculo) => {
        acc[veiculo.id] = veiculo;
        return acc;
      }, {});
      setVeiculos(veiculosMap);
    };

    fetchMultas();
  }, [motoristaId]);

  return (
    <div className="multas-detalhes">
      <h1>Multas do Motorista ID: {motoristaId}</h1>
      <button className="voltar-btn" onClick={() => navigate(-1)}>Voltar</button>
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Data</th>
            <th>Pontos</th>
            <th>Tipo</th>
            <th>Placa Carro</th>
          </tr>
        </thead>
        <tbody>
          {multas.map((multa, index) => (
            <tr key={index}>
              <td>{multa.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              <td>{new Date(multa.data).toLocaleDateString('pt-BR')}</td>
              <td>{multa.pontos}</td>
              <td>{multa.tipo}</td>
              <td>{veiculos[multa.veiculoId]?.placa || 'Carro não encontrado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultasDetalhes;
