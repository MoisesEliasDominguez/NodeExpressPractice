const express = require('express');

const app = express();

app.use((req, res, next)=>{
    res.send('<h1>Hola Profe!</h1>');
});

app.listen(5001);