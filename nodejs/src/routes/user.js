const express = require("express");
const router = express.Router();
const UserSchema = require("../models/user");

//Obtener usuarios
router.get("/user/:id", (req, res) => {
  UserSchema.findById()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

//Crear usuario
router.post("/user", (req, res) => {
  const user = new UserSchema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;