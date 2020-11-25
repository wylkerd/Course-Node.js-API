const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
 'mongodb://localhost:27017/nodeapi',
 { useUnifiedTopology: true, useNewUrlParser:true });

// Registro do MOdel Product
requireDir('./src/models');

// Primeira rota
app.get('/',(req, res) => {
   res.send('Hello wylkerd');
} );

app.listen(3001);