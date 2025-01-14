node server.js
document.querySelector('.btn').addEventListener('click', async () => {
    const response = await fetch('/connect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            peerPublicKey: '<client-public-key>',
            allowedIP: '10.0.0.2/32',
        }),
    });

    const result = await response.text();
    alert(result);
});
