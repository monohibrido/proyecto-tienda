const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');


router.get('/', async (req, res) => {
  try {
      const productos = await Producto.findAll();
      res.json(productos);
  } catch (error) {
     res.status(500).json({ error: 'Error al obtener productos' });
  }

});


router.get('/:id', async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
  res.json(producto);
});



router.post('/', async (req, res) => {
  const nuevo = await Producto.create(req.body);
  res.json(nuevo);
});



router.put('/:id', async (req, res) => {
  await Producto.update(req.body, {
    where: { id: req.params.id }
  });

  res.json({ mensaje: 'Producto actualizado' });
});



router.delete('/:id', async (req, res) => {
  await Producto.destroy({
    where: { id: req.params.id }
  });

  res.json({ mensaje: 'Producto eliminado' });
});


module.exports = router;