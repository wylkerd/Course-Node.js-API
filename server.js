const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
 'mongodb://localhost:27017/nodeapi',
 { useUnifiedTopology: true, useNewUrlParser:true });

// Registro do MOdel Product
require('./src/models/Product');

// Primeira rota
app.get('/',(req, res) => {
   res.send('Hello wylkerd');
} );

app.listen(3001);