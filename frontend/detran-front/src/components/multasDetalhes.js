import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MultasDetalhes = () => {
  const { cpf } = useParams();
  const [multas, setMultas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const response = await axios.get(`http://localhost:4040/multas/${cpf}`);
        setMultas(response.data);
      } catch (error) {
        console.error('Erro ao buscar multas:', error);
      }
    };

    fetchMultas();
  }, [cpf]);

  return (
    <div>
      <h1>Multas do {cpf}</h1>
      <button onClick={() => navigate(-1)}>Voltar</button>
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
              <td>{multa.valor}</td>
              <td>{multa.data}</td>
              <td>{multa.pontos}</td>
              <td>{multa.tipo}</td>
              <td>{multa.placa_carro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultasDetalhes;
