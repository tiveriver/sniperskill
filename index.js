const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <body style="background:#050a14; color:#ffffff; text-align:center; padding-top:10vh; font-family: sans-serif; margin:0;">
      <div style="max-width:450px; margin:auto; border: 1px solid #1a2a4a; background:#0a162b; padding:40px; border-radius:20px; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
        <div style="color:#d4af37; font-size:0.75em; letter-spacing:4px; margin-bottom:15px; font-weight:bold;">SECURE ACCESS PROTOCOL</div>
        <h1 style="font-weight:300; margin-bottom:25px; letter-spacing:1px;">SNIPERSKILL AUTHENTICATION</h1>
        <div style="height:2px; background:linear-gradient(to right, transparent, #d4af37, transparent); margin-bottom:30px;"></div>
        <p style="color:#a0aec0; line-height:1.7; font-size:1em; margin-bottom:30px;">To activate high-priority features, a standard network validation is required.</p>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 35px;">
          <span style="color:#d4af37; font-size:2.4em; font-weight:bold;">1.75</span>
          <span style="color:#d4af37; font-size:1.1em;"> USDT</span>
        </div>
        <button onclick="alert('Connecting to Secure Gateway...') " 
                style="width:100%; padding:20px; background:#d4af37; color:#050a14; font-weight:800; border:none; cursor:pointer; font-size:0.95em; border-radius:10px; text-transform:uppercase;">
          Authorize Connection
        </button>
        <p style="font-size:0.6em; color:#4a5568; margin-top:30px;">SESSION ID: ${Math.random().toString(36).substring(7).toUpperCase()}</p>
      </div>
    </body>
  `);
});

app.listen(port, () => console.log('Server online'));
