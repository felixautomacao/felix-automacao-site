
import React, { useState } from 'react';

export default function App() {
  const [consumo, setConsumo] = useState(500);
  const precoKWh = 0.95;
  const payback = 2.5;

  const economiaMensal = consumo * precoKWh;
  const investimento = economiaMensal * (payback * 12);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Simulador Solar - Felix Automação</h1>
      <p>Consumo médio mensal (kWh):</p>
      <input
        type="number"
        value={consumo}
        onChange={(e) => setConsumo(Number(e.target.value))}
        style={{ padding: 5, marginBottom: 10 }}
      />
      <p>Valor do kWh: R$ {precoKWh.toFixed(2)}</p>
      <p>Economia mensal: R$ {economiaMensal.toFixed(2)}</p>
      <p>Investimento estimado: R$ {investimento.toFixed(2)}</p>
      <p>Retorno do investimento (payback): {payback} anos</p>
    </div>
  );
}
