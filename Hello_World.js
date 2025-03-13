const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '145.24.222.149'; // Allows access from any IP

app.use(express.static('public')); // Serves static files if needed

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});