const express = require('express');
const cors = require('cors');

const sequelize = require('./config/db');

const app = express();


const Producto = require('./models/producto');
const productosRoutes = require('./routes/productos');

//conexión con angular
app.use(cors());
app.use(express.json());


//backend funcionando
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

//autenticación con el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a MySQL exitosa 🚀');
  })
  .catch(err => {
    console.log('Error de conexión:', err);
  });

//rutas al servidor
app.use(express.json());
app.use('/productos', productosRoutes);


//sincronización automática de tablas con el alter
sequelize.sync({ alter: true})
  .then(() => console.log('Tablas sincronizadas 🚀'))
  .catch(err => console.log('Error sync:', err));


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});