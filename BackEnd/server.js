const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // Backend runs on port 5000

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(bodyParser.json());

// Sample API endpoint
app.post('/api/loan', (req, res) => {
    const loanData = req.body;
    console.log('Received loan data:', loanData);

    // Example response (process loan data here)
    res.status(200).json({ success: true, message: 'Loan data received!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
