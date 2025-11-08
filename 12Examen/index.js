const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Endpoint local que consume la API pública de NHTSA
app.get('/vehiculos', async (req, res) => {
  try {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
    res.json(response.data);
  } catch (error) {
    console.error('Error al consumir la API de NHTSA:', error.message);
    res.status(500).json({ error: 'No se pudo obtener la información de vehículos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});