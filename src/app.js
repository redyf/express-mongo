import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

app.get("/", (req, res) => {
  res.status(200).send("Helloings worldings");
});

// app.get("/livros", async (req, res) => {
//   const listaLivros = await livro.find({});
//   res.status(200).json(listaLivros);
// });

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(204).send("Livro deletado com sucesso");
});

export default app;
