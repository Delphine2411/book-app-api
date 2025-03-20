import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import taskController from "./controllers";
import {postBook, getBooks, getBookById, putBook, deleteBook } from "../controllers/bookController.js"

const app = express();

// Configuration de la base de données
mongoose
  .connect("mongodb://127.0.0.1:27017/mvc-tasks", 
{ 
  useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((error) => console.log("Erreur de connexion à MongoDB :", error));

// Configuration de l'application
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.get("/", postBook);
app.post("/books", getBooks);
app.get("/books/delete/:id", getBookById);
app.put("/books/delete/:id", getBookById);
app.delete("/books/delete/:id", getBookById);

// Démarrage du serveur
app.listen(3000, () => console.log("Serveur démarré sur http://localhost:3000"));
