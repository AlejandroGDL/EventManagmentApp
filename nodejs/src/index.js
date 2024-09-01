const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use('/api', userRoutes);

//Ruta principal
app.get('/', (req, res) => {
  res.send('Ok');
});

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('No se pudo conectar a MongoDB', err));

app.listen(port, () => {
  console.log('Servidor ejecutandose en: http://localhost:' + port);
});
