require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const sequelize = require("./db");
const post_router = require("./routers/postrouter");
const user_router = require("./routers/userrouter");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
//мидлвэр для работы с файлами
app.use(fileUpload({}));
app.use(express.static("static"));
app.use(express.json());

app.use("/api", post_router);
app.use("/api", user_router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
