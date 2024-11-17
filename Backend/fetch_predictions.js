const axios = require('axios');

function fetchPredictions() {
    axios.get('http://localhost:5000/predict?steps=24')
        .then(response => {
            console.log("Predictions:", response.data);
        })
        .catch(error => console.error("Error fetching predictions:", error));
}

// Run every hour
setInterval(fetchPredictions, 3600000);
