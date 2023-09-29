const express = require("express");

const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const personRoutes = require("./routes/person");
const contactRoutes = require("./routes/contact");
const articleRoutes = require("./routes/article");
const productRoutes = require("./routes/products");
const sectionArticleRoutes = require("./routes/section_article");
const stateArticleRoutes = require("./routes/state_article");
const typeProductRoutes = require("./routes/type_products");

const errorController = require("./controllers/error");

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); 

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); 

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use("/user", userRoutes);
app.use("/person", personRoutes);
app.use("/contact", contactRoutes);
app.use("/article", articleRoutes);
app.use("/product", productRoutes);
app.use("/section-article", sectionArticleRoutes);
app.use("/state-article", stateArticleRoutes);
app.use("/type-product", typeProductRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () =>
  console.log(`Api Rest corriendo en el puerto ${ports}`)
);
