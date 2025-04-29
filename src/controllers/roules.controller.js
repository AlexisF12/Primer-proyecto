const { Rol } = require('../db/models'); // Importa el modelo Rol

const getRol = async (req, res) => {
  const data = await Rol.findAll(); // Obtén todos los roles
  res.status(200).json(data); // Devuelve los roles en formato JSON
};

module.exports = { getRol };
