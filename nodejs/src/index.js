const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use("/api", userRoutes);

//Rutas
app.get("/", (req, res) => {
  res.send("Funciona");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
