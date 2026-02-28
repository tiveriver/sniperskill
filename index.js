const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <body style="background:#000; color:#0f0; text-align:center; padding-top:100px; font-family:monospace;">
      <h1>SISTEMA T-TAX ATTIVO</h1>
      <p>Accesso SniperSkill: Pagamento richiesto per sbloccare il servizio mondiale.</p>
      <div style="border:1px solid #0f0; display:inline-block; padding:20px;">
        <h2>TOTALE: 1,75€ (USDT)</h2>
        <button onclick="alert('Connessione al Wallet MetaMask...') " style="padding:15px; background:#0f0; font-weight:bold; cursor:pointer;">
          PAGA E SBLOCCA ORA
        </button>
      </div>
    </body>
  `);
});

app.listen(process.env.PORT || 3000);
