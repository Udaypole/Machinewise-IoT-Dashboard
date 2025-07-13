
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

function generateSensorData() {
  return {
    current: +(Math.random() * 100).toFixed(2),
    voltage: +(Math.random() * 400).toFixed(2),
    temperature: +(Math.random() * 100).toFixed(2),
    vibration: +(Math.random() * 30).toFixed(2),
  };
}

app.get('/api/data', (req, res) => {
  res.json(generateSensorData());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
