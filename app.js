const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello from Github NodeJs!  This is DevOps Practical 5 Question no 5');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
