const express = require("express");
const { getProducts, saveProduct } = require("./controllers/productController");
const app = express();

app.use(express.json());

app.get("/api/:id", getProducts);
app.post("/api/", saveProduct);

app.listen(4000, () => console.log("APP RUNNING"));
