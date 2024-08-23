const express = require("express");
const router = express.Router();

//Obtener usuario
router.get("/user", (req, res) => {
  res.send("Obtener usuario");
});

//Crear usuario
router.post("/user", (req, res) => {
  res.send("Crear usuario");
});

module.exports = router;
