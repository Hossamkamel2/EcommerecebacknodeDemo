const express = require("express");
var cors = require("cors");
const helmet = require("helmet");
const app = express();
const products = require("./routes/products");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api/products", products);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server listens on port 5000"));
