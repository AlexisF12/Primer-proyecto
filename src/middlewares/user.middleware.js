const existsUser = (req, res, next) => {
    const id = req.params.id;
    if (id <= 0) {
      return res
        .status(400)
        .json({ message: "Bad Request: No pueden ser un id negativo" });
    }
    next();
  };
  
  module.exports = { existsUser };