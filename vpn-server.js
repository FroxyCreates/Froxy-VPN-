const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());

// API to start VPN connection
app.post('/connect', (req, res) => {
    const { peerPublicKey, allowedIP } = req.body;

    const wgConfig = `
    [Peer]
    PublicKey = ${peerPublicKey}
    AllowedIPs = ${allowedIP}
    `;
    exec(`echo "${wgConfig}" | sudo tee -a /etc/wireguard/wg0.conf && sudo wg-quick up wg0`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send('Failed to connect to VPN');
        }
        res.send('VPN connection started successfully!');
    });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`VPN Server running on port ${PORT}`));
