import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/predict', async (req, res) => {
  console.log('Received POST /predict with body:', req.body); // Debug log
  try {
    // Forward the request body to the Python API running on port 5000
    const response = await axios.post('http://localhost:8000/api/predict', req.body, {
      headers: { 'Content-Type': 'application/json' }
    });
    // Return the response from the Python API
    res.json(response.data);
  } catch (error) {
    console.error('Error calling Python API:', error.response ? error.response.data : error.message);
    res.status(500).json({
      error: 'Error calling Python API',
      details: error.message
    });
  }
});

export default router;
