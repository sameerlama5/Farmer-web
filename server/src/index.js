require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);
const { PORT } = process.env;
const UserRoute = require("./routes/user");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const dbConnect = require("./db/connection");
dbConnect();
app.use(express.json());
app.use(cors())
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT","PATCH","DELETE"],
    credentials: true,
  })
);
app.use(UserRoute);
app.use(productRoutes);
app.use(categoryRoutes);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
