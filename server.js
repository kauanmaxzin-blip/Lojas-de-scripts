const express = require("express");
const app = express();

app.use(express.json());

let compras = [];

app.get("/", (req, res) => {
    res.send("Servidor ONLINE 🚀");
});

app.get("/produtos", (req, res) => {
    res.json([
        { nome: "ZKScript", preco: 50 },
        { nome: "Painel Trinck", preco: 80 }
    ]);
});

app.post("/comprar", (req, res) => {
    const { usuario, produto } = req.body;

    const compra = {
        usuario,
        produto,
        data: new Date(),
        status: "aprovado"
    };

    compras.push(compra);

    res.json({ msg: "Compra realizada!", compra });
});

app.get("/historico", (req, res) => {
    res.json(compras);
});

app.listen(3000, () => console.log("Servidor rodando"));
