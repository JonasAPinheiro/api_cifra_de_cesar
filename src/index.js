import express from "express";
import cors from "cors";
import { cifrar } from "./cifrar.js";
import { decifrar } from "./decifrar.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Cifra de César funcionando!",
  });
});

app.post("/cifrar", (req, res) => {});

app.post("/decifrar", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});