const express = require('express');
const path = require('path');
const app = express();

// Rota para o index.html (página principal)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para o yes_page.html (página adicional)
app.get('/yes_page.html', (req, res) => {
    const filePath = path.join(__dirname, 'yes_page.html');
    console.log('Enviando arquivo:', filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err);
            res.status(500).send('Erro ao enviar o arquivo.');
        }
    });
});

app.listen(3005, () => {
    console.log('Servidor rodando na porta 3005');
});
