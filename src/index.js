const express = require('express');
const app = express();
const path = require ('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 3000

// Rutas
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log('server online');
});