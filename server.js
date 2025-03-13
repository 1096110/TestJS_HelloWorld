const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
const HOST = '145.24.222.149';

// Serve static files (HTML, JS, CSS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
