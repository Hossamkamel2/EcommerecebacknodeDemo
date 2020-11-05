const express = require("express");
const router = express.Router();
const fs = require("fs");

async function readFile(path) {
  let contentJson = await fs.readFileSync(path);
  console.log("output", contentJson);
  return JSON.parse(contentJson);
}

let onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
router.get("/", async (req, res) => {
  try {
    let content = await readFile("products.json");
    res.send(content);
  } catch {
    res.status(500).send("error when reading from server");
  }
});
router.get("/getGenres", async (req, res) => {
  try {
    let content = await readFile("products.json");
    let genres = [];
    content.forEach((singleproduct) => {
      genres.push(singleproduct.category.name);
    });
    console.log(genres);
    let filteredgenres = genres.filter(onlyUnique);
    res.send(filteredgenres);
  } catch {
    res.status(500).send("error when reading from server");
  }
});
router.get("/getbrands", async (req, res) => {
  try {
    let content = await readFile("products.json");
    let brands = [];
    content.forEach((singleproduct) => {
      brands.push(singleproduct.brand);
    });

    let filteredbrands = brands.filter(onlyUnique);
    res.send(filteredbrands);
  } catch {
    res.status(500).send("error when reading from server");
  }
});
module.exports = router;
