const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
// Permitindo enviar informação para este app, em formato JSON
app.use(express.json());

// Iniciando o DB
mongoose.connect(
 'mongodb://localhost:27017/nodeapi',
 { useUnifiedTopology: true, useNewUrlParser:true });

// Registro do MOdel Product
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/models/Routes'));

app.listen(3001);