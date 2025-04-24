const express = require('express');
const app = express();
const PORT = 5000;
app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Hello from Backend!');
});
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});