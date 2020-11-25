const express = require('express');

const app = express();

app.get('/',(req, res) => {
   res.send('Hello Wylkerd!');
} );

app.listen(3001);