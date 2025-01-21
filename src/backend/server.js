const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Aurea Nexus Backend Server!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});