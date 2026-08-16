const os = require('os');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!',
        source: os.hostname()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});