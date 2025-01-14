const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('froxy-vpn'));

app.listen(PORT, () => {
    console.log(`Froxy VPN is running on http://localhost:${PORT}`);
});
