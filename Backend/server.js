const express = require('express');
const app = express();
const axios = require('axios');
const { chooseServer } = require('./load_balancer');

app.get('/', (req, res) => {
    res.send('Server is running! Use /predict or /balance endpoints.');
});

app.get('/predict', async (req, res) => {
    const response = await axios.get('http://localhost:5000/predict?steps=24');
    res.json({ forecast: response.data });
});

app.get('/balance', (req, res) => {
    const chosenServer = chooseServer();
    res.json({ server: chosenServer });
});

app.listen(3000, () => console.log("Server running on port 3000"));
