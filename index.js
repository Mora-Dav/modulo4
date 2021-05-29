const express = require ('express');
const app = express();

app.listen (3000, () => console.log('Servidor corriendo: https://localhost:3000'))

app.get ('/', (req, res) => {
    res.send('¡Hola mundo!');
})